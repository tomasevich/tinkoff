import dotenv from 'dotenv'

import { Common } from '../src'

dotenv.config({ path: './.env.test' })

describe('QuotationToString', () => {
  test('Expect "value" to equal "114,25"', () => {
    expect(
      Common.QuotationToString({
        units: '114',
        nano: 250000000
      })
    ).toEqual('114,25')
  })

  test('Expect "value" to equal "-200,2"', () => {
    expect(
      Common.QuotationToString({
        units: '-200',
        nano: -200000000
      })
    ).toEqual('-200,2')
  })

  test('Expect "value" to equal "-0,01"', () => {
    expect(
      Common.QuotationToString({
        units: '-0',
        nano: -10000000
      })
    ).toEqual('-0,01')
  })
})
