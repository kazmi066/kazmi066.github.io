import { motion } from "framer-motion";
import { useState } from "react";

export const ProjectCard = ({ project }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	const handleMouseEnter = (event) => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (event) => {
    if (isHovered) {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    }
  };

	const imageVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const imageTransition = {
		duration: 0.5,
    ease: 'easeInOut'
  };

	return (
		<div
			key={project.id}
			className="text-white relative"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}>
			<div className={`gradient gradient-${project.id} relative inline-block overflow-hidden mb-4 py-4 sm:h-72 h-auto w-full px-4 rounded-xl bg-no-repeat bg-cover`}>
				<h4 className="font-bold leading-tight pb-2">
						{project.basicTitle}
				</h4>
				<p className="mb-4 text-sm">
						{project.description}
				</p>
				<p className="capitalize"><b>Stack:</b> {
						project.stack?.map((p, index) => `${p}${index === project.stack.length - 1 ? '' : ', '}`)
				}</p>
				<a className="absolute bottom-4 right-4" href={project.link} target="_blank" rel="noopener noreferrer">
						<i className="fa-solid bg-white text-black p-2 rounded-full fa-arrow-up-right-from-square"></i>
				</a>
			</div>
			{isHovered && (
				<motion.img
					src={project.picture}
					alt="Project Image"
					style={{
						position: 'fixed',
						pointerEvents: 'none',
						left: cursorPosition.x,
						top: cursorPosition.y,
						width: '400px',
						zIndex: 100,
						height: '240px',
					}}
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={imageVariants}
					transition={imageTransition}
				/>
			)}
		</div>
	)
}
