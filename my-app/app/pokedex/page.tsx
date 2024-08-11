"use client";
import PokeCard from "@/components/PokeCard";
import { url } from "inspector";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { json } from "stream/consumers";
import Pokedex from "@/components/pokeSearch";
export default function Home() {
  const [pokes, setPokes] = useState<any[]>([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(true);


 const mountedRef = useRef(false);
  function getPokemon(data: any) {
    data.map(async (item: any) => {
      await axios.get(item.url).then((result) => {
        console.log(result.data);

        setPokes((prevState): any[] => {
          return [...prevState, result.data];
        });
      });
    });
  }
 useEffect(() => {
   if (!mountedRef.current) {
     mountedRef.current = true;
     setLoading(true);
     axios.get(url).then((response) => {
       setNextUrl(response.data.next);
       setPrevUrl(response.data.previous);
       getPokemon(response.data.results);
       setLoading(false);
     });
   }
 }, [url]);
  useEffect(() => {
    const scrollBottom = document.body.scrollHeight;
    window.scrollTo(0, scrollBottom);
  }, [pokes]);
  return (
    <main>
      <Pokedex></Pokedex>
      <div>
        <PokeCard pokeData={pokes} isLoading={loading} />
        <div className="mx-auto mb-14 w-full flex justify-center self-center">
          <div className="">
            <div
              className="text-2xl px-4 py-3 rounded-lg bg-gradient-to-r opacity-80 from-cyan-500 to-green-500 font-bold"
              onClick={() => {
                mountedRef.current = false;
                setUrl(nextUrl);
              }}
            >
              load more
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
