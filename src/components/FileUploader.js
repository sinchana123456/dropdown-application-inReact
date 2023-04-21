import React, { useState } from 'react';
import './FileUploader.css';
import { MdCloudUpload } from "react-icons/md";
import { useHistory } from 'react-router-dom';

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const history = useHistory();

  const handleTemplateInputChange = (e) => {
    setName(e.target.name);
  };

  const handleFileInputChange = (e) => {
    e.preventDefault();
    setFiles(e.target.files);
  };

  const handleButton = (e) => {
    e.preventDefault();
    history.replace('/dropdown')
  }

  return (
    <div className='files'>
      <label htmlFor="template-input">Template Name</label>
      <br />
      <input 
        className='name-input'
        id="template-input" 
        type="text" 
        onChange={handleTemplateInputChange} 
      />
      <div
        className="file-input"
        id='file-input'
        type='file'
        multiple onChange={handleFileInputChange}
      >
        <MdCloudUpload />
        <p>Select a file</p>
      </div>

      {files.length > 0 && (
        <div>
          <h2>Selected files:</h2>
          <ul>
            {Array.from(files).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      <span>
            <button className='button1'>Back</button>
            <button onClick={handleButton} className='button2'>Save</button>
        </span>
    </div>
  );
}

export default FileUploader;
