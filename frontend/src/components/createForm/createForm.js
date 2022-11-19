import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { createPin } from "../../actions/pin_actions";
import { useSelector } from "react-redux";
import { fetchUserPin } from "../../actions/pin_actions";
import { useEffect } from "react";
import "./createForm.css"
function CreateForm() {
    const [userID,setUserID] = useState(useSelector(state => state.session.user.id))
    const [id,setId] = useState("")
    const [image,setImage] = useState("")
    const [text,setText] = useState("")
    const [description,setdescription] = useState("")
    const [link,setLink] = useState("pintrest.com")
    const [obj,setObj] = useState("")
    const dispatch = useDispatch()

    const onSubmit = () => {
        let obj2 = obj.split("~#")
        //taking in an obj to populate field, had to split withn ~=#
        const newPin = {
            user:userID,
            image: obj2[1],
            title: obj2[0],
            description: obj2[2],
            link:obj2[3]
            }
        // console.log(newPin)
        
        dispatch(createPin(newPin)).then(pin => setId(pin.pin.data._id))
        //after a new pin is create I have wait for reponse and set the pin id response
    }

    useEffect(() => {
      dispatch(fetchUserPin(userID))
      //need to get the user id cause it is for submittion
    }, [])
    

    useEffect(()=>{
      if(id === "") return null //need to return null cause it will redirect too quick
      window.location = window.location.origin+"/pins/"+id
      //change link once id is true
      //have to use useeffect cause I need to from a string
    },[id])


  return (
    <div className="createFormContainer">
        {/* CreateForm */}
        {/* <form className="createFormInner">
            <input
            value={userID}
            placeholder="userid"
            onChange={(e) => setUserID(e.target.value)}
            >           
            </input>
            aaaaaaaaaaaa
            <input
            value={image}
            placeholder="image"
            onChange={(e) => setImage(e.target.value)}
            >           
            </input>

            <input
            value={text}
            placeholder="text"
            onChange={(e) => setText(e.target.value)}
            >           
            </input>

            <input
            value={description}
            placeholder="description"
            onChange={(e) => setdescription(e.target.value)}
            >           
            </input>

            <input
            value={link}
            placeholder="link"
            onChange={(e) => setLink(e.target.value)}
            >           
            </input>
        </form>
        <button style={{fontSize:"33px"}} onClick={onSubmit}></button> */}
        <form className="objectForm">
            <input className="inputSpace"
            type="textbox"
            value={obj}
            placeholder="obj"
            onChange={(e) => setObj(e.target.value)}
            >           
            </input>
        </form>
        <button className="submitButton" style={{fontSize:"33px"}} onClick={onSubmit}></button>
    </div>
  )
}

export default CreateForm

