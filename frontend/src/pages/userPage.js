import React, { useState,useEffect, useRef  } from 'react'
import Navbar from '../components/nav/navbar'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchUserPin } from '../actions/pin_actions'
import Pins from '../components/pin/pins'
import "./homepage.css"
function UserPage() {
    const dispatch = useDispatch()
    const id = useSelector(state => state.session.user.id)
    const [pins,setPins] = useState([])
    const ref = useRef(null)

    useEffect(() => {
        dispatch(fetchUserPin(id)).then(res =>setPins(()=>res.pins.data))
    }, [])
    
    // console.log(pins)
    // if(pins.length === 0) return null
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
                                    <Pins url={pin}/>
                                )
                            } )
                        }
                        <div>This is homepage</div>
                    </div>
                </div>

            </div>
        </React.Fragment>

    </div>
  )
}

export default UserPage