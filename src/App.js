import { useState } from 'react';
import Footer from './component/Footer';
import ProjectsSection from './component/ProjectsSection';
import SkillsSection from './component/SkillsSection';
import AboutMeSection from './component/AboutMeSection';

function Portfolio() {
	const [projects] = useState([
		{
			name: 'Project 1',
			description: 'Ecommerce site',
			url: 'https://project1.com',
		},
		{
			name: 'Project 2',
			description: 'Social media app',
			url: 'https://project2.com',
		},
	]);

	return (
		<div className='bg-gray-200 text-gray-600 py-10'>
			<AboutMeSection />
			<SkillsSection />

			{/* Contenido de proyectos */}
			<ProjectsSection projects={projects} />

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default Portfolio;
