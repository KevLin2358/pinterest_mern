const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Save = require('../../models/Save');

router.get("/test", (req, res) =>{
    res.json({ msg: "This is the board route" })
} );

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      console.log("A new save is created")
    //   console.log(req.body)
    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }
      console.log(req.user.id)
  
      const newSave = new Save({
        user: req.user.id,
        pin: req.body.pin,
        board: req.body.board
      });
  
      newSave.save().then(save => res.json(save));
    }
  );
  module.exports = router;