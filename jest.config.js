module.exports = {
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testRegex: '/test/InstrumentsService/Bonds.test.ts',
  // testRegex: '/test/.*\\.(test|spec)?\\.(ts)$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  verbose: true
}
