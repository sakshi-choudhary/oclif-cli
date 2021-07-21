const { Command } = require("@oclif/command");
const { cli } = require("cli-ux");

class spinCommand extends Command {
  async run() {
    // start the spinner
    cli.action.start("starting a process");
    // do some action...
    // stop the spinner
    this.log("jkebdjkwbcfjwerkv");
    cli.action.stop(); // shows 'starting a process... done'

    // show on stdout instead of stderr
    cli.action.start("starting a process", "initializing", { stdout: true });
    // do some action...
    // stop the spinner with a custom message
    cli.action.stop("custom message"); // shows 'starting a process... custom message'
  }
}
spinCommand.description = "this command takes shows spinner";

module.exports = spinCommand;
