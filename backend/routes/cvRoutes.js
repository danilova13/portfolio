const express = require('express');
const path = require('path');

const router1 = express.Router();
const { getCV, setCV, updateCV, deleteCV } = require ('../controllers/cvController');

router1.get('/', getCV);

// router1.post('/', setCV);

// router1.put('/:id', updateCV)

// router1.delete('/:id', deleteCV)

router1.get('/download', (req, res) => {
	res.download(path.resolve(__dirname, '../cv.pdf'))
})


module.exports = router1; 