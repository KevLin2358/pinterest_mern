import React from 'react';
import '../components/dropdownMenu/popup.css';
import Popup from '../components/dropdownMenu/popup';
import { useState } from 'react';
const CopyLink = () => {
  const [click,setClick] = useState(false)

  const handleCopyLink = () => {
    const currentLink = window.location.href;
    navigator.clipboard.writeText(currentLink)
      .then(() => {
        console.log('Link copied successfully!');
      })
      .catch((error) => {
        console.error('Failed to copy link:', error);
      });
      setClick(e => true)
      setTimeout(() => {
        setClick(false);
      }, 1000);
  };

  return (
    <div>
      {click && <div className='popup'>
            <div className='popup-inner'>
              <p>Link Copied to Clipboard</p>
            </div>
          </div>
      }
      <svg
      className="Hn_ gUZ R19 U9O kVc"
      height="20"
      width="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      aria-label=""
      role="img"
      onClick={handleCopyLink}
    >
      <path d="m21 7.24-4.05 4.05-1.06-1.06.67-.67a1.5 1.5 0 1 0-2.12-2.12l-.67.67-1.06-1.06L16.76 3zm-9.7 9.7L7.23 21 3 16.76l4.05-4.05 1.06 1.06-.67.67a1.5 1.5 0 0 0 2.12 2.12l.67-.67zM14.63.89l-4.05 4.05a3 3 0 0 0 0 4.24l1.06 1.06-1.42 1.42-1.06-1.06a3 3 0 0 0-4.24 0L.88 14.64a3 3 0 0 0 0 4.24l4.24 4.24a3 3 0 0 0 4.24 0l4.05-4.05a3 3 0 0 0 0-4.24l-1.06-1.06 1.42-1.42 1.06 1.06a3 3 0 0 0 4.24 0l4.05-4.05a3 3 0 0 0 0-4.24L18.88.88a3 3 0 0 0-4.24 0z"></path>
    </svg>
    </div>

  );
};

export default CopyLink;
