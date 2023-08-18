import dotenv from 'dotenv'

import { MarketDataService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const marketDataService = new MarketDataService(TOKEN, true)

describe('instrumentId as "5ec3a0de-80b4-4572-ba48-0a18c9f371fd"', () => {
  test('Expect "response" to have property "lastPrices"', async () => {
    const response = await marketDataService.GetLastPrices({
      instrumentId: ['5ec3a0de-80b4-4572-ba48-0a18c9f371fd']
    })
    expect(response).toHaveProperty('lastPrices')
  })
})
