import Skill from "../Elements/Skill"
import { ReactComponent as JavaScript } from "../assets/javascript.svg";

const skills = {
    image: JavaScript,
    tag: "something"
}

export default function Skills() {
    return (
        <section>
            <JavaScript />
            <Skill />
        </section>
    )
}
