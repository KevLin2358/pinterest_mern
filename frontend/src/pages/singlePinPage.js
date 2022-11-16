import React from 'react'
import Navbar from '../components/nav/navbar'
import "./singlePinPage.css"
import Q from "../imageComponent/images/q.jpg"
import Bell from '../imageComponent/BellSVG'
import { useState } from 'react'
function SinglePin({url}) {
    const [comment,setComment] = useState("")
    const [commentArray,setCommentArray] = useState(["testing","asdwd"])

    const onSubmitButton = () => {
        setCommentArray([...commentArray,comment])
        setComment("")
    }

  return (
    <React.Fragment>
       <Navbar/>
       <div className='singlePageContainer'>
            <div className='singlePageBody'>
                <div className='singlePageCenter'>
                    <div className='singlePageCenterLeft'><img src={Q}></img></div>
                    <div className='singlePageCenterRight'>
                        <div className='singlePageCenterRight1'>
                            <div ><Bell></Bell><Bell></Bell><Bell></Bell></div>
                            <div ><button className='singlePageCenterRight1Button'>Save</button></div>
                            </div>
                        <div className='rightLink'>www.google.com</div>
                        <div className='rightTitle'>Tokyo wallpaper by fatihyurtseven43 - f6 - Free on ZEDGE™</div>
                        <div className='rightDes'>Download Tokyo wallpaper by fatihyurtseven43 - f6 - Free on ZEDGE™ now. Browse millions of popular new Wallpapers and Ringtones on Zedge and personalize your phone to suit you. Browse our conten</div>
                        <div className='rightUploader'>Uploader</div>
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