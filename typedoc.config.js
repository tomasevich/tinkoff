/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ['./src'],
  entryPointStrategy: 'expand',
  out: 'docs',
  exclude: '**/*+(.test|.spec|.e2e).ts'
}
