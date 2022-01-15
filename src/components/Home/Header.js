import Container from '../Container';
import { motion } from 'framer-motion';

export default function Header() {

    return (
        <header className="py-2 px-10">
            <Container>
                <div className="flex items-center justify-between">
                    <h1
                        className="text-3xl font-bold py-2">Awais.
                    </h1>
                    <button className="px-3 py-1 mt-2 bg-blue-400 rounded-md text-lg">
                        contact
                    </button>
                </div>
            </Container>
        </header>
    )
}
