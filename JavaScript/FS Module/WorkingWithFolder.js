const fs = require('fs');
const path = require('path');

// Check if a folder exists
function checkFolderExists(folderPath) {
  try {
    fs.accessSync(folderPath, fs.constants.F_OK);
    console.log(`Folder exists: ${folderPath}`);
    return true;
  } catch (err) {
    console.log(`Folder does not exist: ${folderPath}`);
    return false;
  }
}

// Create a new folder
function createFolder(folderPath) {
  try {
    if (!checkFolderExists(folderPath)) {
      fs.mkdirSync(folderPath);
      console.log(`Folder created: ${folderPath}`);
    }
  } catch (err) {
    console.error(`Error creating folder: ${err.message}`);
  }
}

// Read the content of a directory
function readFolderContents(folderPath) {
  try {
    const contents = fs.readdirSync(folderPath);
    console.log(`Contents of ${folderPath}:`, contents);
    return contents;
  } catch (err) {
    console.error(`Error reading folder contents: ${err.message}`);
    return [];
  }
}

// Rename a folder
function renameFolder(oldPath, newPath) {
  try {
    if (checkFolderExists(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`Folder renamed from ${oldPath} to ${newPath}`);
    } else {
      console.log(`Folder to rename does not exist: ${oldPath}`);
    }
  } catch (err) {
    console.error(`Error renaming folder: ${err.message}`);
  }
}

// Remove a folder
function removeFolder(folderPath) {
  try {
    if (checkFolderExists(folderPath)) {
      fs.rmSync(folderPath, { recursive: true, force: true });
      console.log(`Folder removed: ${folderPath}`);
    } else {
      console.log(`Folder to remove does not exist: ${folderPath}`);
    }
  } catch (err) {
    console.error(`Error removing folder: ${err.message}`);
  }
}

// Step-by-step execution
function main() {
  const folderPath = path.join(__dirname, 'testFolder');
  const renamedFolderPath = path.join(__dirname, 'renamedFolder');

  console.log("Step 1: Check if the folder exists.");
  checkFolderExists(folderPath);

  console.log("\nStep 2: Create a new folder.");
  createFolder(folderPath);

  console.log("\nStep 3: Read the contents of the folder.");
  readFolderContents(folderPath);

  console.log("\nStep 4: Rename the folder.");
  renameFolder(folderPath, renamedFolderPath);

  console.log("\nStep 5: Remove the folder.");
//   removeFolder(renamedFolderPath);
}

// Call the main function
main();
