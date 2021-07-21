const { Command, flags } = require("@oclif/command");
const { cli } = require("cli-ux");
const inquirer = require("inquirer");

class nachosCommand extends Command {
  static flags = {
    nachos: flags.string({ options: ["peri peri", "butter", "pickle"] }),
  };
  async run() {
    const { flags } = this.parse(nachosCommand);
    let nachos = flags.nachos;
    if (!nachos) {
      let responses = await inquirer.prompt([
        {
          name: "nachos",
          message: "select a nachos",
          type: "list",
          choices: [
            { name: "peri peri" },
            { name: "butter" },
            { name: "pickle" },
          ],
        },
      ]);
      nachos = responses.nachos;
    }

    const nachosData = [
      {
        name: "peri peri",
        price: "20",
      },
      {
        name: "butter",
        price: "25",
      },
      {
        name: "pickle",
        price: "30",
      },
    ];

    const price = nachosData.find((p) => p.name === nachos).price;
    this.log(`Pay Rs. ${price}`);
  }
}
nachosCommand.description = "this is nachos command description";

module.exports = nachosCommand;
