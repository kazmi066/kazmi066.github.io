import Container from '../Container';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/MediaQuery'
import { useEffect } from 'react';
import { useApp } from '../../context';

export default function Header() {
    const isMobile = useMediaQuery('(max-width: 1050px)');
    const { loading, setLoading } = useApp();

    const headingAnimation = isMobile ? {
        initial: {
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
            opacity: [0, .5, 1],
        },
        animate: {
            opacity: 1,
            position: 'absolute', left: '5%', top: '0%', transform: 'translate(0%, 0%)',
            width: "100px",
            transition: {
                duration: 1.4,
            }
        },
    } :
        {
            initial: {
                position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                opacity: [0, .5, 1],
            },
            animate: {
                opacity: 1,
                position: 'absolute', left: '15%', top: '0%', transform: 'translate(0%, 0%)',
                width: "100px",
                transition: {
                    duration: 1.4,
                }
            },
        }

    return (
        <header className="py-4 px-6">
            <Container>
                <div>
                    <motion.h1
                        initial="initial"
                        animate="animate"
                        variants={headingAnimation}
                        className="text-3xl font-bold overflow-hidden py-2 left-0">Awais.
                    </motion.h1>
                    <button className="px-3 py-1 bg-blue-400 rounded-md text-lg float-right">
                        contact
                    </button>
                </div>
            </Container>
        </header>
    )
}
