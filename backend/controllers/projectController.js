const asyncHandler = require('express-async-handler');

const Project = require('../models/projectModel');


//@desc Get projects 
//@route GET /api/projects
//@access public 
const getProjects = asyncHandler(async(req, res) => {
	 //getting projects from the database through mongoose model
	const projects = await Project.find();

	res.status(200).json(projects);
})


//@desc Set project
//@route POST /api/projects
//@access private
const setProject = asyncHandler(async(req, res) => {
	if (!req.body) {
		res.status(400);
		throw new Error('Please add json object');
	}
	
	const project = await Project.create({
		title: req.body.title,
		description: req.body.description,
		images: req.body.images,
		technologies: req.body.technologies,
		link: req.body.link
	})


	res.status(200).json(project);
})


//@desc Update project 
//@route PUT /api/projects/:id
//@access private
const updateProject = asyncHandler(async(req, res) => {

	const project = await Project.findById(req.params.id);

	if (!project) {
		res.status(400);
		throw new Error('Project not found')
	}

	const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true}); 

	res.status(200).json(updatedProject);
})


//@desc Delete project
//@route DELETE /api/projects/:id
//@access private
const deleteProject = asyncHandler(async(req, res) => {

	const project = await Project.findByIdAndRemove(req.params.id);

	if (!project) {
		res.status(400);
		throw new Error('Project not found')
	}

	// await project.remove();

	res.status(200).json({ id: req.params.id });
})

module.exports = {
	getProjects,
	setProject,
	updateProject,
	deleteProject,
}