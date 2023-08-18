import dotenv from 'dotenv'

import { InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('Empty body', () => {
  test('Expect "response" to have property "dividends"', async () => {
    const currTime = new Date()
    const nextTime = new Date(currTime)
    nextTime.setDate(currTime.getDate() + 1)

    const response = await instrumentsService.GetDividends({
      figi: 'BBG00YTS96G2',
      from: currTime.toISOString(),
      to: nextTime.toISOString()
    })
    expect(response).toHaveProperty('dividends')
  })
})
