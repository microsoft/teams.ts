import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  testTimeout: 30000,
  // Run sequentially — tests share a conversation and can conflict if parallel
  maxWorkers: 1,
  verbose: true,
  silent: false,
};

export default config;
