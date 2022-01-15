import Container from "../../components/Container";
import awais from '../../assets/awais.jpg';
import About from '../../components/About';
import Title from "../../Elements/Title";
import { ReactComponent as Javascript } from "../../assets/Javascript.svg";

export default function Front() {
    return (
        <main id="front" className="py-8">
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
                <div className="pt-12">
                    <Title title="tech skills" />
                    <h4 className="py-8">Here are some of the technologies and tools I'm proficient and comfortable with:</h4>
                    <Javascript />
                </div>
            </Container>
        </main>
    )
}
