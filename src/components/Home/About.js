import myself from "../../assets/myself.jpg";

export default function About() {
  return (
    <section className="relative z-20 grid grid-cols-6 gap-6">
      <article className="sm:col-span-4 col-span-6 relative flex flex-col gap-4">
        <h1 className="font-bold sm:text-[1.5rem] text-[1.3rem]">
          Hey, I'm Awais 👋
        </h1>
        <p>
          I've been working professionally in tech for almost 4+ years and have
          been passionate about it for as long as I can remember. I really enjoy
          building and maintaining Frontend aspect of web applications. Also
          trying to write about my experiences and learnings whenever I get
          time. Currently working as a as a{" "}
          <span className="bg-[#ffcf4d] px-1 text-black">
            Frontend Developer
          </span>{" "}
          at &nbsp;
          <span className="px-1 pb-1 border-[1px] border-[#404040] rounded-sm bg-slate-900">
            <a
              href="https://emumba.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Emumba
            </a>
          </span>
        </p>
      </article>
      <div className="sm:col-span-2 col-span-6">
        <img
          src={myself}
          alt="Myself"
          className="w-4/3 h-full ml-auto rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
