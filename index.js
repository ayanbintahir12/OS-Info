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

const getFileData = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

const start = async () => {
  const fileWritten = await writeFile();
};

const fetchingFile = async () => {
  try {
    const data = await getFileData(fileLocation);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
start();
fetchingFile();
