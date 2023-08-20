import dotenv from 'dotenv'

import { InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('figi as BBG00YTS96G2', () => {
  test('Expect "response" to have "all" properties', async () => {
    const response = await instrumentsService.GetFuturesMargin({
      figi: 'FUTGMKN12230'
    })
    expect(response).toHaveProperty('initialMarginOnBuy')
    expect(response).toHaveProperty('initialMarginOnSell')
    expect(response).toHaveProperty('minPriceIncrement')
    expect(response).toHaveProperty('minPriceIncrementAmount')
  })
})
