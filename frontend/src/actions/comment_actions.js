import * as CommentApiUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'; // all pins specific
export const RECEIVE_PIN_COMMENTS = 'RECEIVE_PIN_COMMENTS'; // all pins homepage all
// export const RECEIVE_PIN = 'RECEIVE_PIN'; // single pin
export const REMOVE_COMMENT = 'REMOVE_COMMENT'; // delete pin

export const receiveComment = pins => {
  return({
    type: RECEIVE_COMMENT,
    pins
  })
}

export const receivePinComments = comments =>{
  return({
    type: RECEIVE_PIN_COMMENTS,
    comments
  })
}

// export const receivePin = pin =>{
//   return({
//     type: RECEIVE_PIN,
//     pin
//   })
// }

export const removeComment = commentId =>{
  return({
    type: REMOVE_COMMENT,
    commentId
  })
}

export const fetchPincomments = pinId => dispatch =>{
  return CommentApiUtil.fetchPinComments(pinId)
    .then(comments => dispatch(receivePinComments(comments)));
}

// export const fetchUserPin = userId => dispatch =>{
//   return CommentApiUtil.fetchUserPin(userId)
//     .then(pins => dispatch(receivePins(pins)));
// }

// export const fetchSinglePin = pinId => dispatch =>{
//   return CommentApiUtil.fetchPin(pinId)
//     .then(pin => dispatch(receivePins(pin)));
// }

export const createComment = data => dispatch =>{
    console.log("asd")
  return CommentApiUtil.createComment(data)
    .then(comment => dispatch(receivePinComments(comment)));
}

export const deleteComment = id => dispatch =>{
  return CommentApiUtil.deleteComment(id)
    .then(() => dispatch(removeComment(id)))
}



export const patchComment = data => dispatch =>{
  return CommentApiUtil.patchComment(data)
  .then(comments => dispatch(receivePinComments(comments)));
}

