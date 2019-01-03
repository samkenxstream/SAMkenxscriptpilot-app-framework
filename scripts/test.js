const fs = require('fs-extra');
const run = require('./helper/run');
const log = require('./helper/logger');
const path = require('./helper/path');

const config = fs.readJsonSync(path.app('config.json'));

const tests = [];
if (config.test.eslint.runOnTestCommand) tests.push(`node "${path.scripts('test-eslint.js')}"`);
if (config.test.jest.runOnTestCommand) tests.push(`node "${path.scripts('test-jest.js')}"`);

if (tests.length > 0) {
  const scriptResult = run.loud(tests.join(' && '));
  if (scriptResult.code === 0) log.success('Passed all tests.');
  else log.error('Failed one or more tests.');
} else {
  log.info('No tests configured.');
}