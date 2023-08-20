import dotenv from 'dotenv'

import { InstrumentIdType, InstrumentType, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('apiTradeAvailableFlag as true', () => {
  describe('instrumentKind as INSTRUMENT_TYPE_BOND', () => {
    test('Expect "response" to have property "instruments"', async () => {
      const response = await instrumentsService.FindInstrument({
        query: 'Tinkoff',
        instrumentKind: InstrumentType.INSTRUMENT_TYPE_BOND,
        apiTradeAvailableFlag: true
      })
      expect(response).toHaveProperty('instruments')
    })
  })

  describe('instrumentKind as INSTRUMENT_TYPE_CLEARING_CERTIFICATE', () => {
    test('Expect "response" to have property "instruments"', async () => {
      const response = await instrumentsService.FindInstrument({
        query: 'Tinkoff',
        instrumentKind: InstrumentType.INSTRUMENT_TYPE_CLEARING_CERTIFICATE,
        apiTradeAvailableFlag: true
      })
      expect(response).toHaveProperty('instruments')
    })
  })

  describe('instrumentKind as INSTRUMENT_TYPE_CURRENCY', () => {
    test('Expect "response" to have property "instruments"', async () => {
      const response = await instrumentsService.FindInstrument({
        query: 'usd',
        instrumentKind: InstrumentType.INSTRUMENT_TYPE_CURRENCY,
        apiTradeAvailableFlag: true
      })
      expect(response).toHaveProperty('instruments')
    })
  })

  describe('instrumentKind as INSTRUMENT_TYPE_ETF', () => {
    test('Expect "response" to have property "instruments"', async () => {
      const response = await instrumentsService.FindInstrument({
        query: 'Tinkoff',
        instrumentKind: InstrumentType.INSTRUMENT_TYPE_ETF,
        apiTradeAvailableFlag: true
      })
      expect(response).toHaveProperty('instruments')
    })
  })

  describe('instrumentKind as INSTRUMENT_TYPE_FUTURES', () => {
    test('Expect "response" to have property "instruments"', async () => {
      const response = await instrumentsService.FindInstrument({
        query: 'Tinkoff',
        instrumentKind: InstrumentType.INSTRUMENT_TYPE_FUTURES,
        apiTradeAvailableFlag: true
      })
      expect(response).toHaveProperty('instruments')
    })
  })

  describe('instrumentKind as INSTRUMENT_TYPE_OPTION', () => {
    test('Expect "response" to have property "instruments"', async () => {
      const response = await instrumentsService.FindInstrument({
        query: 'Tinkoff',
        instrumentKind: InstrumentType.INSTRUMENT_TYPE_OPTION,
        apiTradeAvailableFlag: true
      })
      expect(response).toHaveProperty('instruments')
    })
  })

  describe('instrumentKind as INSTRUMENT_TYPE_SHARE', () => {
    test('Expect "response" to have property "instruments"', async () => {
      const response = await instrumentsService.FindInstrument({
        query: 'Tinkoff',
        instrumentKind: InstrumentType.INSTRUMENT_TYPE_SHARE,
        apiTradeAvailableFlag: true
      })
      expect(response).toHaveProperty('instruments')
    })
  })

  describe('instrumentKind as INSTRUMENT_TYPE_SP', () => {
    test('Expect "response" to have property "instruments"', async () => {
      const response = await instrumentsService.FindInstrument({
        query: 'Tinkoff',
        instrumentKind: InstrumentType.INSTRUMENT_TYPE_SP,
        apiTradeAvailableFlag: true
      })
      expect(response).toHaveProperty('instruments')
    })
  })
})

describe('apiTradeAvailableFlag as false', () => {
  describe('instrumentKind as INSTRUMENT_TYPE_UNSPECIFIED', () => {
    test('Expect "response" to have property "instruments"', async () => {
      const response = await instrumentsService.FindInstrument({
        query: 'Tinkoff',
        instrumentKind: InstrumentType.INSTRUMENT_TYPE_UNSPECIFIED,
        apiTradeAvailableFlag: false
      })
      expect(response).toHaveProperty('instruments')
    })
  })
})
