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
      // console.log("A new save is created")
    //   console.log(req.body)
    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }
      // console.log(req.body.pin)
      Save.find({pin: req.body.pin}).then(result => {
        let obj = result
        if (Object.keys(obj).length >= 1){
            console.log("Already Saved")
            res.json("Already Saved")
            console.log(obj[0].id)
            Save.findByIdAndRemove(obj[0].id)
        }
        else{
          console.log("saved")
          const newSave = new Save({
            user: req.user.id,
            pin: req.body.pin,
            board: req.body.board
          });
      
          newSave.save().then(save => res.json(save));
        }

      })

    }
  );
  module.exports = router;