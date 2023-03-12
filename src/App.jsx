import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/App.css';
import './style/AboutMe.css';
import './style/Title.css';
import './style/Projetos.css'
import './style/Trajetoria.css'
import './style/Contato.css'
import './style/Footer.css'
import Home from './Home';
import PageProjetoLayout from './PageProjetoLayout';
import { crud, crudEN, ediaristas, ediaristasEN, irrigafacil, irrigafacilEN, myBooks, myBooksEN } from './data';
import PageProjetos from './PageProjetos';
import { useContext } from 'react';
import LanguageContext from './context/LanguageContext';

function App() {
  const { lang } = useContext(LanguageContext)

    var l
    if (lang == 'PT' || lang == null) {
        l = 'P'
    } else {
        l = 'E'
    }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/MyBooks' element={<PageProjetoLayout infos={l == 'P' ? myBooks : myBooksEN} />} />
        <Route path='/ediaristas' element={<PageProjetoLayout infos={l == 'P' ? ediaristas : ediaristasEN} />} />
        <Route path='/irrigafacil' element={<PageProjetoLayout infos={l == 'P' ? irrigafacil : irrigafacilEN} />} />
        <Route path='/cadastroemails' element={<PageProjetoLayout infos={l == 'P' ? crud : crudEN} />} />

        <Route path='/projetos' element={<PageProjetos/>} />
      </Routes>   
    </Router>
  );
}

export default App;
