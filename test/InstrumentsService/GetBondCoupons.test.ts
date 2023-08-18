import dotenv from 'dotenv'

import { InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('figi as "TCS00A105WZ4"', () => {
  test('Expect "response" to have property "events"', async () => {
    const currTime = new Date()
    const nextTime = new Date(currTime)
    nextTime.setDate(currTime.getDate() + 1)

    const response = await instrumentsService.GetBondCoupons({
      figi: 'TCS00A105WZ4',
      from: currTime.toISOString(),
      to: nextTime.toISOString()
    })
    expect(response).toHaveProperty('events')
  })
})
