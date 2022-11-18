import * as PinApiUtil from "../util/pin_api_util";

export const RECEIVE_PINS = 'RECEIVE_PINS'; // all pins specific
export const RECEIVE_USER_PINS = 'RECEIVE_ALL_PINS'; // all pins homepage all
export const RECEIVE_PIN = 'RECEIVE_PIN'; // single pin
export const REMOVE_PIN = 'REMOVE_PIN'; // delete pin

export const receivePins = pins => {
  return({
    type: RECEIVE_PINS,
    pins
  })
}

export const receiveUserPins = pins =>{
  return({
    type: RECEIVE_USER_PINS,
    pins
  })
}

export const receivePin = pin =>{
  return({
    type: RECEIVE_PIN,
    pin
  })
}

export const removePin = pinId =>{
  return({
    type: REMOVE_PIN,
    pinId
  })
}

export const fetchUserPin = userId => dispatch =>{
  return PinApiUtil.fetchUserPin(userId)
    .then(pins => dispatch(receivePins(pins)));
}

export const fetchSinglePin = pinId => dispatch =>{
  return PinApiUtil.fetchPin(pinId)
    .then(pin => dispatch(receivePins(pin)));
}

export const createPin = data => dispatch =>{
  return PinApiUtil.createPin(data)
    .then(pin => dispatch(receivePin(pin)));
}

export const deletePin = id => dispatch =>{
  return PinApiUtil.deletePin(id)
    .then(() => dispatch(removePin(id)))
}

