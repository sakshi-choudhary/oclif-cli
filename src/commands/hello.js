const { Command, flags } = require("@oclif/command");

class HelloCommand extends Command {
  async run() {
    const { flags } = this.parse(HelloCommand);
    const name = flags.name || "world";
    this.log(`hello ${name} from Sakshi`);
  }
}

HelloCommand.description = `Describe the command here
...
Says hello
`;

HelloCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
};

module.exports = HelloCommand;
