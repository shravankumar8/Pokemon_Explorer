"use client";
import React from "react";
import img1 from "../assets/001.png";
import img2 from "../assets/002.png";
import img4 from "../assets/004.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
const   PokeCard = ({ pokeData, isLoading }: any) => {
   const router = useRouter();
  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <div className=" mx-auto max-w-[80%] justify-center parentdiv flex flex-wrap gap-10">
      {pokeData.map((item: any, index: any) => (
        <div
          key={index}
          onClick={() => router.push("/pokedex/" + item.id)}
          className="card-root py-5 cursor-pointer transition-transform duration-300 ease-in-out hover:animate-jump items-center  justify-center  min-w-[20%] rounded-lg bg-white"
        >
          <div className=" px-5 flex flex-col">
            <Image
              className="self-center bg-slate-300 rounded-lg"
              src={item.sprites.front_shiny}
              width={180}
              height={180}
              alt="Picture of the author"
            />
            <div className="text-sm text-gray-400 ">#{item.id}</div>
            <div className="text-2xl font-bold font-ubuntu ">{item.name}</div>

            <div className="flex gap-3 flex-wrap mt-2">
              {item.abilities.map((item: any,index:any) => {
                return (
                  <div
                    key={index}
                    className="text-black px-2 py-1 align-middle self-center justify-center bg-green-500 rounded-md"
                  >
                    {item.ability.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokeCard;

