"use client"
import Image from "next/image";
import Pokeball from "../assets/pokeball-png-45330.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Buttons from '../components/Buttons'

import { useRouter } from "next/navigation";
import Link from "next/link";
export default  function AppBar() {
     const router = useRouter();
  const path = usePathname()
  const [currentPage,setCurrentPage]=useState("")
  useEffect(()=>{
    setCurrentPage(path);
  },[path])
   
  return (
    <main>
      <div className="rootdiv flex justify-between px-5 bg-black w-full h-20 bg-gradient-to-r opacity-80 from-cyan-500 to-green-500">
        <div className="logodiv flex align-middle gap-5 items-center justify-center  ">
          <div className="titlediv text-3xl font-bold text-white">
            Pokemapper
          </div>
          <div className="imagediv">
            <Image
              src={Pokeball}
              width={70}
              height={70}
              alt="Picture of the author"
            />
          </div>
        </div>
        {}
        <div className="navigations my-auto px-20">
          <div className="flex gap-20 align-middle justify-center items-center ">
            <div>
              <Buttons
                name="Home"
                route={"/"}
                onClick={() => router.push("/")}
              />
            </div>
            <div>
              <Buttons
                name="PokeDex"
                route={"/pokedex"}
                onClick={() => router.push("/pokedex")}
              />
            </div>
            <div>
              <Buttons
                name="chatbot"
                route={"/chatbot"}
                onClick={() => router.push("/chatbot")}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
