import React, { useRef } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { projects } from '../../data/projects';
import Title from '../../Elements/Title'
import { ProjectCard } from '../ProjectCard';
import 'react-tabs/style/react-tabs.css';

export default function Projects() {
	const ref = useRef();

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
			<Tabs className="mt-10">
				<TabList className="border-b-[1px] border-gray-600">
					<Tab>React.js</Tab>
					<Tab>Next.js</Tab>
				</TabList>
				<TabPanel className="mt-8 ">
					<div className="overflow-hidden sm:columns-2 columns-auto gap-4" ref={ref}>
						{renderProjects('react')}
					</div>
				</TabPanel>
				<TabPanel className="mt-8">
					<div className="overflow-hidden sm:columns-2 columns-auto gap-4" ref={ref}>
						{renderProjects('next')}
					</div>
				</TabPanel>
			</Tabs>
		</section>
	)
}
