import React from 'react';
import Navbar from '../components/nav/navbar';
import Pins from '../components/pin/pins';
import "./homepage.css"
import { useState, useEffect, useRef } from 'react'
import { counter } from '@fortawesome/fontawesome-svg-core';

const Home = () => {
const [counter, setCounter] = useState(100)
const [height, setHeight] = useState("100vh")
const ref = useRef(null)
const heightInString = height+"vh"
// const [arrayOfPins,setArrayOfPins] = useState(<div><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins><Pins></Pins></div>)
    // useEffect(() => {
    //     setHeight("100vh")
    //     console.log(ref)
    //     // if (7*200 > height)
    // })

    // const increaseVh = () => {
    //     setHeight(() => counter+"vh")
    //     setCounter(() => counter+50)
    //     console.log(counter)
    // }

    return (
        <React.Fragment>
            <Navbar/>
            <div ref={ref} className='homePageContainer'>
                <div className='homePageBodyFlex'>
                    {/* <div onClick={increaseVh} className='homePageBody'> */}
                    <div className='homePageBody'>
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
                        {/* <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div>
                        <div className='card card_large'><Pins/></div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* <div className='card card_large'>asd</div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* <div className='card card_small'>asd</div> */}
                        {/* {arrayOfPins} */}
                        {/* <Pins/>
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
                        <Pins/> */}
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