// HomeComponent.jsx
import React from 'react';
import ShowItems from "../ShowItems/ShowItems";
import { useSelector, shallowEqual } from "react-redux";
import './HomeComponent.css'; // Import the newly created CSS file

const HomeComponent = () => {
  const { isLoading, userFolders, userFiles, currentFolder } = useSelector(
    (state) => ({
      isLoading: state.filefolders.isLoading,
      userFolders: state.filefolders.userFolders.filter(
        (folder) => folder.data.parent === "root"
      ),
      userFiles: state.filefolders.userFiles.filter(
        (file) => file.data.parent === "root"
      ),
      currentFolder: state.filefolders.currentFolder,
    }),
    shallowEqual
  );

  return (
    <div className="col-md-12 w-100">
 
    {
      isLoading ? (
        <h1 className="display-1 my-5 text-center text-info">Loading...</h1>
        
         ):( 

        <>
          <ShowItems
            title={"Choose Course"}
            type={"folder"}
            items={userFolders}
          />
          {/* Commenting out this section because it's not needed */}
          {/* <ShowItems
            title={"Created Files"}
            type={"file"}
            items={userFiles.filter((file) => file.data.url === null)}
            />*/}
          {currentFolder !== "root" ? (
            <ShowItems
              title={"Notes"}
              type={"file"}
              items={userFiles.filter((file) => file.data.data === null)}
            />
          ) : (
            <h1></h1>
          )}
        </>
      )}
    </div>
  );
};

export default HomeComponent;
