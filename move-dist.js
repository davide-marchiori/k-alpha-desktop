const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "out");
const destDir = path.join(__dirname, "dist");

try {
  // Rename 'out' directory to 'dist'
  fs.renameSync(sourceDir, destDir);
  console.log('Successfully moved "out" directory to "dist"');
} catch (error) {
  console.error("Error moving directory:", error);
  process.exit(1);
}
