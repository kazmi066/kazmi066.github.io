import { useEffect } from 'react';
import Skill from "../../Elements/Skill"
import Title from "../../Elements/Title";
import { useRef } from 'react';
import { fadeRightObserver } from '../../utils/animations';

export default function Skills() {
    const tools = [
        {
            image: "https://skillicons.dev/icons?i=git&theme=light",
            title: "Git",
            delay: 200,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=github&theme=light",
            title: "Github",
            delay: 300,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=vscode&theme=light",
            title: "VSCode",
            delay: 400,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=figma&theme=light",
            title: "Figma",
            delay: 500,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=bash&theme=light",
            title: "Bash",
            delay: 600,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=codepen&theme=light",
            title: "Codepen",
            delay: 700,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=discord&theme=light",
            title: "Discord",
            delay: 800,
            ref: useRef(null)
        },
    ];

    const skills = [
        {
            image: "https://skillicons.dev/icons?i=javascript&theme=light",
            title: "Javascript",
            delay: 200,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=html&theme=light",
            title: "Html",
            delay: 300,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=css&theme=light",
            title: "Css",
            delay: 400,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=react&theme=light",
            title: "React",
            delay: 500,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=tailwind&theme=light",
            title: "Tailwind",
            delay: 600,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=bootstrap&theme=light",
            title: "Bootstrap",
            delay: 700,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=nodejs&theme=light",
            title: "Node",
            delay: 800,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=express&theme=light",
            title: "ExpressJs",
            delay: 900,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=sass&theme=light",
            title: "Sass",
            delay: 1000,
            ref: useRef(null)
        },
        {
            image: "https://skillicons.dev/icons?i=nextjs&theme=light",
            title: "NextJs",
            delay: 1100,
            ref: useRef(null)
        }
    ];

    useEffect(() => {
        skills.map((skill) => {
            const observer = new IntersectionObserver(fadeRightObserver, {
                delay: skill.delay
            });

            observer.observe(skill.ref.current);

            return () => {
                observer.disconnect();
            };
        });

        tools.map((tool) => {
            const observer = new IntersectionObserver(fadeRightObserver, {
                delay: tool.delay
            });

            observer.observe(tool.ref.current);

            return () => {
                observer.disconnect();
            };
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="mt-12">
                <Title title="tech skills" />
                <h4 className="py-8">Here are some of the technologies I'm proficient and comfortable with:</h4>
            </div>
            <section className="flex flex-wrap align-center justify-start gap-4 overflow-hidden">
                {
                    skills.map((skill, index) => (
                        <div key={index} ref={skill.ref} className="opacity-0">
                            <Skill image={skill.image} title={skill.title} />
                        </div>
                    ))
                }
            </section>
            <h4 className="py-7">Tools I use:</h4>
            <section className="flex flex-wrap align-center justify-start gap-4 overflow-hidden">
                {
                    tools.map((tool, index) => (
                        <div key={index} ref={tool.ref} className="opacity-0">
                            <Skill key={index} image={tool.image} title={tool.title} />
                        </div>
                    ))
                }
            </section>
        </>
    )
}
