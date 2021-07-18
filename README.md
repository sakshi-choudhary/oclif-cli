cliop
=====

multi command cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cliop.svg)](https://npmjs.org/package/cliop)
[![Downloads/week](https://img.shields.io/npm/dw/cliop.svg)](https://npmjs.org/package/cliop)
[![License](https://img.shields.io/npm/l/cliop.svg)](https://github.com/sakshi-choudhary/oclif-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cliop
$ cliop COMMAND
running command...
$ cliop (-v|--version|version)
cliop/0.0.0 darwin-x64 node-v12.18.3
$ cliop --help [COMMAND]
USAGE
  $ cliop COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cliop hello`](#cliop-hello)
* [`cliop help [COMMAND]`](#cliop-help-command)

## `cliop hello`

Describe the command here

```
USAGE
  $ cliop hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/sakshi-choudhary/oclif-cli/blob/v0.0.0/src/commands/hello.js)_

## `cliop help [COMMAND]`

display help for cliop

```
USAGE
  $ cliop help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
