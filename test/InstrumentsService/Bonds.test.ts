import dotenv from 'dotenv'

import { BondsResponse, InstrumentStatus, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('InstrumentsService', () => {
  describe('Bonds', () => {
    describe('Try `instrumentStatus` as `INSTRUMENT_STATUS_BASE`', () => {
      let response: BondsResponse

      beforeAll(async () => {
        response = await instrumentsService.Bonds({
          instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
        })
      })

      test('Expect `response` to have property `instruments`', async () => {
        expect(response).toHaveProperty('instruments')
      })
    })

    describe('Try `instrumentStatus` as `INSTRUMENT_STATUS_ALL`', () => {
      let response: BondsResponse

      beforeAll(async () => {
        response = await instrumentsService.Bonds({
          instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL
        })
      })

      test('Expect `response` to have property `instruments`', async () => {
        expect(response).toHaveProperty('instruments')
      })
    })

    describe('Try `instrumentStatus` as `INSTRUMENT_STATUS_UNSPECIFIED`', () => {
      let response: BondsResponse

      beforeAll(async () => {
        response = await instrumentsService.Bonds({
          instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED
        })
      })

      test('Expect `response` to have property `instruments`', async () => {
        expect(response).toHaveProperty('instruments')
      })
    })
  })
})
