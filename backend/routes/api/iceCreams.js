// routes/api/icecreams.js

const express = require('express');
const router = express.Router();

// Load IceCream model
const IceCream = require('../../models/IceCream');

// @route GET api/iceCreams/test
// @description tests iceCreams route
// @access Public
router.get('/test', (req, res) => res.send('iceCream route testing!'));

// @route GET api/iceCreams
// @description Get all iceCreams
// @access Public
router.get('/', (req, res) => {
  IceCream.find()
    .then(iceCreams => res.json(iceCreams))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// @route GET api/iceCreams/:id
// @description Get single iceCream by id
// @access Public
router.get('/:id', (req, res) => {
  IceCream.findById(req.params.id)
    .then(iceCream => res.json(iceCream))
    .catch(err => res.status(404).json({ nobookfound: 'No IceCream found' }));
});

// @route GET api/iceCreams
// @description add/save iceCream
// @access Public
router.post('/', (req, res) => {
  IceCream.create(req.body)
    .then(iceCream => res.json({ msg: 'IceCream added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this iceCream' }));
});

// @route GET api/iceCreams/:id
// @description Update iceCream
// @access Public
router.put('/:id', (req, res) => {
  IceCream.findByIdAndUpdate(req.params.id, req.body)
    .then(iceCream => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/iceCreams/:id
// @description Delete iceCream by id
// @access Public
router.delete('/:id', (req, res) => {
  IceCream.findByIdAndRemove(req.params.id, req.body)
    .then(iceCream => res.json({ mgs: 'IceCream entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a iceCream' }));
});

module.exports = router;