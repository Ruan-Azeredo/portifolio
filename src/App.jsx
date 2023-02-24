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
import { myBooks } from './data';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/MyBooks' element={<PageProjetoLayout infos={myBooks} />} />
      </Routes>   
    </Router>
  );
}

export default App;
