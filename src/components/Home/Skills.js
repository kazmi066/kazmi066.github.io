import Skill from "../../Elements/Skill"
import Title from "../../Elements/Title";

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
    },
    // {
    //     image: <Graphql />,
    //     title: "GraphQL",
    // },
];

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
]

export default function Skills() {
    return (
        <>
            <div className="mt-12">
                <Title title="tech skills" />
                <h4 className="py-8">Here are some of the technologies I'm proficient and comfortable with:</h4>
            </div>
            <section className="flex flex-wrap align-center justify-start gap-4 overflow-hidden">
                {
                    skills.map((skill, index) => {
                        return <Skill key={index} image={skill.image} title={skill.title} />
                    })
                }
            </section>
            <h4 className="py-7">Tools I use:</h4>
            <section className="flex flex-wrap align-center justify-start gap-4 overflow-hidden">
                {
                    tools.map((skill, index) => {
                        return <Skill key={index} image={skill.image} title={skill.title} />
                    })
                }
            </section>
        </>
    )
}
