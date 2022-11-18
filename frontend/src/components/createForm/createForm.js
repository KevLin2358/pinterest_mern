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
    const [image,setImage] = useState("")
    const [text,setText] = useState("")
    const [description,setdescription] = useState("")
    const [link,setLink] = useState("pintrest.com")

    const dispatch = useDispatch()

    const onSubmit = () => {
        const newPin = {
            user:userID,
            image: image,
            title: text,
            description: description,
            link:link
            }
        dispatch(createPin(newPin))
    }

    useEffect(() => {
      dispatch(fetchUserPin(userID))
    

    }, [])
    



  return (
    <div className="createFormContainer">
        {/* CreateForm */}
        <form className="createFormInner">
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
        <button style={{fontSize:"33px"}} onClick={onSubmit}></button>
    </div>
  )
}

export default CreateForm

