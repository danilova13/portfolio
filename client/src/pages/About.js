import { useState, useEffect } from 'react';
import { BASE_API_URL } from '../constants';


const About = () => {
	
	const [ about, setAbout ] = useState({
		activity1:[],
		activity2:[],
	});

	useEffect(() => {
		fetch(`${BASE_API_URL}/api/about`)
			.then(res => res.json())
			.then(data => setAbout(prev => data))
			.catch(err => console.log(err))
	}, [])

	return ( 
	
	<div className="snap-start  bg-amber-100" >
		
		{about.activity1.map(activity1 => (
			<div 
				key={activity1._id}
				className="snap-start w-screen h-screen flex items-center justify-center  bg-amber-50" >
				<div className="grid grid-cols-1 gap-4">
					<div className="flex-1 text-center">
						<div>
							{activity1.images.map(image => (
								<img key={image} 
								className="w-auto h-auto mb-5 mt-10 ml-12 object-cover shadow-xl" 
								src={`${BASE_API_URL}${image}`} 
								alt="image"/>
							))}
						</div>
					</div>
				</div>

				<div 
					key={activity1._id} 
					className="px-7 py-4 mb-5 mr-5"
				>
					<div className="flex-1 text-center mb-20">
						<h1 className="text-pink-800 font-bold text-3xl">Things I Love...</h1>
					</div>

					<div className="flex-1 text-center ml-5">
						<div className="font-bold text-pink-800 text-2xl mb-5">
								{activity1.name}
						</div>
						<p className="text-gray-700 font-semibold text-base p-2 ml-8">{activity1.description}</p>
						<p className="text-gray-700 text-base p-2 ml-8">
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

		<div className="snap-start w-screen h-screen flex flex-wrap flex-col items-center justify-center  bg-amber-50" >
			<div className="px-6 py-4">
				<h1 className="text-pink-900 font-bold text-3xl"> and more ...</h1>
			</div>
			
				{about.activity2.map(activity2 => (
					<div key={activity2._id} className="flex justify-center flex-wrap max-w-sm">
						<div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
								<img key={activity2.images} 
								className="w-full"
								src={`${BASE_API_URL}${activity2.images}`}
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