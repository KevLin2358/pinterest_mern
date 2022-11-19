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
    const [obj,setObj] = useState("")
    const dispatch = useDispatch()

    const onSubmit = () => {
      // console.log(image.split(":")[4])
        // let des = image.split(":")[4].split(",")
        // des.pop()
        // des = des.join(",")

        // // console.log(des)
        // let title = image.split(":")[1].split(",")
        // title.pop()
        // title = title.join(",")

        // let img = (image.split(":")[2]+":"+image.split(":")[3].split(",")[0])
        // img = img.split(" \\")[0].trim()
        // console.log(img)
        // console.log(obj)
        let obj2 = obj.split("~#")
        console.log(obj2[0])
        console.log(obj2[1])
        console.log(obj2[2])
        console.log(obj2[3])

        const newPin = {
            user:userID,
            image: obj2[1],
            title: obj2[0],
            description: obj2[2],
            link:obj2[3]
            }
        // console.log(newPin)
        dispatch(createPin(newPin))
    }

    useEffect(() => {
      dispatch(fetchUserPin(userID))
    

    }, [])
    



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

