import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faArrowLeftLong, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { updateFileData } from "../../../redux/actionCreators/fileFoldersActionCreator";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";

const Header = ({ fileName, fileId, fileData, prevFileData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }));

  const isFileModified = fileData !== prevFileData;

  const handleSave = () => {
    if (isFileModified) {
      // Show a confirmation modal before saving if needed
      dispatch(updateFileData(fileId, fileData));
    }
  };

  // Inside the Header component
  return (
    <nav className= "custom-navbar" >
    
      {user.uid === "T3XBsF3xtDMgTRQIi7xVQYqffpe2" ? (
        <>  <p className="custom-navbar-brand">
        {fileName}
        {isFileModified && <FontAwesomeIcon icon={faPencilAlt} className="modified-indicator" />}
      </p>
        <ul className="custom-navbar-nav">
          <li className="custom-nav-item" data-tooltip="Save Changes">
            <button
              className={`custom-btn ${isFileModified ? "custom-btn-success" : "custom-btn-secondary"}`}
              disabled={!isFileModified}
              onClick={handleSave}
            >
              <FontAwesomeIcon icon={faSave} /> Save
            </button>
          </li>
          <li className="custom-nav-item" data-tooltip="Go Back">
            <button className="custom-btn custom-btn-dark" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeftLong} /> Back
            </button>
          </li>
        </ul></>
      
      )
      :(
        
       
      <ul className="custom-navbar-nav">
      <li className="custom-navbar-brand2">
        {fileName}
        {isFileModified && <FontAwesomeIcon icon={faPencilAlt} className="modified-indicator" />}
      </li>
      <li className="custom-nav-item" data-tooltip="Go Back">
            <button className="custom-btn2 custom-btn-dark" onClick={() => navigate(-1)}>
            ⬅️ Go Back !  
            </button>
          </li>
      </ul>

      )
      }
    </nav>
  );
};

export default Header;
