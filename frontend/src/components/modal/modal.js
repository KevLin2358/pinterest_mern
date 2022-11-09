
import React from "react";
import "./modal.css";
import jp from "../../imageComponent/images/jpart.jpg"
import { Link } from "react-router-dom";
import FusedImages from "../fusedImages/fusedImages";
function Modal({ setOpenModal }) {
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
        <div className="title">
          <h1>Updates</h1>
        </div>
        <div className="body">
            <div><Link to="/today"><FusedImages/></Link></div>
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