module.exports = {
  transform: { '^.+\\.ts?$': 'ts-jest' },
  testEnvironment: 'node',
  testRegex: '/src/test/.*\\.(test|spec)?\\.(ts)$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  verbose: true
}
