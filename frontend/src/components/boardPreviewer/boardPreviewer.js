import React from 'react'
import "./boardPreviewer.css"
import Q from "../../imageComponent/images/q.jpg"
import r from "../../imageComponent/images/r.jpg"
import w from "../../imageComponent/images/w.jpg"
import t from "../../imageComponent/images/t.jpg"
import BoardPreviewerThree from "./boardPreviewerThree.js"
import BoardPreviewerFive from "./boardPreviewerFive.js"
function BoardPreviewer() {
  return (
    <div className='BoardPreviewerContainer'>
        <BoardPreviewerFive/>
        <BoardPreviewerThree/>
        <BoardPreviewerThree/>
        <BoardPreviewerThree/>
        <BoardPreviewerThree/>
        <BoardPreviewerThree/>
        <BoardPreviewerThree/>
        <BoardPreviewerThree/>
    </div>
  )
}

export default BoardPreviewer