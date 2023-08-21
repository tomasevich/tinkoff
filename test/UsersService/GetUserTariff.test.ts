import dotenv from 'dotenv'

import { UsersService, GetUserTariffResponse } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const usersService = new UsersService(TOKEN, true)

let userTariff: GetUserTariffResponse

describe('Empty body', () => {
  beforeAll(async () => {
    userTariff = await usersService.GetUserTariff({
      accountId: ACCOUNT_ID
    })
  })

  describe('Expect "userTariff" properies', () => {
    test('To have "unaryLimits"', () => {
      expect(userTariff).toHaveProperty('unaryLimits')
    })

    describe('Expect "unaryLimit" properies', () => {
      const unaryLimit = userTariff.unaryLimits[0]

      test('To have "limitPerMinute"', () => {
        expect(unaryLimit).toHaveProperty('limitPerMinute')
      })
      test('To have "methods"', () => {
        expect(unaryLimit).toHaveProperty('methods')
      })
    })

    test('To have "streamLimits"', () => {
      expect(userTariff).toHaveProperty('streamLimits')
    })

    describe('Expect "streamLimit" properies', () => {
      const streamLimit = userTariff.streamLimits[0]

      test('To have "limit"', () => {
        expect(streamLimit).toHaveProperty('limit')
      })
      test('To have "streams"', () => {
        expect(streamLimit).toHaveProperty('streams')
      })
      test('To have "open"', () => {
        expect(streamLimit).toHaveProperty('open')
      })
    })
  })
})
