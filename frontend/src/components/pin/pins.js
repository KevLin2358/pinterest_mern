import React from 'react'
import "./pins.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createSave } from '../../actions/save_actions'
import { useDispatch, useSelector } from 'react-redux'
import DropdownMenuHomePage from '../dropdownMenu/dropdownMenuHomePage'
function Pins({url,board}) {
    const [current,setCurrent] = useState(null)
    //current will be the size of the image
    const [isShown, setIsShown] = useState(false);
    let state = useSelector(state => state)
    const dispatch = useDispatch()

    const onSave = (e) => {
        e.preventDefault()
        console.log(state)
    }

    const onSaveBoard = (e) => {
        e.preventDefault()
        console.log(state)
    }
    
    let boardList = null
    if(board){
        boardList = board.map(e => {
            return(
                <div key={e._id}>{e.title} </div>
            )
        })
    }
    // console.log(url === null)

    const renderPin = (url) => {

        let titleLen = (url.title.length)
        let dynamicHeight = ""
        let dynamicHeightFunction = () => {
            let numberOfLines = Math.floor(titleLen/25)
            let dynamicHeightNum = 100-((numberOfLines)*3.1)
            //every line 25(char) will -3 off height

            // console.log(numberOfLines,dynamicHeightNum)

            dynamicHeight = dynamicHeightNum.toString()+"%"
            //change number to string plus %

        }

        dynamicHeightFunction()
        // if (boardList === null) return null
        const img = new Image();
        img.src = url.image;
        img.onload = (e) => {
            // need onload cause its async and for math to work
            if(img.width < 200) return null 
            else if (img.height/img.width <= 1.2) {
                setCurrent (
                        <div key={Math.floor(Math.random() * 2500)} 
                        className='card card_small'
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                            <Link to={{pathname:`/pins/${url._id}`, fromDashboard: "true" }}>
                            <img className='imgBorder' style={{height:dynamicHeight}} src={img.src} 
                            alt="smallCard"></img>
                            {isShown &&
                            <div className='onHoverCont'>
                            <button className='onHover' onClick={(e)=> onSave(e)}>
                                Save
                            </button>                                
                            <div className='homepageDropdown' onClick={(e)=> onSaveBoard(e)}>
                            {/* <DropdownMenuHomePage board={board} /> */}
                            </div>
                            </div>
                        }

                            <div className='homepagePinsText'>{url.title}</div>
                            </Link>
                        </div>
                )
            }
            else if (img.height/img.width > 1.2 && img.height/img.width < 1.5){
                setCurrent (
                    <div key={Math.floor(Math.random() * 2500)} 
                    className='card card_medium'
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                        <Link to={{pathname:`/pins/${url._id}`, fromDashboard: "true" }}>
                        <img className='imgBorder' 
                        style={{height:dynamicHeight}} 
                        src={img.src} alt="medCard"
                        ></img>
                            {isShown &&
                            <div className='onHoverCont'>

                            <button className='onHover' onClick={(e)=> onSave(e)}>
                                Save
                            </button>                                
                            <div className='homepageDropdown' onClick={(e)=> onSaveBoard(e)}>
                            {/* <DropdownMenuHomePage board={board} /> */}
                            </div>
                            </div>
                        }

                        <div className='homepagePinsText'>{url.title}</div>
                        </Link>
                    </div>
                   )
            }
            else if (img.height/img.width >= 1.5) {
                setCurrent(
                    <div key={Math.floor(Math.random() * 2500)} 
                    className='card card_large'
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    >
                        <Link to={{pathname:`/pins/${url._id}`, fromDashboard: "true" }}>
                        <img className='imgBorder' 
                        style={{height:dynamicHeight}} 
                        src={img.src} alt="largeCard"
                        ></img>
                            {isShown &&
                            <div className='onHoverCont'>
                            <button className='onHover' onClick={(e)=> onSave(e)}>
                                Save
                            </button>                                
                            <div className='homepageDropdown' onClick={(e)=> onSaveBoard(e)}>
                            {/* <DropdownMenuHomePage board={board} /> */}
                            </div>
                            </div>
                        }

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
      },[url,isShown,board]);


    return(
        current
    )

}

export default Pins