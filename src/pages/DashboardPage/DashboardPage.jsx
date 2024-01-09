// DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation ,Link} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import SubBar from '../../components/DashboardComponents/SubBar/SubBar';
import HomeComponent from '../../components/DashboardComponents/HomeComponent/HomeComponent';
import CreateFolder from '../../components/DashboardComponents/CreateFolder/CreateFolder';
import { getFiles, getFolders } from '../../redux/actionCreators/fileFoldersActionCreator';
import { Routes, Route } from 'react-router-dom';
import FolderComponent from '../../components/DashboardComponents/FolderComponent/FolderComponent';
import CreateFile from '../../components/DashboardComponents/CreateFile/CreateFile';
import FileComponent from '../../components/DashboardComponents/FileComponent/FileComponent';
import FileComponentDelete from '../../components/DashboardComponents/FileComponent/FileComponentDelete';

import UploadFile from '../../components/DashboardComponents/UploadFile/UploadFile';
import './DashboardPage.css';

import Footer from '../../components/Footer/Footer';
const DashboardPage = () => {
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [isCreateFileOpen, setIsCreateFileOpen] = useState(false);
  const [isFileUploadOpen, setIsFileUploadOpen] = useState(false);
  const [showSubBar, setShowSubBar] = useState(true);

  const { pathname } = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { isLoggedIn, isLoading, userId ,currentFolder} = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
      isLoading: state.filefolders.isLoading,
      userId: state.auth.user.uid,
      currentFolder: state.filefolders.currentFolder,
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (isLoading && userId) {
      dispatch(getFolders(userId));
      dispatch(getFiles(userId));
    }
  }, [isLoading, userId, dispatch]);

  useEffect(() => {
    if (pathname.includes('/file/')) {
      setShowSubBar(false);
    }
  }, [pathname]);

  return (

    <div>
    {isAuthenticated ? (

      <div className='body-container'>
    {isCreateFolderOpen && <CreateFolder setIsCreateFolderOpen={setIsCreateFolderOpen} />}
      {isFileUploadOpen && <UploadFile setIsFileUploadOpen={setIsFileUploadOpen} />}
      {isCreateFileOpen && <CreateFile setIsCreateFileOpen={setIsCreateFileOpen} />}

     
      <Navbar />
      
      <a href="https://forms.gle/v6PXeXPVk3W57sgt5" target="_blank" className='contribute-button'>
      अपने Study Material को साझा करने के लिए click करें !</a>
      

      {currentFolder === "root" ? (
        <p className='search-ins'>Please use Ctrl+F to search your subject</p>
              
          ) : (
 
 
            <p className='search-ins'>Use Sub Bar for Navigation</p>
 
          )}
       

      
        <SubBar
          setIsCreateFolderOpen={setIsCreateFolderOpen}
          setIsCreateFileOpen={setIsCreateFileOpen}
          setIsFileUploadOpen={setIsFileUploadOpen}
        />
      

      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponent />} />
        <Route path="file/:fileId" element={<FileComponent />} />
        <Route path="file/:fileId/deletefile" element={<FileComponentDelete />} />
      </Routes>

      <Footer />

     
    </div>

    ):(

      <div>Login First</div>
    )}
    
    </div>
  );
};

export default DashboardPage;

