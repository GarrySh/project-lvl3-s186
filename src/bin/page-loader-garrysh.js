#!/usr/bin/env node

import commander from 'commander';
import { version } from '../../package.json';
import pageLoader from '..';

commander
  .description('download internet page content to local directory')
  .version(version)
  .arguments('<URI>')
  .option('-o, --output [directory]', 'folder to download', process.cwd())
  .action((uri, options) => pageLoader(uri, options.output)
    .then(() => console.log(`page ${uri} successfully downloaded`))
    .catch((err) => {
      console.error(`error download page ${uri}, ${err.message}`);
      process.exit(1);
    }))
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}
