import React from 'react'
import "./boardPreviewer.css"
import Q from "../../imageComponent/images/q.jpg"
import r from "../../imageComponent/images/r.jpg"
import w from "../../imageComponent/images/w.jpg"
import t from "../../imageComponent/images/t.jpg"
function BoardPreviewerFive() {
  return (
        <div>
          <div className='collab'>
              <img src={Q}></img>
              <img src={r}></img>
              <img src={w}></img>
              <img src={t}></img>
              <img src={t}></img>
          </div>
          <div className='boardNames'>All Pins</div>
          <div className='boardLength'>21 Pin</div>
        </div>

  )
}

export default BoardPreviewerFive