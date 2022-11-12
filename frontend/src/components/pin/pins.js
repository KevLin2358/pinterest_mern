import React from 'react'
import Q from "../../imageComponent/images/q.jpg"
import W from "../../imageComponent/images/w.jpg"
import E from "../../imageComponent/images/e.jpg"
import R from "../../imageComponent/images/r.jpg"
function Pins() {
    const arrayOfImages = [Q,W,E,R]
    const randomImage = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)];
    const randomNumber = Math.floor(Math.random()*arrayOfImages.length)
//   return (
    // <div >
        // <img style={{width:"250px"}} src={randomImage} alt="testing"></img>
    //     <div >Amazing Japan</div>
    // </div>

    const img = new Image();
    img.src = randomImage;
    img.onload = () => {
        console.log(img.height);
        console.log(img.width);
      };

    if (img.height/img.width < 1.3) {
        return (
         <div className='card card_small'>
            <img style={{width:"100%",height:"100%"}} src={randomImage} alt="testing"></img>
            <div className='homepagePinsText'>Amazing Japan</div>
            </div>
        )
    }
    // else if ((randomNumber === 1)){
    //     return (
    //         <div className='card card_medium'></div>
    //        )
    // }
    else{
        return <div className='card card_large'>
            <img style={{width:"100%",height:"100%"}} src={randomImage} alt="testing"></img>
            <div className='homepagePinsText'>Amazing Japan</div></div>
    }
    
    // <div className='card card_medium'></div>
    // <div className='card card_large'></div>
//   )
}

export default Pins