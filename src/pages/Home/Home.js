import Container from '../../components/Container';
import Styles from './Home.module.css';
import FrontLoader from '../../components/FrontLoader';
import Header from '../../components/Home/Header';
import About from '../../components/Home/About';
import Skills from "../../components/Home/Skills";
import Timelines from "../../components/Home/Timelines";
import Contact from "../../components/Home/Contact";
import Footer from "../../components/Home/Footer";
// import Projects from '../../components/Home/Projects';
import 'react-loading-skeleton/dist/skeleton.css'
import useOnScreen from '../../hooks/useOnScreen';

export default function Home() {
    return (
        <main className={`text-white ${Styles.mainContainer}`}>
            <FrontLoader>
                <Header />
                <div className="fixed top-2 flex w-full items-center justify-center">
                    <div className={Styles.dynamicIsland}>Nothing</div>
                </div>
                <Container>
                    <div className="flex items-center content-center gap-4 mt-4">
                        <div className={`w-20 h-20 ${Styles.avatar}`}>
                        </div>
                        <div className="person_text w-64">
                            <h3 className="font-bold">Awais Abbas Kazmi</h3>
                            <p>Full Stack | JavaScript Developer</p>
                        </div>
                    </div>
                    <About />
                    <Skills />
                    <Timelines />
                    {/* <Projects /> */}
                    <Contact />
                    <Footer />
                </Container>
            </FrontLoader>
        </main>
    )
}
