const express = require('express');
const router2 = express.Router();
const { getAbout, setAbout, updateAbout, deleteAbout } = require(`../controllers/aboutController`);


router2.get('/', getAbout);

// router2.post('/', setAbout);

// router2.put('/:id', updateAbout);

// router2.delete('/:id', deleteAbout);

module.exports = router2;