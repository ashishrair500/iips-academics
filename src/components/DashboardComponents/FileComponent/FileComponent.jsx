// FileComponent.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { deleteFile } from '../../../redux/actionCreators/fileFoldersActionCreator'; // Import your deleteFile action

import './FileComponent.css';

const FileComponent = () => {
  const { fileId } = useParams();
  const [fileData, setFileData] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentFile, isAuthenticated, user } = useSelector(
    (state) => ({
      currentFile: state.filefolders.userFiles.find((file) => file.docId === fileId),
      isAuthenticated: state.auth.isAuthenticated,
      user: state.auth.user,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (currentFile) {
      setFileData(currentFile.data.data);
    }
  }, [currentFile, currentFile?.data.data]);

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = currentFile?.data.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDeleteFile = () => {

    const fileId = currentFile.docId;
    const fileName = currentFile.data.name;
    console.log('CurrentFile Data:', currentFile.data); // Log the currentFile data
    console.log('FileId:', fileId);
    console.log('FileName:', fileName);
  
    dispatch(deleteFile(fileId, fileName));
    navigate(-1);
  };
  
  
 

  useEffect(() => {
    downloadFile();
  }, [fileId]);

  return (
    <>
      {user.uid === "T3XBsF3xtDMgTRQIi7xVQYqffpe2" ? (<div className='center-div'>
      <h4 >File Opened in New Tab</h4>
      <h4 className='phone-msg'>File is Downloaded</h4>

        <button className='glow-on-hover bottom-space' onClick={handleDeleteFile}>
          Delete File 🗑️
        </button>
 


      </div>) : (
        <>

          <div className='center-div'>

            <h4 >File Opened in New Tab</h4>
            <h4 className='phone-msg'>File is Downloaded</h4>

            <button className='glow-on-hover bottom-space' onClick={() => navigate(-1)}>
              Go Back ! 😎
            </button>
          </div>
        </>
      )
      }</>
  );

};


export default FileComponent;
