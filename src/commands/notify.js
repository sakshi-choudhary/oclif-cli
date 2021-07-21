const { Command } = require("@oclif/command");
const notifier = require("node-notifier");

class NotifyCommand extends Command {
  async run() {
    notifier.notify({
      title: "My notification",
      message: "Hello CLI is cuute!",
    });
  }
}

module.exports = NotifyCommand;
