import dotenv from 'dotenv'

import { MarketDataService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const marketDataService = new MarketDataService(TOKEN, true)

describe('ONLY ON WORKING TIME', () => {
  describe('depth as "10"', () => {
    describe('instrumentId as "6afa6f80-03a7-4d83-9cf0-c19d7d021f76"', () => {
      test('Expect "response" to have "all" properties', async () => {
        const response = await marketDataService.GetOrderBook({
          depth: 10,
          instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
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
        // expect(response).toHaveProperty('orderbookTs')
        expect(response).toHaveProperty('instrumentUid')
      })
    })
  })
})
