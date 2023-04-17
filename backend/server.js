const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = 8000;
const projectsRoute = require('./routes/projectRoutes');
const cvRoute = require('./routes/cvRoutes');
const aboutRoute = require('./routes/aboutRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendGrid = require('@sendGrid/mail');

connectDB();

sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

console.log('API KEY', process.env.SENDGRID_API_KEY);


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.get('/api', (req, res) =>  {
	res.send('API status: running');
});

app.post('/api/email', (req, res) => {
	const { name, message, email } = req.body;

	const emailMessage = `
	New Email From : ${name} ${email} ${message}
	`

	const msg = {
		to: 'anyadanilova13@gmail.com',
		from: 'anyadanilova13@gmail.com',
		subject: 'Website Contact',
		text: emailMessage
	}

	sendGrid.send(msg)
		.then(result => {

			res.status(200).json({
				success:true
			})

		})
		.catch(err => {
			console.log('error: ', err);
			res.status(401).json({
				success: false
			})
		})
})

app.use('/images', express.static('photos'));

app.get('/', (req, res) => {
	res.download('./resume.pdf')
})

//middleware to take the body of request and parses it into json object
app.use(express.json());

app.use('/api/projects', projectsRoute);

app.use('/api/cv', cvRoute);

app.use('/api/about', aboutRoute);

//overwrites the default error handler
app.use(errorHandler);

app.listen(port, ()=> {
	console.log(`Server started on port ${port}`)
})
