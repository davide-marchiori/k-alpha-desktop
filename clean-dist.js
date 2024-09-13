const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "dist");

function deleteFolderRecursive(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directoryPath);
  }
}

console.log("Cleaning dist directory...");
deleteFolderRecursive(distPath);
console.log("Dist directory cleaned.");
