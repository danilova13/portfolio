const asyncHandler = require('express-async-handler');
//@desc Get projects 
//@route GET /api/projects
//@access public 
const getProjects = asyncHandler(async(req, res) => {
	if (!req.body) {
		res.status(400);
		throw new Error('Please add json object');
	}
	//console.log(req.body);
	res.status(200).json({ message: 'Get projects'});
})


//@desc Set project
//@route POST /api/projects
//@access private
const setProject = asyncHandler(async(req, res) => {
	if (!req.body) {
		res.status(400);
		throw new Error('Please add json object');
	}
	// console.log(req.body);
	res.status(200).json({ message: 'Set Project'});
})


//@desc Update project 
//@route PUT /api/projects/:id
//@access private
const updateProject = asyncHandler(async(req, res) => {
	res.status(200).json({ message: `Update project ${req.params.id}`});
})


//@desc Delete project
//@route DELETE /api/projects/:id
//@access private
const deleteProject = asyncHandler(async(req, res) => {
	res.status(200).json({ message: `Delete project ${req.params.id}`});
})

module.exports = {
	getProjects,
	setProject,
	updateProject,
	deleteProject,
}