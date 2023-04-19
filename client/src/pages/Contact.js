import { useState } from 'react';
import { BASE_API_URL } from '../constants';

const Contact = () => {

	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ errorMsg, setErrorMsg ] = useState('');
	const [ successMsg, setSuccessMsg ] = useState('');
	

	const sendEmail = (e) => {
		e.preventDefault();
		const sender = { name, email, message };
		setErrorMsg('');
		setSuccessMsg('');

		fetch(`${BASE_API_URL}/api/email`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(sender)
		})
		.then((res) => {
			if (res.ok) {

				//clear the form
				setName('');
				setEmail('');
				setMessage('');

				setSuccessMsg('The form was submitted successfully');

				return res.json();
			}
			throw new Error("Form was not submitted");
		})
		.catch((err) => {
			setErrorMsg('Form was not submitted');
		})
	};

	return ( 
		<div className="snap-start w-screen h-screen flex flex-wrap items-center justify-center bg-gradient-to-br from-orange-200 to-gray-200">
			
			<div className="w-full max-w-md"> 
				<div className="mb-4 text-center">	
					<h1 className="text-2xl font-bold mb-4 text-pink-800">Send me a message</h1>
				</div>
				<form className="bg-orange-100 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={sendEmail}>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
						<input className="shadow appearance-none border rounded w-full 
											py-2 px-3 text-gray-700 leading-tight 
											focus:outline-none focus:shadow-outline" type="text" name="user_name"
											value={name}
											onChange={(e) => setName(e.target.value)}
								
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
						<input className="shadow appearance-none border rounded w-full 
										py-2 px-3 text-gray-700 leading-tight focus:outline-none 
										focus:shadow-outline" type="email" name="user_email"
										value={ email }
										onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
						<textarea className="shadow appearance-none border rounded w-full 
											py-2 px-3 text-gray-700 leading-tight focus:outline-none 
											focus:shadow-outline h-36 resize-none" name="message"
											value={ message }
											onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					
					<div className="mb-4">
						<button className="bg-pink-700 hover:bg-gray-500 text-white 
										font-smbold py-2 px-4 rounded" 
										type="submit"
						>
							Send
						</button>
						{errorMsg && (<div className="popuptext"><p className="error"> {errorMsg}</p> </div>)}
						{successMsg && (<div className="popuptext"><p className="error"> {successMsg}</p> </div>)}
					</div>
					
				</form>
			</div>
		</div>
	 );
}
 
export default Contact;
