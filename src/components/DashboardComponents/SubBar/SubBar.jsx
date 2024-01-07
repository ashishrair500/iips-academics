// SubBar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFileUpload, faFolderPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { changeFolder } from '../../../redux/actionCreators/fileFoldersActionCreator';
import './SubBar.css';

const Subbar = ({
  setIsCreateFolderOpen,
  setIsCreateFileOpen,
  setIsFileUploadOpen,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { currentFolder, user, currentFolderData, userFolders } = useSelector((state) => ({
    currentFolder: state.filefolders.currentFolder,
    currentFolderData: state.filefolders.userFolders.find(
      (folder) => folder.docId === state.filefolders.currentFolder
    ),
    userFolders: state.filefolders.userFolders,
    user: state.auth.user,
  }), shallowEqual);

  const handleNavigate = (link, id) => {
    navigate(link);
    dispatch(changeFolder(id));
  };

 

  return (
    <nav>
      <nav className="breadcrumb-container" aria-label="breadcrumb">
        <ol className="breadcrumb  d-flex align-items-center">
          {currentFolder !== "root" ? (
            <>
              <button
                className="breadcrumb-nav"
                onClick={() => handleNavigate("/dashboard", "root")}
              >
                Root /
              </button>
              {currentFolderData?.data.path.map((folder, index) => (
                <button
                  key={index}
                  className="breadcrumb-nav"
                  onClick={() =>
                    handleNavigate(
                      `/dashboard/folder/${userFolders.find((fldr) => folder === fldr.docId).docId}`,
                      userFolders.find((fldr) => folder === fldr.docId).docId)}
                >
                  {userFolders.find((fldr) => folder === fldr.docId).data.name} /
                </button>
              ))}
              <li className="breadcrumb-current-folder">
                {currentFolderData?.data.name} 
              </li>
            </>
          ) : (
            <>
              <li className="breadcrumb-nav">
                {/* Your unchanged code */}
              </li>
            </>
          )}
        </ol>
      </nav>

      {user.uid === "T3XBsF3xtDMgTRQIi7xVQYqffpe2" ? (
        <>
          <ul className="navbar-nav">
            
              
                <li className="nav-item mx-2">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => setIsFileUploadOpen(true)}
                  >
                    <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload File
                  </button>
                </li>
                <li className="nav-item ms-2">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => setIsCreateFolderOpen(true)}
                  >
                    <FontAwesomeIcon icon={faFolderPlus} /> &nbsp; Create Folder
                  </button>
                </li>
               
                
            
          </ul>
        </>
      ) : (
        <ul className="navbar-nav ms-auto">
          {/* Add other buttons here */}
          <li className="nav-item mx-2"></li>
        </ul>
      )}
    </nav>
  );
};

export default Subbar;
