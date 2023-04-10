const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cvSchema = new Schema({

	education: [
		{
			name: {
				type: String,
				required: true
			},
			years_attended: {
				type: String,
				required: true
			}, 
			description: {
				type: String,
				required: true
			}
		}
	],

	experience: [
		{
			name: {
				type: String,
				required: true
			},
	
			description: {
				type: String,
				required: true
			}
		}
		
	]


}, { timestamps: true })


const CV = mongoose.model('CV', cvSchema);

module.exports = CV; 