import torontoPhoto from '../images/torontoskyline.png';
import { AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const HomepageContact = () => {
	return ( 

		<div id="contact" className="snap-start w-screen h-screen flex flex-row items-center justify-center bg-pink-50 ">
			<div className="flex-1 text-center pl-3">
				<img className="max-w-xs rounded-full mx-auto" src={torontoPhoto} alt="Toronto" className="h-full object-cover"/>
			</div>

			<div className="flex-1">
				<div className="flex flex-col items-center justify-center">
          			<h1 className="text-3xl font-bold mb-6  text-pink-800">Contact Me</h1>
					<div className="text-gray-700 text-lg">
						<p className="flex items-center">
							<AiOutlinePhone size={30} className="mr-5"/> 416-899-0465</p>
						<p className="flex items-center"> 
							<AiOutlineMail size={30} className="mr-5"/> anyadanilova13@gmail.com</p>
						<p className="flex items-center"> 
							<AiFillLinkedin size={30} className="mr-5"/> 
								<a href="https://www.linkedin.com/in/anna-danilova-3375622a9/" target="_blank" class="hover:text-pink-800">Linkedin</a></p>
						<br />
					</div>
					
				</div>
			</div>
			
			
		 </div>

	 );
}
 
export default HomepageContact;