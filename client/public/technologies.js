import jsIcon from '../images/icons8-javascript-48.png';
import reactIcon from '../images/icons8-react-50.png';
import javaIcon from '../images/icons8-java-48.png';
import springBootIcon from '../images/icons8-spring-boot-48.png';
import html5Icon from '../images/icons8-html-5-48.png';
import css3Icon from '../images/icons8-css3-48.png';
import tailwindCssIcon from '../images/icons8-tailwind-css-48.png';
import materialUiIcon from '../images/icons8-material-ui-48.png';
import mySQLIcon from '../images/icons8-mysql-logo-48.png';
import mongodbIcon from '../images/icons8-mongodb-48.png';


const Technologies = () => {
	
	return ( 
		<div className="snap-start w-screen h-screen flex flex-wrap items-center justify-center bg-blue-200">
			<div className="flex-1 text-center">
				<div className="text-5xl"> Technologies </div>
			</div> 
			<div className="flex-1 text-center">
				<div className="text-2xl"> My tech tools </div>
				<br /> 
				<div className="grid grid-cols-5 gap-2 text-center"> 
					<div className='relative'>
						<img src={ jsIcon } alt="JavaScript"/>	
						<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"> 
							<span className="bg-gray-500 text-white rounded-lg py-1 px-3 text-sm">JavaScript</span>
						</div>
					</div>
					<div className='relative'>
						<img src={ reactIcon } alt="React"/>	
						<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"> 
							<span className="bg-gray-500 text-white rounded-lg py-1 px-3 text-sm">React</span>
						</div>
					</div>
					<div className='relative'>
						<img src={ javaIcon } alt="Java"/>	
						<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"> 
							<span className="bg-gray-500 text-white rounded-lg py-1 px-3 text-sm">Java</span>
						</div>
					</div>
					<div className='relative'>
						<img src={ springBootIcon } alt="SpringBoot"/>	
						<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"> 
							<span className="bg-gray-500 text-white rounded-lg py-1 px-3 text-sm">Spring Boot</span>
						</div>
					</div>
					<div className='relative'>
						<img src={ html5Icon } alt="HTML-5"/>
						<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"> 
							<span className="bg-gray-500 text-white rounded-lg py-1 px-3 text-sm">HTML-5</span>
						</div>
					</div>
					<div className='relative'>		
						<img src={ css3Icon } alt="CSS-3"/>
						<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"> 
							<span className="bg-gray-500 text-white rounded-lg py-1 px-3 text-sm">CSS-3</span>
						</div>
					</div>
					<div className='relative'>		
						<img src={ tailwindCssIcon } alt="TailwindCSS"/> 
						<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"> 
							<span className="bg-gray-500 text-white rounded-lg py-1 px-3 text-sm">Tailwindcss </span>
						</div>
					</div>
					<div className='relative'>		
						<img src={ materialUiIcon } alt="MaterialUI"/>
						<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"> 
							<span className="bg-gray-500 text-white rounded-lg py-1 px-3 text-sm">Material-UI</span>
						</div>
					</div>
					<div className='relative'>		
						<img src={ mySQLIcon } alt="mySQL"/>
						<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"> 
							<span className="bg-gray-500 text-white rounded-lg py-1 px-3 text-sm">MySQL</span>
						</div>
					</div>
					<div className='relative'>		
						<img src={ mongodbIcon } alt="Mongodb"/>
						<div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"> 
							<span className="bg-gray-500 text-white rounded-lg py-1 px-3 text-sm">MongoDb</span>
						</div>
					</div>

				</div>	
			</div> 
		</div>

	 );
}
 
export default Technologies ;