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
      });
  
      newComment.save().then(comment => res.json(comment));
    }
  );

  router.get('/:id', (req, res) => { // pinid
    console.log("comment actions")
    console.log(req.params.id)
    Comment.find({pin:req.params.id})
        .then(comments => res.json(comments)).then((req) => console.log(req.body))
        .catch(err =>
            res.status(404).json({ noCommentFound: 'No comment found' })
        );
  });

  router.delete('/:id', (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
      .then(() => res.json())
      .catch(err => 
        res.status(404).json({nopinsfound: 'No Comment found with that ID'})
        );
  })

module.exports = router;