const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Save = require('../../models/Save');
const Pin = require('../../models/Pin');

router.get("/test", (req, res) =>{
    res.json({ msg: "This is the board route" })
} );

router.get('/boards/:boardId', async  (req, res) => { // pinid
  console.log("Backened")
  let array = []
  let x = await  Save.find({board:req.params.boardId})
  let pinId = (x.map(e => e.pin))
  // console.log(pinId[7])
  // Pin.find({_id:pinId[8]}).then(pins => console.log(pins))
  for (var i = 0; i < pinId.length; i++) {
    let ele = pinId[i]
    let response = await Pin.find({_id:ele})
    array.push(response[0])
    // console.log(response)
  }
  res.json(array)
  // let y = pinId.map(id => Pin.find({_id:id}))
  // console.log(y)
  // res.json(y)
  //     .then(pins => console.log(pins))
  //     .catch(err =>
  //         res.status(404).json({ nopinsfound: 'No pins found with that ID' })
  //     );
});

router.get('/fetchSavesWithLimitFive/:boardId', async  (req, res) => { // pinid
  console.log("fetchSavesWithLimitFive")
  console.log("Backened")
  let array = []
  let x = await  Save.find({board:req.params.boardId})
  let pinId = (x.map(e => e.pin))
  // console.log(pinId[7])
  // Pin.find({_id:pinId[8]}).then(pins => console.log(pins))
  for (var i = 0; i <= 4 ; i++) {
    let ele = pinId[i]
    let response = await Pin.find({_id:ele})
    array.push(response[0])
    // console.log(response)
  }
  res.json(array.filter(e => e))

});

router.delete('/:saveId', (req, res) => {
  console.log(req.params.saveId)
  Save.deleteOne({_id:req.params.saveId})
    .then((e) => res.json(e))
    .catch(err => 
      res.status(404).json({noSave: 'No Save found with that ID'})
      );
})

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      // console.log("A new save is created")
    //   console.log(req.body)
    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }
      // console.log(req.body.pin)
      Save.find({pin: req.body.pin,board: req.body.board}).then(result => {
        let obj = result
        if (Object.keys(obj).length >= 1){
            console.log("Already Saved")
            // res.json("Already Saved")
            res.json("Already Saved")
            // router.delete(result)
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