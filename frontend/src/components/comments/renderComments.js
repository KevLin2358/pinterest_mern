import React from 'react'
import Bell from '../../imageComponent/BellSVG'
import InputForms from '../Tools/inputForm'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { createSave,fetchSaves,deleteSave } from '../../actions/save_actions'
import Dot from '../../imageComponent/dotSVG'
import Share from '../../imageComponent/shareSVG'
import CopyLink from '../../imageComponent/copyLinkSVG'
import ToggleComment from '../../imageComponent/ToggleComment'
function RenderCommentsAndRightSide({cancelComment,comment,comments,handleDeleteComment,pin,handleCreateComment,setComment,handleDeletePin}) {
  const boardArray = useSelector(state => state.board.data)
  const pinId = useSelector(state => state.pin.data._id)
  const [defaultoBoardId,setdefaultBoardId] = useState("")
  const dispatch = useDispatch()
  const [isThisInBoardArray,setisThisInBoardArray] = useState("")
  const [save,setSave] = useState([])
  const reducerState = useSelector(state=>state)

  //setting default board when it loads
  useEffect(() => {
    if(Object.keys(reducerState.board).length !== 0){
      setdefaultBoardId(e => reducerState.board.data[0])
    }
  }, [reducerState])
  

  //once defaultboard is set fetch it savse
  useEffect(()=>{
    if(defaultoBoardId !== ""){
      dispatch(fetchSaves(defaultoBoardId._id)).then(res => setSave(res.saves.data))
    }
  },[defaultoBoardId])


  //after default saves are imported , I need to set true or false
  useEffect(()=>{
    if(save.length !== 0){
      // console.log(save)
      const isTherePinInsideDefault = save.filter(e => e.pin === pinId)
      console.log(isTherePinInsideDefault)
      setisThisInBoardArray(() =>isTherePinInsideDefault)
    }
  },[save])

  // console.log(reducerState.session.info.handle)

  
  
  const saveThisPin = () => {
    setisThisInBoardArray(true)
    const newSave = {
      pin:pinId,
      board:defaultoBoardId
    }
    dispatch(createSave(newSave)).then(res => setisThisInBoardArray([res.save.data]))
  }

  const deleteThisSave = () => {
    dispatch(deleteSave(isThisInBoardArray[0]._id)).then(() => dispatch(fetchSaves(defaultoBoardId._id)).then(res => setSave(res.saves.data)))
  } 

  
  // console.log(comments)
  // console.log(isThisInBoardArray,save)

  if(reducerState.session.info === undefined) return null
  if(isThisInBoardArray === "") return null
  return (
    <div className='rightComments'>
      <div className='singlePageCenterRight1'>
      <div className='rightSideIcons'>
        <Dot/><Share/><CopyLink/>
      </div>
        
      {(isThisInBoardArray.length !== 0)
        ? 
        <div ><button onClick={deleteThisSave} className='singlePageCenterRight1Button'>Unsaved</button></div>
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
            <div key={comment._id} className='fullCommentDiv'>
              {/* <ul key={comment._id}> */}
                <div id="container" style={{backgroundColor:"orange"}}>
                  <div id="name">
                  {reducerState.session.info.handle[0].toUpperCase()}
                  </div>
                </div>
                  <div className='commentTextBox'>
                    <div className='userNameText'>
                    {comment.user}
                    </div>
                    <div className='commentText'>
                    {comment.text}
                  <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>

                    </div>
                  </div>
              {/* </ul> */}
            </div>
          )
      })}
      </div>
      <div className='commentDivContainer'>
      <div id="container" style={{backgroundColor:"grey"}}>
                  <div id="name">
                  {reducerState.session.info.handle[0].toUpperCase()}
                  </div>
      </div>
        <div className='rightCommentInput'>
          <form onSubmit={handleCreateComment}>
              <input 
                  className='commentInput'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)} 
                  placeholder='Please Type here'>
              </input>

          </form>
          <div className='commentButtonsContainer'>
              <button className='commentButtons' onClick={cancelComment}>Cancel</button>
              <button className='commentButtons' onClick={handleCreateComment}>Done</button>
            </div>
        </div>
      </div>
      <button onClick={handleDeletePin}>deletePin</button>   
      <InputForms/>    
    </div>
  )
}

export default RenderCommentsAndRightSide