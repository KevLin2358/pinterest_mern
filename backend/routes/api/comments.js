const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Comment = require('../../models/Comment');
// const validatePinInput = require('../../validation/comments');

router.get("/test", (req, res) =>{
    console.log("this is console")
    res.json({ msg: "This is the comments route" })
} );

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    //   const { errors, isValid } = validatePinInput(req.body);
      console.log("comment Backend")
    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }
      const newComment = new Comment({
        user: req.user.id,
        text: req.body.text,
        pin: req.body.pinId,
        heartCount: 0,
        helpfulCount: 0
      });
  
      newComment.save().then(comment => res.json(comment));
    }
  );

module.exports = router;