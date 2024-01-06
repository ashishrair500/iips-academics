// ShowItems.jsx

import React from 'react';
import "./ShowItems.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeFolder } from '../../../redux/actionCreators/fileFoldersActionCreator';

const ShowItems = ({ title, items, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDoubleClick = (itemId) => {
    if (type === "folder") {
      dispatch(changeFolder(itemId));
      navigate(`/dashboard/folder/${itemId}`);
    } else {
      navigate(`/dashboard/file/${itemId}`);
    }
  };

  return (
    <div className='show-items'>
      
      <div className="items-container">
        {items.map((item, index) => (
          <div
            key={index * 55}
            className={`show-item ${type === 'file' ? 'file' : ''}`}
            onClick={() => handleDoubleClick(item.docId)}
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
