const base = require('@microsoft/spark.config/tsup.config');

/**
 * @type {import('tsup').Options}
 */
module.exports = {
  ...base,
  clean: false,
};
