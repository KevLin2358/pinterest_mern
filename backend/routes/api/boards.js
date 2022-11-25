const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Board = require('../../models/Board');
const Save = require('../../models/Save')
router.get("/test", (req, res) =>{
    res.json({ msg: "This is the board routeasdas" })
} );

// router.get('/', (req, res) => {
//   Pin.find()
//       .sort({ date: -1 })
//       .then(pins => res.json(pins))
//       .catch(err => res.status(404).json({ nopinsfound: 'No pins found' }));
// });

router.get('/user/:user_id', (req, res) => {
  // console.log("this is board backend")
  // console.log(req.params.user_id)
  // console.log(req.body)
  Board.find({user:req.params.user_id,default:true})
  // .then
  // (board => 
  // Save.find({board:board[0].id}))
  .then(defaultBoard => res.json(defaultBoard))
  .catch(err =>
      res.status(404).json({ nopinsfound: 'No pins found from that user' }
  )
  );
});

router.get('/user/all/:user_id', (req, res) => {
  console.log("all boards backend")
  console.log(req.params.user_id)
  console.log(req.body)
  Board.find({user:req.params.user_id})
  .then(board => res.json(board))
  .catch(err =>
      res.status(404).json({ nopinsfound: 'No pins found from that user' }
  )
  );
});
 
router.get('/:id', (req, res) => { // pinid
  console.log(req.params.id)
  Board.find({user:req.params.id,default:true})
  .then(board => 
  Save.find({board:board[0].id}))
  .then(pins => res.json(pins))
  .catch(err =>
      res.status(404).json({ nopinsfound: 'No pins found from that user' }
  )
);

  // Pin.findById(req.params.id)
  //     .then(pins => res.json(pins))
  //     .catch(err =>
  //         res.status(404).json({ nopinsfound: 'No pins found with that ID' })
  //     );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      console.log("A new board is created")
      console.log(req.body)
    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }
  
      const newBoard = new Board({
        user: req.user.id,
        title: req.body.title,
        default: false
      });
  
      newBoard.save().then(board => res.json(board));
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