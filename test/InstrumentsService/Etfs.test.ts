import dotenv from 'dotenv'

import { InstrumentStatus, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('instrumentStatus as INSTRUMENT_STATUS_BASE', () => {
  test('Expect "response" to have property "instruments"', async () => {
    const response = await instrumentsService.Etfs({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
    })
    expect(response).toHaveProperty('instruments')
  })
})

describe('instrumentStatus as INSTRUMENT_STATUS_ALL', () => {
  test('Expect "response" to have property "instruments"', async () => {
    const response = await instrumentsService.Etfs({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL
    })
    expect(response).toHaveProperty('instruments')
  })
})

describe('instrumentStatus as INSTRUMENT_STATUS_UNSPECIFIED', () => {
  test('Expect "response" to have property "instruments"', async () => {
    const response = await instrumentsService.Etfs({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED
    })
    expect(response).toHaveProperty('instruments')
  })
})
