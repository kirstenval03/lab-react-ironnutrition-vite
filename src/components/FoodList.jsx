import React, { useState, useEffect } from "react";
import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodList() {
  // Obtener las comidas del localStorage si existen, o usar el valor inicial foodsJson
  const [foods, setFoods] = useState(() => {
    const storedFoods = localStorage.getItem("foods");
    return storedFoods ? JSON.parse(storedFoods) : foodsJson;
  });

  const [filteredFoods, setFilteredFoods] = useState(foods);

  useEffect(() => {
    // Almacenar las comidas en el localStorage cuando el estado foods cambia
    localStorage.setItem("foods", JSON.stringify(foods));
    // Actualizar los alimentos filtrados cuando cambian los alimentos
    setFilteredFoods(foods);
  }, [foods]);


  //ADD FOOD FUNCTION 
  const handleAddFood = (newFoodItem) => {
    const addedFood = [...foods, newFoodItem];
    setFoods(addedFood);
  };

  //DELETE FOOD FUNCTION 
  const handleDeleteFood = (foodId) => {
    const updatedFoods = foods.filter((food) => food.id !== foodId);
    setFoods(updatedFoods);
  };


  //SEARCH FUNCTION
  const handleSearch = (searchTerm) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <div>
        {/* RENDER SEARCH BAR */}
      <Search onSearch={handleSearch} />

      {/* RENDER ADD FOOD */}
      <AddFoodForm addFood={handleAddFood} />

      {/* RENDER DELETE FOOD */}
      {filteredFoods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={handleDeleteFood} />
      ))}
    </div>
  );
}

export default FoodList;
