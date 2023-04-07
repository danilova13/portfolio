import { useState, useEffect } from "react";


const Projects = () => {

	const [ projects, setProjects ] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:8000/api/projects`)
			.then(res => res.json())
			.then(data => setProjects(prev => data))
			.catch(err => console.log(err))
			
	}, [])

	return ( 
		
	<div className="gird grid-cols-2 gap-4">
    	{projects.map(project => (
			<div className="snap-start w-screen h-screen flex items-center justify-center bg-gray-200">
				<div className="flex-1 text-center"> 
					<div key={project._id}>
						<img className="w-full h-56 object-cover" src={project.images[0]} alt="image"/>
					</div>
				<div className="flex-1 text-center">
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">{project.title}</div>
						<p className="text-gray-700 text-base">{project.description}</p>
					</div>
					<div className="px-6 py-4">
						{project.technologies.map(tech => (
							<span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-5 text-sm font-semibold text-gray-700 mr-2">
								{tech}
							</span>
						))}
						<br /> 
							<a href={project.link} target="_blank" rel="noreferrer" className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white ml-2">
							View Project
							</a>
					</div>
				</div>
				</div>
			</div>
		))}
    
	</div>
	 );
}
 
export default Projects;