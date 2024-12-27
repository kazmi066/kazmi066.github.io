import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Container from "../../components/Container";
import About from "../../components/Home/About";
import Contact from "../../components/Home/Contact";
import Footer from "../../components/Home/Footer";
import { Blogs } from "../../components/Home/Blogs";
import { Templates } from "../../components/Home/Templates";

export default function Home() {
  const { scrollY } = useScroll();

  let y1 = useTransform(scrollY, [0, 500], ["0%", "100%"]);
  let opacity1 = useTransform(scrollY, [0, 500], [0, 0.3]);
  let rotate1 = useTransform(scrollY, [0, 500], ["0deg", "90deg"]);
  let scale1 = useTransform(scrollY, [0, 800], [1, 0.4]);

  return (
    <main className="text-white relative">
      <motion.div
        style={{ y: y1, opacity: opacity1, rotate: rotate1, scale: scale1 }}
        className="sm:flex hidden w-[150px] absolute top-60 left-20 h-[150px] bg-[#1c1919] border-[1px] border-[#565656] rounded-xl"
      />
      <Container className="relative z-20">
        <About />
        <Templates />
        <Blogs />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}
