#!/usr/bin/env node

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();
const dotenv = require('dotenv')
const crypto = require('crypto');

function getOpt(obj) {
  const count = Object.keys(obj).length;

  const firstKey = Object.keys(obj)[0];
  return count === 1 ? firstKey : false;

}

program
  .name('enCMD')
  .description('CLI Utilities to manage FencePOS easier')
  .version('0.0.1');
program // usage: node encmd.js secret {-g / -c}
  .command('secret')
  .option('-g, --generate', 'Generate a secret')
  .option('-c, --clear', 'Clear the secret')

  .description('Secret related commands')
  .action((x) => {
    switch (getOpt(x)) {
      case 'generate':
        // Generate a random value

        const value = crypto.randomBytes(64).toString('hex');

        // Load the current .env file
        const env = dotenv.parse(fs.readFileSync('.env'));

        // Set the new value in the .env file
        env.KEY = value;

        // Convert the updated object to a string
        const envString = Object.entries(env)
          .map(([key, value]) => `${key}=${value}`)
          .join('\n');

        // Write the updated .env file
        fs.writeFileSync('.env', envString);
        console.log('Updated.env file => [KEY] to a new value');
        break;
      case 'clear':
        console.log('This command is in progress.');
        break;
      default:
        console.log('Invalid option, please try again or -h');
        break;
  }

  });

program.parse(process.argv);