// DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../components/DashboardComponents/Navbar/Navbar';
import SubBar from '../../components/DashboardComponents/SubBar/SubBar';
import HomeComponent from '../../components/DashboardComponents/HomeComponent/HomeComponent';
import CreateFolder from '../../components/DashboardComponents/CreateFolder/CreateFolder';
import { getFiles, getFolders } from '../../redux/actionCreators/fileFoldersActionCreator';
import { Routes, Route } from 'react-router-dom';
import FolderComponent from '../../components/DashboardComponents/FolderComponent/FolderComponent';
import CreateFile from '../../components/DashboardComponents/CreateFile/CreateFile';
import FileComponent from '../../components/DashboardComponents/FileComponent/FileComponent';
import UploadFile from '../../components/DashboardComponents/UploadFile/UploadFile';
import './DashboardPage.css';
import './footer.css';
import FooterComponent from '../../components/FooterComponent/Footer';
const DashboardPage = () => {
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [isCreateFileOpen, setIsCreateFileOpen] = useState(false);
  const [isFileUploadOpen, setIsFileUploadOpen] = useState(false);
  const [showSubBar, setShowSubBar] = useState(true);

  const { pathname } = useLocation();





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
            <h1></h1>
          )}
       

      {showSubBar && (
        <SubBar
          setIsCreateFolderOpen={setIsCreateFolderOpen}
          setIsCreateFileOpen={setIsCreateFileOpen}
          setIsFileUploadOpen={setIsFileUploadOpen}
        />
      )}

      <Routes>
        <Route path="" element={<HomeComponent />} />
        <Route path="folder/:folderId" element={<FolderComponent />} />
        <Route path="file/:fileId" element={<FileComponent />} />
      </Routes>

      <FooterComponent />

     
    </div>
  );
};

export default DashboardPage;
