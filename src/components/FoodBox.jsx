import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox({ food, onDelete }) {
  const { name, calories, image, servings } = food;

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} kcal</b>
        </p>
        <Button type="primary" onClick={() => onDelete(food.id)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;

