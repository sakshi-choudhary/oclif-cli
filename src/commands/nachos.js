const { Command } = require("@oclif/command");
const { cli } = require("cli-ux");

class nachosCommand extends Command {
  static args = [
    {
      name: "file", // name of arg to show in help and reference with args[name]
      required: false, // make the arg required with `required: true`
      description: "output file", // help description
      hidden: false, // hide this arg from help
      //parse: input, // instead of the user input, return a different value
      default: "is good", // default value if no arg input
      //options: ["a", "b"], // only allow input to be from a discrete set
    },
  ];
  async run() {
    const { argv } = this.parse(nachosCommand);
    const name = await cli.prompt("What nachos do you want?");

    const nachos = [
      {
        name: "abc1",
        price: "20",
      },
      {
        name: "abc2",
        price: "25",
      },
      {
        name: "abc3",
        price: "30",
      },
    ];

    const price = nachos.find((p) => p.name === name).price;
    this.log("Pay Rs.", `${price}`);
  }
}
nachosCommand.description = "this is nachos command description";

module.exports = nachosCommand;
