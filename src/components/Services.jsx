import {translations} from "../context/translations.js";
import Card from "./Card.jsx";
import '../styles/services.css'


function Services({ language }){

    return(
        <>
            <div className = "services-container">
                <h1 id = "SERVICES">{translations[language].services}</h1>
                <Card language = {language}/>
            </div>
        </>
    );

}
export default Services;


