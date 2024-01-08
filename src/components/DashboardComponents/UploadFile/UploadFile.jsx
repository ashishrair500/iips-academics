import { useEffect, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { uploadFile } from '../../../redux/actionCreators/fileFoldersActionCreator';
import { toast } from 'react-toastify';
import './UploadFile.css';

const UploadFile = ({ setIsFileUploadOpen }) => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const { userFiles, user, currentFolder, currentFolderData } = useSelector(
    (state) => ({
      userFiles: state.filefolders.userFiles,
      user: state.auth.user,
      currentFolder: state.filefolders.currentFolder,
      currentFolderData: state.filefolders.userFolders.find((folder) => folder.docId === state.filefolders.currentFolder),
    }),
    shallowEqual
  );

  const checkFileAlreadyPresent = (name) => {
    const filePresent = userFiles
      .filter((file) => file.data.parent === currentFolder)
      .find((fldr) => fldr.data.name === name);

    return filePresent ? true : false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (file) {
        if (!checkFileAlreadyPresent(file.name)) {
          const data = {
            createdAt: new Date(),
            name: file.name,
            userId: user.uid,
            createdBy: user.displayName,
            path: currentFolder === 'root' ? [] : [...currentFolderData?.data.path, currentFolder],
            parent: currentFolder,
            lastAccessed: null,
            updatedAt: new Date(),
            extension: file.name.split('.')[1],
            data: null,
            url: '',
          };

          // Use the async/await pattern to wait for the file upload process
          await dispatch(uploadFile(file, data));

          // Reset the file state after successful upload
          setFile(null);

          // Close the modal or perform any other actions on success
          setIsFileUploadOpen(false);
        } else {
          toast.error('File already present');
        }
      } else {
        toast.error('File name is required');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file');
    }
  };

  return (
    <div className='upload-file-container'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-md-4 mt-5 upload-file-content'>
          <div className='upload-file-header'>
            <h4>Upload File</h4>
 

            <button className='upload-file-close-btn' onClick={() => setIsFileUploadOpen(false)}>
              <FontAwesomeIcon icon={faTimes} className='text-black' size='sm' />
            </button>
          </div>
          <hr />
          <div className='d-flex flex-column align-items-center'>
            <form className='mt-3 w-100 upload-file-form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <input type='file' className='form-control upload-file-input' id='file' onChange={(e) => setFile(e.target.files[0])} />
              </div>
              <button type='submit' className='btn btn-primary mt-5 form-control'>
                Upload File
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
