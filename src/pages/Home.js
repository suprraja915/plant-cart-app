import React from 'react';
import Button from '../components/Button';  // Assume you have a button component
import plantImage from '../assets/images/plant.jpg';  // Import the image

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Plant Cart App</h1>
            {/* Use the imported image */}
            <img src={plantImage} alt="Plant" style={{ width: '300px', height: 'auto' }} />
            <Button text="Shop Now" onClick={() => alert('Going to Shop')} />
        </div>
    );
}

export default Home;
