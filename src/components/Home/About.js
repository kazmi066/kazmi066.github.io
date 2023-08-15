export default function About() {
    const highlightContainer = (text) => {
        return (
            <span className="highlight-container">
                <span className="relative">
                    {text}
                </span>
            </span>
        )
    }

    return (
        <div className="mt-8">
            <h4 className="text-light">
                I'm a software engineer specializing in building exceptional websites.
                My interest in web development starting back in 2019 during my university. Turns out making CRUD operations
                for a semester project made me curious about the web industry.
                <br />
                Right now, I'm all about the frontend stack, rocking {highlightContainer("React")}, {highlightContainer("Next.js")}, and {highlightContainer("Typescript")}.
                I'm diving into {highlightContainer("React Native")} too, because who doesn't want to conquer the world of mobile apps? But that's not all—I've also got some backend skills under my belt, including {highlightContainer("Node.js")}, {highlightContainer("Express")}, and {highlightContainer("GraphQL")}.
                I'm a well-rounded developer who knows how to handle the whole shebang.
            </h4>
            <div className="mt-8 text-light">
                Have you checked out my React starter template?&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kazmi066/react-tailwind-rtk-starter" className="text-orange-500">
                    https://github.com/kazmi066/react-tailwind-rtk-starter
                </a>
            </div>
        </div>
    )
}
