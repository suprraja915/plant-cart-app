import React, { useState } from "react";
import "./PlantCard.css";

const plants = [
  {
    name: "Snake Plant",
    image: "/assets/images/snake-plant.jpg",
    price: "25.99",
    description: "A hardy and low-maintenance plant with striking upright leaves.",
    fact: "Snake Plants are known to purify the air by absorbing toxins.",
  },
  {
    name: "Monstera",
    image: "/assets/images/monstera.jpg",
    price: "45.99",
    description: "Monstera is a tropical plant with large, fenestrated leaves.",
    fact: "Monstera leaves can grow up to 3 feet wide in ideal conditions.",
  },
  {
    name: "Peace Lily",
    image: "/assets/images/peace-lily.jpg",
    price: "30.50",
    description: "Peace Lily is a popular flowering plant known for its white blooms.",
    fact: "Peace Lilies are great for improving indoor air quality.",
  },
  // Add more plants as needed...
];

const PlantCard = () => {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextPlant = () => {
    setCurrent((prev) => (prev + 1) % plants.length);
    setFlipped(false);
  };

  const prevPlant = () => {
    setCurrent((prev) => (prev - 1 + plants.length) % plants.length);
    setFlipped(false);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const { name, image, price, description, fact } = plants[current];

  return (
    <div className="plant-viewer">
      <button className="arrow left" onClick={prevPlant}>←</button>

      <div className={`card-container ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
        <div className="card">
          <div className="front">
            <img src={image} alt={name} />
          </div>
          <div className="back">
            <h2>{name}</h2>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Fact:</strong> {fact}</p>
          </div>
        </div>
      </div>

      <button className="arrow right" onClick={nextPlant}>→</button>
    </div>
  );
};

export default PlantCard;
