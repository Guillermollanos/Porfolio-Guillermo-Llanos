// AboutMeSection.js
import React from 'react';
import fotoPerfil from '../img/guillermo-perfil.jpg';

function AboutMeSection() {
	return (
		<div className='max-w-3xl mx-auto mt-10 text-center'>
			{/* Breve descripción */}
			<p className='text-lg text-gray-600 mb-4'>
				Full-Stack Developer | Web Enthusiast | Passionate About Creating
				Amazing Digital Experiences
			</p>

			<img
				src={fotoPerfil}
				alt='Profile'
				className='w-32 h-32 rounded-full mx-auto mx-auto shadow-lg'
			/>
			<h1 className='text-3xl font-bold mt-4 mb-2 text-yellow-500'>
				Guillermo Llanos
			</h1>

			<p className='mt-4 text-gray-600'>
				I'm a full-stack developer with 5+ years of experience...
			</p>
		</div>
	);
}

export default AboutMeSection;
