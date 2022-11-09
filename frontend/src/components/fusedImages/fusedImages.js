import React from 'react'
import Q from "../../imageComponent/images/q.jpg"
import W from "../../imageComponent/images/w.jpg"
import E from "../../imageComponent/images/e.jpg"
import "./fusedImages.css"
function fusedImages() {
  return (
    <div className='fuseImagesContainer'>
        <div className='fuseImagesText'>Cyberpunk Wallpaper and more ideas you've been looking for</div>
        <div className='fuseImagesBody'>
            <img src={Q} alt='q'></img>
            <img src={W} alt='w'></img>
            <img src={E} alt='e'></img>
        </div>
    </div>
  )
}

export default fusedImages