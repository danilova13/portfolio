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
		
	<div>
    	{projects.map(project => (
			<div className="snap-start w-screen h-screen flex items-center justify-center bg-gradient-to-br from-orange-200 to-gray-200" > 
				<div className="grid grid-cols-2 gap-4">
					<div className="flex-1 text-center"> 
						<div key={project._id}>
							{project.images.map((image, i) =>(
								<img key={image} className="w-auto h-56 mb-5 ml-10" src={project.images[i]} alt="image"/>
							))}

						</div>
					</div>
					<div className="flex-1 text-center">
						<div className="px-7 py-4 mb-5 mr-5">
							<div className="font-bold text-pink-800 text-2xl mb-5">{project.title}</div>
							<p className="text-gray-700 text-base">{project.description}</p>
						</div>
						<div className="px-6 py-4 mt-5">
							<div className="font-semibold text-pink-800 text-base mb-4">Technologies used</div>
							{project.technologies.map(tech => (
								<span key={tech} className="inline-block bg-gray-400 rounded-full px-3 py-5 text-sm font-semibold text-gray-700 mr-2">
									{tech}
								</span>
							))}
						</div>
						<div className="px-6 py-4">
							<br /> 
								<a href={project.link} target="_blank" rel="noreferrer" className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white ml-2">
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