import dotenv from 'dotenv'

import {
  UsersService,
  Account,
  GetInfoResponse,
  GetMarginAttributesResponse,
  GetUserTariffResponse
} from '../src'

dotenv.config({ path: './.env.test' })

let usersService: UsersService
let tempAccounts: Account[]
let tempInfo: GetInfoResponse
let tempMarginAttributes: GetMarginAttributesResponse
let tempUserTariff: GetUserTariffResponse

describe('UsersService', () => {
  beforeAll(async () => {
    usersService = new UsersService(
      process.env.TINKOFF_INVEST_API_TOKEN ?? '',
      true
    )
  })

  describe('GetAccounts', () => {
    beforeAll(async () => {
      const { accounts } = await usersService.GetAccounts({})
      tempAccounts = accounts
    })

    describe('Expect "Accounts" length', () => {
      test('To be greater than "0"', () => {
        expect(tempAccounts.length).toBeGreaterThan(0)
      })

      describe('Expect "Account" properies', () => {
        test('To have "id"', () => {
          expect(tempAccounts[0]).toHaveProperty('id')
        })
        test('To have "type"', () => {
          expect(tempAccounts[0]).toHaveProperty('type')
        })
        test('To have "name"', () => {
          expect(tempAccounts[0]).toHaveProperty('name')
        })
        test('To have "status"', () => {
          expect(tempAccounts[0]).toHaveProperty('status')
        })
        test('To have "openedDate"', () => {
          expect(tempAccounts[0]).toHaveProperty('openedDate')
        })
        test('To have "accessLevel"', () => {
          expect(tempAccounts[0]).toHaveProperty('accessLevel')
        })

        // test('To have "closedDate"', () => {
        // Почему-то не возвращает дату закрытия, хотя в оф.документации есть это свойство
        // expect(tempAccounts[0]).toHaveProperty('closedDate')
        // })
      })
    })
  })

  describe('GetMarginAttributes', () => {
    beforeAll(async () => {
      const marginAttributes = await usersService.GetMarginAttributes({
        accountId: process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
      })
      tempMarginAttributes = marginAttributes
    })

    describe('Expect "Margin Attributes" properies', () => {
      test('To have "liquidPortfolio"', () => {
        expect(tempMarginAttributes).toHaveProperty('liquidPortfolio')
      })
      test('To have "startingMargin"', () => {
        expect(tempMarginAttributes).toHaveProperty('startingMargin')
      })
      test('To have "minimalMargin"', () => {
        expect(tempMarginAttributes).toHaveProperty('minimalMargin')
      })
      test('To have "fundsSufficiencyLevel"', () => {
        expect(tempMarginAttributes).toHaveProperty('fundsSufficiencyLevel')
      })
      test('To have "amountOfMissingFunds"', () => {
        expect(tempMarginAttributes).toHaveProperty('amountOfMissingFunds')
      })
      test('To have "correctedMargin"', () => {
        expect(tempMarginAttributes).toHaveProperty('correctedMargin')
      })
    })
  })

  describe('GetUserTariff', () => {
    beforeAll(async () => {
      const userTariff = await usersService.GetUserTariff({
        accountId: process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
      })
      tempUserTariff = userTariff
    })

    describe('Expect "User Tariff" properies', () => {
      test('To have "unaryLimits"', () => {
        expect(tempUserTariff).toHaveProperty('unaryLimits')
      })
      test('To have "streamLimits"', () => {
        expect(tempUserTariff).toHaveProperty('streamLimits')
      })

      describe('Expect "unaryLimits" properies', () => {
        test('To have "limitPerMinute"', () => {
          expect(tempUserTariff.unaryLimits[0]).toHaveProperty('limitPerMinute')
        })
        test('To have "methods"', () => {
          expect(tempUserTariff.unaryLimits[0]).toHaveProperty('methods')
        })
      })

      describe('Expect "streamLimits" properies', () => {
        test('To have "limit"', () => {
          expect(tempUserTariff.streamLimits[0]).toHaveProperty('limit')
        })
        test('To have "streams"', () => {
          expect(tempUserTariff.streamLimits[0]).toHaveProperty('streams')
        })
        test('To have "open"', () => {
          expect(tempUserTariff.streamLimits[0]).toHaveProperty('open')
        })
      })
    })
  })

  describe('GetInfo', () => {
    beforeAll(async () => {
      const info = await usersService.GetInfo({})
      tempInfo = info
    })

    describe('Expect "Info" properies', () => {
      test('To have "premStatus"', () => {
        expect(tempInfo).toHaveProperty('premStatus')
      })
      test('To have "qualStatus"', () => {
        expect(tempInfo).toHaveProperty('qualStatus')
      })
      test('To have "qualifiedForWorkWith"', () => {
        expect(tempInfo).toHaveProperty('qualifiedForWorkWith')
      })
      test('To have "tariff"', () => {
        expect(tempInfo).toHaveProperty('tariff')
      })
    })
  })
})
