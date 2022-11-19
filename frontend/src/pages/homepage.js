import React from 'react';
import Navbar from '../components/nav/navbar';
import Pins from '../components/pin/pins';
import "./homepage.css"
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import CreateForm from '../components/createForm/createForm';
import { fetchUserPin } from '../actions/pin_actions';
import { fetchAllPins } from '../actions/pin_actions';
// import { counter } from '@fortawesome/fontawesome-svg-core';

const Home = () => {
const ref = useRef(null)
const dispatch = useDispatch()
const [array,setArray] = useState("")


useEffect(()=> {
    dispatch(fetchAllPins()).then(res => setArray(res.pins.data))
    //getting all pins and then making a array of obj
},[])

if (array === "") return null
    return (
        <React.Fragment>
            <Navbar/>
            <div ref={ref} className='homePageContainer'>
                <div className='homePageBodyFlex'>
                    <div className='homePageBody'>
                    {   
                    //
                        array.map((pinObj) => {
                            return(
                                <Pins url={pinObj} key={pinObj._id}/>
                            )
                        } )
                    }
                        <div>This is homepage</div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Home