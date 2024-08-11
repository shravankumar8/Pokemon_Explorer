"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "@/components/PokeCard";

const Pokemonhero = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [pokeData, setPokeData] = useState<any>([]);
  const [pokeData1, setPokeData1] = useState<any>([]);
  const [pokeBio, setPokeBio] = useState("");
  const [pokeImg, setPokeImg] = useState(pokeData.sprites?.front_default);

  
  useEffect((): void => {
    try {
      const response = axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((res) => {
          setPokeData1(res.data);
          console.log(res.data);
        });
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  }, [id]);
  useEffect((): void => {
    try {
      const response = axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
          setPokeData(res.data);
          setPokeData(res.data);
          // console.log(res.data);
          setPokeImg(res.data.sprites?.front_default);
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
        <img width={"110px"} src={imageUrl} alt="" />
      </div>
    );
  }
  return (
    <div className="mx-20 flex flex-col items-center   justify-center w-[80%] ">
      <div className="text-black my-6 flex  justify-between gap-6 mb-[-40px] text-3xl">
        <div>{pokeData.name?.toUpperCase()}</div>
        <div className="text-gray-500">#{pokeData.id}</div>
      </div>

      <div className="flex gap-5 ">
        <div className=" bg-gray-300 rounded-xl h-fit  max-w-24 p-2 mt-12">
          <SideImage imageUrl={pokeData.sprites?.front_default} />
          <SideImage imageUrl={pokeData.sprites?.back_shiny} />
          <SideImage imageUrl={pokeData.sprites?.back_default} />
          <SideImage imageUrl={pokeData.sprites?.front_shiny} />
          <SideImage imageUrl={pokeData.sprites?.front_female} />
        </div>
        <div>
          <img width={"400px"} src={pokeImg} alt="" />
        </div>

        <div className="flex flex-col gap-5">
          <div className="mt-36 max-w-64">
            For some time after its birth, it uses the nutrients that are packed
            into the seed on its back in order to grow.
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
          <div className=" rounded-lg p-4 grid-cols-2 grid bg-orange-300 max-w-full">
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
            {pokeData.stats?.map((item: any) => (
              <div key={item.stat.name} className="text-black type">
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
            {pokeData.game_indices?.slice(0, 5).map((item: any, index: any) => (
              <div key={item.version.name} className="text-black type">
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

      <div className=" mx-auto justify-center items-center align-middle self-center extrainfo min-h-96">
        <div className="mt-16  flex flex-wrap gap-16  rounded-lg p-4   bg-blue-500">
          {KeyValueGen({
            key: "happiness",
            value: pokeData1.base_happiness,
          })}
          {KeyValueGen({ key: "Capture Rate", value: pokeData1.capture_rate })}
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
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Pokemonhero;
