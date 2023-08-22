import dotenv from 'dotenv'

import { Common } from '../../src'

dotenv.config({ path: './.env.test' })

describe.each([
  {
    received: {
      units: '114',
      nano: 250000000
    },
    expected: '114.25'
  },
  {
    received: {
      units: '-200',
      nano: -200000000
    },
    expected: '-200.2'
  },
  {
    received: {
      units: '-0',
      nano: -10000000
    },
    expected: '-0.01'
  }
])('QuotationToString', ({ received, expected }) => {
  test('Expect "$received" to equal "$expected"', () => {
    expect(Common.QuotationToString(received)).toEqual(expected)
  })
})
