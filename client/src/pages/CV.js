import { useState, useEffect } from "react";
import resume from '../images/CV_AnnaDanilova.pdf';
import fileSaver from "file-saver";


const CV = () => {

	const [ cv, setCV ] = useState({
		education:[],
		experience: [],
	});

	useEffect(() => {
		fetch(`http://localhost:8000/api/cv`)
			.then(res => res.json())
			.then(data => setCV(prev => data))
			.catch(err => console.log(err))
	}, [])

	const download =(e) => {
		fetch(`http://localhost:8000`, {
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
		<div className="snap-start w-screen h-screen items-center justify-left bg-gradient-to-br from-orange-200 to-gray-200" >

			<div className="grid grid-cols-1 pt-20 pl-10">
				<div className="grid grid-cols-1">
					<div className="flex items-center justify-left pl-10 max-h-14">
						<h1 className="text-gray-700 font-semibold text-3xl mr-5">Education</h1>
					</div>
					<div className="flex flex-wrap">
						{cv.education.map((education, i) => (
							<div key={education._id} className="flex-1 max-w-sm rounded shadow-lg m-5">
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2 text-pink-800">
										{cv.education[i].name}
									</div>
									<p className="text-gray-700 text-base">
										{cv.education[i].years_attended}
									</p>
									<p className="text-gray-700 text-base">
										{cv.education[i].description}
									</p>
								</div>
							</div>
						))}	
					</div>
				</div>
				<div className="grid grid-cols-1 gap4">
					<div className="flex items-center justify-left pl-10 max-h-14">
						<h1 className="text-gray-700 font-semibold text-3xl mr-5">Experience</h1>
					</div>
					<div className="flex flex-wrap">
						{cv.experience.map((experience, i) => (
								<div key={experience._id} className="flex-1 max-w-sm rounded shadow-lg m-5">
									<div className="px-6 py-4">
										<div className="font-bold text-xl mb-2 text-pink-800">
											{cv.experience[i].name}
										</div>
										<p className="text-gray-700 text-base">
											{cv.experience[i].description}
										</p>
									</div>
								</div>
							))}	
					</div>
				</div>

			</div>

			{/* <div className="pl-20 pt-10"> 
				<a href={resume} download="Resume"> 
					<button className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white ml-2">
						Download Resume 
					</button>
				</a>
			</div> */}

			<div className="pl-20 pt-10"> 
					<button 
						onClick={(e) => download(e)}
						className="inline-block bg-pink-800 rounded-full px-3 py-1 text-sm font-semibold text-white ml-2">
						Download Resume 
					</button>
			</div>
			
			
			
		</div>
	 );
}
 
export default CV;