import React, { useState,useEffect, useRef  } from 'react'
import Navbar from '../components/nav/navbar'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchUserPin } from '../actions/pin_actions'
import { fetchBoards } from '../actions/board_actions'
import { fetchSaves } from '../actions/save_actions'
import { fetchSinglePin } from '../actions/pin_actions'
import Pins from '../components/pin/pins'
import "./homepage.css"
function BoardPage(props) {
    const dispatch = useDispatch()
    const id = useSelector(state => state.session.user.id)
    const [pins,setPins] = useState([])
    const [saves,setSaves] = useState("")
    const ref = useRef(null)
    const [board,setBoard] = useState("")

    useEffect(() => {
        // dispatch(fetchUserPin(id)).then(res =>setPins(()=>res.pins.data))
        dispatch(fetchSaves(props.match.params.boardId)).then(res => setSaves(res.saves.data))
    }, [])

    useEffect(()=>{
        if (saves !== ""){
            saves.map(e => dispatch(fetchSinglePin(e.pin)).then((res => {
                // console.log(pins)
                setPins(pins => [...pins, res.pins.data])
            })))
        }

    },[saves])
    console.log(props.match.params.boardId)
    
    // if(board === "") return null
    return (
    <div>
        <Navbar/>
        <React.Fragment>
            <div ref={ref} className='homePageContainer'>
                <div className='homePageBodyFlex'>
                    {/* <div onClick={increaseVh} className='homePageBody'> */}
                    <div className='homePageBody'>
                        {
                            pins.map((pin) => {
                                return(
                                    <Pins url={pin} key={pin._id}/>
                                )
                            } )
                        }
                        <div>This is BoardPage</div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    </div>
  )
}

export default BoardPage