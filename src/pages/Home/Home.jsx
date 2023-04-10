import React, { Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '../../components/Container';
import Styles from './Home.module.css';
import About from '../../components/Home/About';
import Skills from "../../components/Home/Skills";
import Timelines from "../../components/Home/Timelines";
import Contact from "../../components/Home/Contact";
import Footer from "../../components/Home/Footer";
// import 'react-loading-skeleton/dist/skeleton.css';

const Projects = React.lazy(() => import('../../components/Home/Projects'));

export default function Home() {
    const { scrollY } = useScroll();
    let y1 = useTransform(scrollY, [0, 500], ['0%', '100%']);
    let y2 = useTransform(scrollY, [0, 500], ['0%', '100%']);
    let y3 = useTransform(scrollY, [0, 500], ['0%', '50%']);
    let y4 = useTransform(scrollY, [0, 1200], ['0%', '90%']);
    let y5 = useTransform(scrollY, [0, 1800], ['0%', '40%']);

    let opacity1 = useTransform(scrollY, [0, 500], [0, 0.4]);
    let opacity2 = useTransform(scrollY, [0, 500], [0, 0.3]);
    let opacity3 = useTransform(scrollY, [0, 500], [0, 0.5]);
    let opacity4 = useTransform(scrollY, [0, 1500], [0, 0.6]);
    let opacity5 = useTransform(scrollY, [0, 1800], [0, 0.4]);

    let rotate1 = useTransform(scrollY, [0, 1000], ['0deg', '90deg']);
    let rotate2 = useTransform(scrollY, [0, 1000], ['0deg', '45deg']);
    let rotate3 = useTransform(scrollY, [0, 1000], ['0deg', '-45deg']);
    let rotate4 = useTransform(scrollY, [0, 1500], ['0deg', '90deg']);
    let rotate5 = useTransform(scrollY, [0, 1900], ['0deg', '-150deg']);

    let scale1 = useTransform(scrollY, [0, 1000], [1, .4]);
    let scale2 = useTransform(scrollY, [0, 1000], [1, .9]);
    let scale3 = useTransform(scrollY, [0, 1000], [1, .7]);
    let scale4 = useTransform(scrollY, [0, 1500], [1, .7]);
    let scale5 = useTransform(scrollY, [0, 1900], [1, .9]);

    return (
        <main className="text-white">
            <motion.div
                style={{ y: y1, opacity: opacity1, rotate: rotate1, scale: scale1 }}
                className='sm:flex hidden w-[150px] absolute -z-20 top-60 left-20 h-[150px] bg-[#1b294c] rounded-large opacity-40'>
            </motion.div>
            <motion.div
                style={{ y: y2, opacity: opacity2, rotate: rotate2, scale: scale2 }}
                className='sm:flex hidden w-[100px] absolute -z-20 top-[40%] right-60 h-[100px] bg-[#1b294c] rounded-large opacity-40'>
            </motion.div>
            <motion.div
                style={{ y: y3, opacity: opacity3, rotate: rotate3, scale: scale3 }}
                className='sm:flex hidden w-[100px] absolute -z-20 top-[40%] left-40 h-[100px] bg-[#1b294c] rounded-xl opacity-40'>
            </motion.div>
            <motion.div
                style={{ y: y4, opacity: opacity4, rotate: rotate4, scale: scale4 }}
                className='sm:flex hidden w-[80px] absolute -z-20 bottom-[40%] right-[30%] h-[80px] bg-[#1b294c] rounded-2xl opacity-40'>
            </motion.div>
            <motion.div
                style={{ y: y5, opacity: opacity5, rotate: rotate5, scale: scale5 }}
                className='sm:flex hidden w-[120px] absolute -z-20 bottom-[20%] right-[10%] h-[120px] bg-[#1b294c] rounded-2xl opacity-40'>
            </motion.div>
            <Container>
                <div className="flex items-center content-center gap-4 mt-4">
                    <div className={`w-20 h-20 ${Styles.avatar}`}>
                    </div>
                    <div className="person_text sm:w-64 w-54">
                        <h3 className="font-bold sm:text-[1.5rem] text-[1.3rem]">Awais Abbas Kazmi</h3>
                        <p className="sm:text-[16px] text-[14px]">Full Stack | JavaScript Developer</p>
                    </div>
                </div>
                <About />
                <Skills />
                <Timelines />
                <Suspense fallback={<div>Loading...</div>}>
                    <Projects />
                </Suspense>
                <Contact />
                <Footer />
            </Container>
        </main>
    )
}
