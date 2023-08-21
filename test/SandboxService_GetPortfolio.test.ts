import dotenv from 'dotenv'

import { SandboxService, PortfolioRequestCurrencyRequest } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const sandboxService = new SandboxService(TOKEN, true)

describe('accountId as "ACCOUNT_ID"', () => {
  describe.each([
    PortfolioRequestCurrencyRequest.RUB,
    PortfolioRequestCurrencyRequest.EUR,
    PortfolioRequestCurrencyRequest.USD
  ])('currency as "%i"', (currencyRequest: PortfolioRequestCurrencyRequest) => {
    test('Expect "response" to have "all" properties', async () => {
      const response = await sandboxService.GetSandboxPortfolio({
        accountId: ACCOUNT_ID,
        currency: currencyRequest
      })
      expect(response).toHaveProperty('totalAmountShares')
      expect(response).toHaveProperty('totalAmountBonds')
      expect(response).toHaveProperty('totalAmountEtf')
      expect(response).toHaveProperty('totalAmountCurrencies')
      expect(response).toHaveProperty('totalAmountFutures')
      expect(response).toHaveProperty('expectedYield')
      expect(response).toHaveProperty('positions')
      expect(response).toHaveProperty('accountId')
      expect(response).toHaveProperty('totalAmountOptions')
      expect(response).toHaveProperty('totalAmountSp')
      expect(response).toHaveProperty('totalAmountPortfolio')
      expect(response).toHaveProperty('virtualPositions')
    })
  })
})
