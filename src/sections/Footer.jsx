import { useContext } from "react"
import LanguageContext from "../context/LanguageContext"

export default function Footer() {
    const { lang } = useContext(LanguageContext)
    
    var d
    if (lang == 'PT' || lang == null) {
        d = 'Desenvolvido por'
    } else {
        d = 'Developed by'
    }

    return (
        <div className="footer-container">
            <div className="footer-name">
                <div>{d}</div><span>Ruan Azeredo</span>
            </div>
            <div className="year">2022</div>
        </div>
    )
}