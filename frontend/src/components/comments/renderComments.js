import React from 'react'
import Bell from '../../imageComponent/BellSVG'
import InputForms from '../Tools/inputForm'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { createSave,fetchSaves } from '../../actions/save_actions'
import Dot from '../../imageComponent/dotSVG'
import Share from '../../imageComponent/shareSVG'
import CopyLink from '../../imageComponent/copyLinkSVG'
import ToggleComment from '../../imageComponent/ToggleComment'
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

  
  console.log(comments)
  return (
    <div className='rightComments'>
      <div className='singlePageCenterRight1'>
      <div className='rightSideIcons'>
        <Dot/><Share/><CopyLink/>
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
      <div className='rightCommentRow'>
        <div className='rightComment'>{comments.length} Comments</div>
        <div className='rightCommentToggle'><ToggleComment/></div>
      </div>  
      <div className='commentArray'>
      {comments.map((comment) => {
          return(
            <div className='fullCommentDiv'>
              {/* <ul key={comment._id}> */}
                <div id="container" style={{backgroundColor:"orange"}}>
                  <div id="name">
                  {comment.user[0]}
                  </div>
                </div>
                  <div className='commentTextBox'>
                    <div className='userNameText'>
                    {comment.user}
                    </div>
                    <div className='commentText'>
                    {comment.text}
                    </div>
                  </div>
                  {/* <button onClick={() => handleDeleteComment(comment._id)}>deletePin</button> */}
              {/* </ul> */}
            </div>
          )
      })}
      </div>

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