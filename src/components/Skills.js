import Skill from "../Elements/Skill"
import { ReactComponent as Javascript } from "../assets/skills/Javascript.svg";
import { ReactComponent as React } from "../assets/skills/React.svg";
import { ReactComponent as Css } from "../assets/skills/Css.svg";
import { ReactComponent as Html } from "../assets/skills/Html.svg";
import { ReactComponent as Node } from "../assets/skills/Node.svg";
import { ReactComponent as Mongo } from "../assets/skills/Mongo.svg";
import { ReactComponent as Graphql } from "../assets/skills/Graphql.svg";
import { ReactComponent as Tailwind } from "../assets/skills/Tailwind.svg";
import { ReactComponent as Next } from "../assets/skills/Next.svg";

const skills = [
    {
        image: <Javascript />,
        title: "something",
        color: "red"
    },
    {
        image: <Html />,
        title: "something",
        color: "red"

    },
    {
        image: <Css />,
        title: "something",
        color: "red"

    },
    {
        image: <React />,
        title: "something",
        color: "red"

    },
    {
        image: <Node />,
        title: "something",
        color: "red"
    },
    {
        image: <Mongo />,
        title: "something",
        color: "yellow"
    },
    {
        image: <Next />,
        title: "something",
        color: "yellow"
    },
    {
        image: <Graphql />,
        title: "something",
        color: "yellow"
    },
    {
        image: <Tailwind />,
        title: "something",
        color: "yellow"
    },
]

export default function Skills() {
    return (
        <section className="flex content-center px-2 flex-wrap">
            {
                skills.map((skill, index) => {
                    return <Skill key={index} image={skill.image} title={skill.title} color={skill.color} />
                })
            }
        </section>
    )
}
