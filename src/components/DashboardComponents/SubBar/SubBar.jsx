import "./SubBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faFileUpload, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeFolder } from '../../../redux/actionCreators/fileFoldersActionCreator'

const Subbar = ({
    setIsCreateFolderOpen,
    setIsCreateFileOpen,
    setIsFileUploadOpen,
}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { currentFolder, user,currentFolderData, userFolders } = useSelector((state) => ({
        currentFolder: state.filefolders.currentFolder,
        currentFolderData: state.filefolders.userFolders.find(
            (folder) => folder.docId === state.filefolders.currentFolder),
        userFolders: state.filefolders.userFolders,
        user: state.auth.user,

    }), shallowEqual);

    const handleNavigate = (link, id) => {
        navigate(link);
        dispatch(changeFolder(id));

    }

    return (
        <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 ">
            <nav className="ms-5" aria-label="breadcrumb ">
                <ol className="breadcrumb  d-flex align-items-center">
                    {currentFolder !== "root" ? (

                        <>
                            <button
                                className="breadcrumb-item btn btn-link  text-decoration-none"
                                onClick={()=>handleNavigate("/dashboard","root")}
                            >
                                Root
                            </button>
                            {currentFolderData?.data.path.map((folder, index) => (
                                <button
                                    key={index}
                                    className="breadcrumb-item btn btn-link   text-decoration-none"
                                    onClick={() =>
                                        handleNavigate(
                                            `/dashboard/folder/${userFolders.find((fldr) => folder === fldr.docId).docId}`,
                                            userFolders.find((fldr) => folder === fldr.docId).docId)}
                                >
                                    {userFolders.find((fldr) => folder === fldr.docId).data.name}
                                </button>
                            )


                            )}
                            <li className="breadcrumb-item active" >
                                {currentFolderData?.data.name}
                            </li>
                        </>
                    )
                        : (
                            <>
                                <li className="breadcrumb-item active" >
                                    Root
                                </li>
                            </>

                        )

                    }
                </ol>
            </nav>





            {user.uid === "T3XBsF3xtDMgTRQIi7xVQYqffpe2" ? (
            <>
              <ul className="navbar-nav ms-auto  me-4">
                <li className="nav-item mx-2">
                    <button className="btn btn-outline-dark"
                        onClick={() => setIsFileUploadOpen(true)}
                    >
                        <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload File

                    </button>
                </li>
                  {/* <li className="nav-item mx-2">
                    <button className="btn btn-outline-dark"

                        onClick={() => setIsCreateFileOpen(true)}>
                        <FontAwesomeIcon icon={faFileAlt} /> &nbsp; Create File
                    </button>
                </li>     */}

                <li className="nav-item ms-2">
                    <button className="btn btn-outline-dark"
                        onClick={() => setIsCreateFolderOpen(true)}>

                        <FontAwesomeIcon icon={faFolderPlus} /> &nbsp; Create Folder
                    </button>
                </li>

            </ul>
            </>
          ) : (
            <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
            <a href="https://forms.gle/v6PXeXPVk3W57sgt5" target="_blank" className="btn btn-primary">Go to Google</a>
                  
                </li>
                </ul>
          )}



        </nav>

    )
}

export default Subbar
