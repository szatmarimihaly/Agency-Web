import {translations} from "../context/translations.js";
import React, { useState } from 'react';
import '../styles/card.css';




function Card({ language }) {

    const cards = [
        {
            id: 1,
            icon: "tartalom",
            title: translations[language].title1,
            text: translations[language].text1,
        },
        {
            id: 2,
            icon: "profil",
            title: translations[language].title2,
            text: translations[language].text2,
        },
        {
            id: 3,
            icon: "bevetel",
            title: translations[language].title3,
            text: translations[language].text3,
        },
        {
            id: 4,
            icon: "marketing",
            title: translations[language].title4,
            text: translations[language].text4,
        },
        {
            id: 5,
            icon: "account",
            title: translations[language].title5,
            text: translations[language].text5,
        },
        {
            id: 6,
            icon: "chat",
            title: translations[language].title6,
            text: translations[language].text6,
        },
        {
            id: 7,
            icon: "vagas",
            title: translations[language].title7,
            text: translations[language].text7,
        },
        {
            id: 8,
            icon: "szemely",
            title: translations[language].title8,
            text: translations[language].text8,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    let touchStartX = 0;
    let touchEndX = 0;

    const prevCard = () => {
        setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    };

    const nextCard = () => {
        setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    };

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
    }

    const handleTouchMove = (e) => {
        touchEndX = e.touches[0].clientX;
    }

    const handleTouchEnd = (e) => {
        if(touchStartX - touchEndX > 50){
            //jobbra húzás(balra lapoz)
            nextCard();
        }else if(touchEndX - touchStartX < 50){
            prevCard();
        }
    }

    return (
        <div
            className="slider-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <button className="arrow left" onClick={prevCard}>&#8592;</button>

            <div className="card-wrapper">
                {/* Előző kártya */}
                <div className="card-box prev">
                    <img
                        src={`/icon/${cards[(currentIndex - 1 + cards.length) % cards.length].icon}.svg`}
                        alt="icon"
                    />
                    <h2>{cards[(currentIndex - 1 + cards.length) % cards.length].title}</h2>
                </div>

                {/* Aktív kártya */}
                <div className="card-box active">
                    <img
                        src={`/icon/${cards[currentIndex].icon}.svg`}
                        alt="icon"
                    />

                    <h2>{cards[currentIndex].title}</h2>
                    <p>{cards[currentIndex].text}</p>
                </div>

                {/* Következő kártya */}
                <div className="card-box next">
                    <img
                        src={`/icon/${cards[(currentIndex + 1) % cards.length].icon}.svg`}
                        alt="icon"
                    />
                    <h2>{cards[(currentIndex + 1) % cards.length].title}</h2>
                </div>
            </div>

            <button className="arrow right" onClick={nextCard}>&#8594;</button>
        </div>
    );
}

export default Card;
