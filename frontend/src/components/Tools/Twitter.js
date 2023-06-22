import React from 'react';
import Share from '../../imageComponent/shareSVG';
const TwitterShareButton = ({ text, url }) => {
  const encodedText = encodeURIComponent(text);
  const encodedURL = encodeURIComponent(url);

  const shareURL = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedURL}`;

  return (
    <a
      className="twitter-share-button"
      href={shareURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      
      <Share/>
    </a>
  );
};

export default TwitterShareButton;
