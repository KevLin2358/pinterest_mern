import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createPin } from '../../actions/pin_actions'
import "./realCreateForm.css"
function RealCreateForm() {
    const [userID,setUserID] = useState(useSelector(state => state.session.user.id))
    const [title,setTitle] = useState("")
    const [des,setDes] = useState("")
    const [url,setUrl] = useState("")
    const [idToPin,setIdtoPin] = useState("")

    const dispatch = useDispatch()

    const createPinButton = () => {
        const newPin = {
            user:userID,
            image: url,
            title: title,
            description: des,
            link:url
        }
    dispatch(createPin(newPin)).then(pin => setIdtoPin(pin.pin.data._id))
    }

    useEffect(()=>{
        if(idToPin === "") return null //need to return null cause it will redirect too quick
        window.location = window.location.origin+"/pins/"+idToPin
        //change link once id is true
        //have to use useeffect cause I need to from a string
      },[idToPin])


  return (
    <div className='realCreateFormContainer'>
        <div className='realCreateFormContainerInner'>
            <form className='realCreateFormForm'>
                <input className='realCreateFormFormInput' 
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ></input>
                <input className='realCreateFormFormInput' 
                placeholder='Description'
                value={des}
                onChange={(e) => setDes(e.target.value)}
                ></input>
                <input className='realCreateFormFormInput' 
                placeholder='URL'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                >
                </input>
            </form>
            <button onClick={createPinButton}>Create</button>
        </div>
    </div>

  )
}

export default RealCreateForm