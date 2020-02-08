/** @module logging */

require("dotenv").config({ silent: true });

const winston = require("winston");

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "blue",
  verbose: "magenta"
};

const logger = new winston.Logger({
  level: process.env.LOG_LEVEL || "debug",
  levels,
  colors
});

logger.add(winston.transports.Console, {
  prettyPrint: true,
  colorize: !!process.env.COLORED_LOGS
});

/**
 * Creates a wrapper for the logger, that prefixes all messages with `prefix`.
 *
 * The returned object has a method corresponding to each of the configured
 * levels.
 *
 * @param  {String} pf prefix
 * @returns {Object}
 */
logger.prefixed = pf => {
  const loglevels = [...Object.keys(levels), "log"];

  const wrappedLogger = loglevels.reduce((prefixedLogger, level) => {
    // eslint-disable-next-line no-param-reassign
    prefixedLogger[level] = (...args) => {
      if (typeof args[0] === "string") {
        args[0] = `[${pf}] ${args[0]}`; // eslint-disable-line no-param-reassign
      }
      return logger[level](...args);
    };
    return prefixedLogger;
  }, {});

  return wrappedLogger;
};

module.exports = logger;
