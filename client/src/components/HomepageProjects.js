import { AiFillGithub } from 'react-icons/ai';
import react from 'react'; 
import project1Image from '../images/project1.png';
import project2Image from '../images/project2.png';
import project3Image from '../images/project3.jpg';

const HomepageProjects = () => {
	
	return ( 

	<div className="snap-start w-screen md:h-screen items-center justify-center bg-gray-200">
		
		<div className="px-6 py-4 pt-16 text-center">
			<h1 className=" text-pink-800 font-bold text-3xl pt-10"> Projects </h1>
		</div>

		<div className="flex flex-wrap justify-center mt-10 pt-8">
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

			<div className="flex-none w-80 rounded shadow-lg m-5">
				<img className="w-full" src={project3Image} alt="Project" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 text-pink-800">FunDive</div>
					<p className="text-gray-700 text-base">
					A website to log and keep track of the dives
					</p>
					<div className='pt-6'>
						<a href="https://github.com/danilova13/FunDive-Backend" target="_blank">
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