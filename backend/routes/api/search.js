const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Pin = require('../../models/Pin');

router.get("/test", (req, res) =>{
    res.json({ msg: "This is the search route" })
} );

// router.get('/:search', (req, res) => { // 
//     Pin.findby(search)
//         .then(pins => res.json(pins))
//         .catch(err =>
//             res.status(404).json({ nopinsfound: 'No pins found with that ID' })
//         );
//   });

router.get('/:search', (req, res) => {
    const searchKeyword = req.params.search;
    console.log(searchKeyword)
  
    Pin.find({ title: { $regex: searchKeyword, $options: 'i' } })
    .then(pins => {
      if (pins.length === 0) {
        return res.status(404).json({ nopinsfound: 'No pins found with that title' });
      }
      res.json(pins);
    })
    .catch(err => res.status(500).json({ error: 'An error occurred while searching for pins' }));
});

module.exports = router;