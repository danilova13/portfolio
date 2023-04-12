import { useState, useEffect } from 'react';


const About = () => {
	
	const [ about, setAbout ] = useState({
		activity1:[],
		activity2:[],
	});

	useEffect(() => {
		fetch(`http://localhost:8000/api/about`)
			.then(res => res.json())
			.then(data => setAbout(prev => data))
			.catch(err => console.log(err))
	}, [])

	return ( 
	<div >
		{/* <div className="px-6 py-4">
			<h1 className="text-pink-800 font-bold text-3xl">Things I Love...</h1>
		</div> */}
		{about.activity1.map(activity1 => (
			<div 
				key={activity1._id}
				className="snap-start w-screen h-screen flex items-center justify-center bg-gradient-to-br from-orange-200 to-gray-200" >
				<div className="grid grid-cols-1 gap-4">
					<div className="flex-1 text-center">
						<div>
							{activity1.images.map(image => (
								<img key={image} 
								className="w-auto h-56 mb-5 ml-10" 
								src={image} 
								alt="image"/>
							))}
						</div>
					</div>
				</div>

				<div 
					key={activity1._id} 
					className="px-7 py-4 mb-5 mr-5"
				>
					<div className="flex-1 text-center m-5">
						<div className="font-bold text-pink-800 text-2xl mb-5">
								{activity1.name}
						</div>
						<p className="text-gray-700 text-base p-5">{activity1.description}</p>
						<p className="text-gray-700 text-base p-5">
							<ul>
								{activity1.items.map(item => (
									<li key={item} className="list-disc list-inside">
										{item}
									</li>
								))}
							</ul>
						</p>
					</div>
				</div>

			</div>
		))}

		<div className="snap-start w-screen h-screen flex flex-wrap flex-col items-center justify-center bg-gradient-to-br from-orange-200 to-gray-200" >
			<div className="px-6 py-4">
				<h1 className="text-pink-900 font-bold text-3xl"> and more ...</h1>
			</div>
			
				{about.activity2.map(activity2 => (
					<div key={activity2._id} className="flex justify-center flex-wrap max-w-sm">
						<div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
								<img key={activity2.images} 
								className="w-full"
								src={activity2.images}
								alt="image"
								/>
								<div className="px-6 py-4">
									<div className="text-pink-800 font-bold text-xl mb-2">{activity2.name}</div>
									<p className="text-gray-700 text-base">{activity2.description}</p>
								</div>
						</div>
					</div>
				))}
		</div>
	</div>
);
}
 
export default About;