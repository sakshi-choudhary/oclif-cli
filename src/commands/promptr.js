const { Command } = require("@oclif/command");
const { cli } = require("cli-ux");

class PromptrCommand extends Command {
  async run() {
    // just prompt for input
    const name = await cli.prompt("What is your name?");

    // mask input after enter is pressed
    const secondFactor = await cli.prompt("What is your two-factor token?", {
      type: "mask",
    });

    // hide input while typing
    const password = await cli.prompt("What is your password?", {
      type: "hide",
    });

    this.log(`You entered: ${name}, ${secondFactor}, ${password}`);
  }
}

PromptrCommand.description = "this command takes user inputs like a typeform";

module.exports = PromptrCommand;
