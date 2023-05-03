import torontoPhoto from '../images/torontoskyline.png';
import { AiFillLinkedin, AiFillInstagram, AiFillFacebook, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const HomepageContact = () => {
	return ( 

		<div className="snap-start w-screen h-screen flex flex-row items-center justify-center bg-pink-50 ">
			<div className="flex-1 text-center pl-3">
				<img src={torontoPhoto} alt="Toronto" className="h-full object-cover"/>
			</div>

			<div className="flex-1">
				<div className="flex flex-col items-center justify-center">
          			<h1 className="text-3xl font-bold mb-6  text-pink-800">Contact Me</h1>
					<div className="text-gray-700 text-lg">
						<p className="flex items-center">
						<AiOutlinePhone size={30} className="mr-5"/> 416-899-0465</p>
						<p className="flex items-center"> 
							<AiOutlineMail size={30} className="mr-5"/> anyadanilova13@gmail.com</p>
						<br />
					</div>
					<div className="text-gray-700 text-base flex justify-around">
						<AiFillFacebook size={30} className="mr-5"/>
						<AiFillInstagram size={30} className="mr-5"/>
						<AiFillLinkedin size={30} className="mr-5" />
					</div>
				</div>
			</div>
			
			
		 </div>

	 );
}
 
export default HomepageContact;