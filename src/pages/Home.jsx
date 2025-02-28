import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Footer from '../components/Footer.jsx';
import { useState } from "react";

function Home(){

    const [language, setLanguage] = useState("HU");

    const toogleLanguage = () => {
        setLanguage((prev) => (prev === "HU" ? "EN" : "HU"));
    }

   return(
       <>
           <Header language = {language} toogleLanguage = {toogleLanguage} />
           <Main language = {language}/>
           <Footer language = {language}/>
       </>
   );


}
export default Home;
