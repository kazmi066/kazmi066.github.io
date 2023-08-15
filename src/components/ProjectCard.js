const AnchorWrapper = ({ url, children }) => {
	return url && (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer">
			{children}
		</a>
	)
}

export const ProjectCard = ({ project }) => {
	return (
		<div key={project.id} className="text-white relative group">
			<div className={`gradient gradient-${project.id} relative inline-block overflow-hidden mb-4 py-4 w-full px-4 rounded-xl bg-no-repeat bg-cover`}>
				<div className="project-card-overlay" />
				{
					project.major
					&& <div className="absolute top-2 right-2 bg-[#374bde] border-[1px] px-4 py-2 text-[14px] rounded-xl">
							Major
						</div>
				}
				<img src={project.picture} alt="Project pic" className="rounded-lg mb-6" />
				<h4 className="font-bold leading-tight pb-2 text-light">
						{project.basicTitle}
				</h4>
				<p className="mb-4 text-sm text-light">
						{project.description}
				</p>
				<p className="capitalize text-sm"><span className="text-[16px] font-medium">Stack:</span> {
						project.stack?.map((p, index) => `${p}${index === project.stack.length - 1 ? '' : ', '}`)
				}</p>
				<div className="absolute bottom-4 right-4 group-hover:opacity-100 opacity-0 transition-opacity">
					<div className="flex items-center gap-2">
						<AnchorWrapper url={project.githubUrl}>
							<i className="fa-brands fa-github bg-white text-black p-2 rounded-full"></i>
						</AnchorWrapper>
						<AnchorWrapper url={project.link}>
							<i className="fa-solid bg-white text-black p-2 rounded-full fa-arrow-up-right-from-square"></i>
						</AnchorWrapper>
					</div>
				</div>
			</div>
		</div>
	)
}
