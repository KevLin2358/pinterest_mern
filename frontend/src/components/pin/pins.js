import React from 'react'
import Q from "../../imageComponent/images/q.jpg"
import W from "../../imageComponent/images/w.jpg"
import E from "../../imageComponent/images/e.jpg"
import R from "../../imageComponent/images/r.jpg"
function Pins() {
    const arrayOfImages = [Q,W,E,R]
    const randomImage = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)];
  return (
    <div >
        <img className='homepagePins' src={randomImage} alt="testing"></img>
    </div>
  )
}

export default Pins