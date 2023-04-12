const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const aboutSchema = new Schema({

	activity1: [
		{
			name: {
				type: String,
				required: true
			},

			description: {
				type: String,
				required: true
			},

			items: {
				type: [String],
				required: true,
			},

			images: {
				type: [String],
				required: true
			}

		}
	],

	activity2: [
		{
			name: {
				type: String,
				required: true
			},

			description: {
				type: String,
				required: true
			},

			images: {
				type: String,
				required: true
			}
		}
	]

}, { timestamps: true });

const About = mongoose.model('About', aboutSchema);

module.exports = About; 

