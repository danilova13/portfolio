
const express = require('express');
const dotenv = require('dotenv').config();
const port = 8000;
const projectsRoute = require('./routes/projectRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

//middleware to take the body of request and parses it into json object
app.use(express.json());

app.use('/api/projects', projectsRoute);

//overwrites the default error handler
app.use(errorHandler);

app.listen(port, ()=> {
	console.log(`Server started on port ${port}`)
})
