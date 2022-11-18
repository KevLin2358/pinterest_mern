import React from 'react'
import Navbar from '../components/nav/navbar'
import "./singlePinPage.css"
import Q from "../imageComponent/images/r.jpg"
import Bell from '../imageComponent/BellSVG'
import { useState,useEffect } from 'react'
import Pins from '../components/pin/pins'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchSinglePin } from '../actions/pin_actions'
// import {}
function SinglePin({url}) {
    const [comment,setComment] = useState("")
    const [commentArray,setCommentArray] = useState(["testing","asdwd"])
    const dispatch = useDispatch()
    const [pin,setPin] = useState("")
    const onSubmitButton = (e) => {
        e.preventDefault()
        setCommentArray([...commentArray,comment])
        setComment("")
    }
    console.log(window.location.href.split("/")[4])
    const pinId = window.location.href.split("/")[4]

    useEffect(() => {
        dispatch(fetchSinglePin(pinId)).then(req => setPin(req))
    }, [])
    // console.log(pin.pins.data.image)
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
                                <li key={comment}>
                                    {comment}
                                </li>
                                )
                        })}</div>
                        <div className='rightCommentInput'>
                            <form onSubmit={onSubmitButton}>
                                <input 
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)} 
                                    placeholder='Please Type here'>
                                </input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </React.Fragment>
  )
}

export default SinglePin