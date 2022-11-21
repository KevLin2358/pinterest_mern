import React from 'react'
import { deleteComment,createComment,fetchPincomments} from '../../util/comment_api_util'
function RenderComments({comments,handleDeleteComment}) {
  return (
    <div>
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
    </div>
  )
}

export default RenderComments