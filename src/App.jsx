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
import { crud, ediaristas, irrigafacil, myBooks } from './data';
import PageProjetos from './PageProjetos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/MyBooks' element={<PageProjetoLayout infos={myBooks} />} />
        <Route path='/ediaristas' element={<PageProjetoLayout infos={ediaristas} />} />
        <Route path='/irrigafacil' element={<PageProjetoLayout infos={irrigafacil} />} />
        <Route path='/cadastroemails' element={<PageProjetoLayout infos={crud} />} />

        <Route path='/projetos' element={<PageProjetos/>} />
      </Routes>   
    </Router>
  );
}

export default App;
