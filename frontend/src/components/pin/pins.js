import React from 'react'
import "./pins.css"
import Q from "../../imageComponent/images/q.jpg"
import W from "../../imageComponent/images/w.jpg"
import E from "../../imageComponent/images/e.jpg"
import R from "../../imageComponent/images/r.jpg"
import U from "../../imageComponent/images/u.jpg"
import T from "../../imageComponent/images/t.jpg"
import Y from "../../imageComponent/images/y.jpg"
import SinglePin from '../../pages/singlePinPage'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Pins({url}) {
    const [current,setCurrent] = useState(null)
    //current will be the size of the image

    const renderPin = (url) => {

        const img = new Image();
        img.src = url.image;
        img.onload = (e) => {
            // need onload cause its async and for math to work
            if(img.width < 200) return null 
            else if (img.height/img.width <= 1.2) {
                setCurrent (
                        <div key={Math.floor(Math.random() * 2500)} className='card card_small'>
                            <Link to={{pathname:`/pins/${url._id}`, fromDashboard: "true" }}>
                            <img className='imgBorder' style={{width:"100%",height:"100%"}} src={img.src} alt="smallCard"></img>
                            <div className='homepagePinsText'>{url.title}</div>
                            </Link>
                        </div>
                )
            }
            else if (img.height/img.width > 1.2 && img.height/img.width < 1.5){
                setCurrent (
                    <div key={Math.floor(Math.random() * 2500)} className='card card_medium'>
                        <Link to={{pathname:`/pins/${url._id}`, fromDashboard: "true" }}>
                        <img className='imgBorder' style={{width:"100%",height:"100%"}} src={img.src} alt="medCard"></img>
                        <div className='homepagePinsText'>{url.title}</div>
                        </Link>
                    </div>
                   )
            }
            else if (img.height/img.width > 1.5) {
                setCurrent(
                    <div  className='card card_large'>
                        <Link to={{pathname:`/pins/${url._id}`, fromDashboard: "true" }}>
                        <img className='imgBorder' style={{width:"100%",height:"100%"}} src={img.src} alt="largeCard"></img>
                        <div className='homepagePinsText'>{url.title}</div>
                        </Link>
                </div>
                )
            }
            else {
                console.log(img.height,img.width,img.height/img.width)
            }
        }

        }
        
    useEffect(() => {
        // Update the document title using the browser API
        renderPin(url)
      },[url]);


    return(
        current
    )

}

export default Pins