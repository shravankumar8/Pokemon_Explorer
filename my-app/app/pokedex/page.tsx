"use client";
import PokeCard from "@/components/PokeCard";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Pokedex from "@/components/pokeSearch";
import Image from "next/image";
import LoadingImg from "../../assets/pokeball.png";
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
          prevState = [...prevState, result.data];
          prevState.sort((a,b)=>a.id>b.id?1:-1 )
          return prevState;
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
  useEffect(() => {}, [pokes]);
  if (loading) {
    return (
      <div className="mx-auto flex items-center justify-center h-screen">
        <Image
          className="  animate-spin"
          src={LoadingImg||""}
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
    );
  }
  return (
    <main>
      <Pokedex />
      <div>
        <PokeCard pokeData={pokes} isLoading={loading} />
        <div className="mx-auto mb-14 w-full flex justify-center self-center">
          <div className="">
            <div
              className="text-2xl px-4 py-2 rounded-lg bg-gradient-to-r opacity-80 from-cyan-500 to-green-500 font-bold"
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
