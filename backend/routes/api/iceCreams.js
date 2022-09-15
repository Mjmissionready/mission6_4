// routes/api/icecreams.js

const express = require('express');
const router = express.Router();

// Load IceCream model
const IceCreamModel = require('../../models/iceCream.js');

// @description tests iceCreams route
router.get('/test', (req, res) => res.send('iceCream route testing!'));

// @description Get all iceCreams
router.get('/all', (req, res) => {
  // console.log(IceCream)
  IceCreamModel.find()
    .then(icecreams => res.json(icecreams))
    .catch(err => res.status(404).json({ nobooksfound: 'No IceCreams found' }));
});

// @description Get single icecream by id
router.get('/:id', (req, res) => {
  IceCreamModel.findById(req.params.id)
    .then(icecreams => res.json(icecreams))
    .catch(err => res.status(404).json({ nobookfound: 'No IceCream found' }));
});

// @description add/save iceCream
router.post('/', (req, res) => {
  IceCreamModel.create(req.body)
    .then(icecreams => res.json({ msg: 'IceCream added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this iceCream' }));
});

// @description Update iceCream
router.put('/:id', (req, res) => {
  IceCreamModel.findByIdAndUpdate(req.params.id, req.body)
    .then(icecreams => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @description Delete iceCream by id
router.delete('/:id', (req, res) => {
  IceCreamModel.findByIdAndRemove(req.params.id, req.body)
    .then(icecreams => res.json({ mgs: 'IceCream entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a iceCream' }));
});

module.exports = router;