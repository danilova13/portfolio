const asyncHandler = require('express-async-handler');

const About = require('../models/aboutModel');

//get about
//@route GET /api/about
const getAbout = asyncHandler(async(req, res) => {

	const about = await About.find();

	res.status(200).json(about[0]);
})

//set about
//@route POST /api/about
const setAbout = asyncHandler(async(req, res) => {
	if(!req.body) {
		res.status(400);
		throw new Error('Please add json object');
	}

	const activity1 = req.body.activity1.map(activity1 => ({
		name: activity1.name,
		description: activity1.description,
		items: activity1.items,
		images: activity1.images
	}))


	const activity2 = req.body.activity2.map(activity2 => ({
		name: activity2.name,
		description: activity2.description,
		images: activity2.images
	}))

	const newAbout = new About({
		activity1,
		activity2
	})

	const savedAbout = await newAbout.save();

	res.status(200).json(savedAbout);
})

//@desc Update about
//@route PUT /api/about/:id
const updateAbout = asyncHandler(async(req, res) => {

	const about = await About.findById(req.params.id);

	if (!about) {
		res.status(400);
		throw new Error('About page not found');
	}

	const updatedAbout = await About.findByIdAndUpdate(req.params.id, req.body, { new: true});

	res.status(200).json(updatedAbout);
})

//@desc DELETE about
//@route DELETE /api/about/:id
const deleteAbout = asyncHandler(async(req, res) => {

	const about = await About.findByIdAndRemove(req.params.id);

	if (!about) {
		res.status(400);
		throw new Error('About page not found');
	}

	res.status(200).json({ id: req.params.id });
})

module.exports = {
	getAbout,
	setAbout,
	updateAbout,
	deleteAbout
}