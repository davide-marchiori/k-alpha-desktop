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

function copyFolderRecursiveSync(source, target) {
  // Check if folder needs to be created or integrated
  const targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    files.forEach(function (file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        fs.copyFileSync(curSource, path.join(targetFolder, file));
      }
    });
  }
}

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

  // Copy 'out' directory to 'dist'
  console.log('Copying "out" directory to "dist"');
  copyFolderRecursiveSync(sourceDir, path.dirname(destDir));

  // Remove 'out' directory
  console.log('Removing "out" directory');
  deleteFolderRecursive(sourceDir);

  console.log('Successfully moved "out" directory to "dist"');
} catch (error) {
  console.error("Error moving directory:", error);
  process.exit(1);
}
