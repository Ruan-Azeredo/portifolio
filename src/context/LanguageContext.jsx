import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext()

export function LanguageProvider(props) {
    const [lang, setLang] = useState('PT')

    useEffect(() => {
        const langNav = localStorage.getItem('globalLang')
        setLang(langNav)
    }, [])
    
    const alterarLingua = () => {
        console.log('worked')
        setLang(lang == 'PT' ? 'EN' : 'PT')
        localStorage.setItem('globalLang', lang == 'PT' ? 'EN' : 'PT')
    }

    return (
        <LanguageContext.Provider
            value={{lang, alterarLingua}}
        >
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext