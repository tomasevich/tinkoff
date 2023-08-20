import dotenv from 'dotenv'

import { InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('exchange as "MOEX_MORNING"', () => {
  test('Expect "response" to have property "exchanges"', async () => {
    const currTime = new Date()
    const nextTime = new Date(currTime)
    nextTime.setDate(currTime.getDate() + 1)
    
    const response = await instrumentsService.TradingSchedules({
      from: currTime.toISOString(),
      to: nextTime.toISOString(),
      exchange: 'MOEX_MORNING'
    })
    expect(response).toHaveProperty('exchanges')
  })
})

describe('exchange as ""', () => {
  test('Expect "response" to have property "exchanges"', async () => {
    const currTime = new Date()
    const nextTime = new Date(currTime)
    nextTime.setDate(currTime.getDate() + 1)
    
    const response = await instrumentsService.TradingSchedules({
      from: currTime.toISOString(),
      to: nextTime.toISOString(),
      exchange: ''
    })
    expect(response).toHaveProperty('exchanges')
  })
})
