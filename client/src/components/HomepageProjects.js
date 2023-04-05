import { AiFillGithub } from 'react-icons/ai';
import react from 'react'; 

const HomepageProjects = () => {
	
	return ( 

	<div className="snap-start w-screen h-screen flex flex-col items-center justify-center bg-gray-200">
		
		<div className="px-6 py-4">
			<h1 className="text-gray-700 font-bold text-3xl"> My Projects </h1>
		</div>

		<div className="flex flex-wrap justify-center">
			<div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
				<img className="w-full" src="https://via.placeholder.com/350x200" alt="Project1" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 text-pink-800">CEMS</div>
					<p className="text-gray-700 text-base">
					Description of CEMS project
					</p>
					<div className='pt-6'>
						<a href="https://github.com/danilova13/CEMS" target="_blank">
							<AiFillGithub size={30} />
						</a>
					</div>
				</div>
			</div>

			<div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
				<img className="w-full" src="https://via.placeholder.com/350x200" alt="Project" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 text-pink-800">Portfolio</div>
					<p className="text-gray-700 text-base">
					Description of portfolio project
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