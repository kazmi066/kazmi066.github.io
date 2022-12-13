import React, { useRef } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Title from '../../Elements/Title'
import { ProjectCard } from '../ProjectCard';
import 'react-tabs/style/react-tabs.css';

export default function Projects() {
	const ref = useRef();

	const projects = [
		{
			id: 2,
			basicTitle: 'Ledger',
			hoveredTitle: 'Ledger',
			description: 'A fiverr client project dealing with blockchain, built with Next and Tailwind.',
			link: 'https://ledger-design.netlify.app',
			backgroundImg: 'https://media.giphy.com/media/gBxL0G0DqZd84/giphy.gif',
			category: 'next'
		},
		{
			id: 3,
			basicTitle: 'Febeth',
			hoveredTitle: 'Febeth Tokens',
			description: 'A frontend project for client regarding blockchain tokens, built with Next and Tailwind.',
			link: 'https://febeth-redesign.netlify.app',
			backgroundImg: 'https://media.giphy.com/media/8LpEhnKQ4olb2/giphy.gif',
			category: 'next'
		},
		{
			id: 4,
			basicTitle: 'Shroombits',
			hoveredTitle: 'Shroombits',
			description: 'A frontend project for a fiverr client regarding NFTs, built with React and Tailwind.',
			link: 'https://shroombits-102471.netlify.app',
			backgroundImg: 'https://media.giphy.com/media/VeevaQ0W85jzy/giphy.gif',
			category: 'react'
		},
		{
			id: 1,
			basicTitle: 'Unsplash Clone',
			hoveredTitle: 'Unsplash-clone',
			description: 'Responsive images gallery website built with React and Tailwind.',
			link: 'https://unsplash-clone-d3.netlify.app/',
			backgroundImg: 'https://media.giphy.com/media/11y9UBjLh2Rs40/giphy.gif',
			category: 'react'
		}
	]

  return (
	<section className="pt-12">
		<Title title="Projects" />
		<Tabs className="mt-10">
			<TabList className="border-b-[1px] border-gray-600">
				<Tab>React.js</Tab>
				<Tab>Next.js</Tab>
			</TabList>
			<TabPanel className="mt-8">
				<div className="flex overflow-scroll gap-4 items-center" ref={ref}>
					{
						projects.map((project) => (
							project.category === 'react'
							&& <React.Fragment key={project.id}>
								<ProjectCard project={project} />
							</React.Fragment>
						))
					}
				</div>
			</TabPanel>
			<TabPanel className="mt-8">
			<div className="flex overflow-scroll gap-4 items-center" ref={ref}>
					{
						projects.map((project) => (
							project.category === 'next'
							&& <React.Fragment key={project.id}>
								<ProjectCard project={project} />
							</React.Fragment>
						))
					}
				</div>
			</TabPanel>
		</Tabs>
	</section>
  )
}
