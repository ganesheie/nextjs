const fs = require("node:fs/promises");
storePageContent = (fileName, fileContent) => {
  fs.writeFile(fileName + ".json", JSON.stringify(fileContent));
};

async function getSection1Content(fileName) {
  try {
    await fs.access(fileName + ".json");
  } catch (error) {
    // If file doesn't exist, return an empty array
    return [];
  }

  const rawFileContent = await fs.readFile(fileName + ".json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const returnData = {
    Section1Teasers: data.Section1Teasers || [],
    BackLink: data.BackLink || {},
  };

  return returnData;
}

exports.storePageContent = storePageContent;
exports.getSection1Content = getSection1Content;
