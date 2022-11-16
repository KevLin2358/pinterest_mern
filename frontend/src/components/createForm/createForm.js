import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { createPin } from "../../actions/pin_actions";
function CreateForm() {
    const [userID,setUserID] = useState("")
    const [image,setImage] = useState("")
    const [text,setText] = useState("")
    const [description,setdescription] = useState("")
    const [link,setLink] = useState("")

    const dispatch = useDispatch()
  return (
    <div>
        CreateForm
        <form onSubmit={() => dispatch({ type: 'increment-counter' })}>
            <input
            value={userID}
            placeholder="userid"
            onChange={(e) => setUserID(e.target.value)}
            >           
            </input>

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
    </div>
  )
}

export default CreateForm

