module.exports = {
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  verbose: false,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageDirectory: './coverage'
}
