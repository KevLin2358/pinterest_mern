import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createPin } from '../../actions/pin_actions'
import "./realCreateForm.css"
import axios from 'axios'
import AWS from 'aws-sdk';

function RealCreateForm() {





    const [userID,setUserID] = useState(useSelector(state => state.session.user.id))
    const [title,setTitle] = useState("")
    const [des,setDes] = useState("")
    const [url,setUrl] = useState("")
    const [idToPin,setIdtoPin] = useState("")
    const [file, setFile] = useState(null);

    const dispatch = useDispatch()

    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      // Add additional configuration as needed
    });
    console.log(process.env.REACT_APP_API_KEY);
    console.log(process.env.REACT_APP_API_URL);
    console.log(process.env.REACT_APP_AWS_ACCESS_KEY_ID);
    console.log(process.env.REACT_APP_AWS_SECRET_ACCESS_KEY);
  
    const s3 = new AWS.S3();

    const uploadPicture = (file) => {
      console.log(file)
      const params = {
        Bucket: 'sunnymeipinterest',
        Key: file.name,
        Body: file,
      };
    
      s3.upload(params, (err, data) => {
        if (err) {
          console.error('Error uploading picture:', err);
        } else {
          console.log('Picture uploaded successfully:', data.Location);
          // Perform any additional logic after successful upload
        }
      });
    };
    
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

    // const handleSubmit = event => {
    // event.preventDefault();
    
    // fetch('https://thy0sm24hj.execute-api.us-east-2.amazonaws.com/dev/sunnymeipinterest/1223.jpg', {
    //     method: 'PUT',
    //     body: JSON.stringify(file),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      const file = e.target.fileInput.files[0]; // Get the uploaded file from the form input
      if (file) {
        uploadPicture(file);
      }
    };

    useEffect(()=>{
        if(idToPin === "") return null //need to return null cause it will redirect too quick
        window.location = window.location.origin+"/pins/"+idToPin
        //change link once id is true
        //have to use useeffect cause I need to from a string
      },[idToPin])


  return (
    <div className="realCreateFormContainer">
      <div className="realCreateFormContainerInner">
        <form className="realCreateFormForm">
          <input
            className="realCreateFormFormInput"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="realCreateFormFormInput"
            placeholder="Description"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
          <input
            className="realCreateFormFormInput"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </form>
        <button className="createPinButton" onClick={createPinButton}>
          Create
        </button>
      </div>
      <form onSubmit={handleFormSubmit}>
        <input type="file" name="fileInput" />
        <button type="submit">Upload</button>
      </form>
    </div>


  )
}

export default RealCreateForm