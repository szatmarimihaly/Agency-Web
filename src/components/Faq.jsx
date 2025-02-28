import { translations } from "../context/translations.js";
import React, { useState } from 'react';
import '../styles/faq.css'; // CSS fájl importálása

const Faq = ({ language }) => {
    const [activeIndexes, setActiveIndexes] = useState([]); // Tömb több aktív elemhez

    const toggleAnswer = (index) => {
        if (activeIndexes.includes(index)) {
            // Ha már nyitva van, akkor eltávolítjuk a tömbből
            setActiveIndexes(activeIndexes.filter(i => i !== index));
        } else {
            // Ha nincs nyitva, akkor hozzáadjuk a tömbhöz
            setActiveIndexes([...activeIndexes, index]);
        }
    };

    // A kérdések és válaszok tömbje
    const faqs = [
        { question: translations[language].question1, answer: translations[language].answer1 },
        { question: translations[language].question2, answer: translations[language].answer2 },
        { question: translations[language].question3, answer: translations[language].answer3 },
        { question: translations[language].question4, answer: translations[language].answer4 },
        { question: translations[language].question5, answer: translations[language].answer5 },
        { question: translations[language].question6, answer: translations[language].answer6 },
    ];

    return (
        <div className="faq">
            {faqs.map((item, index) => (
                <div key={index} className="faq-item">
                    <div
                        className={`question ${activeIndexes.includes(index) ? 'active' : ''}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <i className={`ri-${activeIndexes.includes(index) ? 'subtract' : 'add'}-line`}></i>
                        {item.question}
                        <i className={`ri-arrow-drop-right-line ${activeIndexes.includes(index) ? 'rotated' : ''}`}></i>
                    </div>
                    {activeIndexes.includes(index) && (
                        <div className="answer">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Faq;
