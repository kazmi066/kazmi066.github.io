import React from 'react'
import { projects } from '../../data/projects';
// import Title from '../../Elements/Title'
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
			<p className="pt-8 text-light">
        Some projects which I made along my way.
      </p>
			<div className="mt-10">
				{renderProjects('react')}
				{renderProjects('next')}
			</div>
		</section>
	)
}
