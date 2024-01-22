import Technologies from '../components/technologies';
import myPhoto from '../images/homepage-photo.jpg';
import HomepageProjects from '../components/HomepageProjects';
import HomepageContact from '../components/HomepageContact';
import Experience from '../components/Experience';
import resume from '../images/CV_AnnaDanilova.pdf';
import fileSaver from "file-saver";
import { BASE_API_URL } from '../constants';
import Education from '../components/Education';


const Homepage = () => {
	const download =(e) => {
		fetch(`${BASE_API_URL}/api/cv/download`, {
			method: "GET",
			responseType: "blob"
		})
		.then((res) => {
			//check if response is valid
			if (!res.ok){
				throw new Error(`HTTP error! status: ${res.status}`)
			}
			return res.blob();
		})
		.then((blob) => {
			//use file-saver library to save the file
			fileSaver.saveAs(blob, "resume.pdf");
		})
		.catch((error) => {
			console.log("Error fetching file:", error);
		})

	}

	return (  
		<div>
			<div className="snap-start w-screen h-screen flex flex-wrap items-center justify-center bg-amber-100">
				<div className="flex-1">
					<img className="max-w-xs rounded-full mx-auto" src={ myPhoto } alt="Photo"/>
				</div>
				<div className="flex-1 text-center">
					<div>
						<div className="text-[#5E565A] font-medium text-8xl mr-5"> Hello! </div> < br /> 
						<div className="text-[#5E565A] font-medium text-2xl mr-20">
							I am Anya, an aspiring software engineer. <br />
							Welcome to my portfolio! 
						</div> 
					</div>
					<div className="pl-20 pt-10 pr-20"> 
						<button 
							onClick={(e) => download(e)}
							className="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white ml-2">
							Download Resume 
						</button>
					</div>
				</div>
			</div>

			<Technologies />

			<Experience />

			<HomepageProjects />

			<Education />

			<HomepageContact />
		</div>
	);

}
export default Homepage;
