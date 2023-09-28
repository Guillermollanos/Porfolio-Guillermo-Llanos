// ProjectsSection.js
import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsSection({ projects }) {
	return (
		<main className='max-w-3xl mx-auto mt-10'>
			<h2 className='text-2xl text-center font-bold mb-8 text-yellow-500'>
				Projects
			</h2>

			<div className='flex flex-wrap justify-center gap-4'>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</main>
	);
}

export default ProjectsSection;
