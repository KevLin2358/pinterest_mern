import React from 'react';
import Navbar from '../components/nav/navbar';
import Pins from '../components/pin/pins';
import "./homepage.css"
import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import CreateForm from '../components/createForm/createForm';
import { fetchUserPin } from '../actions/pin_actions';
// import { counter } from '@fortawesome/fontawesome-svg-core';

const Home = () => {
const ref = useRef(null)

const pinsObjArr = [

    {
        "title": "Kabukichō, Shinjuku City, Tokyo, Japan",
        "image": "https://i.pinimg.com/564x/36/ed/18/36ed18c06046243361715643dc190f0c.jpg",
        "description": "Image via Unsplash. Edited by H Designs, in Lightroom. Image Captured by Manuel Velasquez. Original Image Here. (Redbubble, INPRNT)",
        "link": "https://www.pinterest.com/pin/808325833132761852/"
    },
   
        
]

    return (
        <React.Fragment>
            <Navbar/>
            <div ref={ref} className='homePageContainer'>
                <div className='homePageBodyFlex'>
                    <div className='homePageBody'>
                    {   
                    //
                        pinsObjArr.map((pinObj) => {
                            return(
                                <Pins url={pinObj}/>
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