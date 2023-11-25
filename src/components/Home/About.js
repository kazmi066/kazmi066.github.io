import myself from '../../assets/myself.jpg';
import StellarLogo from '../../assets/stellarLogo.svg';
// import { GradientBoxes } from '../GradientBoxes/GradientBoxes';

export default function About() {
    // const highlightContainer = (text) => {
    //     return (
    //         <span className="highlight-container">
    //             <span className="relative">
    //                 {text}
    //             </span>
    //         </span>
    //     )
    // }

    return (
        <section className="mt-6 relative z-20 grid grid-cols-6 gap-6">
            <article className='sm:col-span-4 col-span-6 relative'>
                <h1 className="pb-4 font-bold sm:text-[1.5rem] text-[1.3rem]">
                    Hey, I'm Awais 👋
                </h1>
                <p>
                    Crafting amazing websites that users adore! I turn ideas into smooth, user-friendly
                    online experiences. With a mix of creativity and tech skills, I'm here to make
                    your web projects stand out and shine. I currently work
                    as <span className="bg-[#ffcf4d] px-1 text-black">Frontend Developer</span> Lead at &nbsp;
                    <span className="px-1 pb-1 border-[1px] border-[#404040] rounded-sm bg-slate-900">
                        <a
                            href="https://stellarminore.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={StellarLogo} alt="Stellar Minore" width={150} className="inline-block" />
                        </a>
                    </span>
                    {/* I'm a software engineer specializing in building exceptional websites.
                    My interest in web development starting back in 2019 during my university. Turns out making CRUD operations
                    for a semester project made me curious about the web industry.
                    <br />
                    Right now, I'm all about the frontend stack, rocking {highlightContainer("React")}, {highlightContainer("Next.js")}, and {highlightContainer("Typescript")}.
                    I'm diving into {highlightContainer("React Native")} too, because who doesn't want to conquer the world of mobile apps? But that's not all—I've also got some backend skills under my belt, including {highlightContainer("Node.js")}, {highlightContainer("Express")}, and {highlightContainer("GraphQL")}.
                    I'm a well-rounded developer who knows how to handle the whole shebang. */}
                </p>
            </article>
            <div className='sm:col-span-2 col-span-6'>
                <img src={myself} alt="Myself" className="w-4/3 h-full ml-auto rounded-xl object-cover" />
            </div>
            {/* <div className="mt-8 text-light">
                Have you checked out my React starter template?&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kazmi066/react-tailwind-rtk-starter" className="text-orange-500">
                    https://github.com/kazmi066/react-tailwind-rtk-starter
                </a>
            </div> */}
        </section>
    )
}
