
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
            {/* <div className="testing" style={{marginTop: "30vh"}}><Link to="/today"><FusedImages/></Link></div> */}
            <div><Link to="/today"><FusedImages/></Link></div>
            <div><Link to="/today"><FusedImages/></Link></div>
            <div><Link to="/today"><FusedImages/></Link></div>
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