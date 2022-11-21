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
// import {}
function SinglePin({url}) {
    const [comment,setComment] = useState("")
    const [commentArray,setCommentArray] = useState([])
    const dispatch = useDispatch()
    const [pin,setPin] = useState("")
    const onSubmitButton = (e) => {
        e.preventDefault()
        setCommentArray([...commentArray,comment])
        setComment("")
    }
    const stateObj = useSelector(state => state)

    // const uploader = useSelector(state => state)
    // console.log(window.location.href.split("/")[4])
    const pinId = window.location.href.split("/")[4]
    // This is the get the last part of the img name
    useEffect(() => {
        dispatch(fetchSinglePin(pinId)).then(req => setPin(req))
        //this will fetch the pinID obj and set state
        console.log(stateObj)

    }, [])
    // console.log(pin.pins.data)
    useEffect(() => {
        console.log(pin.pins)
        if(Object.keys(pin).length !== 0) {
            dispatch(fetchPincomments(stateObj.pin.data._id)).then((req) => setCommentArray(req.comments.data.map(e => e.text)))
        }
    },[pin])


    const handleDelete = () =>{
        dispatch(deletePin(pinId)).then(()=>window.location.href = '/')
        //this will delete pin and after it will redirect to main
    }
    // console.log(state.pin.data._id)
    const testing = (e) => {
        e.preventDefault()
        const newComment = ({
            user: stateObj.pin.data.user,
            text: comment,
            pinId: stateObj.pin.data._id,
          });

        // dispatch(createComment(newComment)).then((res) => setCommentArray(res.comments.data.map(e => e.text)))
        dispatch(createComment(newComment)).then((res) => setCommentArray([...commentArray,res.comments.data.text]))
        setComment("")
    }
    // console.log(commentArray)
    if (pin=== "") return null
    return (
    <React.Fragment>
       <Navbar/>
       <div className='singlePageContainer'>
            <div className='singlePageBody'>
                <div className='singlePageCenter'>
                    <div className='singlePageCenterLeft'><img src={pin.pins.data.image}></img></div>
                    <div className='singlePageCenterRight'>
                        <div className='singlePageCenterRight1'>
                            <div ><Bell></Bell><Bell></Bell><Bell></Bell></div>
                            <div ><button className='singlePageCenterRight1Button'>Save</button></div>
                            </div>
                        <div className='rightLink'>{pin.pins.data.link}</div>
                        <div className='rightTitle'>{pin.pins.data.title}</div>
                        <div className='rightDes'>{pin.pins.data.description}</div>
                        <div className='rightUploader'>Handler</div>
                        <div className='rightComment'>{commentArray.length} Comments</div>
                        <div className='rightComments'>
                            {commentArray.map((comment) => {
                                return(
                                <li key={comment.id}>
                                    {comment}
                                </li>
                                )
                        })}</div>
                        <div className='rightCommentInput'>
                            <form onSubmit={testing}>
                                <input 
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)} 
                                    placeholder='Please Type here'>
                                </input>
                            <button onClick={testing}>createComment</button>
                            </form>
                        </div>
                        <button onClick={handleDelete}>deletePin</button>
                    </div>
                </div>
            </div>
       </div>
    </React.Fragment>
  )
}

export default SinglePin