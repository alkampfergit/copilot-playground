
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'], // Point Jest to the test directory
  testMatch: ['**/*.test.ts'], // Look for files ending in .test.ts
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1', // Optional: Alias for src directory
    '^@rules/(.*)$': '<rootDir>/../rules/$1' // Alias for rules directory
  },
   modulePaths: ['<rootDir>'] // Ensure root directory is considered for module resolution
};
