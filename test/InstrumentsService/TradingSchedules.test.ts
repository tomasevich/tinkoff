import dotenv from 'dotenv'

import { InstrumentsService, TradingSchedulesResponse } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('InstrumentsService', () => {
  describe('TradingSchedules', () => {
    describe('Try `exchange` as `MOEX_MORNING`', () => {
      let response: TradingSchedulesResponse

      beforeAll(async () => {
        const currTime = new Date()
        const nextTime = new Date(currTime)
        nextTime.setDate(currTime.getDate() + 1)

        response = await instrumentsService.TradingSchedules({
          from: currTime.toISOString(),
          to: nextTime.toISOString(),
          exchange: 'MOEX_MORNING'
        })
      })

      test('Expect `response` to have property `exchanges`', async () => {
        expect(response).toHaveProperty('exchanges')
      })

      test('Expect `exchanges[0]` to have properties `exchange` & `days`', async () => {
        expect(response.exchanges[0]).toHaveProperty('exchange')
        expect(response.exchanges[0]).toHaveProperty('days')
      })

      test('Expect `exchanges[0].exchange` to equal `MOEX_MORNING`', async () => {
        expect(response.exchanges[0].exchange).toEqual('MOEX_MORNING')
      })

      test('Expect `exchanges[0].days[0]` to have property `date` & `isTradingDay`', async () => {
        expect(response.exchanges[0].days[0]).toHaveProperty('date')
        expect(response.exchanges[0].days[0]).toHaveProperty('isTradingDay')
      })
    })

    describe('Try `exchange` as ``', () => {
      let response: TradingSchedulesResponse

      beforeAll(async () => {
        const currTime = new Date()
        const nextTime = new Date(currTime)
        nextTime.setDate(currTime.getDate() + 1)

        response = await instrumentsService.TradingSchedules({
          from: currTime.toISOString(),
          to: nextTime.toISOString(),
          exchange: 'MOEX_MORNING'
        })
      })

      test('Expect `response` to have property `exchanges`', async () => {
        expect(response).toHaveProperty('exchanges')
      })

      test('Expect `exchanges[0]` to have properties `exchange` & `days`', async () => {
        expect(response.exchanges[0]).toHaveProperty('exchange')
        expect(response.exchanges[0]).toHaveProperty('days')
      })

      test('Expect `exchanges[0].days[0]` to have property `date` & `isTradingDay`', async () => {
        expect(response.exchanges[0].days[0]).toHaveProperty('date')
        expect(response.exchanges[0].days[0]).toHaveProperty('isTradingDay')
      })
    })
  })
})
