import React, { useState } from 'react';
import './PlantViewer.css';

const plants = [
  {
    name: "Snake Plant",
    image: "/assets/images/snake-plant.jpg",
    price: "25.99",
    description: "A hardy and low-maintenance plant with striking upright leaves.",
    fact: "Snake Plants are known to purify the air by absorbing toxins."
  },
  {
    name: "Monstera",
    image: "/assets/images/monstera.jpg",
    price: "45.99",
    description: "Monstera is a tropical plant with large, fenestrated leaves.",
    fact: "Monstera leaves can grow up to 3 feet wide in ideal conditions."
  },
  {
    name: "Peace Lily",
    image: "/assets/images/peace-lily.jpg",
    price: "30.50",
    description: "Peace Lily is a popular flowering plant known for its white blooms.",
    fact: "Peace Lilies are great for improving indoor air quality."
  },
  {
    name: "Fiddle Leaf Fig",
    image: "/assets/images/fiddle-leaf-fig.jpg",
    price: "60.00",
    description: "Fiddle Leaf Fig is known for its large, glossy, violin-shaped leaves.",
    fact: "It’s a favorite for interior designers due to its dramatic look."
  },
  {
    name: "Aloe Vera",
    image: "/assets/images/aloe-vera.jpg",
    price: "12.99",
    description: "Aloe Vera is a succulent plant known for its soothing gel.",
    fact: "Aloe Vera gel can be used for soothing burns and cuts."
  },
  {
    name: "ZZ Plant",
    image: "/assets/images/zz-plant.jpg",
    price: "35.00",
    description: "The ZZ Plant is a tough, low-maintenance plant with waxy leaves.",
    fact: "It’s nearly indestructible and can tolerate low light and neglect."
  },
  {
    name: "Spider Plant",
    image: "/assets/images/spider-plant.jpg",
    price: "20.00",
    description: "Spider Plant is known for its long, arching leaves and small plantlets.",
    fact: "It’s easy to propagate by cutting the plantlets off and replanting them."
  },
  {
    name: "Pothos",
    image: "/assets/images/pothos.jpg",
    price: "18.50",
    description: "Pothos is a fast-growing vine with heart-shaped leaves.",
    fact: "Pothos can thrive in almost any lighting condition and is great for beginners."
  },
  {
    name: "Cactus",
    image: "/assets/images/cactus.jpg",
    price: "10.00",
    description: "Cacti are known for their ability to survive in dry, desert environments.",
    fact: "Many cactus species can store water in their stems for months."
  },
  {
    name: "Bamboo Palm",
    image: "/assets/images/bamboo-palm.jpg",
    price: "40.00",
    description: "Bamboo Palm is a small, elegant plant with feathery, arching leaves.",
    fact: "It thrives in low light and is known to purify the air."
  }
];

const PlantViewer = () => {
  const [flippedCards, setFlippedCards] = useState(Array(plants.length).fill(false));

  const toggleFlip = (index) => {
    const updated = [...flippedCards];
    updated[index] = !updated[index];
    setFlippedCards(updated);
  };

  return (
    <div className="viewer-container">
      {plants.map((plant, index) => (
        <div
          key={index}
          className={`card ${flippedCards[index] ? 'flipped' : ''}`}
          onClick={() => toggleFlip(index)}
        >
          <div className="front">
            <img src={plant.image} alt={plant.name} />
          </div>
          <div className="back">
            <h2>{plant.name}</h2>
            <p><strong>Price:</strong> ${plant.price}</p>
            <p><strong>Description:</strong> {plant.description}</p>
            <p><strong>Fact:</strong> {plant.fact}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantViewer;
