const { Command } = require("@oclif/command");

class SakshiCommand extends Command {
  async run() {
    const details = {
      age: "20",
      surname: "choudhary",
    };
    console.log("Her details:", details);
  }
}

module.exports = SakshiCommand;
