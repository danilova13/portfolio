const express = require('express');
const router1 = express.Router();
const { getCV, setCV, updateCV, deleteCV } = require ('../controllers/cvController');

router1.get('/', getCV);

router1.post('/', setCV);

router1.put('/:id', updateCV)

router1.delete('/:id', deleteCV)

module.exports = router1; 