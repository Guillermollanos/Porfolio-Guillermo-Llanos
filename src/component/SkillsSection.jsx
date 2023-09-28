// SkillsSection.js
import React from 'react';

function SkillsSection() {
	return (
		<header className='flex flex-wrap justify-center mt-8'>
			<div className='w-1/4 pr-5'>
				<h2 className='text-xl font-bold mt-10 text-yellow-500'>Frontend</h2>
				<ul className='list-disc list-inside'>
					<li>🎮 HTML</li>
					<li>🎮 CSS</li>
					<li>🎮 JavaScript</li>
					<li>🎮 React</li>
					<li>🎮 Redux</li>
					<li>🎮 Bootstrap</li>
					<li>🎮 Tailwind CSS</li>
				</ul>
			</div>
			<div className='w-1/4 px-4'>
				<h2 className='text-xl font-bold mt-10 text-yellow-500'>Backend</h2>
				<ul className='list-disc list-inside'>
					<li>🕹️ Node.js</li>
					<li>🕹️ Express</li>
					<li>🕹️ SQL</li>
					<li>🕹️ PostgreSQL</li>
					<li>🕹️ MongoDB</li>
					<li>🕹️ REST API</li>
				</ul>
			</div>
			<div className='w-1/4 pl-4'>
				<h2 className='text-xl font-bold mt-10 text-yellow-500'>
					Agile Methodologies
				</h2>
				<ul className='list-disc list-inside'>
					<li>🚀 Git</li>
					<li>🚀 GitHub</li>
					<li>🚀 Scrum</li>
					<li>🚀 Jira</li>
					<li>🚀 Trello</li>
				</ul>
			</div>
		</header>
	);
}

export default SkillsSection;
