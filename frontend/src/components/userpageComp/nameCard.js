import React from 'react'
import { useSelector,useEffect } from 'react-redux'
import "./nameCard.css"

function NameCard() {
    const info = useSelector(state => state.session.info)


    if (info){
        return (
            <div className='nameCardCon'>
            <div id="container" >
                  <div id="name">
                  {info[0].email[0].toUpperCase()}
                  </div>
            </div>
                <div className='handleNameCard'>{info[0].handle}</div>
                <div className='emailNameCard'>{info[0].email}</div>
            </div>
          )
    }

}

export default NameCard