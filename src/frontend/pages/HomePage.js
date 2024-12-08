import React, { useState, useEffect } from 'react';
import './HomePage.css';
import image1 from '../assets/homeImage1.jpg';
import image2 from '../assets/homeImage2.jpg';
import image3 from '../assets/homeImage3.jpg';
import image4 from '../assets/homeImage4.jpg';
import image5 from '../assets/homeImage5.jpg';
import image6 from '../assets/homeImage6.jpg';

const HomePage = () => {
    const images = [image1, image2, image3, image4, image5, image6];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slideshow-wrapper">
            <div className="slideshow-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
