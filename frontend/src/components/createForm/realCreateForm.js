import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createPin } from '../../actions/pin_actions'
import "./realCreateForm.css"
import axios from 'axios'
import AWS from 'aws-sdk';
import FileUpload from './fileupload'
import uploadIcon from './drag.jpg';
function RealCreateForm() {





  const userIDfromselector = useSelector(state => state.session.user.id);
  const [userID, setUserID] = useState(userIDfromselector);
  const [title, setTitle] = useState("")
  const [des, setDes] = useState("")
  const [url, setUrl] = useState("")
  const [idToPin, setIdtoPin] = useState("")
  const [file, setFile] = useState(null);

  const dispatch = useDispatch()

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    // Add additional configuration as needed
  });


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
        setUrl(data.Location)
        // Perform any additional logic after successful upload
      }
    });
  };

  const createPinButton = () => {
    const newPin = {
      user: userID,
      image: url,
      title: title,
      description: des,
      link: url
    }
    console.log(newPin)
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

  useEffect(() => {
    if (idToPin !== "") {
      window.location = window.location.origin + "/pins/" + idToPin;
    }


    // Change the link once idToPin is true

    // Note: Using useEffect because you need to form a string
  }, [idToPin]);


  return (
    <div className="realCreateFormContainer">
      <form onSubmit={handleFormSubmit}>
        <label className="file-input-label">
          {/* <img src={uploadIcon} alt="Upload Icon" className="upload-icon" /> */}
          <div className="upload-text">Drag and Drop or click to upload</div>
          <input type="file" name="fileInput" className="file-input" />
        </label>
        <button type="submit">Upload</button>
      </form>
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



    </div>


  )
}

export default RealCreateForm