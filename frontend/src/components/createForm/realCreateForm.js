import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createPin } from '../../actions/pin_actions'
import "./realCreateForm.css"
import axios from 'axios'


function RealCreateForm() {
    const [userID,setUserID] = useState(useSelector(state => state.session.user.id))
    const [title,setTitle] = useState("")
    const [des,setDes] = useState("")
    const [url,setUrl] = useState("")
    const [idToPin,setIdtoPin] = useState("")
    const [file, setFile] = useState(null);

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

    const handleFileChange = event => {
        setFile(event.target.files[0]);
      }

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     axios.put('https://thy0sm24hj.execute-api.us-east-2.amazonaws.com/dev/sunnymeipinterest/1223.jpg', file)
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });

    //     console.log(file);
    //   }

    const handleSubmit = event => {
    event.preventDefault();
    
    fetch('https://thy0sm24hj.execute-api.us-east-2.amazonaws.com/dev/sunnymeipinterest/1223.jpg', {
        method: 'PUT',
        body: JSON.stringify(file),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
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
        <form>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Create to AWS</button>
        </form>
    </div>

  )
}

export default RealCreateForm