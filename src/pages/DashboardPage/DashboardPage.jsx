import { useEffect } from 'react'
import { shallowEqual, useSelector , useDispatch  } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../components/DashboardComponents/Navbar/Navbar';
//import Subbar from '../../components/DashboardComponents/Subbar/Subbar';
import SubBar from '../../components/DashboardComponents/SubBar/SubBar'
import HomeComponent from '../../components/DashboardComponents/HomeComponent/HomeComponent';
import { useState } from 'react';
import CreateFolder from '../../components/DashboardComponents/CreateFolder/CreateFolder';
import { getFiles,getFolders } from '../../redux/actionCreators/fileFoldersActionCreator';
import { Routes, Route } from 'react-router-dom';
import FolderComponent from '../../components/DashboardComponents/FolderComponent/FolderComponent';
import CreateFile from '../../components/DashboardComponents/CreateFile/CreateFile';
import FileComponent from '../../components/DashboardComponents/FileComponent/FileComponent';
import UploadFile from '../../components/DashboardComponents/UploadFile/UploadFile';


const DashboardPage = () => {

  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [isCreateFileOpen, setIsCreateFileOpen] = useState(false);

  const [isFileUploadOpen, setIsFileUploadOpen] = useState(false);

  const[showSubBar,setShowSubBar] = useState(true)
  const {pathname} = useLocation();
  const {isLoggedIn,isLoading,userId} = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
      isLoading: state.filefolders.isLoading,
      userId: state.auth.user.uid,
    }
  ), shallowEqual);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/')
    }
  }, []);
  useEffect(() => {
    if (  isLoading && userId) {
       dispatch(getFolders(userId));
       dispatch(getFiles(userId));

 //jaise hi dashboard folder render hoga is .......is for getfolders

    }
  }, [isLoading,userId,dispatch]);


useEffect(() => {
  if(pathname.includes('/file/')){
    setShowSubBar(false)  
  }
}, [ pathname])

  return (

    <>
     
    {

 //subBar me jab bhi koi create folder button pr click karega to isCreateFolderModalOpen true ho jayega jaise hi true hoga createFolder component render hoga of createfolder ke submit button ko click karega to isCreateFolderModalOpen false ho jayega or createFolder close ho jayega

      isCreateFolderOpen && (
        <CreateFolder setIsCreateFolderOpen={setIsCreateFolderOpen} />
      )
    }


      
    {
      isFileUploadOpen && (
        <UploadFile setIsFileUploadOpen={setIsFileUploadOpen} />
      )
    }


    {
      isCreateFileOpen && (
        <CreateFile setIsCreateFileOpen={setIsCreateFileOpen} />
      )
    }
      <Navbar />
{

showSubBar && (
  <SubBar   
      setIsCreateFolderOpen={setIsCreateFolderOpen} 
      setIsCreateFileOpen={setIsCreateFileOpen} 
      setIsFileUploadOpen={setIsFileUploadOpen}

      />
      

)
}
    {/*nested routes*/}
      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponent />} />
        <Route path="file/:fileId" element={<FileComponent />} />
      </Routes>
     <h2>Footer</h2>
     <p>@copyright All right reserved</p>
     <p>iips website:iips.edu.in</p>
     <p>download syllabus:https://iips.edu.in/syllabus.php</p>
     <p> Davv acadmics:https://www.dauniv.ac.in/</p>
     <p> footer should float at the bottom</p>

    </>
  )
}

export default DashboardPage
