import dotenv from 'dotenv'

import { InstrumentIdType, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('idType as INSTRUMENT_ID_UNSPECIFIED', () => {
  test('Expect "response" to have property "description"', async () => {
    const response = await instrumentsService.FutureBy({
      idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
      classCode: '',
      id: ''
    })
    expect(response).toHaveProperty('description')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_FIGI', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.FutureBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: 'FUTGMKN12230'
    })
    expect(response).toHaveProperty('instrument')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_TICKER', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.FutureBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
      classCode: 'SPBFUT',
      id: 'GKZ3'
    })
    expect(response).toHaveProperty('instrument')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_POSITION_UID', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.FutureBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
      classCode: '',
      id: '1f9f2d29-0fa5-48be-a105-990540c663c8'
    })
    expect(response).toHaveProperty('instrument')
  })
})
