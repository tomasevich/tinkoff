import dotenv from 'dotenv'

import { InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('Запрашиваем список бирж', () => {
  test('Получаем список бирж (указав конкретную)', async () => {
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

  test('Получаем список бирж (не указав конкретную)', async () => {
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
