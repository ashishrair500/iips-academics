// ShowItems.jsx

import React from 'react';
import "./ShowItems.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeFolder } from '../../../redux/actionCreators/fileFoldersActionCreator';

const ShowItems = ({ title, items, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (itemId) => {
    if (type === "folder") {
      dispatch(changeFolder(itemId));
      navigate(`/dashboard/folder/${itemId}`);
    } else {
      navigate(`/dashboard/file/${itemId}`); //isse nested routes ki help se fileComponent render hota hai them fileid ya currentFile milti
    }
  };

  const handleRightClick = (event,itemId) => {
    console.log(itemId+"fileid from showitem components")
      event.preventDefault(); // Prevent the default context menu from showing up
    //  const fileId = currentFile.docId; 
    if (type !== "folder") {
    navigate(`/dashboard/file/${itemId}/deletefile`);
      }else {alert("You can not delete folder !send delete request through Google form")}
    };

  // Sort items by name in ascending order
  const sortedItems = items.slice().sort((a, b) => a.data?.name.localeCompare(b.data?.name));

  return (
    <div className='show-items'>
      <div className="items-container">
        {sortedItems.map((item, index) => (
          <div
            key={index * 55}
            className={`show-item ${type === 'file' ? 'file' : ''}`}
            onClick={() => handleClick(item.docId)}
              onContextMenu={(event) => handleRightClick(event, item.docId)}
          >
            <img src={type === 'file' ? "../../../../public/assets/file-icon.png" : "../../../../public/assets/folder-icon.png"} alt={type === 'file' ? "File Icon" : "Folder Icon"} />
            <span>{item.data?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowItems;
