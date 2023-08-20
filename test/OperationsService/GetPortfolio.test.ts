import dotenv from 'dotenv'

import { OperationsService, PortfolioRequestCurrencyRequest } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const operationsService = new OperationsService(TOKEN, true)

describe('accountId as ACCOUNT_ID', () => {
  describe('currency as "EUR"', () => {
    test('Expect "response" to have "all" properties', async () => {
      const response = await operationsService.GetPortfolio({
        accountId: ACCOUNT_ID,
        currency: PortfolioRequestCurrencyRequest.EUR
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

  describe('currency as "RUB"', () => {
    test('Expect "response" to have "all" properties', async () => {
      const response = await operationsService.GetPortfolio({
        accountId: ACCOUNT_ID,
        currency: PortfolioRequestCurrencyRequest.RUB
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

  describe('currency as "USD"', () => {
    test('Expect "response" to have "all" properties', async () => {
      const response = await operationsService.GetPortfolio({
        accountId: ACCOUNT_ID,
        currency: PortfolioRequestCurrencyRequest.USD
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
