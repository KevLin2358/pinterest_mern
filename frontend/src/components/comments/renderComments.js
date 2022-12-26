import React from 'react'
import Bell from '../../imageComponent/BellSVG'
import InputForms from '../Tools/inputForm'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { createSave,fetchSaves,deleteSave } from '../../actions/save_actions'
import { fetchBoards } from '../../actions/board_actions'
import Dot from '../../imageComponent/dotSVG'
import Share from '../../imageComponent/shareSVG'
import CopyLink from '../../imageComponent/copyLinkSVG'
import ToggleComment from '../../imageComponent/ToggleComment'
import DropdownMenu from '../dropdownMenu/dropdownMenu'
import { fetchSavesIDwithBoardID } from '../../actions/save_actions'
import { patchComment } from '../../actions/comment_actions'
import DropdownMenuHomePage from '../dropdownMenu/dropdownMenuHomePage'
function RenderCommentsAndRightSide({cancelComment,comment,reloadComment,comments,handleDeleteComment,pin,handleCreateComment,setComment,handleDeletePin}) {
  const boardArray = useSelector(state => state.board.data)
  const pinId = useSelector(state => state.pin.data._id)
  const [defaultoBoardId,setdefaultBoardId] = useState("")
  const dispatch = useDispatch()
  const [isThisInBoardArray,setisThisInBoardArray] = useState("")
  const [save,setSave] = useState([])
  const reducerState = useSelector(state=>state)
  const [editComment,seteditComment] = useState("")

  //setting default board when it loads
  useEffect(() => {
    if(Object.keys(reducerState.board).length !== 0){
      setdefaultBoardId(e => reducerState.board.data[0])
    }
  }, [reducerState])
  
  // useEffect(() => {
  //   setpinComment(() => comments)
  // })

  //once defaultboard is set fetch it savse
  useEffect(()=>{
    // console.log(defaultoBoardId)
    if(defaultoBoardId !== "" && defaultoBoardId !== undefined){
      dispatch(fetchSavesIDwithBoardID(defaultoBoardId._id)).then(res => setSave(res.saves.data))
    }
  },[defaultoBoardId])


  //after default saves are imported , I need to set true or false
  useEffect(()=>{
    if(save.length !== 0){
      const isTherePinInsideDefault = save.filter(e => e.pin === pinId)
      setisThisInBoardArray(() =>isTherePinInsideDefault)
    }
  },[save])

  // console.log(reducerState.session.info.handle)
  useEffect(() => {
    dispatch(fetchBoards(reducerState.session.user.id))
  }, [])
  
  
  
  const saveThisPin = () => {
    setisThisInBoardArray(true)
    const newSave = {
      pin:pinId,
      board:defaultoBoardId
    }
    dispatch(createSave(newSave))
    .then(res => setisThisInBoardArray([res.save.data]))
  }

  const deleteThisSave = () => {
    // console.log(isThisInBoardArray[0]._id)
    dispatch(deleteSave(isThisInBoardArray[0]._id))
    .then(() => dispatch(fetchSaves(defaultoBoardId._id))
    .then(res => setSave(res.saves.data)))
  } 

  const handleEditComment = (id) => {
    const newComment = {
      id:id,
      text:editComment
    }

    dispatch(patchComment(newComment))
    reloadComment()
  }

  const commentList = comments.map((comment) => {
    return(
      <div key={comment._id} className='fullCommentDiv'>
          <div id="container2" style={{backgroundColor:"orange"}}>
            <div id="name2">
            {comment.user.handle[0].toUpperCase()}
            </div>
          </div>
            <div className='commentTextBox'>
              <div className='userNameText'>
              {comment.user.handle}
              </div>
              <div className='commentText'>
              {comment.text}
              {(reducerState.session.user.id === comment.user._id )&& 
                <div>
                  <button 
                  onClick={() => handleDeleteComment(comment._id)}>Delete
                  </button>
                  <input onChange={(e) => seteditComment(e.target.value)}></input>
                  <button 
                  onClick={() => handleEditComment(comment._id)}>Edit
                  </button>
                </div>                
              }
              </div>
            </div>
      </div>
    )
})

  
  // console.log(pinComment)
  // console.log(isThisInBoardArray,save)
  if(!reducerState.session.info) return null
  if(isThisInBoardArray === "") return null
  // console.log(reducerState.session.info[0].handle)

  return (
    <div className='rightComments'>
      <div className='singlePageCenterRight1'>
      <div className='rightSideIcons'>
        <div className='rightSideIcons1'>
        <Dot/>
        </div>
        <div  className='rightSideIcons1'>
        <Share/>
        </div>
        <div  className='rightSideIcons1'>
        <CopyLink/>
        </div>
      </div>
      <div><DropdownMenu/></div>
      {(isThisInBoardArray.length !== 0)
        ? 
        <div >
          <button onClick={deleteThisSave} 
            className='singlePageCenterRight1Button'>Unsaved
          </button>
        </div>
        :
        <div >
          <button onClick={saveThisPin} 
            className='singlePageCenterRight1Button'>Save
          </button>
        </div>
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
      {commentList}
      </div>
      <div className='commentDivContainer'>
      <div id="container2" style={{backgroundColor:"grey"}}>
                  <div id="name2">
                  {reducerState.session.info[0].handle[0].toUpperCase()}
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
              <button className='commentButtons' 
              onClick={cancelComment}>
                Cancel
              </button>
              <button className='commentButtons' 
              onClick={handleCreateComment}>
                Done
              </button>
            </div>
        </div>
      </div>
      {
        reducerState.session.user.id === reducerState.pin.data.user &&
        <button onClick={handleDeletePin}>deletePin</button>   
      }
      
      <InputForms/>    
    </div>
  )
}

export default RenderCommentsAndRightSide