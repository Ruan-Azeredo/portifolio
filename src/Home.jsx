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
        </div>
    )
}