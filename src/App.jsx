import "./App.css";
import React from "react";
import FoodList from "./components/FoodList";
import { Row, Divider } from "antd";





function App() {
  return (
    <div className="App">
      {/* Display Search component here */}

      <Divider>FOODLIST</Divider>
     

      <Row style={{ width: "100%", justifyContent: "center" }}>
        <FoodList />
        
      </Row>
    </div>
  );
}

export default App;