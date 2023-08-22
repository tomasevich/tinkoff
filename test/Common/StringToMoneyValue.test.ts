import dotenv from 'dotenv'

import { Common } from '../../src'

dotenv.config({ path: './.env.test' })

describe.each([
  {
    received: '114,25 rub',
    expected: {
      units: '114',
      nano: 250000000,
      currency: 'rub'
    }
  },
  {
    received: '-200,2 eur',
    expected: {
      units: '-200',
      nano: -200000000,
      currency: 'eur'
    }
  },
  {
    received: '-0,01 usd',
    expected: {
      units: '-0',
      nano: -10000000,
      currency: 'usd'
    }
  }
])('StringToMoneyValue', ({ received, expected }) => {
  test('Expect "$received" to equal "$expected"', () => {
    expect(Common.StringToMoneyValue(received)).toEqual(expected)
  })
})
