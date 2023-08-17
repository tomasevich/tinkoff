/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  $schema: 'https://typedoc.org/schema.json',
  entryPoints: ['./src'],
  entryPointStrategy: 'expand',
  out: 'docs',
  exclude: '**/*+(.test|.spec|.e2e).ts',
  categorizeByGroup: false,
  navigationLinks: {
    GitHub: 'https://github.com/tomasevich/tinkoff',
    NPM: 'https://www.npmjs.com/package/@tomasevich/tinkoff'
  }
}
