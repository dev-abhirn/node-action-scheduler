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

function runProcess() {
  const lastRun = getLastRunTime();
  // Do whatever process you want to run with the last run time

  console.log("Running your Node.js process...");
  // Your Node.js process code goes here
}

runProcess();
