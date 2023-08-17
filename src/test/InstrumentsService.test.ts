import dotenv from 'dotenv'

import { InstrumentsService, TradingSchedulesResponse } from '..'

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

      test('Expect `exchanges[0].days[0]` to have `almost all` properties', async () => {
        expect(response.exchanges[0].days[0]).toHaveProperty('date')
        expect(response.exchanges[0].days[0]).toHaveProperty('isTradingDay')
        expect(response.exchanges[0].days[0]).toHaveProperty('startTime')
        expect(response.exchanges[0].days[0]).toHaveProperty('endTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('openingAuctionStartTime')
        expect(response.exchanges[0].days[0]).toHaveProperty(
          'closingAuctionEndTime'
        )
        // expect(response.exchanges[0].days[0]).toHaveProperty('eveningOpeningAuctionStartTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('eveningStartTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('eveningEndTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('clearingStartTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('clearingEndTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('premarketStartTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('premarketEndTime')
        expect(response.exchanges[0].days[0]).toHaveProperty(
          'closingAuctionStartTime'
        )
        expect(response.exchanges[0].days[0]).toHaveProperty(
          'openingAuctionEndTime'
        )
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

      test('Expect `exchanges[0].days[0]` to have `almost all` properties', async () => {
        expect(response.exchanges[0].days[0]).toHaveProperty('date')
        expect(response.exchanges[0].days[0]).toHaveProperty('isTradingDay')
        expect(response.exchanges[0].days[0]).toHaveProperty('startTime')
        expect(response.exchanges[0].days[0]).toHaveProperty('endTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('openingAuctionStartTime')
        expect(response.exchanges[0].days[0]).toHaveProperty(
          'closingAuctionEndTime'
        )
        // expect(response.exchanges[0].days[0]).toHaveProperty('eveningOpeningAuctionStartTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('eveningStartTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('eveningEndTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('clearingStartTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('clearingEndTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('premarketStartTime')
        // expect(response.exchanges[0].days[0]).toHaveProperty('premarketEndTime')
        expect(response.exchanges[0].days[0]).toHaveProperty(
          'closingAuctionStartTime'
        )
        expect(response.exchanges[0].days[0]).toHaveProperty(
          'openingAuctionEndTime'
        )
      })
    })
  })
})
