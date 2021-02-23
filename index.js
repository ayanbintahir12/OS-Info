require("dotenv").config();
const fs = require("fs");
const os = require("os");
const fileLocation = os.homedir() + process.env.FILE_LOCATION + "OSInfo.txt";

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
  } catch (err) {
    throw console.log("Error: " + err);
  }
};

const start = async () => {
  const fileWritten = await writeFile();
  console.log("File Saved Successfully!");
};

start();
