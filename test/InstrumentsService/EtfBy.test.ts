import dotenv from 'dotenv'

import { InstrumentIdType, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('idType as INSTRUMENT_ID_UNSPECIFIED', () => {
  test('Expect "response" to have property "description"', async () => {
    const response = await instrumentsService.EtfBy({
      idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
      classCode: '',
      id: ''
    })
    expect(response).toHaveProperty('description')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_FIGI', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.EtfBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: 'BBG00KLHY7D7'
    })
    expect(response).toHaveProperty('instrument')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_TICKER', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.EtfBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
      classCode: 'SPBXM',
      id: 'DRIV'
    })
    expect(response).toHaveProperty('instrument')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_POSITION_UID', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.EtfBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
      classCode: '',
      id: 'c76c4b4c-74b2-41d5-902a-da8a1848c5a5'
    })
    expect(response).toHaveProperty('instrument')
  })
})
