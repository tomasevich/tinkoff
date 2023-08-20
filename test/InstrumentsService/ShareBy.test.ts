import dotenv from 'dotenv'

import { InstrumentIdType, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('idType as INSTRUMENT_ID_UNSPECIFIED', () => {
  test('Expect "response" to have property "description"', async () => {
    const response = await instrumentsService.ShareBy({
      idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
      classCode: '',
      id: ''
    })
    expect(response).toHaveProperty('description')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_FIGI', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.ShareBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: 'BBG00YTS96G2'
    })
    expect(response).toHaveProperty('instrument')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_TICKER', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.ShareBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
      classCode: 'SPBXM',
      id: 'APA'
    })
    expect(response).toHaveProperty('instrument')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_POSITION_UID', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.ShareBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
      classCode: '',
      id: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
    })
    expect(response).toHaveProperty('instrument')
  })
})
