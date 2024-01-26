import React from 'react';
import ShowItems from "../ShowItems/ShowItems";
import { shallowEqual, useSelector } from "react-redux";
import { selectHomeComponentData } from "./selectors"; // Update the path

import './HomeComponent.css';

const HomeComponent = () => {
  // Use the selector to get the data for HomeComponent
  const { isLoading, userFolders, userFiles, currentFolder } = useSelector(
    selectHomeComponentData,
    shallowEqual
  );

  return (
    <div >
      {isLoading ? (
        <div className="loading-container">
          <h1 className="loading-title">Please wait Loading...</h1>
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          <ShowItems title={"Choose Course"} type={"folder"} items={userFolders} />
          {currentFolder !== "root" ? (
            <ShowItems title={"Notes"} type={"file"} items={userFiles.file?.data?.data} />
          ) : (
            <h1></h1>
          )}
        </>
      )}
    </div>
  );
};

export default HomeComponent;
