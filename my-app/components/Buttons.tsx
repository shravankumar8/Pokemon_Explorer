"use client";
import { usePathname } from "next/navigation";
import React, { MouseEventHandler, useEffect, useState } from "react";
const Buttons = ({ name,route ,onClick }:{name:string,route:string,onClick:MouseEventHandler}) => {
  const path = usePathname();
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    setCurrentPage(path);
  }, [path]);
  return (
    <div
      onClick={onClick}
      className={` hover:cursor-pointer hover:bg-black focus:outline-none  hover:text-white rounded-lg text-xl px-3 py-2   ${
        currentPage === route ? "bg-slate-600" : ""
      } text-black font-bold  `}
    >
      {name}
    </div>
  );
};

export default Buttons;
