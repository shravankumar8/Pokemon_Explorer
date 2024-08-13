"use client";
import Image from "next/image";
import Pokeball from "../assets/pokeball.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Buttons from "../components/Buttons";

import { useRouter } from "next/navigation";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";
export default function AppBar() {
  const [dropdown,setDropdown]=useState(false)
  const router = useRouter();
  const path = usePathname();
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    setCurrentPage(path);
  }, [path]);

  return (
    <main>
      <div className="rootdiv flex justify-between px-5 bg-black w-full h-20 bg-gradient-to-r opacity-80 from-cyan-500 to-green-500">
        <div onClick={()=>router.push("/")}  className="logodiv  cursor-pointer flex align-middle gap-5 items-center justify-center  ">
          <div className="titlediv md:text-3xl text-xl font-bold text-white">
            Pokemapper
          </div>
          <div className="imagediv max-w-7  md:max-w-72">
            <Image
              src={Pokeball||""}
              width={70}
              height={70}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className="navigations my-auto px-20">
          <div onClick={()=>{
            setDropdown(prevstate=>{return !prevstate})
          }} className="flex cursor-pointer  text-3xl md:hidden  gap-20 align-middle justify-center items-center ">
            ☰
          </div>
          {dropdown?<DropDownMenu onClick={()=>{setDropdown(false)}} /> :""}
          <div className=" hidden md:flex gap-20 align-middle justify-center items-center ">
            
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
