import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './AboutMe.css';
import './Title.css';
import './Projetos.css'
import './Trajetoria.css'
import './Contato.css'
import './Footer.css'
import CardBlack from './CardBlack';
import Home from './Home';
import PageProjetoLayout from './PageProjetoLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/comp' element={<PageProjetoLayout/>} />
      </Routes>   
    </Router>
  );
}

export default App;
