import graduateImage from '../images/gradcap.png';

const Education = () => {
	return ( 
		<div id="education" className="snap-start w-screen h-screen flex flex-wrap items-center justify-center bg-purple-50">
			<div className="flex-1 text-center">
				<div className=" text-pink-800 font-bold text-4xl">Education</div>
				<br />
				<div className='mr-10 ml-10'>
					<img className="max-w-xs rounded-full mx-auto" src={graduateImage} alt="Computer" />
				</div>
			</div> 
		
			<div className="flex-1 text-center m-5">
				<div className="flex-1 text-left mb-7 text-lg">
					<strong>Bachelor of Computer Science,</strong> <i>Algoma University (2022 - 2023)</i>  
				</div>
				<div className="flex-1 text-left mb-7 text-lg">
					<strong>MD Program,</strong> <i>Saba University School of Medicine (2020 - 2022)</i>
				</div>
				<div className="flex-1 text-left mb-7 text-lg">
					<strong>Honors Bachelor of Science,</strong> <i>Biomedical Science, York University (2015 - 2019)</i> 
				</div>
					<br /> 
				</div> 
		</div>
	 );
}
 
export default Education;