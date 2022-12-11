const { response } = require("express");
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
//   Board.find()
//       .sort({ date: -1 })
//       .then(pins => res.json(pins))
//       .catch(err => res.status(404).json({ nopinsfound: 'No pins found' }));
// });

router.get('/user/:user_id', (req, res) => {
  Board.find({user:req.params.user_id,default:true})
  .then(defaultBoard => res.json(defaultBoard))
  .catch(err =>
      res.status(404).json({ nopinsfound: 'No pins found from that user' }
  )
  );
});

router.get('/user/all/:user_id', async (req, res) => {
  console.log("all boards backend")
  // console.log(req.params.user_id)
  // console.log(req.body)
  // Board.find({user:req.params.user_id})
  // .then(board => res.json(board))
  // .catch(err =>
  //     res.status(404).json({ noBoards:"No Board from this User" }
  // )
  // );
  let objthatwillneedtoturnintoarray = {}

  let findingPinID = []
  let boardIdArr = []
  let arr =  await Board.find({user:req.params.user_id})

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const id =  arr[index].id;
    objthatwillneedtoturnintoarray[id] = [element]
    boardIdArr.push(id)
  }

  for (var i = 0; i < boardIdArr.length; i++) {
    let ele = boardIdArr[i]
    let response = await Save.find({board:ele})
    // console.log(response[0].board,response[0].pin)
    let boardId = response[0].board
    let boardKey =  objthatwillneedtoturnintoarray[boardId]
    if (response[0] !== undefined){
      findingPinID.push(response[0])
      boardKey.pin = response[0].pin
    }
  }

  // console.log(findingPinID)

  // for (let index = 0; index < arr.length; index++) {
  //   const element = arr[index];
  //   const id =  arr[index].id;
  //   objthatwillneedtoturnintoarray[id] = element
  // }

  // let boardID = arr.map(e => objthatwillneedtoturnintoarray[e._id]:e)
  // console.log(boardID)
  // console.log(boardIdArr)
  console.log(objthatwillneedtoturnintoarray)
  // for (var i = 0; i < boardID.length; i++) {
  //   let ele = boardID[i]
  //   let response = await Save.find({board:ele})
  //   // console.log(response)
  //   if (response.length !== 0){
  //     array.push(response[0])
  //   } 
  // }

  // let PinID = array.map(e => e.pin)

  // let pinArray = []
  // for (var i = 0; i < PinID.length; i++) {
  //   let pinID = PinID[i]
  //   // console.log(pinID)
  //   let response = await Pin.find({_id:pinID})
  //   console.log(response)
  //   if (response.length !== 0){
  //     pinArray.push(response[0])
  //   } 
  // }

  // res.json(pinArray)

  // res.json(array)
  // let arr2 = [];
  // arr.forEach(async(board) => {
  //     await Pin.findOne({board:board.id}).then(res => console.log(res))
  // })
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

  // Board.findById(req.params.id)
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
    Board.findByIdAndRemove(req.params.id)
      .then(() => res.json())
      .catch(err => 
        res.status(404).json({nopinsfound: 'No pin found with that ID'})
        );
  })

module.exports = router;