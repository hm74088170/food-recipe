import React, { useState } from "react";
import Mealcards from "./Mealcards";

const Mainpage = () => {
  const [data, setData] = useState()
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value)
  }
  const myFun = async () => {
    if (search == "") {
      setMsg("Please Enter something")
    } else {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      const jsonData = await get.json()
      // console.log(jsonData.meals)
      setData(jsonData.meals)
      setMsg("")
    }

  }

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-semibold text-red-500 text-center mb-8 drop-shadow-md tracking-wide">
        FOOD RECIPE APP
      </h1>
      <div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(239,68,68,0.3)] w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Enter Dish ..."
            className="flex-1 px-5 py-3 rounded-xl text-gray-800 placeholder-gray-500 shadow-inner focus:outline-none focus:ring-4 focus:ring-red-300"
            onChange={handleInput}
          />
          <button onClick={myFun} className="px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition duration-300">
            Search
          </button>
        </div>
        <h4 className="text-black text-lg font-semibold mt-6 mb-2">{msg}</h4>
        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
