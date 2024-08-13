"use client"
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import LoadingImg from "../assets/pokeball.png";
const Chatbot = () => {
  const [input, setInput] = useState("");
 const [isLoading,setIsLoading]=useState(false)
 const [response, setResponse] = useState<any[]>([]);
const chats = [
  { role: "user", message: "this is shravan kumar lingampally" },
  {
    role: "user",
    message: "this is shravan kumar lingampally",
  }
];
  const handleInput = (e:any) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e:any) => {
    setIsLoading(true)
    console.log("hello this ")
    setResponse((prevValue: any[]) => {
      let Obj = { role: "user", message: input };
      return [...prevValue, Obj]; // This returns a new array with the new object added
    });

    e.preventDefault();
    const options = {
      method: "POST",
      url: "https://turo3.p.rapidapi.com/turo",
      headers: {
        "x-rapidapi-key": "87cd88cbeemsh690b86d5a843692p1a061ejsn8f4022defd0f",
        "x-rapidapi-host": "turo3.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        query: input,
      },
    };

    try {
      const res = await axios.request(options);
      
      console.log(res.data.content)
      setInput("");
   setResponse((prevValue: any[]) => {
     let Obj = { role: "Ai", message: res.data.content };
     setIsLoading(false)
     return [...prevValue, Obj];
   });


    } catch (error) {
      console.error(error);
    }
  };
function Loader(){
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
    <div className=" flex flex-col justify-betweenh h-screen  mx-20">
      <div className=" mx-auto mt-10 p-10 flex flex-col  overflow-scroll rounded-lg gap-3  bg-gray-300 min-w-[80%] h-[70%]">
        {response.map((chat, index) => (
          <div className="flex  bg-white rounded-lg  gap-5 p-3" key={index}>
            <div className="text-lg text-black font-bold">{chat.role}</div>
            <div>{chat.message}</div>
          </div>
        ))}
        {isLoading ? <Loader /> : ""}
      </div>
      <div className="mx-auto flex gap-5 mt-9">
        <input
          className="bg-gray-300 p-3 rounded-lg placeholder:text-black"
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Ask me a question"
        />

        <button
          className="bg-black px-3 py-2 rounded-lg text-white font-bold"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
