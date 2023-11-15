
import {useEffect, useState} from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { shallowEqual, useSelector,useDispatch } from 'react-redux'
// import { createFolder } from '../../../redux/actionCreators/fileFoldersActionCreator'
import { createFile } from '../../../redux/actionCreators/fileFoldersActionCreator'
import { toast } from 'react-toastify';
const CreateFile = ({setIsCreateFileOpen}) => {


    const [fileName, setFileName] = useState('')
    const [success, setSuccess] = useState(false)

    const{ userFiles , user, currentFolder, currentFolderData} = useSelector(
      (state) => ({
      userFiles : state.filefolders.userFiles,
      user : state.auth.user,
      currentFolder : state.filefolders.currentFolder,
      currentFolderData : state.filefolders.userFolders.find(
        (folder)=> folder.docId === state.filefolders.currentFolder),
    }),
    shallowEqual
    
    );
    const dispatch = useDispatch();

    useEffect(() => {
      if(success){
        setIsCreateFileOpen(false)
        setFileName('')
        setSuccess(false)
      }
    }, [success])


    const checkFileAlreadyPresent = (name,extension) => {
      if(!extension){
        name = `${name}.txt`
      }


     const filePresent = userFiles
     .filter((file)=>
     file.data.parent === currentFolder).find((fldr)=> fldr.data.name === name);
      if(filePresent){
        return true;
      }
      else{
        return false;
      }
    }
    const handleSubmit = (e) => {

      e.preventDefault()
      if(fileName)  {
       
        if(fileName.length > 3 ){

          let extension =false;
          if(fileName.split('.').length > 1){
          extension = true;
          }
          if(!checkFileAlreadyPresent(fileName,extension)){


             
            const data = {
              createdAt : new Date(),
              name : extension ? fileName : `${fileName}.txt`,
              userId : user.uid,
              createdBy : user.displayName,
              path : currentFolder === "root" ? [] : [ ...currentFolderData?.data.path,currentFolder],
              parent : currentFolder ,
              lastAccessed : null,
              updatedAt : new Date(),
              extension : extension ? fileName.split('.')[1] : 'txt',
              data : '',
              url :null

            };
           
        
            dispatch(createFile(data,setSuccess))
           
          }
          else{
            toast.error('File already present')
          }
        }
        else{
            toast.error('File name must be greater than 3 characters')
        }
      }else{
            toast.error('File name is required')
      }
    }
  return (
    <div
    className='col-md-12  position-fixed top-0 left-0 w-100'
     style={{
        background: "rgba(0,0,0,0.4)" , zIndex: 9999
    }}
    >
        <div className='row align-items-center justify-content-center'>
        <div className='col-md-4 mt-5 bg-white rounded p-4'>
        <div  className='d-flex justify-content-between'>
        <h4>Create File </h4>
        <button className='btn' onClick={()=> setIsCreateFileOpen(false)}> 
            <FontAwesomeIcon icon={faTimes}
            className='text-black'
            size='sm'

            />
        </button>
        </div>
        <hr/>
        <div  className='d-flex flex-column align-items-center'>
        <form  className='mt-3 w-100'  onSubmit={handleSubmit}>
        <div className='form-group'>
            <input
            type='text'
            className='form-control'
            id='fileName'
            placeholder='File Name e.g. file.txt'
            value={fileName}
            onChange={(e)=> setFileName(e.target.value)}
            />

             
        </div>
            <button type='submit' className='btn btn-primary mt-5 form-control'>
                Create File
            </button>
        </form>
            
        </div>
        </div>

        </div>
     </div>
  )
}

export default CreateFile