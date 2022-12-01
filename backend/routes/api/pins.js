const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Pin = require('../../models/Pin');
const validatePinInput = require('../../validation/pins');
const Save = require('../../models/Save');
router.get("/test", (req, res) => res.json({ msg: "This is the pins route" }));


router.get('/', (req, res) => {
  console.log("asd")
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

// router.get('/board/:boardId', (req, res) => {
//   console.log(req.params.boardId)
//   let array = []
//   Save.find({pins:req.params.boardId})
//   .then(pin => (pin[6].id))
//   .then(id =>
//     console.log(id)
//     // Pin.find({_id: id}).then(pins => res.json(pins))
//   )
// });
 
router.get('/:id', (req, res) => { // pinid
  Pin.findById(req.params.boardId)
      .then(pins => res.json(pins))
      .catch(err =>
          res.status(404).json({ nopinsfound: 'No pins found with that ID' })
      );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
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