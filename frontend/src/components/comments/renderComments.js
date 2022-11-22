import React from 'react'
import Bell from '../../imageComponent/BellSVG'

function RenderCommentsAndRightSide({comment,comments,handleDeleteComment,pin,handleCreateComment,setComment,handleDeletePin}) {
  return (
    <div className='rightComments'>
      <div className='singlePageCenterRight1'>
      <div >
        <Bell></Bell><Bell></Bell><Bell></Bell>
      </div>
      <div >
        <button className='singlePageCenterRight1Button'>Save</button></div>
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
    </div>
  )
}

export default RenderCommentsAndRightSide