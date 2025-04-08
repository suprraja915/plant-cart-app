import React, { useState } from "react";
import './App.css';
import plantImage from './assets/images/plant.jpg';
import PlantViewer from './components/PlantViewer';

function App() {
  const [showPlants, setShowPlants] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to Paradise Nursery 🌿</h1>
        <p>Explore our collection of plants, pots, and gardening tools.</p>
      </header>
      
      {!showPlants && (
        <div className="hero">
          <img src={plantImage} alt="Plants" className="hero-image" />
          <button className="leaf-button" onClick={() => setShowPlants(true)}>
            🍃 Buy House Plants
          </button>
        </div>
      )}

      {showPlants && <PlantViewer />}
    </div>
  );
}

export default App;
