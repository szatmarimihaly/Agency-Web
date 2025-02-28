import {translations} from "../context/translations.js";
import '../styles/footer.css'
import {Link} from "react-router-dom";

function Footer({ language }) {

    return(
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-top">
                        <div className="top-left">
                            <img src="./logo-gray.png" alt="logo" loading="lazy" className="agency"/>
                            <p>Californium Agency.</p>

                            <img src="./no_bg2.png" alt="elementworks-logo" loading="lazy" className="elementworks"/>
                            <p>{translations[language].siteP}</p>
                            <button className="elementworks-btn">{translations[language].siteB}</button>
                        </div>

                        <div className="top-first">
                            <h2> {translations[language].ceg} </h2>
                            <ul>
                                <li>
                                    <a href="">{translations[language].footerK}</a>
                                </li>

                                <li>
                                    <Link to="/apply">{translations[language].footerJ}</Link>
                                </li>

                                <li>
                                    <a href="#GYIK">{translations[language].footerK2}</a>
                                </li>

                                <li>
                                    <a href="/gdpr.TXT" download="californium-gdpr.txt" id="downloadLink">{translations[language].data}</a>
                                </li>

                            </ul>
                        </div>

                        <div className="top-second">
                            <h2>{translations[language].footerS}</h2>
                            <ul>
                                <li>
                                    <a href="#SERVICES">{translations[language].footerS1}</a>
                                </li>

                                <li>
                                    <a href="#SERVICES">{translations[language].footerS2}</a>
                                </li>

                                <li>
                                    <a href="#SERVICES">{translations[language].footerS3}</a>
                                </li>

                                <li>
                                    <a href="#SERVICES">{translations[language].footerS4}</a>
                                </li>

                                <li>
                                    <a href="#SERVICES">{translations[language].footerS5}</a>
                                </li>

                                <li>
                                    <a href="#SERVICES">{translations[language].footerS6}</a>
                                </li>

                                <li>
                                    <a href="#SERVICES">{translations[language].footerS7}</a>
                                </li>

                                <li>
                                    <a href="#SERVICES">{translations[language].footerS8}</a>
                                </li>

                            </ul>
                        </div>

                        <div className="top-first">
                            <h2>{translations[language].footerKo}</h2>
                            <ul>
                                <li>
                                    <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=californiumagency@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        id="kapcsolat">{translations[language].footerE}</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="left-bottom">&copy; {new Date().getFullYear()} Californium Agency. &nbsp; {translations[language].footerC}
                        </div>
                        <div className="right-bottom">
                            <i className="ri-instagram-line"></i>
                            <i className="ri-facebook-fill"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );

}

export default Footer;


