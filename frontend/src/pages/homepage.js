import React from 'react';
import Navbar from '../components/nav/navbar';
import Pins from '../components/pin/pins';
import "./homepage.css"
import { useState, useEffect, useRef } from 'react'

const Home = () => {
// const number = 1000;
const [height, setHeight] = useState(0)
const ref = useRef(null)
const heightInString = height+"px"

    useEffect(() => {
        setHeight(ref.current.clientHeight+ref.current.clientHeight*.5)
        console.log(height)
    })

    return (
        <React.Fragment>
            <Navbar/>
            <div ref={ref} className='homePageContainer'>
                <div className='homePageBodyFlex'>
                    <div style={{maxHeight: heightInString}} className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    {/* <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div>
                    <div className='homePageBody'>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                        <Pins/>
                    </div> */}
                </div>

            </div>
        </React.Fragment>
    )
}

export default Home