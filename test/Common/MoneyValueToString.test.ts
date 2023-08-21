import dotenv from 'dotenv'

import { Common } from '../src'

dotenv.config({ path: './.env.test' })

describe('MoneyValueToString', () => {
  test('Expect "value" to equal "114,25 rub"', () => {
    expect(
      Common.MoneyValueToString({
        units: '114',
        nano: 250000000,
        currency: 'rub'
      })
    ).toEqual('114,25 rub')
  })

  test('Expect "value" to equal "-200,2 usd"', () => {
    expect(
      Common.MoneyValueToString({
        units: '-200',
        nano: -200000000,
        currency: 'usd'
      })
    ).toEqual('-200,2 usd')
  })

  test('Expect "value" to equal "-0,01 eur"', () => {
    expect(
      Common.MoneyValueToString({
        units: '-0',
        nano: -10000000,
        currency: 'eur'
      })
    ).toEqual('-0,01 eur')
  })
})
