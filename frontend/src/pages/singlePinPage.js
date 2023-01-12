import React from 'react'
import Navbar from '../components/nav/navbar'
import "./singlePinPage.css"
import Bell from '../imageComponent/BellSVG'
import { useState,useEffect } from 'react'
import Pins from '../components/pin/pins'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deletePin, fetchSinglePin } from '../actions/pin_actions'
import {createComment} from '../actions/comment_actions'
import { fetchPincomments } from '../actions/comment_actions'
import { deleteComment } from '../util/comment_api_util'
import RenderCommentsAndRightSide from '../components/comments/renderComments'
import { fetchBoards } from '../actions/board_actions'
import Popup from '../components/dropdownMenu/popup'
import io from "socket.io-client"
const socket = io.connect("http://localhost:5001")

// import {}
function SinglePin({url}) {
    const [comment,setComment] = useState("")
    const [commentArray,setCommentArrayObj] = useState([])
    const dispatch = useDispatch()
    const [pin,setPin] = useState("")
    const [show,setshow] = useState(false)
    const [title,settitle] = useState("")
    const [image,setImage] = useState(null)

    const sendMessage = () => {
      socket.emit("send_message",{message: "Hello"})
    }  
    
    

    const showPopup = (title,homepagePinId) => {
        settitle(title)
        console.log(homepagePinId)
        dispatch(fetchSinglePin(homepagePinId)).then(e => setImage(e.pins.data.image))
        setshow(true)
    
        setTimeout(() => {
          setshow(false)
        }, 2000);
    
        setTimeout(() => {
            setImage(null)
          }, 2000);
      }

    const stateObj = useSelector(state => state)
    const [isShown, setIsShown] = useState(false);
    // const uploader = useSelector(state => state)
    // console.log(window.location.href.split("/")[4])
    const pinId = window.location.href.split("/")[4]
    // This is the get the last part of the img name
    useEffect(() => {
        dispatch(fetchSinglePin(pinId)).then(req => setPin(req))
        //this will fetch the pinID obj and set state
        // console.log(stateObj)

    }, [])
    // console.log(pin.pins.data)
    useEffect(() => {
        if(Object.keys(pin).length !== 0) {
            dispatch(fetchPincomments(stateObj.pin.data._id)).then(
            (req) => setCommentArrayObj(req.comments.data))
            //if pin Object.keys(pin).length is 0 that means that the reducer return didnt come back yet
            //wait for it and run it again so that data is not null
        }
    },[pin])

    const reloadComment = () => {
        dispatch(fetchPincomments(stateObj.pin.data._id)).then(
            (req) => setCommentArrayObj(req.comments.data))
    }


    const handleDeletePin = () =>{
        dispatch(deletePin(pinId)).then(()=>window.location.href = '/')
        //this will delete pin and after it will redirect to main
    }

    const handleDeleteComment = (id) =>{
        deleteComment(id).then(
        ()=>dispatch(fetchPincomments(stateObj.pin.data._id)).then(
        (req) => setCommentArrayObj(req.comments.data)))
        //pass in comment ID and after that re fetch comments
        //set the req as an array of obj
    }
    // console.log(state.pin.data._id)
    const handleCreateComment = (e) => {
        e.preventDefault()
        const newComment = ({
            user: stateObj.pin.data.user,
            text: comment,
            pinId: stateObj.pin.data._id,
          });

        // dispatch(createComment(newComment)).then((res) => setCommentArrayObj(res.comments.data.map(e => e.text)))
        dispatch(createComment(newComment))
        .then(() => 
        dispatch(fetchPincomments(stateObj.pin.data._id))
        .then((req) => setCommentArrayObj(req.comments.data)))
        //Should remember this syntax
        //create a new comment
        //then refetch all the pins
        //then setComment as an array of obj
        setComment("")
    }

    const cancelComment = (e) => {
        e.preventDefault()
        setComment("")
    }

    // useEffect(() => {
    //     if(stateObj.session.info)
    //   dispatch(fetchBoards(stateObj.session.info._id))
    // }, [])
    

    if (!pin) return null
    return (
    <React.Fragment>
       <Navbar/>
       <div className='singlePageContainer'>
        <div className='leftbell'>
            <Bell/>
        </div>
        <div className='singlePageBody'>
            <div className='singlePageCenter'>
                <div className='singlePageCenterLeft'>
                    <img src={pin.pins.data.image}></img>
                </div>
                <div className='singlePageCenterRight'>
                    <RenderCommentsAndRightSide 
                    comments = {commentArray}
                    handleDeleteComment = {handleDeleteComment}
                    pin = {pin}
                    handleCreateComment = {handleCreateComment}
                    setComment = {setComment}
                    handleDeletePin = {handleDeletePin}
                    comment = {comment}
                    cancelComment = {cancelComment}
                    reloadComment = {reloadComment}
                    showPopup = {showPopup}
                    />
                    {/* <Popup/> */}
                </div>
            <button onClick={sendMessage}>emit</button>

            </div>
        </div>
        <div>
            <Bell/>
        </div>
        {show && 
          <div className='popup'>
            {/* <img className='smallimgTest' src={image}/> */}
            {image &&
            <div className='popup-inner'>
                <img className='smallimgTest2' src={image}/>
                <p>This pin is saved to {title}</p> 

            </div>

            }

          </div>
        }
       </div>
    </React.Fragment>
  )
}

export default SinglePin