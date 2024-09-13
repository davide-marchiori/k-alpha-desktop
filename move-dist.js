// const fs = require("fs");
// const path = require("path");

// const sourceDir = path.join(__dirname, "out");
// const destDir = path.join(__dirname, "dist");

// try {
//   // Rename 'out' directory to 'dist'
//   fs.renameSync(sourceDir, destDir);
//   console.log('Successfully moved "out" directory to "dist"');
// } catch (error) {
//   console.error("Error moving directory:", error);
//   process.exit(1);
// }

const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "out");
const destDir = path.join(__dirname, "dist");

function deleteFolderRecursive(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
}

try {
  // If dist directory exists, delete it
  if (fs.existsSync(destDir)) {
    console.log('Removing existing "dist" directory');
    deleteFolderRecursive(destDir);
  }

  // Rename 'out' directory to 'dist'
  fs.renameSync(sourceDir, destDir);
  console.log('Successfully moved "out" directory to "dist"');
} catch (error) {
  console.error("Error moving directory:", error);
  process.exit(1);
}
