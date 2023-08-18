import dotenv from 'dotenv'

import { MarketDataService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const marketDataService = new MarketDataService(TOKEN, true)

describe('instrumentId as "6afa6f80-03a7-4d83-9cf0-c19d7d021f76"', () => {
  test('Expect "response" to have property "trades"', async () => {
    const response = await marketDataService.GetLastTrades({
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
    })
    expect(response).toHaveProperty('trades')
  })
})
