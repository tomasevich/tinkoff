/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  $schema: 'https://typedoc.org/schema.json',
  entryPoints: ['./src'],
  entryPointStrategy: 'expand',
  exclude: ['./src/index.ts'],
  out: 'docs',
  categorizeByGroup: false,
  navigationLinks: {
    GitHub: 'https://github.com/tomasevich/tinkoff',
    NPM: 'https://www.npmjs.com/package/@tomasevich/tinkoff'
  }
}
