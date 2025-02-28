import { translations } from "../context/translations.js";
import '../styles/why.css'

function Why ({ language }) {

    return(
        <>
            <div className = "why-us">
                <div className = "why-left">
                    <img src = "./why-profile.webp" alt = "why-us" loading = "lazy"/>
                </div>
                <div className = "why-right">
                    <h1>{translations[language].whyH}</h1>
                    <p className = "text">
                        {translations[language].whyP}
                    </p>
                    <ul>
                        <li>
                            <img src="/check.webp" alt="Why you should join?" loading="lazy"/>
                            <p>
                                {translations[language].whyP1}
                            </p>
                        </li>

                        <li>
                            <img src="/check.webp" alt="Why you should join?" loading="lazy"/>
                            <p>
                                {translations[language].whyP2}
                            </p>
                        </li>

                        <li>
                            <img src="/check.webp" alt="Why you should join?" loading="lazy"/>
                            <p>
                                {translations[language].whyP3}
                            </p>
                        </li>

                        <li>
                            <img src="/check.webp" alt = "Why you should join?" loading = "lazy"/>
                            <p>
                                {translations[language].whyP4}
                            </p>
                        </li>

                        <li>
                            <img src="/check.webp" alt="Why you should join?" loading="lazy"/>
                            <p>
                                {translations[language].whyP5}
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );

}

export default Why;



