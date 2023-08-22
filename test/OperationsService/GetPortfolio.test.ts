import dotenv from 'dotenv'

import { OperationsService, PortfolioRequestCurrencyRequest } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const operationsService = new OperationsService(TOKEN, true)

describe.each([
  PortfolioRequestCurrencyRequest.RUB,
  PortfolioRequestCurrencyRequest.EUR,
  PortfolioRequestCurrencyRequest.USD
])('currency as "%i"', portfolioRequestCurrencyRequest => {
  test.skip('Expect "response" to have "all" properties', async () => {
    const response = await operationsService.GetPortfolio({
      accountId: ACCOUNT_ID,
      currency: portfolioRequestCurrencyRequest
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
