import * as BoardApiUtil from "../util/board_api_util";

export const RECEIVE_BOARD = 'RECEIVE_BOARD'; // all pins specific
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS'; // all pins homepage all
// export const RECEIVE = 'RECEIVE'; // single pin
export const REMOVE_BOARD = 'REMOVE_BOARD'; // delete pin

export const receiveBoard = board => {
  return({
    type: RECEIVE_BOARD,
    board
  })
}

export const receiveBoards = boards =>{
  return({
    type: RECEIVE_BOARDS,
    boards
  })
}

// export const receive = pin =>{
//   return({
//     type: RECEIVE,
//     pin
//   })
// }

export const removeBoard = boardId =>{
  return({
    type: REMOVE_BOARD,
    boardId
  })
}

export const fetchDefaultBoard = boardId => dispatch =>{
    console.log(boardId)
  return BoardApiUtil.fetchDefaultBoard(boardId)
    .then(board => dispatch(receiveBoard(board)));
}

export const fetchBoards = userId => dispatch =>{
  return BoardApiUtil.fetchBoards(userId)
    .then(boards => dispatch(receiveBoards(boards)));
}

// export const fetchUser = userId => dispatch =>{
//   return BoardApiUtil.fetchUser(userId)
//     .then(pins => dispatch(receives(pins)));
// }

// export const fetchSingle = pinId => dispatch =>{
//   return BoardApiUtil.fetch(pinId)
//     .then(pin => dispatch(receives(pin)));
// }

export const createBoard = data => dispatch =>{
    console.log("creating Board")
  return BoardApiUtil.createBoard(data)
    // .then(board => dispatch(receiveBoard(board)));
}

export const deleteBoard = id => dispatch =>{
  return BoardApiUtil.deleteBoard(id)
    .then(() => dispatch(removeBoard(id)))
}

export const patchBoard = data => dispatch =>{
  return BoardApiUtil.patchBoard(data)
    // .then(board => dispatch(receiveBoard(board)));
}

