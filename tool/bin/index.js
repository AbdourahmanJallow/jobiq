#!/usr/bin/env node
const logger = require('../src/logger')('bin');

require('colors');
const arg = require('arg');
const start = require('../src/commands/start');
const getConfig = require('../src/config/config-mgr');

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  logger.debug('Received args', args);

  if (args['--start']) {
    const config = getConfig();
    start(config);
    // console.log('Starting app...'.cyan);
  }
} catch (error) {
  logger.warning(`${error.message}\n`);
  usage();
}

function usage() {
  console.log(`${'tool [CMD]'.white.bold}
  ${'--start'.green}\tstarts the app
  ${'--build'.green}\tbuilds the app`);
}
