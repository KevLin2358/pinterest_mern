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
// import {}
function SinglePin({url}) {
    const [comment,setComment] = useState("")
    const [commentArray,setCommentArrayObj] = useState([])
    const dispatch = useDispatch()
    const [pin,setPin] = useState("")

    const stateObj = useSelector(state => state)

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
                    <div className='singlePageCenterLeft'><img src={pin.pins.data.image}></img></div>
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
                        />
                    </div>
                </div>
            </div>
        <div>
            <Bell/>
        </div>
       </div>
    </React.Fragment>
  )
}

export default SinglePin