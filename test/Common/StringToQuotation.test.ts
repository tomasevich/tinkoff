import dotenv from 'dotenv'

import { Common } from '../src'

dotenv.config({ path: './.env.test' })

describe('StringToQuotation', () => {
  test('Expect "value" to equal "{ units: "114", nano: 250000000 }"', () => {
    expect(Common.StringToQuotation('114,25')).toEqual({
      units: '114',
      nano: 250000000
    })
  })

  test('Expect "value" to equal "{ units: "-200", nano: -200000000 }"', () => {
    expect(Common.StringToQuotation('-200,2')).toEqual({
      units: '-200',
      nano: -200000000
    })
  })

  test('Expect "value" to equal "{ units: "-0", nano: -10000000 }"', () => {
    expect(Common.StringToQuotation('-0,01')).toEqual({
      units: '-0',
      nano: -10000000
    })
  })
})
