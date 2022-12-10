import React from 'react';
import Navbar from '../components/nav/navbar';
import Pins from '../components/pin/pins';
import "./homepage.css"
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllPins } from '../actions/pin_actions';
import { fetchBoards } from '../actions/board_actions';
// import { counter } from '@fortawesome/fontawesome-svg-core';

const Home = () => {
const ref = useRef(null)
const dispatch = useDispatch()
const [array,setArray] = useState("")
const board = useSelector(state => state.board.data)

useEffect(()=> {
    dispatch(fetchAllPins()).then(res => setArray(res.pins.data))
    //getting all pins and then making a array of obj
},[])




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