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
function Pins() {
    const [current,setCurrent] = useState(null)
    // img.onload = () => {
    //     console.log(img.height);
    //     console.log(img.width);
    //   };
    // need this to determine which ratio card is the best
    // console.log(img.src)

    const renderPin = () => {
        const arrayOfImages = [Q,W,E,R,T,U,Y]
        const urls = [
            "https://i.pinimg.com/236x/08/14/cb/0814cb77785e2cfb74bef79268b2337b.jpg",
            "https://i.pinimg.com/140x140_RS/a7/81/e2/a781e2a5ec3c0016b4b2e7cda5c9d46c.jpg",
            "https://i.pinimg.com/236x/86/98/3e/86983e2b37eca076e9b8546a1c2a1dab.jpg",
            "https://i.pinimg.com/236x/5a/f0/b2/5af0b2dc02cd9e5add8f0a5a52240b91.jpg",
            "https://i.pinimg.com/236x/6b/02/dd/6b02dd1bc8d3af10172d0d903a76cd7b.jpg",
            "https://i.pinimg.com/236x/c4/30/d5/c430d5b7c4340efa2092ba412520a121.jpg",
            "https://i.pinimg.com/236x/af/0f/20/af0f20dc52d087c0c8e83f877d60359a.jpg",
            "https://i.pinimg.com/236x/14/4d/e9/144de922f1d8a6cd8bf51b17df71b8fe.jpg",
            "https://i.pinimg.com/140x140_RS/9a/e6/53/9ae6537702bf6992f56940dada13c74e.jpg",
            "https://i.pinimg.com/236x/0b/27/5c/0b275ca8f779d71193d70399954d0623.jpg",
            "https://i.pinimg.com/140x140_RS/9a/e6/53/9ae6537702bf6992f56940dada13c74e.jpg",
            "https://i.pinimg.com/236x/86/ba/3a/86ba3a40ff21bed333ec352ab0ce8e56.jpg",
            "https://i.pinimg.com/236x/f8/9c/fc/f89cfc232438a6b5034eb9bf0cb07e44.jpg",
            "https://i.pinimg.com/236x/02/cd/a5/02cda5a7bdd1366f27558938b40f2168.jpg",
            "https://i.pinimg.com/236x/69/6a/6a/696a6a2309dd5ef74e89119c7047e71b.jpg",
            "https://i.pinimg.com/236x/63/ba/1c/63ba1c6a3c26a2bdfa998fcb2c687e92.jpg",
            "https://i.pinimg.com/236x/d5/3d/99/d53d99decd9fc599c7ce4fde0844d6c9.jpg",
            "https://i.pinimg.com/236x/8d/1f/62/8d1f620c8236747eca360eba2a864623.jpg",
            "https://i.pinimg.com/236x/97/61/76/976176bc94b04173f092d0f481feba21.jpg",
            "https://i.pinimg.com/236x/b8/6a/42/b86a42edc0957963cfdd3717decbb690.jpg",
            "https://i.pinimg.com/236x/6a/93/4c/6a934c84e89b025ae71690e34bd16e66.jpg",
            "https://i.pinimg.com/236x/c4/58/4d/c4584d756eeb2dd935a42446154d2cea.jpg",
            "https://i.pinimg.com/236x/6d/64/c0/6d64c05b5573d7d8623bc1918d6fcaef.jpg",
            "https://i.pinimg.com/236x/8f/39/2e/8f392e0a0f47c7a85fa726cabff0f043.jpg",
            "https://i.pinimg.com/236x/15/9d/cd/159dcd0bc55f0747f203cb87f3a331fd.jpg",
            "https://i.pinimg.com/236x/5a/9e/8a/5a9e8afc7a8235b26349d13ed8a0fb2f.jpg",
            "https://i.pinimg.com/236x/ed/39/b2/ed39b20fe025ae08e9e5443e51d1c4d2.jpg",
            "https://i.pinimg.com/236x/e6/2e/4b/e62e4b31736406c79bb1fd893498100f.jpg",
            "https://i.pinimg.com/236x/1d/d4/cd/1dd4cd42f6254b28c6cbe9f1f1ec558b.jpg",
            "https://i.pinimg.com/236x/f0/2c/26/f02c2698e84b836a24eab1fca48f61fc.jpg",
            "https://i.pinimg.com/140x140_RS/53/31/80/53318083727313e9b151af954607616f.jpg",
            "https://i.pinimg.com/236x/7b/df/d0/7bdfd040e83654e73d1f0c54413a01f2.jpg",
            "https://i.pinimg.com/236x/ab/f9/32/abf9325a2280aca64ee6fb84e6c64085.jpg",
            "https://i.pinimg.com/236x/0e/a2/f1/0ea2f1a90459f96c9e41ce4a150e6cbd.jpg",
            "https://i.pinimg.com/236x/d5/56/39/d556396edd1e7eece0a973f860aa5460.jpg"
            ]
        const randomImage = arrayOfImages[Math.floor(Math.random()*arrayOfImages.length)];
        const randomNumber = Math.floor(Math.random()*arrayOfImages.length)
        
        const img = new Image();
        img.src = randomImage;

        console.log(img.width)

    // if (img.width < 150) setCurrent(null)
    if (img.height/img.width <= 1.2) {
        setCurrent (
                <div key={Math.floor(Math.random() * 2500)} className='card card_small' onClick={()=>console.log("asd")}>
                    <Link to={{pathname:"/single", fromDashboard: "true" }}>
                    <img style={{width:"100%",height:"100%"}} src={img.src} alt="testing"></img>
                    <div className='homepagePinsText'>Amazing Japan</div>
                    </Link>
                </div>
            
        )
    }
    // else if (img.height < img.width){

    // }
    else if (img.height/img.width > 1.2 && img.height/img.width < 1.5){
        setCurrent (
            <div key={Math.floor(Math.random() * 2500)} className='card card_medium' onClick={()=>window.location.href = img.src}>
                <img style={{width:"100%",height:"100%"}} src={img.src} alt="testing"></img>
                <div className='homepagePinsText'>Amazing Japan dsaaaaaaaaadsad</div>
            </div>
           )
    }
    else {
        setCurrent(
            <div  className='card card_large' onClick={()=>window.location.href = img.src}>
                <img style={{width:"100%",height:"100%"}} src={img.src} alt="testing"></img>
            <div className='homepagePinsText'>Amazing Japan</div>
        </div>
        )
    }
    }

    useEffect(() => {
        // Update the document title using the browser API
        renderPin()
        console.log("Running")
        console.log(current)
      },[]);

    console.log(current)
    if (!current) return null
    return(
        current
    )
    
    // else{
    //     return (
    //     <div>No results</div>
    //     )
    // }
    
    // <div className='card card_medium'></div>
    // <div className='card card_large'></div>
//   )
}

export default Pins