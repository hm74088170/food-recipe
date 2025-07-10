import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState()

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json();
        setInfo(jsonData.meals[0])

    }
    if (info != "") {
        getInfo()
    }
    return (
        <div>
            { !info ? "Data Not Found" :
                    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(239,68,68,0.2)] flex flex-col md:flex-row gap-6">
                        <img
                            src={info.strMealThumb}
                            alt={info.strMeal}
                            className="w-full md:w-1/2 rounded-xl object-cover shadow-md"
                        />

                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Recipe Detail</h1>

                            <button className="mb-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition duration-300">
                                {info.strMeal}
                            </button>

                            <h3 className="text-xl font-semibold text-gray-700 mb-2">Instruction's</h3>
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                {info.strInstructions}
                            </p>
                        </div>
                    </div>

            }
        </div>

    )
}

export default Mealinfo
