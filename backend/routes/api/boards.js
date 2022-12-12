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
  console.log("all boards backend with the first image it finds")

  let outputArray = []
  
  let tempArray = []

  let arr =  await Board.where("user").equals(req.params.user_id)
  let boardIdArr = arr.map(e => e.id)


  for (let index = 0; index < boardIdArr.length; index++) {
    const element = boardIdArr[index];
    let response = await Save.findOne({board:element}).populate("pin").populate("board")
    // console.log(response)
    if(response === null || !response.pin){
      await Save.deleteOne({board:element})
      // console.log(element)
      let empty = await Board.where("_id").equals(element)
      tempArray.push(empty[0])
    }
    else{
      tempArray.push(response)
    }
    // console.log(response)
  }

  // console.log(tempArray)
  

  for (let index = 0; index < tempArray.length; index++) {
    const element = tempArray[index];
    // console.log(element)
    if (element !== null){
      let testingObj = {}
      let boardObj = element.board
      if (element.pin){
        // console.log(element)
        if(element.pin.image){
          let pinEle = element.pin.image
          // console.log(boardObj)
          testingObj["_id"] = boardObj._id
          testingObj["user"] = boardObj.user
          testingObj["title"] = boardObj.title
          testingObj["image"] = pinEle
        }
        else{
          testingObj["_id"] = boardObj._id
          testingObj["user"] = boardObj.user
          testingObj["title"] = boardObj.title
          testingObj["image"] = null
        }
  
      }
      else{
        testingObj = element
      }

      outputArray.push(testingObj)
    }

  }

  res.json(outputArray)





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