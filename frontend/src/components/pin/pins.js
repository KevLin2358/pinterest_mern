import React from 'react'
import Q from "../../imageComponent/images/q.jpg"
import W from "../../imageComponent/images/w.jpg"
import E from "../../imageComponent/images/e.jpg"
import R from "../../imageComponent/images/r.jpg"
import U from "../../imageComponent/images/u.jpg"
import T from "../../imageComponent/images/t.jpg"
import Y from "../../imageComponent/images/y.jpg"
function Pins() {
    const arrayOfImages = [Q,W,E,R,T,U,Y]
    const randomImage = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)];
    const randomNumber = Math.floor(Math.random()*arrayOfImages.length)

    const img = new Image();
    img.src = randomImage;
    img.onload = () => {
        console.log(img.height);
        console.log(img.width);
      };
    // need this to determine which ratio card is the best

    if (img.height/img.width < 1.2) {
        return (
            <div className='card card_small'>
                <img style={{width:"100%",height:"100%"}} src={randomImage} alt="testing"></img>
                <div className='homepagePinsText'>Amazing Japan</div>
            </div>
        )
    }
    else if (img.height/img.width > 1.2 && img.height/img.width < 1.5){
        return (
            <div className='card card_medium'>
                <img style={{width:"100%",height:"100%"}} src={randomImage} alt="testing"></img>
                <div className='homepagePinsText'>Amazing Japan</div>
            </div>
           )
    }
    else{
        return (
            <div className='card card_large'>
                <img style={{width:"100%",height:"100%"}} src={randomImage} alt="testing"></img>
                <div className='homepagePinsText'>Amazing Japan</div>
            </div>
        )
    }
    
    // <div className='card card_medium'></div>
    // <div className='card card_large'></div>
//   )
}

export default Pins