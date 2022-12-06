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
function UserPage() {
    const dispatch = useDispatch()
    const id = useSelector(state => state.session.user.id)
    const [pins,setPins] = useState([])
    const ref = useRef(null)
    const [board,setBoard] = useState("")

    useEffect(() => {
        dispatch(fetchUserPin(id)).then(res =>setPins(()=>res.pins.data))
        dispatch(fetchBoards(id)).then(res =>setBoard(()=>res.boards.data))
    }, [])

    // useEffect(() => {
    //     console.log(board)
    //     if (board !== ""){
    //         board.map(e => dispatch(fetchSaves(e._id)))
    //     }
    // }, [board])
    
    if(board === "") return null
    return (
    <div>
        <Navbar/>
        <React.Fragment>
            <BoardPreviewer/>
            <div>
                {board.map(e => {
                    return(
                    <Link
                        to={{
                            pathname: `/boards/${e._id}`,
                            boardId: e._id
                        }}
                        >
                        <button >{e.title}</button>
                    </Link>
                    )
                })}
            </div>

            <div ref={ref} className='homePageContainer'>
                <div className='homePageBodyFlex'>
                    {/* <div onClick={increaseVh} className='homePageBody'> */}
                    <div className='homePageBody'>
                        {
                            pins.map((pin) => {
                                return(
                                    <Pins url={pin} key={pin.id}/>
                                )
                            } )
                        }
                        <div>This is UserPage</div>
                    </div>
                </div>

            </div>
        </React.Fragment>

    </div>
  )
}

export default UserPage