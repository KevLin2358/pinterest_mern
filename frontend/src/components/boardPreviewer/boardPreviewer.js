import React from 'react'
import "./boardPreviewer.css"
import Q from "../../imageComponent/images/q.jpg"
import r from "../../imageComponent/images/r.jpg"
import w from "../../imageComponent/images/w.jpg"
import t from "../../imageComponent/images/t.jpg"
function BoardPreviewer() {
  return (
    <div className='BoardPreviewerContainer'>
        <div className='collab'>
            <img src={Q}></img>
            <img src={r}></img>
            <img src={w}></img>
            <img src={t}></img>
            <img src={t}></img>
        </div>
        <div className='collab2'>
            <img src={Q}></img>
            <div className='collab2RightSide'>
                <img src={r}></img>
                <img src={w}></img>
            </div>
        </div>
    </div>
  )
}

export default BoardPreviewer