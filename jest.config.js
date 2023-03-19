// jest.config.js
const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>/src/'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  globals: {},
  setupFiles: [],
};

module.exports = { ...createJestConfig(customJestConfig) };