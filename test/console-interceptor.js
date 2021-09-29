let consoleLog;
let consoleOutput;

const consoleInterceptor = {
  on: () => {
    consoleLog = console.log;
    consoleOutput = [];

    console.log = (...args) => {
      consoleOutput.push(args);
      consoleLog(...args);
    }
  },

  off: () => {
    console.log = consoleLog;
  },

  get: () => consoleOutput
}

module.exports = consoleInterceptor;