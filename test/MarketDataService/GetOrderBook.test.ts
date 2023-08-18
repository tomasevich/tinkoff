import dotenv from 'dotenv'

import { MarketDataService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const marketDataService = new MarketDataService(TOKEN, true)

describe('depth as "10"', () => {
  describe('instrumentId as "5ec3a0de-80b4-4572-ba48-0a18c9f371fd"', () => {
    test('Expect "response" to have "all" properties', async () => {
      const response = await marketDataService.GetOrderBook({
        depth: 10,
        instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
      })
      expect(response).toHaveProperty('figi')
      expect(response).toHaveProperty('depth')
      expect(response).toHaveProperty('bids')
      expect(response).toHaveProperty('asks')
      expect(response).toHaveProperty('lastPrice')
      expect(response).toHaveProperty('closePrice')
      expect(response).toHaveProperty('limitUp')
      expect(response).toHaveProperty('limitDown')
      expect(response).toHaveProperty('lastPriceTs')
      expect(response).toHaveProperty('closePriceTs')
      expect(response).toHaveProperty('orderbookTs')
      expect(response).toHaveProperty('instrumentUid')
    })
  })
})
