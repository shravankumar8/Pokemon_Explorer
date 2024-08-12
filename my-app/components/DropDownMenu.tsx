import React, { MouseEventHandler } from 'react'
import { useRouter } from "next/navigation";
const DropDownMenu = ({ onClick }: { onClick: MouseEventHandler}) => {
  const router = useRouter();
  return (
    <div className="absolute">
      <div
        onClick={onClick}
        className="flex  bg-slate-700 h-screen pr-11 p-5 text-white flex-col"
      >
        <div className="cursor-pointer  absolute right-4 mt-[-15px]">🗙</div>
        
        <div
          onClick={() => router.push("/pokedex")}
          className="cursor-pointer text-lg"
        >
          PokeDex
        </div>
        <div
          onClick={() => router.push("/chatbot")}
          className="cursor-pointer text-lg"
        >
          chatbot
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu
