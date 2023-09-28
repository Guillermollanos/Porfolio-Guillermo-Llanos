// Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';

function Footer() {
	return (
		<footer className='bg-gray-800 py-10 mt-10 text-center text-white'>
			<a
				href='https://www.linkedin.com/in/guillermollanosp/'
				className='text-blue-500 hover:text-blue-300'
			>
				<FaLinkedin className='inline-block mx-4 text-2xl' />
			</a>
			<a
				href='https://github.com/Guillermollanos'
				className='text-gray-300 hover:text-gray-100'
			>
				<FaGithub className='inline-block mx-4 text-2xl' />
			</a>

			<a
				href='mailto:guillermo@gmail.com'
				className='text-gray-300 hover:text-gray-100'
			>
				<FaEnvelope className='inline-block mx-2' />
				guillermo@gmail.com
			</a>
			<a
				href='../pdf/CV - Guillermo  Llanos - 06.2023.pdf'
				download
				className='text-gray-300 hover:text-gray-100'
			>
				<FaFilePdf className='inline-block mx-2' />
				Download CV
			</a>
		</footer>
	);
}

export default Footer;
