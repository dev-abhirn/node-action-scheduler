const fs = require("fs");
const path = require("path");

const lastRunFilePath = path.join(__dirname, "last_run_time.txt");

function getLastRunTime() {
  if (fs.existsSync(lastRunFilePath)) {
    const lastRunTime = fs.readFileSync(lastRunFilePath, "utf-8");
    console.log(`Previous run time: ${lastRunTime}`);
    return lastRunTime;
  } else {
    console.log("No previous run time found.");
    return null;
  }
}

function writetCurrentRunTime() {
  const nowUTC = new Date().toISOString();

  try {
    fs.writeFileSync(lastRunFilePath, nowUTC, "utf8");
    console.log(`UTC time written to ${lastRunFilePath}: ${nowUTC}`);
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}

function runProcess() {
  const lastRun = getLastRunTime();
  console.log(`Get Activities since ${lastRun}........................`);
  writetCurrentRunTime();
}

runProcess();
