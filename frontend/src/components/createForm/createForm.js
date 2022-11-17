import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { createPin } from "../../actions/pin_actions";
import { useSelector } from "react-redux";
function CreateForm() {
    const [userID,setUserID] = useState(useSelector(state => state.session.user.id))
    const [image,setImage] = useState("asdasd")
    const [text,setText] = useState("asdasd")
    const [description,setdescription] = useState("asdasd")
    const [link,setLink] = useState("asdasd")

    const dispatch = useDispatch()
    console.log(userID)
    // const c(state => console.log(state))
    // const userTrueID = useSelector(state => console.log(state.session.user.id))

    const onSubmit = () => {
        const newPin = {
            user:userID,
            image: image,
            title: text,
            description: description,
            link:link
            }
        dispatch(createPin(newPin))
        console.log(newPin)
    }



  return (
    <div>
        CreateForm
        <form>
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
        <button style={{fontSize:"33px"}} onClick={onSubmit}></button>
    </div>
  )
}

export default CreateForm

