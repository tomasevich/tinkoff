import dotenv from 'dotenv'

// import { InstrumentIdType, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

// const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
// const instrumentsService = new InstrumentsService(TOKEN, true)

describe('idType as INSTRUMENT_ID_UNSPECIFIED', () => {
  test.todo('Expect "response" to have property "description"')
})

describe('idType as INSTRUMENT_ID_TYPE_FIGI', () => {
  test.todo('Expect "response" to have property "instrument"')
})

describe('idType as INSTRUMENT_ID_TYPE_TICKER', () => {
  test.todo('Expect "response" to have property "instrument"')
})

describe('idType as INSTRUMENT_ID_TYPE_POSITION_UID', () => {
  test.todo('Expect "response" to have property "instrument"')
})
