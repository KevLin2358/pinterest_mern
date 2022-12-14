import React, { useState,useEffect, useRef  } from 'react'
import Navbar from '../components/nav/navbar'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchUserPin } from '../actions/pin_actions'
import { fetchBoards } from '../actions/board_actions'
import { fetchSaves } from '../actions/save_actions'
import Pins from '../components/pin/pins'
import { Link } from 'react-router-dom'
import BoardPreviewer from '../components/boardPreviewer/boardPreviewer'
import "./homepage.css"
import NameCard from '../components/userpageComp/nameCard.js'
function UserPage() {
    const dispatch = useDispatch()
    const id = useSelector(state => state.session.user.id)
    const [pins,setPins] = useState([])
    const ref = useRef(null)
    const [board,setBoard] = useState("")

    useEffect(() => {
        if(!id){
            window.location.href = '/login'
        }
        if(id){
            dispatch(fetchUserPin(id)).then(res =>setPins(()=>res.pins.data))
            dispatch(fetchBoards(id)).then(res =>setBoard(()=>res.boards.data))
        }
    }, [])



    if(board === "") return null



    const pinList = pins.map((pin) => {
        return(
            <Pins url={pin} key={pin._id} board={board}/>
        )
    } )
    // console.log(pinList)

    return (
    <div>
        <Navbar/>
        <React.Fragment>
            <NameCard/>
            <div className='userPageContainer'>
                <BoardPreviewer board={board}/>
                {/* <div>
                    {boardList}
                </div> */}
                <div ref={ref} className='homePageContainer'>
                    <div className='homePageBodyFlex'>
                        {/* <div onClick={increaseVh} className='homePageBody'> */}
                        <div className='homePageBody'>
                            {pinList}
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    </div>
  )
}

export default UserPage