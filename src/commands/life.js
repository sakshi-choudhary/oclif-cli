const { Command } = require("@oclif/command");

class lifeCommand extends Command {
  static args = [
    {
      name: "file", // name of arg to show in help and reference with args[name]
      required: false, // make the arg required with `required: true`
      description: "output file", // help description
      hidden: false, // hide this arg from help
      parse: (input) => input.length, // instead of the user input, return a different value
      default: "hi", // default value if no arg input
      //options: ["a", "b"], // only allow input to be from a discrete set
    },
    {
      name: "file", // name of arg to show in help and reference with args[name]
      required: false, // make the arg required with `required: true`
      description: "output file", // help description
      hidden: false, // hide this arg from help
      //parse: input => 'output',   // instead of the user input, return a different value
      default: "is shit", // default value if no arg input
      options: ["a", "b"], // only allow input to be from a discrete set
    },
  ];

  async run() {
    // can get args as an object
    // const { args } = this.parse(MyCLI);
    // console.log(
    //   `running my command with args: ${args.firstArg}, ${args.secondArg}`
    // );
    // can also get the args as an array
    const { argv } = this.parse(lifeCommand);
    console.log(`${argv[0]}, ${argv[1]}`);
  }
}

module.exports = lifeCommand;
