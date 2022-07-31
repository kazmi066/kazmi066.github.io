import React from 'react'
import Title from '../../Elements/Title'
import Container from '../Container'
import unsplash from '../../assets/unsplash.png';
import ledger from '../../assets/ledger.png';

export default function Projects() {

    const projects = [
        {
            id: 1,
            basicTitle: 'Unsplash-clone',
            hoveredTitle: 'Unsplash-clone',
            description: 'A responsive image gallery website built with React and Tailwind.',
            link: 'https://unsplash-clone-d3.netlify.app/',
            image: unsplash
        },
        {
            id: 2,
            basicTitle: 'Ledger',
            hoveredTitle: 'Ledger',
            description: 'A fiverr client project dealing with cryptocurrency and blockchain, built with Next and Tailwind.',
            link: 'https://ledger-design.netlify.app',
            image: ledger
        },
        {
            id: 3,
            basicTitle: 'Freelance',
            hoveredTitle: 'Stellar Minore',
            description: 'A React based website for Stellar Minore.',
            link: 'https://stellarminore.com',
            image: ledger
        },
        {
            id: 4,
            basicTitle: 'Freelance',
            hoveredTitle: 'Stellar Minore',
            description: 'A React based website for Stellar Minore.',
            link: 'https://stellarminore.com',
            image: ledger
        }
    ]

  return (
    <section className="pt-12">
        <Container>
            <Title title="Projects" />
                <div className="flex gap-4 mt-8 items-center">
                    {
                        projects.map((project) => (
                            <div className="overflow-hidden group w-32 h-80 transition-all duration-300 ease-in hover:w-64 px-4 bg-[url('assets/card_background.jpeg')] rounded-xl relative">
                                <div class="absolute top-0 right-0 bottom-0 left-0 bg-[#000000b0]"></div>
                                <h4 className="absolute top-[45%] w-64 -right-[20px] rotate-90 group-hover:hidden text-bordered">{project.basicTitle}</h4>
                                <h4 className="relative z-10 invisible font-bold pt-4 leading-tight pb-2 transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible delay-300">
                                    <a href={project.link} target="_blank" rel="noreferrer">{project.hoveredTitle}</a>
                                </h4>
                                <p className="relative z-10 text-sm invisible transition-opacity delay-300 opacity-0 group-hover:opacity-100 group-hover:visible">
                                    {project.description}
                                </p>
                                <img
                                    src={project.image}
                                    alt={project.basicTitle}
                                    className="mt-14 relative w-90 mx-auto rounded-xl h-28 z-10 invisible transition-opacity delay-300 opacity-0 group-hover:opacity-100 group-hover:visible" />
                            </div>
                        ))
                    }
                </div>
        </Container>
    </section>
  )
}
