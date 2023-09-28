// ProjectCard.jsx

export default function ProjectCard({ project }) {
	return (
		<div className='bg-white p-5 rounded-lg shadow-md'>
			<h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
			<p>{project.description}</p>

			<a
				href={project.url}
				className='inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
			>
				Visit Site
			</a>
		</div>
	);
}
