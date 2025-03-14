import { translations } from "../context/translations.js";
import '../styles/main.css'
import Services from "./Services.jsx";
import Why from "./Why.jsx";
import Faq from "./Faq.jsx";
import { useState } from "react";
import CookieConsent from "./CookieConsent.jsx";

function Main({ language }){

    const [isVisible, setIsVisible] = useState(false);

    return(
        <>
            <main>
                <div className="about-container">
                    <div className="about-left">
                        <h1>{translations[language].about}</h1>
                        <p>{translations[language].aboutText1} <span
                            style={{fontWeight: "900"}}>{translations[language].aboutText2}</span> {translations[language].aboutText3}
                        </p>
                    </div>
                    <div className="about-right">
                        <img src={'/about-image.webp'} alt="about-image" loading="lazy"/>
                    </div>
                </div>


                <Services language={language}/>

                <div className="service-small">
                    <div className="service-small-h3">
                        <h3>{translations[language].kezeles}</h3>
                        <img src="/pipa.webp" alt="Check" loading="lazy"/>
                    </div>

                    <div className="service-small-h3">
                        <h3>{translations[language].bevetel}</h3>
                        <img src="/pipa.webp" alt="Check" loading="lazy"/>
                    </div>

                    <div className="service-small-h3">
                        <h3>{translations[language].munka}</h3>
                        <img src="/pipa.webp" alt="Check" loading="lazy"/>
                    </div>
                </div>

                <Why language={language}/>
                <h1 className="gyik" id="GYIK">{translations[language].gyik}</h1>
                <Faq language={language}/>

                <h1 className = "ask">{translations[language].tovabbiform}</h1>
                <div className = "form2-container">
                    <button className = "form2-button" onClick={() => setIsVisible(!isVisible)}>
                        {translations[language].tovabbigomb}
                    </button>
                    {isVisible && (
                        <div className="form2">
                            <form action="https://formspree.io/f/yourformspreekeyhere" method="POST">
                                <input type="text" placeholder={translations[language].formN} required></input>
                                <input type="email" placeholder={translations[language].formE} name="email" required/>
                                <input type="tel" placeholder={translations[language].formT} required></input>
                                <textarea name="message" placeholder={translations[language].textMsg} rows = "5" required></textarea>

                                <button type="submit">{translations[language].formBtn}</button>
                            </form>
                        </div>
                    )}
                </div>

                <CookieConsent/>
            </main>

        </>
    );

}

export default Main;


