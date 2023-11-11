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
		<div key={project.id} className="text-white">
			<div className="bg-[#1c1919] rounded-md grid grid-cols-6 gap-4 border-[0.1px] border-[#565656] relative inline-block overflow-hidden mb-4 p-4 w-full rounded-lgx">
				<div className="sm:col-span-4 col-span-6">
					<div className="flex items-center gap-2 pb-3">
						<h4 className="font-bold leading-tight font-bold">
							{project.basicTitle}
						</h4>
						<div className="flex items-center gap-2">
							<AnchorWrapper url={project.githubUrl}>
								<i className="fa-brands fa-github"></i>
							</AnchorWrapper>
							<AnchorWrapper url={project.link}>
								<i className="fa-solid fa-arrow-up-right-from-square"></i>
							</AnchorWrapper>
						</div>
					</div>
					<p className="mb-4 text-sm font-normal">
						{project.description}
					</p>
					<p className="text-[16px] capitalize"><span className="normal-case text-[#afafaf] font-medium">Made using:</span> {
						project.stack?.map((p, index) => `${p}${index === project.stack.length - 1 ? '' : ', '}`)
					}</p>
				</div>
				<img src={project.picture} alt="Project pic" width={300} className="rounded-lg sm:col-span-2 col-span-6" />
			</div>
		</div>
	)
}
