import dotenv from 'dotenv'

import { Common } from '../../src'

dotenv.config({ path: './.env.test' })

describe.each([
  {
    received: '114.25',
    expected: {
      units: '114',
      nano: 250000000
    }
  },
  {
    received: '-200.2',
    expected: {
      units: '-200',
      nano: -200000000
    }
  },
  {
    received: '-0.01',
    expected: {
      units: '-0',
      nano: -10000000
    }
  }
])('StringToQuotation', ({ received, expected }) => {
  test('Expect "$received" to equal "$expected"', () => {
    expect(Common.StringToQuotation(received)).toEqual(expected)
  })
})
