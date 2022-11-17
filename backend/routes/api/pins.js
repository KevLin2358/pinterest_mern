const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Pin = require('../../models/Pin');
const validatePinInput = require('../../validation/pins');

// router.get("/test", (req, res) => res.json({ msg: "This is the pins route" }));


router.get('/', (req, res) => {
  Pin.find()
      .sort({ date: -1 })
      .then(pins => res.json(pins))
      .catch(err => res.status(404).json({ nopinsfound: 'No pins found' }));
});

router.get('/user/:user_id', (req, res) => {
  Pin.find({user: req.params.user_id})
      .then(pins => res.json(pins))
      .catch(err =>
          res.status(404).json({ nopinsfound: 'No pins found from that user' }
      )
  );
});
 
router.get('/:id', (req, res) => { // pinid
  Pin.findById(req.params.id)
      .then(pins => res.json(pins))
      .catch(err =>
          res.status(404).json({ nopinsfound: 'No pins found with that ID' })
      );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      console.log(req)
      const { errors, isValid } = validatePinInput(req.body);
      console.log("New Pin is connected")
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newPin = new Pin({
        user: req.user.id,
        image: req.body.image,
        title: req.body.text,
        description: req.body.description,
        link: req.body.link
      });
  
      newPin.save().then(pin => res.json(pin));
    }
  );
  
  router.delete('/:id', (req, res) => {
    Pin.findByIdAndRemove(req.params.id)
      .then(() => res.json())
      .catch(err => 
        res.status(404).json({nopinsfound: 'No pin found with that ID'})
        );
  })
module.exports = router;