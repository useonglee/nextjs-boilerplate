module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],

  moduleNameMapper: {
    '^@page(.*)$': '<rootDir>/page$1',
    '^@styles(.*)$': '<rootDir>/styles$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@mocks(.*)$': '<rootDir>/src/mocks$1',
    '^@react-query(.*)$': '<rootDir>/src/react-query$1',
    '^@recoil(.*)$': '<rootDir>/src/recoil$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',

  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss|ts)$',
  ],
};
