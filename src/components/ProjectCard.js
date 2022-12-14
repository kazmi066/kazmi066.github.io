export const ProjectCard = ({ project }) => {
  return (
    <div key={project.id} className="text-white">
        <div style={{ backgroundImage: `url(${project.backgroundImg})` }} className={`relative inline-block overflow-hidden mb-4 sm:h-72 h-auto w-full px-4 rounded-xl bg-no-repeat bg-cover`}>
            <h4 className="font-bold pt-4 leading-tight pb-2">
                {project.basicTitle}
            </h4>
            <p className="mb-4 text-sm">
                {project.description}
            </p>
            <a className="absolute bottom-4 right-4" href={project.link} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid bg-white text-black p-2 rounded-full fa-arrow-up-right-from-square"></i>
            </a>
        </div>
    </div>
  )
}
