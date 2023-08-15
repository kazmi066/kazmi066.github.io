import React from 'react'
import { projects } from '../../data/projects';
import Title from '../../Elements/Title'
import { ProjectCard } from '../ProjectCard';
import 'react-tabs/style/react-tabs.css';

export default function Projects() {
	const renderProjects = (category) => {
		return (
			projects.map((project) => (
				project.category === category
				&& <React.Fragment key={project.id}>
					<ProjectCard project={project} />
				</React.Fragment>
			))
		)
	}

	return (
		<section className="pt-12">
			<Title title="Projects" />
			<div className="sm:columns-2 columns-auto gap-4 mt-10">
				{renderProjects('react')}
				{renderProjects('next')}
			</div>
		</section>
	)
}
