import Container from '../../components/Container';
import FrontLoader from '../../components/FrontLoader';
import Header from '../../components/Home/Header';
import awais from '../../assets/awais.jpg';
import About from '../../components/Home/About';
import Skills from "../../components/Home/Skills";
import Timelines from "../../components/Home/Timelines";
import Contact from "../../components/Home/Contact";
import Footer from "../../components/Home/Footer";

export default function Home() {
    return (
        <main id="home" className="dark:bg-black dark:text-white py-8">
            <FrontLoader>
                <Header />
                <Container>
                    <div className="flex items-center content-center gap-4">
                        <div className="person_image">
                            <img className="w-20 rounded-full" src={awais} alt="broken" />
                        </div>
                        <div className="person_text">
                            <h3 className="font-bold">Awais Abbas Kazmi</h3>
                            <p>Full Stack | JavaScript Developer</p>
                        </div>
                    </div>
                    <About />
                    <Skills />
                    <Timelines />
                    <Contact />
                    <Footer />
                </Container>
            </FrontLoader>
        </main>
    )
}
