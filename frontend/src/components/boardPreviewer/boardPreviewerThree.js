import React from 'react'
import "./boardPreviewer.css"
import Q from "../../imageComponent/images/q.jpg"
import r from "../../imageComponent/images/r.jpg"
import w from "../../imageComponent/images/w.jpg"
import t from "../../imageComponent/images/t.jpg"
function BoardPreviewerThree({one,two,three}) {
  return (
    <div>
        <div className='collab2'>
            <img src={one.image}></img>
            <div className='collab2RightSide'>
                <img src={two.image}></img>
                <img src={three.image}></img>
            </div>
        </div>
        <div className='boardNames'>All Pins</div>
        <div className='boardLength'>21 Pin</div>
    </div>
  )
}

export default BoardPreviewerThree