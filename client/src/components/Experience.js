import workImage from '../images/workfromhome.webp';

const Experience = () => {
	return (
		<div className="snap-start w-screen h-screen flex flex-wrap items-center justify-center bg-purple-50">
		<div className="flex-1 text-center">
			<div className=" text-pink-800 font-bold text-4xl">Experience</div>
			<br />
			<div className='mr-10'>
				<img src={workImage} alt="Computer" />
			</div>
		</div> 
		
		<div className="flex-1 text-center">
		<div className="flex-1 text-left m-10 text-xl">
			<strong><a href='https://www.theagencyre.com/' target='_blank' class="hover:text-pink-800">
				The Agency</a>,</strong>  backend developer intern
		</div>
			<div className="flex-1 text-left m-10">
				<ul class="list-disc space-y-2">
					<li>Worked on graphql APIs using Postgraphile framework </li>
					<li>Developed slug history solution to be able to update slugs and keep track of previous versions</li>
					<li>Implemented github actions for publishing pull requests in a dependant repository on changes to child repository</li>
					<li>Implemented Postgres schema migrations using pg-node-migrate</li>
					<li>Implemented large scale data migrations to update tables in non blocking fashion using batch updates</li>
					<li>Developed integration and unit testing to ensure software quality with jest</li>
					<li>Developed standardized URL construction across the codebase</li>
				</ul>
			</div>
			<br /> 
		</div> 
		</div>

	);
}
 
export default Experience;