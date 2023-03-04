import MainCard from './sections/MainCard';
import AboutMe from './sections/AboutMe';
import Projetos from './sections/Projetos';
import Trajetoria from './sections/Trajetoria';
import Contato from './sections/Contato';
import Footer from './sections/Footer';

export default function Home() {
    return (
        <div>
            <MainCard />
            <AboutMe />
            <Projetos index={true} />
            <Trajetoria />
            <Contato />
            <Footer />
            <div className='gradient grad-1'></div>
            <div className='gradient grad-2'></div>
            <div className='gradient grad-3'></div>
            <div className='gradient grad-4'></div>
            <div className='gradient grad-5'></div>
            <div className='gradient grad-6'></div>
        </div>
    )
}