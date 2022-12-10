import * as SaveApiUtil from "../util/save_api_util";

export const RECEIVE_SAVE = 'RECEIVE_SAVE'; // all pins specific
export const RECEIVE_SAVES = 'RECEIVE_PIN_SAVES'; // all pins homepage all
export const REMOVE_SAVE = 'REMOVE_SAVE'; // delete pin

export const receiveSave = save => {
  return({
    type: RECEIVE_SAVE,
    save
  })
}

export const receiveSaves = saves =>{
  return({
    type: RECEIVE_SAVES,
    saves
  })
}


export const removeSave = saveId =>{
  return({
    type: REMOVE_SAVE,
    saveId
  })
}

export const fetchSave = saveId => dispatch =>{
  // console.log("fetching one")
  return SaveApiUtil.fetchSave(saveId)
    .then(save => dispatch(receiveSave(save)));
}

export const fetchSavesIDwithBoardID = boardId => dispatch =>{
  // console.log("fetching many")
  return SaveApiUtil.fetchSavesIDwithBoardID(boardId)
    .then(saves => dispatch(receiveSaves(saves)));
}

export const fetchSaves = boardId => dispatch =>{
  // console.log("fetching many")
  return SaveApiUtil.fetchSaves(boardId)
    .then(saves => dispatch(receiveSaves(saves)));
}

export const fetchSavesWithLimitFive = boardId => dispatch =>{
  // console.log("fetching many")
  return SaveApiUtil.fetchSavesWithLimitFive(boardId)
    .then(saves => dispatch(receiveSaves(saves)));
}

export const createSave = data => dispatch =>{
    // console.log("creating ")
  return SaveApiUtil.createSave(data)
    .then(save => dispatch(receiveSave(save)));
}

export const deleteSave = id => dispatch =>{
  // console.log("deleting ")
  return SaveApiUtil.deleteSave(id)
    .then(() => dispatch(removeSave(id)))
}

export const deleteSaveWithPinid = PinId => dispatch =>{
  // console.log("deleting ")
  return SaveApiUtil.deleteSave(PinId)
    // .then(() => dispatch(removeSave(PinId)))
}