import dotenv from 'dotenv'

import { InstrumentIdType, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('idType as INSTRUMENT_ID_UNSPECIFIED', () => {
  test('Expect "response" to have property "description"', async () => {
    const response = await instrumentsService.BondBy({
      idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
      classCode: '',
      id: ''
    })
    expect(response).toHaveProperty('description')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_FIGI', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.BondBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: 'TCS00A105WZ4'
    })
    expect(response).toHaveProperty('instrument')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_TICKER', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.BondBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
      classCode: 'TQCB',
      id: 'RU000A105WZ4'
    })
    expect(response).toHaveProperty('instrument')
  })
})

describe('idType as INSTRUMENT_ID_TYPE_POSITION_UID', () => {
  test('Expect "response" to have property "instrument"', async () => {
    const response = await instrumentsService.BondBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
      classCode: '',
      id: '7ae5d999-a5df-4dda-adf3-daee11af88f7'
    })
    expect(response).toHaveProperty('instrument')
  })
})
