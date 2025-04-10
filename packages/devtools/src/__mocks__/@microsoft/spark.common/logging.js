// Mock for @microsoft/spark.common/logging
class MockConsoleLogger {
  constructor(options = {}) {
    this.options = options;
  }

  debug = jest.fn();
  info = jest.fn();
  warn = jest.fn();
  error = jest.fn();
}

module.exports = {
  ConsoleLogger: MockConsoleLogger,
};
