const asyncHandler = require('express-async-handler');

const CV = require('../models/cvModel');

//@desc Get cv
//@route GET /api/cv
const getCV = asyncHandler(async(req, res) => {

	const cv = await CV.find();

	res.status(200).json(cv);
})

//@desc Set cv
//@route POST /api/cv
const setCV = asyncHandler(async(req,res) => {
	if (!req.body) {
		res.status(400);
		throw new Error('Please add json object');
	}

	const education = req.body.education.map(edu => ({
		name: edu.name,
		years_attended: edu.years_attended,
		description: edu.description
	  }));
	
	const experience = req.body.experience.map(exp => ({
		name: exp.name,
		description: exp.description
	  }));
	
	const cv = await CV.create({
		education,
		experience
	  });
	res.status(200).json(cv);
})


//@desc Update cv
//@route PUT /api/cv/:id
const updateCV = asyncHandler(async(req, res) => {

	const cv = await CV.findById(req.params.id);

	if (!cv) {
		res.status(400);
		throw new Error('CV not found');
	}

	const updatedCV = await CV.findByIdAndUpdate(req.params.id, req.body, { new: true});

	res.status(200).json(updatedCV);
})


//@desc Delete cv
//@route DELETE /api/cv/:id
const deleteCV = asyncHandler(async(req, res) => {

	const cv = await CV.findByIdAndRemove(req.params.id);

	if (!cv) {
		res.status(400);
		throw new Error('Project not found')
	}

	// await project.remove();
	res.status(200).json({ id: req.params.id });
})


module.exports = {
	getCV, 
	setCV,
	updateCV,
	deleteCV
}