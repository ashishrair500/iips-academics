// CreateFolder.jsx

import { useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { createFolder } from '../../../redux/actionCreators/fileFoldersActionCreator';
import { toast } from 'react-toastify';
import './CreateFolder.css';

const CreateFolder = ({ setIsCreateFolderOpen }) => {
  const [folderName, setFolderName] = useState('');

  const { userFolders, user, currentFolder, currentFolderData } = useSelector(
    (state) => ({
      userFolders: state.filefolders.userFolders,
      user: state.auth.user,
      currentFolder: state.filefolders.currentFolder,
      currentFolderData: state.filefolders.userFolders.find(
        (folder) => folder.docId === state.filefolders.currentFolder
      ),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const checkFolderAlreadyPresent = (name) => {
    const folderPresent = userFolders
      .filter((folder) => folder.data.parent === currentFolder)
      .find((fldr) => fldr.data.name === name);

    return folderPresent ? true : false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (folderName) {
      if (folderName.length > 3) {
        if (!checkFolderAlreadyPresent(folderName)) {
          const data = {
            createdAt: new Date(),
            name: folderName,
            userId: user.uid,
            createdBy: user.displayName,
            path: currentFolder === 'root' ? [] : [...currentFolderData?.data.path, currentFolder],
            parent: currentFolder,
            lastAccessed: null,
            updatedAt: new Date(),
          };

          try {
            await dispatch(createFolder(data));
            setFolderName(''); // Clear the input field on success
            toast.success('Folder created successfully');
            setIsCreateFolderOpen(false); // Close the folder creation box
          } catch (error) {
            console.error('Error creating folder:', error.message);
            toast.error('Folder creation failed');
          }
        } else {
          toast.error('Folder already present');
        }
      } else {
        toast.error('Folder name must be greater than 3 characters');
      }
    } else {
      toast.error('Folder name is required');
    }
  };

  return (
    <div className='create-folder-container'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-md-4 mt-5 create-folder-content'>
          <div className='create-folder-header'>
            <h4 className='create-folder-title'>Create Folder</h4>
            <button className='create-folder-close-btn' onClick={() => setIsCreateFolderOpen(false)}>
              <FontAwesomeIcon icon={faTimes} className='text-black' size='sm' />
            </button>
          </div>
          <hr />
          <div className='d-flex flex-column align-items-center'>
            <form className='mt-3 w-100 create-folder-form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control create-folder-input'
                  id='folderName'
                  placeholder='Folder Name'
                  value={folderName}
                  onChange={(e) => setFolderName(e.target.value)}
                />
              </div>
              <button type='submit' className='btn btn-primary mt-5 create-folder-submit-btn'>
                Create Folder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFolder;
