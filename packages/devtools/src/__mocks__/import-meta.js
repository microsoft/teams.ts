// Mock for import.meta.env used by Vite
module.exports = {
  env: {
    DEV: false,
    PROD: true,
    TEST: true,
    VITE_DEV_MESSAGE: 'Test environment message',
  },
};
