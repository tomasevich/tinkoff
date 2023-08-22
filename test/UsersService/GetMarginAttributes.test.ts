import dotenv from 'dotenv'

import { UsersService, GetMarginAttributesResponse } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const usersService = new UsersService(TOKEN, true)

let marginAttributes: GetMarginAttributesResponse

describe('Empty body', () => {
  beforeAll(async () => {
    marginAttributes = await usersService.GetMarginAttributes({
      accountId: ACCOUNT_ID
    })
  })

  describe('Expect "Margin Attributes" properies', () => {
    test('To have "liquidPortfolio"', () => {
      expect(marginAttributes).toHaveProperty('liquidPortfolio')
    })
    test('To have "startingMargin"', () => {
      expect(marginAttributes).toHaveProperty('startingMargin')
    })
    test('To have "minimalMargin"', () => {
      expect(marginAttributes).toHaveProperty('minimalMargin')
    })
    test('To have "fundsSufficiencyLevel"', () => {
      expect(marginAttributes).toHaveProperty('fundsSufficiencyLevel')
    })
    test('To have "amountOfMissingFunds"', () => {
      expect(marginAttributes).toHaveProperty('amountOfMissingFunds')
    })
    test('To have "correctedMargin"', () => {
      expect(marginAttributes).toHaveProperty('correctedMargin')
    })
  })
})
