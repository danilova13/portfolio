import { useState, useEffect } from "react";

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
	  
	return ( 
		<div className="snap-start w-screen h-screen items-center justify-left bg-gradient-to-br from-orange-200 to-gray-200" >

			<div className="grid grid-cols-1 pt-20">
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
		</div>
	 );
}
 
export default CV;