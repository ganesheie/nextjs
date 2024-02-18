const express = require("express");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const bodyParser = require("body-parser");
const { storePageContent, getSection1Content } = require("./ServiceHelper.js");
const app = express();
const spawn = require("child_process").spawn;
var PropertiesReader = require("properties-reader");
const { sendMail } = require("./mail.js");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/getsection1items", async (req, res) => {
  const { page } = req.query;

  const data = await getSection1Content(page);
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 0));
  res.setHeader("Content-Type", "application/json");
  res.send(data);
});
app.get("/sendemail", async (req, res) => {
  sendMail("Mail Content ");
  res.setHeader("Content-Type", "application/json");
  res.send("Mail Sent");
});

app.post("/handleformdata", async (req, res) => {
  try {
    const formData = req.body;
    console.log("Formdata : " + JSON.stringify(formData));
    await sendMail(formData);
    res.status(200).json({ status: "Mail sent successfully" });
  } catch (error) {
    console.error("Error sending mail:", error);
    res
      .status(500)
      .json({ error: "An error occurred while sending the email." });
  }
});

app.get("/getpagecontent/:page", async (req, res) => {
  const { page } = req.params;
  console.log("page is " + page);

  // Check if JSON file exists
  const jsonFilePath = `${page}.json`;
  try {
    // Attempt to read the file
    const jsonData = await readFileAsync(jsonFilePath, "utf8");

    // If file exists, return its content
    console.log(`Returning content from ${jsonFilePath}`);
    res.setHeader("Content-Type", "application/json");
    res.send(jsonData);
  } catch (error) {
    // If file doesn't exist, execute Java method
    console.log(`File ${jsonFilePath} not found, executing Java method`);

    const properties = PropertiesReader("page.properties");
    const id = properties.get(page);

    executeJava(["Page", id, "https://group.atradius.com"], async (data) => {
      // Store content in JSON file
      await writeFileAsync(jsonFilePath, data, "utf8");

      // Send response to client
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    });
  }
});

app.get("/getsection1items", async (req, res) => {
  const { page } = req.query;

  const data = await getSection1Content(page);
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 0));
  res.setHeader("Content-Type", "application/json");
  res.send(data);
});

const executeJava = (args, callback) => {
  let pageContent = "";
  const worker = spawn("java", [
    "-jar",
    "getcontent.jar",
    ...args.map((arg) => String(arg)),
  ]);
  worker.stdout.on("data", function (data) {
    pageContent += data.toString();
  });
  worker.on("close", function (code, signal) {
    callback(pageContent);
  });
};

app.listen(8080);
console.log("Server started http://localhost:8080/");
