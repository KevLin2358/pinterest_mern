import * as SaveApiUtil from "../util/save_api_util";


export const createSave = data => dispatch =>{
    console.log("creating Save")
  return SaveApiUtil.createSave(data)
    // .then(comment => dispatch(receivePinComments(comment)));
}