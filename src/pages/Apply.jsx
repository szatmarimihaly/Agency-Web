import '../styles/apply.css';
import ApplyComp from "../components/ApplyComp.jsx";
import {useState} from "react";

function Apply(){

    const [language, setLanguage] = useState("HU");

    return(
        <>
            <ApplyComp language = {language}/>
        </>
    );

}

export default Apply;

