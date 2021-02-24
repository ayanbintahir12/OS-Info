require("dotenv").config();
const fs = require("fs");
const os = require("os");
const fileLocation = process.env.FILE_LOCATION + "OSInfo.txt";

const writeFile = async () => {
  try {
    fs.writeFileSync(
      fileLocation,
      "OS Platform: " +
        os.platform() +
        "\n User Name: " +
        os.userInfo().username +
        "\n PC Arch: " +
        os.arch()
    );
    console.log("File Saved Successfully!");
  } catch (err) {
    throw console.log("Error: File not written successfully!" + err);
  }
};
const getFileData = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName,"utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
const start = async () => {
  const fileWritten = await writeFile();
};
start();
getFileData(fileLocation)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
