import Container from '../Container';
import { motion } from 'framer-motion';

export default function Header() {

    const headingAnimation = {
        initial: {
            width: "10px",
        },
        animate: {
            width: "100px",
            transition: {
                duration: 1.4,
            }
        },
    }

    return (
        <header className="py-2 px-10">
            <Container>
                <div className="flex items-center justify-between">
                    <motion.h1
                        initial="initial"
                        animate="animate"
                        variants={headingAnimation}
                        className="text-3xl font-bold overflow-hidden py-2 left-0">Awais.
                    </motion.h1>
                    <button className="px-3 py-1 mt-2 bg-blue-400 rounded-md text-lg">
                        contact
                    </button>
                </div>
            </Container>
        </header>
    )
}
