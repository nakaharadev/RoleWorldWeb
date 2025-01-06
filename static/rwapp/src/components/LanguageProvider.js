import { useState } from "react";
import { langNames, langs, LanguageContext } from "../util/Language";
import * as userData from "../util/UserData";

export default function LanguageProvider({ children }) {
    let defaultLang = undefined;

    if (userData.data.lang == undefined) {
        defaultLang = navigator.language;

    } else {
        defaultLang = userData.data.lang
    }
    
    const [ language, setLang ] = useState({
        "lang": langs[defaultLang],
        "isEn": userData.data.lang == langNames.EN ? true : false
    });
    
    function ruEnToggle() {
        setLang(prevLang => ({
            ...prevLang,
            isEn: !prevLang.isEn,
            lang: prevLang.isEn ? langs.ru : langs.en
        }));
    }

    return (
        <LanguageContext.Provider value={{ ...language, ruEnToggle }}>
            { children }
        </LanguageContext.Provider>
    )
}