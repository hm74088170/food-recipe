import React from 'react';
import { NavLink } from 'react-router-dom';

const Mealcards = ({ detail }) => {
  // 🟡 Initial state: show gentle prompt
  if (detail === undefined) {
    return (
      <div className="text-center text-gray-400 mt-10 text-lg">
        Start typing to search for a recipe!
      </div>
    );
  }

  // 🔴 No results: show "Data Not Found"
  if (detail === null) {
    return (
      <div className="text-center text-gray-600 text-xl font-semibold mt-10">
        Data Not Found
      </div>
    );
  }

  // ✅ Found meals: render cards
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {detail.map((curItem) => (
        <div
          key={curItem.idMeal}
          className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(239,68,68,0.2)] overflow-hidden hover:scale-105 transform transition duration-300"
        >
          <img
            src={curItem.strMealThumb}
            alt={curItem.strMeal}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              {curItem.strMeal}
            </p>
            <NavLink to={`/${curItem.idMeal}`}>
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300">
                View Recipe
              </button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mealcards;
