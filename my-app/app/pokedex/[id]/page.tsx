"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "@/components/PokeCard";
import Image from "next/image";
import LoadingImg from "../../../assets/pokeball.png";
import notFound from "../../../assets/notFound-removebg-preview.png";
const Pokemonhero = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [pokeData, setPokeData] = useState<any>([]);
  const [pokeData1, setPokeData1] = useState<any>([]);
  const [pokeBio, setPokeBio] = useState("");
  const [pokeImg, setPokeImg] = useState(pokeData.sprites?.front_default);
  const [loading,setLoading]=useState(true)
  const [noFound,setNotFound]=useState(true)
  useEffect((): void => {
    setLoading(true)
    let apiRes = null;
    try {
      const response = axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
          validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          },
        })
        .then((res) => {
          if(res.status===404){
            setNotFound(true)
          }else{
            setNotFound(false)

          }
          console.log("species"+res.status);
          console.log("species"+res.data);
          setPokeData1(res.data);
          setLoading(false)

        });
    } catch (err: any) {
      console.error(err); // ***
    }
  }, [id]);


  useEffect((): void => {
    try {
      setLoading(true)
      const response = axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`, {
          validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          },
        })
        .then((res) => {
          setPokeData(res.data);
          setPokeData(res.data);
          console.log("poke"+res.data);
          console.log("poke"+res.status);
          setPokeImg(res.data.sprites?.front_default);
          setLoading(false)
        });
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  }, [id]);
  function KeyValueGen({ key, value }: { key: string; value: string }) {
    return (
      <div className="flex flex-col">
        <div className="text-white text-xl">{key}</div>
        <div className="text-black-500">{value}</div>
      </div>
    );
  }
  function SideImage({ imageUrl }: { imageUrl: string }) {
    return (
      <div
        onClick={() => {
          setPokeImg(imageUrl);
        }}
        className="bg-white hover:transition-transform duration-300 ease-in-out hover:animate-jump cursor-pointer"
      >
        <Image width={110} height={110} src={imageUrl} alt="" />
      </div>
    );
  }
   if (loading) {
     return (
       <div className="mx-auto flex items-center justify-center h-screen">
         <Image
           className="  animate-spin"
           src={LoadingImg}
           width={50}
           height={50}
           alt="Picture of the author"
         />
       </div>
     );
   }
  if (!loading && noFound ){
     return (
       <div className="flex h-screen items-center justify-center">
         <div className="text-center">
           <h1 className="text-4xl z-40 font-bold mb-4">404 NOT FOUND</h1>
           <Image
            width={110}
            height={110}
             className="mx-auto z-0 animate-pulse"
             src={notFound}
             alt="404 Error: Pokémon Not Found"
           />
         </div>
       </div>
     );
    

  }
    return (
      <div className="mx-20 mb-16 flex flex-col items-center ">
        <div className="text-black py-6 flex  justify-between gap-6 mb-[-40px] text-3xl">
          <div>{pokeData.name?.toUpperCase()}</div>
          <div className="text-gray-500">#{pokeData.id}</div>
        </div>

        <div className="  md:grid-cols-4 gap-5 grid">
          <div className="col-span-2 flex">
            <div className=" bg-gray-300 mx-auto mt-4 rounded-xl h-fit  max-w-24 p-2 ">
              <SideImage imageUrl={pokeData.sprites?.front_default} />
              <SideImage imageUrl={pokeData.sprites?.back_shiny} />
              <SideImage imageUrl={pokeData.sprites?.back_default} />
              <SideImage imageUrl={pokeData.sprites?.front_shiny} />
              <SideImage imageUrl={pokeData.sprites?.front_female} />
            </div>
            <div>
              <Image width={400} height={400} src={pokeImg} alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="mt-6  max-w-64">
              {pokeData1.flavor_text_entries?.slice(0, 2).map((item: any,index:any) => {
                if (item.language.name === "en") {
                <div key={index}>{item.flavor_text}</div>;
                }
              })}
            </div>
            <div className=" rounded-lg p-4 grid-cols-2 grid bg-blue-500 max-w-full">
              {KeyValueGen({ key: "Height", value: pokeData.height })}
              {KeyValueGen({ key: "weight", value: pokeData.weight })}
              {KeyValueGen({
                key: "BaseEx",
                value: pokeData.base_experience,
              })}
              {KeyValueGen({ key: "Height", value: "2344" })}
            </div>
            <div className=" rounded-lg p-4 flex md:flex-col xl:flex-row gap-3 bg-orange-300 max-w-full">
              {pokeData.abilities?.map((item: any, index: number) => (
                <div key={index} className="flex flex-col">
                  <div className="text-black text-xl">{item.ability.name}</div>
                </div>
              ))}
            </div>
            <div className="types   flex gap-4">
              {pokeData.types?.map((type: any, index: any) => (
                <div key={index} className=" type">
                  <div className="text-black bg-green-300 p-2 rounded-lg text-xl">
                    {type.type.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-16 flex-col">
            <div className="max-w-80">
              <div className="text-2xl text-black font-bold">Stats</div>
              {pokeData.stats?.map((item: any, index: any) => (
                <div key={index} className="text-black type">
                  <label>
                    {item.stat.name}{" "}
                    <progress value={item.base_stat} max="100">
                      70
                    </progress>
                  </label>
                </div>
              ))}
            </div>
            <div className="max-w-80">
              <div className="text-2xl text-black font-bold">game indices</div>
              {pokeData.game_indices
                ?.slice(0, 5)
                .map((item: any, index: any) => (
                  <div key={index} className="text-black type">
                    <label>
                      {item.version.name}{" "}
                      <progress value={item.game_index} max="100">
                        70
                      </progress>
                    </label>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className=" mx-auto   justify-center items-center align-middle self-center extrainfo min-h-96">
          <div className="mt-16  flex flex-wrap gap-10  rounded-lg p-4   bg-blue-500">
            {KeyValueGen({
              key: "happiness",
              value: pokeData1.base_happiness,
            })}
            {KeyValueGen({
              key: "Capture Rate",
              value: pokeData1.capture_rate,
            })}
            {KeyValueGen({
              key: "Hatch Count",
              value: pokeData1.hatch_counter,
            })}
            {KeyValueGen({
              key: "habitat",
              value: pokeData1.habitat?.name,
            })}
            {KeyValueGen({
              key: "Growth rate",
              value: pokeData1.growth_rate?.name,
            })}
            {KeyValueGen({
              key: "generation ",
              value: pokeData1.generation?.name,
            })}
            {KeyValueGen({
              key: "color ",
              value: pokeData1.color?.name,
            })}
            {KeyValueGen({
              key: "shape ",
              value: pokeData1.shape?.name,
            })}
            {KeyValueGen({
              key: "Egg groups ",
              value:
                " " +
                pokeData1?.egg_groups?.map((item: any, index: any) => {
                  return item.name;
                }),
            })}
          </div>
          <div className="text-2xl mt-16   text-black font-bold">About</div>
          <ul>
            {pokeData1.flavor_text_entries?.slice(0, 10).map((item: any) => {
              if (item.language.name === "en") {
                return item.flavor_text;
              }
            })}
          </ul>
        </div>
      </div>
    );
};

export default Pokemonhero;
