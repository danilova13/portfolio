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

connectDB();

const app = express();

app.use(cors());

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
