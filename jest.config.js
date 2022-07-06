module.exports = {
  roots: ['<rootDir>/tests'],
  preset: 'ts-jest',
  coverageDirectory: './coverage',
  collectCoverage: false,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/src/functions/'
  ]
}
