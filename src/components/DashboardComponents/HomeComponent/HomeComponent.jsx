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
    <div className="col-md-12 w-100">
      {isLoading ? (
        <h1 className="display-1 my-5 text-center text-info"> Please wait Loading...</h1>
      ) : (
        <>
          <ShowItems title={"Choose Course"} type={"folder"} items={userFolders} />
          {currentFolder !== "root" ? (
            <ShowItems title={"Notes"} type={"file"} items={userFiles.filter((file) => file.data.data === null)} />
          ) : (
            <h1></h1>
          )}
        </>
      )}
    </div>
  );
};

export default HomeComponent;
