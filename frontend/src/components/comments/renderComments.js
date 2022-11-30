import React from 'react'
import Bell from '../../imageComponent/BellSVG'
import InputForms from '../Tools/inputForm'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { createSave,fetchSaves } from '../../actions/save_actions'
function RenderCommentsAndRightSide({comment,comments,handleDeleteComment,pin,handleCreateComment,setComment,handleDeletePin}) {
  const boardArray = useSelector(state => state.board.data)
  const pinId = useSelector(state => state.pin.data._id)
  const [defaultoBoardId,setdefaultBoardId] = useState("")
  const dispatch = useDispatch()
  const [isThisInBoardArray,setisThisInBoardArray] = useState(false)
  const [save,setSave] = useState("")
  useEffect(() => {
    if (boardArray && defaultoBoardId === ""){
      let x = boardArray.filter(e => e.default === true)
      setdefaultBoardId(() =>(x[0]._id))
    } 
  }, [boardArray])

  useEffect(()=>{
    if(defaultoBoardId !== ""){
      dispatch(fetchSaves(defaultoBoardId)).then(res => setSave(res.saves.data))
    }
  },[defaultoBoardId])

  useEffect(()=>{
    if(save !== ""){
      // console.log(save)
      const isTherePinInsideDefault = save.some(e => (e.pin === pinId))
      setisThisInBoardArray(isTherePinInsideDefault)
    }
  },[save])
  
  const saveThisPin = () => {
    setisThisInBoardArray(true)
    const newSave = {
      pin:pinId,
      board:defaultoBoardId
    }
    dispatch(createSave(newSave))
  }

  
  // console.log(defaultoBoardId,pinId)
  return (
    <div className='rightComments'>
      <div className='singlePageCenterRight1'>
      <div >
        <Bell></Bell><Bell></Bell><Bell></Bell>
      </div>
        
      {isThisInBoardArray 
        ? 
        <div ><button onClick={saveThisPin} className='singlePageCenterRight1Button'>UnSave</button></div>
        :
        <div ><button onClick={saveThisPin} className='singlePageCenterRight1Button'>Save</button></div>
      }
      </div>

      <div 
        className='rightLink'><a href={pin.pins.data.link}>{pin.pins.data.link}</a>
      </div>
      <div 
        className='rightTitle'>{pin.pins.data.title}
      </div>
      <div 
        className='rightDes'>{pin.pins.data.description}
      </div>
      <div 
        className='rightUploader'>Handler
      </div>
      <div 
        className='rightComment'>{comments.length} Comments
      </div>  
      {comments.map((comment) => {
          return(
          <li key={comment._id}>
              {     
              comment.text
              }
              <button onClick={() => handleDeleteComment(comment._id)}>deletePin</button>
          </li>
          )
      })}
      <div className='rightCommentInput'>
        <form onSubmit={handleCreateComment}>
            <input 
                value={comment}
                onChange={(e) => setComment(e.target.value)} 
                placeholder='Please Type here'>
            </input>
          <button onClick={handleCreateComment}>createComment</button>
        </form>
      </div>
      <button onClick={handleDeletePin}>deletePin</button>   
      <InputForms/>    
    </div>
  )
}

export default RenderCommentsAndRightSide