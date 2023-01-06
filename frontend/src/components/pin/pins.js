import React from 'react'
import "./pins.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createSave } from '../../actions/save_actions'
import { useDispatch, useSelector } from 'react-redux'
import DropdownMenuHomePage from '../dropdownMenu/dropdownMenuHomePage'
import { deleteSave } from '../../actions/save_actions'
function Pins({url,board,pinSaveId,showPopup}) {
    const [current,setCurrent] = useState(null)
    //current will be the size of the image
    const [isShown, setIsShown] = useState(false);
    const [boardList, setboardList] = useState([]);
    let state = useSelector(state => state)
    const dispatch = useDispatch()
    // console.log(pinSaveId)
    const onSave = (e) => {
        e.preventDefault()
        // const pinObj = {
        //     pin:pinId,
        //     board:e._id
        //   }
        console.log(board[0])
        // const defaultBoard = board.filter(e => e.default === true)
        // console.log(defaultBoard[0]._id,url._id)

        const pinObj = {
            pin:url._id,
            board:board[0]._id
          }

        dispatch(createSave(pinObj))
    }

    const onSaveBoard = (e) => {
        // e.preventDefault()
        // console.log(state,url)
    }

    const onUnSaveBoard = (e) => {
        // e.preventDefault()
        dispatch(deleteSave(pinSaveId))
    }
    
    useEffect(() => {
        if(board){
            board.map(e => {

                setboardList(() => <div key={e._id}>{e.title} </div>)

        })
        }

    }, [board])
    

    const hoverDiv = 
    isShown &&
    <div className='onHoverCont'>
        {pinSaveId 
        ?
        <button className='onHover' onClick={(e)=> onUnSaveBoard(e)}>
            UnSaved
        </button>
        :
        <button className='onHover' onClick={(e)=> onSave(e)}>
            Save
        </button>
        }
    <div className='homepageDropdown' onClick={(e)=> onSaveBoard(e)}>
 
        <DropdownMenuHomePage board={board} homepagePinId={url._id} showPopup={showPopup}/>

    </div>
    </div>
    

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


        let LinkDiv = 
        <Link to={{pathname:`/pins/${url._id}`, fromDashboard: "true" }}>
        <img className='imgBorder' style={{height:dynamicHeight}} src={img.src} 
        alt="smallCard"></img>
        </Link>

        img.onload = (e) => {
            // need onload cause its async and for math to work
            if(img.width < 200) return null 
            else if (img.height/img.width <= 1.2) {
                setCurrent (
                    <div key={Math.floor(Math.random() * 2500)} 
                    className='card card_small'
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                        {LinkDiv}
                        {hoverDiv}
                        <div className='homepagePinsText'>{url.title}</div>
                    </div>
                )
            }
            else if (img.height/img.width > 1.2 && img.height/img.width < 1.5){
                setCurrent (
                    <div key={Math.floor(Math.random() * 2500)} 
                    className='card card_medium'
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                        {LinkDiv}
                        {hoverDiv}
                        <div className='homepagePinsText'>{url.title}</div>
                    </div>
                   )
            }
            else  {
                setCurrent(
                    <div key={Math.floor(Math.random() * 2500)} 
                    className='card card_large'
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                        {LinkDiv}
                        {hoverDiv}
                        <div className='homepagePinsText'>{url.title}</div>
                    </div>
                )
            }
            // else {
            //     console.log(img.height,img.width,img.height/img.width)
            // }
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