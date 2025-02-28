import { translations } from "../context/translations.js";
import { Link } from "react-router-dom";
import '../styles/header.css'

function Header({ language, toogleLanguage }){

    return(
        <>
            <header>
                <div className="navbar">
                    <div className="left">
                        <img src="./logo-gold-header.png" alt="logo" loading="lazy"/>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <Link to = "/apply">{translations[language].apply}</Link>
                            </li>

                            <li>
                                <a href="#GYIK">{translations[language].faq}</a>
                            </li>

                            <li>
                                <a href="#kapcsolat">{translations[language].contact}</a>
                            </li>

                            <li>
                                <button onClick = {toogleLanguage}>{language}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );

}

export default Header;


