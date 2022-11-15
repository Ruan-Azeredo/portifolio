import './App.css';
import './AboutMe.css';
import './Title.css';
import MainCard from './MainCard';
import AboutMe from './AboutMe';
import Projetos from './Projetos';

function App() {
  return (
    <div className='app'>
      <MainCard />
      <AboutMe />
      <Projetos/>
    </div>
  );
}

export default App;
