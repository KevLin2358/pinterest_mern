import React from 'react'
import Navbar from '../components/nav/navbar'
import "./singlePinPage.css"
import Q from "../imageComponent/images/q.jpg"
function SinglePin({url}) {
  return (
    <React.Fragment>
       <Navbar/>
       <div className='singlePageContainer'>
            <div className='singlePageBody'>
                <div className='singlePageCenter'>
                    <div className='singlePageCenterLeft'><img src={Q}></img></div>
                    <div className='singlePageCenterRight'><img src={Q}></img></div>
                </div>
            </div>
       </div>
    </React.Fragment>
  )
}

export default SinglePin