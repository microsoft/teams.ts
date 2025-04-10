// Mock implementation of devUtils for testing
const devUtils = {
  isDev: false,
  getDevMessage: jest.fn().mockReturnValue(null),
  devLog: jest.fn(),
  setDevMessage: jest.fn(),
};

module.exports = devUtils;
