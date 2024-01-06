// selectors.js

import { createSelector } from 'reselect';

const selectFileFoldersState = (state) => state.filefolders;

export const selectUserFolders = createSelector(
  [selectFileFoldersState],
  (filefolders) => filefolders.userFolders.filter((folder) => folder.data.parent === "root")
);

export const selectUserFiles = createSelector(
  [selectFileFoldersState],
  (filefolders) => filefolders.userFiles.filter((file) => file.data.parent === "root")
);

export const selectCurrentFolder = createSelector(
  [selectFileFoldersState],
  (filefolders) => filefolders.currentFolder
);

export const selectHomeComponentData = createSelector(
  [selectFileFoldersState, selectUserFolders, selectUserFiles, selectCurrentFolder],
  (filefolders, userFolders, userFiles, currentFolder) => ({
    isLoading: filefolders.isLoading,
    userFolders,
    userFiles,
    currentFolder,
  })
);
