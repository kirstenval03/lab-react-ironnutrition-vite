
import React, { useState } from "react";
import FoodBox from "./FoodBox";
import foodsJson from "../foods.json";
import AddFoodForm from "./AddFoodForm";
// To start using the pre-made Ant Design components, we must first import them:
import { Card, Row, Col, Divider, Input, Button } from "antd";


function FoodList() {
    const [foods, setFoods] = useState(foodsJson);

  const handleAddFood = (newFoodItem) => {
    const addedFood = [...foods, newFoodItem];

    setFoods(addedFood)
  }

  // Function to delete a food item
  const handleDeleteFood = (foodId) => {
    const updatedFoods = foods.filter((food) => food.id !== foodId);
    setFoods(updatedFoods);
  };


return (
    <div>
      {/* Render the AddFoodForm component*/ }
      <AddFoodForm addFood={handleAddFood}/>

      {/* Render a list of FoodBox components */}
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={handleDeleteFood} />
      ))}
    </div>
  );
      }
  export default FoodList;