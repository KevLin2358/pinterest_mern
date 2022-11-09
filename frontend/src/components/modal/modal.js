
import React from "react";
import "./modal.css";
import { useState, useEffect, useRef } from 'react'
import jp from "../../imageComponent/images/jpart.jpg"
import { Link } from "react-router-dom";
import FusedImages from "../fusedImages/fusedImages";
function Modal({ setOpenModal }) {
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight+30)
      })

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {/* <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div> */}
        <div ref={ref} className="title">
          <h1 >Updates</h1>
          {height}
        </div>
        <div className="body">
            <div className="testing" style={{marginTop: "30vh"}}><Link to="/today"><FusedImages/></Link></div>
            <div><Link to="/today"><FusedImages/></Link></div>
            <div><Link to="/today"><FusedImages/></Link></div>
            <div><Link to="/today"><FusedImages/></Link></div>

            {/* <div className="bellArt"><Link to="/"><img src={jp} alt="Logo" /></Link></div>
            <div className="bellArt"><Link to="/profile"><img src={jp} alt="Logo" /></Link></div>
            <div className="bellArt"><Link to="/today"><img src={jp} alt="Logo" /></Link></div>
            <div className="bellArt"><Link to="/"><img src={jp} alt="Logo" /></Link></div> */}
            {/* <div className="bellArt"><Link to="/profile"><img src={jp} alt="Logo" /></Link></div> */}
            {/* <div className="bellArt"><Link to="/today"><img src={jp} alt="Logo" /></Link></div> */}
            {/* <div className="bellArt"><Link to="/"><img src={jp} alt="Logo" /></Link></div> */}
            {/* <div className="bellArt"><Link to="/profile"><img src={jp} alt="Logo" /></Link></div> */}
            {/* <div className="bellArt"><Link to="/today"><img src={jp} alt="Logo" /></Link></div> */}
            {/* <div className="bellArt"><img src={jp} alt="Logo" /></div>
            <div className="bellArt"><img src={jp} alt="Logo" /></div>
            <div className="bellArt"><img src={jp} alt="Logo" /></div>
            <div className="bellArt"><img src={jp} alt="Logo" /></div>
            <div className="bellArt"><img src={jp} alt="Logo" /></div>
            <div className="bellArt"><img src={jp} alt="Logo" /></div> */}
          {/* <p>The next page looks amazing. Hope you want to go there!</p> */}
        </div>
        {/* <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;