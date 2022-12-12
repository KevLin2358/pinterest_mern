import React from 'react';
import Navbar from '../components/nav/navbar';
import Pins from '../components/pin/pins';
import "./homepage.css"
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPins } from '../actions/pin_actions';
import { fetchBoards } from '../actions/board_actions';
import { fetchSavesWithLimitOne } from '../actions/save_actions';
// import { counter } from '@fortawesome/fontawesome-svg-core';

const Home = () => {
const ref = useRef(null)
const dispatch = useDispatch()
const [array,setArray] = useState("")
const board = useSelector(state => state.board.data)
const [boardPic,setboardPic] = useState(null)

useEffect(()=> {
    dispatch(fetchAllPins()).then(res => setArray(res.pins.data))
    //getting all pins and then making a array of obj
},[])

// useEffect(()=> {
//     if(boardPic === null && board){
//         console.log(board)
//         board.map(e => {
//             dispatch(fetchSavesWithLimitOne(e.id)).then(res => setboardPic([...boardPic,res]))
//         })
//     }
//     //getting all pins and then making a array of obj
// },[board])




if (array === "") return null

const pinList = 
    array.map((pinObj) => {
        return(
            <Pins url={pinObj} key={pinObj._id} board={board}/>
        )
    } )
    return (
        <React.Fragment>
        <Navbar/>
        <div ref={ref} className='homePageContainer'>
            <div className='homePageBodyFlex'>
                <div className='homePageBody'>
                {pinList}
                    <div>This is homepage</div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Home