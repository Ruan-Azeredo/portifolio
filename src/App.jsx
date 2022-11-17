import './App.css';
import './AboutMe.css';
import './Title.css';
import './Projetos.css'
import './Trajetoria.css'
import './Contato.css'
import './Footer.css'
import MainCard from './MainCard';
import AboutMe from './AboutMe';
import Projetos from './Projetos';
import Trajetoria from './Trajetoria';
import Contato from './Contato';
import Footer from './Footer';

function App() {
  return (
    <div className='app'>
      <MainCard />
      <AboutMe />
      <Projetos />
      <Trajetoria />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
