import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import Header from './Header';
import CodeEditor from './CodeEditor';
import './FileComponent.css';

const FileComponent = () => {
  const { fileId } = useParams();
  const [fileData, setFileData] = useState('');
  const navigate = useNavigate();

  const { currentFile, isAuthenticated } = useSelector(
    (state) => ({
      currentFile: state.filefolders.userFiles.find((file) => file.docId === fileId),
      isAuthenticated: state.auth.isAuthenticated,
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
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Trigger the downloadFile function when the component mounts
    downloadFile();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  if (isAuthenticated) {
    return (
      <div>
        {isAuthenticated && fileData !== null ? (
          <>
            <Header fileName={currentFile?.data.name} fileId={fileId} />
            <CodeEditor fileName={currentFile?.data.name} data={fileData} setData={setFileData} />
          </>
        ) : (
          <div >
            {/* Sub Menu Bar */}
            <div className=' '>
              <p
                title={currentFile?.data.name}
                className='my-0'
                style={{ cursor: 'pointer' }}
              >
                {currentFile?.data.name.length > 40
                  ? currentFile?.data.name.slice(0, 40) + '... .' + currentFile?.data.extention
                  : currentFile?.data.name}
              </p>
              <div className='center-div'>
                <button className='glow-on-hover' onClick={() => navigate(-1)}>
                  Go Back
                </button>
                {/* The download button is automatically triggered by the useEffect hook */}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Login First</h1>
    </div>
  );
};

export default FileComponent;
