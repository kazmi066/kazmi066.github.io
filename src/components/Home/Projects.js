import React, { useRef, useEffect, useState } from 'react'
import Title from '../../Elements/Title'
import Skeleton from 'react-loading-skeleton'
import useOnScreen from '../../hooks/useOnScreen';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Projects() {
	const ref = useRef();
	const visible = useOnScreen(ref);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (visible) {
			setTimeout(() => {
				setLoaded(true);
			} , 1000);
		}
	}, [visible]);

	const projects = [
		{
			id: 1,
			basicTitle: 'Unsplash-clone',
			hoveredTitle: 'Unsplash-clone',
			description: 'Responsive images gallery website built with React and Tailwind.',
			link: 'https://unsplash-clone-d3.netlify.app/',
			backgroundImg: 'https://media.giphy.com/media/11y9UBjLh2Rs40/giphy.gif'
		},
		{
			id: 2,
			basicTitle: 'Ledger',
			hoveredTitle: 'Ledger',
			description: 'A fiverr client project dealing with blockchain, built with Next and Tailwind.',
			link: 'https://ledger-design.netlify.app',
			backgroundImg: 'https://media.giphy.com/media/gBxL0G0DqZd84/giphy.gif'
		},
		{
			id: 3,
			basicTitle: 'Febeth',
			hoveredTitle: 'Febeth Tokens',
			description: 'A frontend project for client regarding blockchain tokens, built with Next and Tailwind.',
			link: 'https://febeth-redesign.netlify.app',
			backgroundImg: 'https://media.giphy.com/media/8LpEhnKQ4olb2/giphy.gif'
		},
		{
			id: 4,
			basicTitle: 'Shroombits',
			hoveredTitle: 'Shroombits',
			description: 'A frontend project for a fiverr client regarding NFTs, built with React and Tailwind.',
			link: 'https://shroombits-102471.netlify.app',
			backgroundImg: 'https://media.giphy.com/media/VeevaQ0W85jzy/giphy.gif'
		}
	]

  return (
	<section className="pt-12">
		<Title title="Projects" />
		<div className="md:flex block gap-4 md:mt-8 mt-4 items-center" ref={ref}>
			{
				projects.map((project) => (
					<div key={project.id} className="text-white">
						<div style={{ backgroundImage: `url(${project.backgroundImg})` }} className={`relative md:inline-block hidden overflow-hidden group sm:mb-0 mb-4 w-24 h-52 transition-all duration-300 ease-in hover:w-64 px-4 rounded-xl`}>
							<div className="md:contents hidden">
								<h4 className="absolute top-[60%] w-64 -right-[50px] font-bold rotate-90 group-hover:hidden text-bordered">{project.basicTitle}</h4>
								<h4 className="relative z-10 invisible font-bold pt-4 leading-tight pb-2 transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible delay-300">
									{project.hoveredTitle}
								</h4>
								<p className="relative z-10 mb-4 text-sm invisible transition-opacity delay-300 opacity-0 group-hover:opacity-100 group-hover:visible">
									{project.description}
								</p>
								<a className="absolute bottom-4 right-4 invisible transition-opacity delay-300 opacity-0 group-hover:opacity-100 group-hover:visible" href={project.link} target="_blank" rel="noopener noreferrer">
									<i className="fa-solid bg-white text-black p-2 rounded-full fa-arrow-up-right-from-square"></i>
								</a>
							</div>
						</div>
						<div className="md:hidden text-black">
							<h4 className="font-bold pt-8 leading-tight pb-2">
								{
									loaded ? (
										project.hoveredTitle
									) : (
										<Skeleton width={300} height={20} baseColor="#dcdcdc" highlightColor="#ffffff" />
									)
								}
							</h4>
							<p className="text-sm mb-3">
								{
									loaded ? (
										project.description
									) : (
										<Skeleton width={200} height={10} baseColor="#dcdcdc" highlightColor="#ffffff" />
									)
								}
							</p>
							{
								loaded ? (
									<a className="text-sm group w-auto bg-black text-white rounded-md py-2 px-2 transition-colors" href={project.link} target="_blank" rel="noopener noreferrer">
										Demo <i className="fa-solid text-white p-2 rounded-full fa-arrow-up-right-from-square"></i>
									</a>
								) : (
									<Skeleton width={100} height={20} baseColor="#dcdcdc" highlightColor="#ffffff" />
								)
							}
						</div>
					</div>
				))
			}
		</div>
	</section>
  )
}
