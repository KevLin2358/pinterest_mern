import React from 'react';

const DownloadButton = ({img}) => {
  const imageUrl = img; // Replace with the URL of your image

  return (
    <div>
      <a href={imageUrl}>
        <svg
          className="gUZ R19 U9O kVc"
          height="20"
          width="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="img"
        >
          <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
        </svg>
      </a>
    </div>
  );
};

export default DownloadButton;