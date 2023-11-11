import Skill from "../../Elements/Skill"
import Title from "../../Elements/Title";
import { motion } from 'framer-motion';

export default function Skills() {
    const tools = [
        {
            image: "https://skillicons.dev/icons?i=git&theme=light",
            title: "Git"
        },
        {
            image: "https://skillicons.dev/icons?i=github&theme=light",
            title: "Github"
        },
        {
            image: "https://skillicons.dev/icons?i=vscode&theme=light",
            title: "VSCode"
        },
        {
            image: "https://skillicons.dev/icons?i=figma&theme=light",
            title: "Figma"
        },
        {
            image: "https://skillicons.dev/icons?i=bash&theme=light",
            title: "Bash"
        },
        {
            image: "https://skillicons.dev/icons?i=codepen&theme=light",
            title: "Codepen"
        },
        {
            image: "https://skillicons.dev/icons?i=discord&theme=light",
            title: "Discord"
        },
    ];

    const skills = [
        {
            image: "https://skillicons.dev/icons?i=javascript&theme=light",
            title: "Javascript"
        },
        {
            image: "https://skillicons.dev/icons?i=html&theme=light",
            title: "Html"
        },
        {
            image: "https://skillicons.dev/icons?i=css&theme=light",
            title: "Css"
        },
        {
            image: "https://skillicons.dev/icons?i=react&theme=light",
            title: "React"
        },
        {
            image: "https://skillicons.dev/icons?i=tailwind&theme=light",
            title: "Tailwind"
        },
        {
            image: "https://skillicons.dev/icons?i=bootstrap&theme=light",
            title: "Bootstrap"
        },
        {
            image: "https://skillicons.dev/icons?i=nodejs&theme=light",
            title: "Node"
        },
        {
            image: "https://skillicons.dev/icons?i=express&theme=light",
            title: "ExpressJs"
        },
        {
            image: "https://skillicons.dev/icons?i=sass&theme=light",
            title: "Sass"
        },
        {
            image: "https://skillicons.dev/icons?i=nextjs&theme=light",
            title: "NextJs"
        }
    ];

    const variants = {
        hidden: { opacity: 0, y: 10 },
        visible: (delayNumber) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.2 * delayNumber }
        })
    }

    return (
        <section className="mt-12">
            <Title title="tech skills" />
            <article className="md:col-span-8 col-span-12 md:order-1 order-last">
                <div>
                    <p className="py-8 text-light">
                        Here are some of the technologies I'm proficient and comfortable with:
                    </p>
                </div>
                <section className="flex flex-wrap align-center justify-start gap-4 overflow-hidden skills">
                    {
                        skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={variants}
                                viewport={{ once: true }}
                                custom={index}
                                transition={{ duration: 1, ease: "backIn" }}>
                                <Skill image={skill.image} title={skill.title} />
                            </motion.div>
                        ))
                    }
                </section>
                <p className="py-7 text-light">Tools I use: </p>
                <section className="flex flex-wrap align-center justify-start gap-4 overflow-hidden skills">
                    {
                        tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={variants}
                                viewport={{ once: true }}
                                custom={index}
                                transition={{ duration: 1, ease: "backIn" }}>
                                <Skill key={index} image={tool.image} title={tool.title} />
                            </motion.div>
                        ))
                    }
                </section>
            </article>
        </section>
    )
}
