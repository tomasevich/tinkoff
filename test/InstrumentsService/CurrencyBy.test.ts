import dotenv from 'dotenv'

import { InstrumentIdType, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('idType as INSTRUMENT_ID_UNSPECIFIED', () => {
  test('Expect "response" to have property "description"', async () => {
    const response = await instrumentsService.CurrencyBy({
      idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
      classCode: '',
      id: ''
    })
    expect(response).toHaveProperty('description')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_FIGI', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.CurrencyBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: 'BBG0013J7V24'
    })
    expect(response).toHaveProperty('instrument')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_TICKER', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.CurrencyBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
      classCode: 'CETS',
      id: 'AMDRUB_TOM'
    })
    expect(response).toHaveProperty('instrument')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_POSITION_UID', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.CurrencyBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
      classCode: '',
      id: '4515b482-71f0-4193-aa0a-b91efdab7062'
    })
    expect(response).toHaveProperty('instrument')
  })
})