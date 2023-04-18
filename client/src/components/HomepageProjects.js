import { AiFillGithub } from 'react-icons/ai';
import react from 'react'; 
import project1Image from '../images/project1.png';
import project2Image from '../images/project2.png';

const HomepageProjects = () => {
	
	return ( 

	<div className="snap-start w-screen md:h-screen items-center justify-center bg-gray-200">
		
		<div className="px-6 py-4">
			<h1 className="text-gray-700 font-bold text-3xl"> My Projects </h1>
		</div>

		<div className="flex flex-wrap justify-center">
			<div className="flex-none w-80 rounded shadow-lg m-5">
				<img className="w-full" src={project2Image} alt="Project1" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 text-pink-800">CEMS</div>
					<p className="text-gray-700 text-base">
					CEMS project: Club and Event Management Software for students
					</p>
					<div className='pt-6'>
						<a href="https://github.com/danilova13/CEMS" target="_blank">
							<AiFillGithub size={30} />
						</a>
					</div>
				</div>
			</div>

			<div className="flex-none w-80 rounded shadow-lg m-5">
				<img className="w-full" src={project1Image} alt="Project" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 text-pink-800">Portfolio</div>
					<p className="text-gray-700 text-base">
					Personal portfolio showcasing my projects 
					</p>
					<div className='pt-6'>
						<a href="https://github.com/danilova13/portfolio" target="_blank">
							<AiFillGithub size={30} />
						</a>
					</div>
						
				</div>
			</div>
		</div>
	
	</div>
		
	 );
}
 
export default HomepageProjects;