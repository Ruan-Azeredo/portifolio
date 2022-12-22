import MainCard from './MainCard';
import AboutMe from './AboutMe';
import Projetos from './Projetos';
import Trajetoria from './Trajetoria';
import Contato from './sections/Contato';
import Footer from './Footer';

export default function Home() {
    return (
        <div>
            <MainCard />
            <AboutMe />
            <Projetos />
            <Trajetoria />
            <Contato />
            <Footer />
        </div>
    )
}