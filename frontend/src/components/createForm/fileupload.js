import React, { useState } from 'react';
import "./fileupload.css" 
const FileUpload = () => {
  const [highlight, setHighlight] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setHighlight(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setHighlight(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setHighlight(false);
    const file = event.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    handleFileUpload(file);
  };

  const handleFileUpload = (file) => {
    // Handle the file upload logic
    console.log(file);
  };

  return (
    <div
      className={`file-drop-area ${highlight ? 'highlight' : ''}`}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input type="file" name="fileInput" className="file-input" onChange={handleFileInputChange} />
      <span>Drag and drop files here or click to upload.</span>
    </div>
  );
};

export default FileUpload;