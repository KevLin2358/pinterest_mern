import React from 'react'
import "./pins.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
function Pins({url}) {
    const [current,setCurrent] = useState(null)
    //current will be the size of the image

    const renderPin = (url) => {

        let numberOfChar = {
            one:"100%",
            two:"96%",
            three:"92%"
        }

        let titleLen = (url.title.length)
        let dynamicHeight = ""
        if (Math.floor(titleLen/25) <= 1){
            dynamicHeight = numberOfChar.one
        }else if (Math.floor(titleLen/25) <= 2){
            dynamicHeight = numberOfChar.two
        }
        else{
            dynamicHeight = numberOfChar.three
            console.log(titleLen)
        }



        const img = new Image();
        img.src = url.image;
        img.onload = (e) => {
            // need onload cause its async and for math to work
            if(img.width < 200) return null 
            else if (img.height/img.width <= 1.2) {
                setCurrent (
                        <div key={Math.floor(Math.random() * 2500)} className='card card_small'>
                            <Link to={{pathname:`/pins/${url._id}`, fromDashboard: "true" }}>
                            <img className='imgBorder' style={{height:dynamicHeight}} src={img.src} alt="smallCard"></img>
                            <div className='homepagePinsText'>{url.title}</div>
                            </Link>
                        </div>
                )
            }
            else if (img.height/img.width > 1.2 && img.height/img.width < 1.5){
                setCurrent (
                    <div key={Math.floor(Math.random() * 2500)} className='card card_medium'>
                        <Link to={{pathname:`/pins/${url._id}`, fromDashboard: "true" }}>
                        <img className='imgBorder' style={{height:dynamicHeight}} src={img.src} alt="medCard"></img>
                        <div className='homepagePinsText'>{url.title}</div>
                        </Link>
                    </div>
                   )
            }
            else if (img.height/img.width >= 1.5) {
                setCurrent(
                    <div  className='card card_large'>
                        <Link to={{pathname:`/pins/${url._id}`, fromDashboard: "true" }}>
                        <img className='imgBorder' style={{height:dynamicHeight}} src={img.src} alt="largeCard"></img>
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