import { translations } from "../context/translations.js";
import { useState} from "react";
import "../styles/apply.css"

function Apply({ language }){

    const [onlyFansStatus, setOnlyFansStatus] = useState("No Profile Yet");

    const handleCheckboxChange = (e) => {
        setOnlyFansStatus(e.target.checked ? "Active on OnlyFans" : "No Profile Yet");
    };

    return(
        <>
                <div className="apply-page">
                    <form action="https://formspree.io/f/yourformspreekeyhere" method="POST">

                        <p>{translations[language].formName}</p>
                        <input type="text" name="Name" placeholder={translations[language].formN} required/>

                        <p>{translations[language].formAge}</p>
                        <input type="number" name="Age" placeholder={translations[language].formY} min={18} required/>

                        <p>{translations[language].formInsta}</p>
                        <input type="text" name="Instagram" placeholder={translations[language].formI} required/>

                        <p>{translations[language].formEmail}</p>
                        <input type="email" name="Email" placeholder={translations[language].formE} required/>

                        <p>{translations[language].formTel}</p>
                        <input type="tel" name="Phone number" placeholder={translations[language].formT} required/>

                        <p>{translations[language].formVan}</p>
                        <label>
                            <input
                                type="checkbox"
                                onChange={handleCheckboxChange}
                            />
                        </label>

                        {/* Dinamikusan frissített rejtett mező */}
                        <input type="hidden" name="OnlyFansStatus" value={onlyFansStatus}/>

                        <button type="submit">{translations[language].formBtn}</button>
                    </form>
                </div>
        </>
    );

}

export default Apply;
