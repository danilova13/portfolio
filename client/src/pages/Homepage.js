import myPhoto from '../images/homepage-photo.jpg';
const Homepage = () => {
	return (  
		<div>
			<div className="snap-start w-screen h-screen flex flex-wrap items-center justify-center bg-amber-100">
				<div className="flex-1">
					<img className="max-w-xs rounded-full mx-auto" src={ myPhoto } alt="Photo"/>
				</div>
				<div className="flex-1 text-center">
					<div>
						<div className="text-8xl"> Hello! </div>
						<div className="text-2xl">I am Anya, welcome to my portfolio. </div> 
					</div>
				</div>
			</div>
			<div className="snap-start w-screen h-screen flex items-center justify-center text-8xl bg-blue-200">Technologies</div>
			<div className="snap-start w-screen h-screen flex items-center justify-center text-8xl bg-gray-200">Projects</div>
			<div className="snap-start w-screen h-screen flex items-center justify-center text-8xl bg-pink-200">Contact me</div>
		</div>
	);

}
export default Homepage;
