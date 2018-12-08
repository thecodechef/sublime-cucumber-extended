const common = [
  `tests/features/**/*.feature`,
  `--logLevel=error`,
  `--require-module ts-node/register`,
  `--require 'tests/support/**/*.ts'`,
  `--require 'tests/steps/**/*.ts'`,
  `--format-options '{"snippetInterface": "async-await"}'`,
  `--format json:reports/cucumber-report.json`,
  `--format summary`
].join(' ');

module.exports = {
	default: common
};