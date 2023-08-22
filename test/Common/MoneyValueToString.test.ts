import dotenv from 'dotenv'

import { Common } from '../../src'

dotenv.config({ path: './.env.test' })

describe.each([
  {
    received: {
      units: '114',
      nano: 250000000,
      currency: 'rub'
    },
    expected: '114.25 rub'
  },
  {
    received: {
      units: '-200',
      nano: -200000000,
      currency: 'eur'
    },
    expected: '-200.2 eur'
  },
  {
    received: {
      units: '-0',
      nano: -10000000,
      currency: 'usd'
    },
    expected: '-0.01 usd'
  }
])('MoneyValueToString', ({ received, expected }) => {
  test('Expect "$received" to equal "$expected"', () => {
    expect(Common.MoneyValueToString(received)).toEqual(expected)
  })
})
