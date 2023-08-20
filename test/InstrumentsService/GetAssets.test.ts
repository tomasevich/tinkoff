import dotenv from 'dotenv'

import { InstrumentType, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('instrumentType as INSTRUMENT_TYPE_BOND', () => {
  test('Expect "response" to have property "assets"', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_BOND
    })
    expect(response).toHaveProperty('assets')
  })
})

describe('instrumentType as INSTRUMENT_TYPE_CLEARING_CERTIFICATE', () => {
  test('Expect "response" to have property "assets"', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_CLEARING_CERTIFICATE
    })
    expect(response).toHaveProperty('assets')
  })
})

describe('instrumentType as INSTRUMENT_TYPE_CURRENCY', () => {
  test('Expect "response" to have property "assets"', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_CURRENCY
    })
    expect(response).toHaveProperty('assets')
  })
})

describe('instrumentType as INSTRUMENT_TYPE_ETF', () => {
  test('Expect "response" to have property "assets"', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_ETF
    })
    expect(response).toHaveProperty('assets')
  })
})

describe('instrumentType as INSTRUMENT_TYPE_FUTURES', () => {
  test('Expect "response" to have property "assets"', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_FUTURES
    })
    expect(response).toHaveProperty('assets')
  })
})

describe('instrumentType as INSTRUMENT_TYPE_OPTION', () => {
  test('Expect "response" to have property "assets"', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_OPTION
    })
    expect(response).toHaveProperty('assets')
  })
})

describe('instrumentType as INSTRUMENT_TYPE_SHARE', () => {
  test('Expect "response" to have property "assets"', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_SHARE
    })
    expect(response).toHaveProperty('assets')
  })
})

describe('instrumentType as INSTRUMENT_TYPE_SP', () => {
  test('Expect "response" to have property "assets"', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_SP
    })
    expect(response).toHaveProperty('assets')
  })
})

describe('instrumentType as INSTRUMENT_TYPE_UNSPECIFIED', () => {
  test('Expect "response" to have property "assets"', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_UNSPECIFIED
    })
    expect(response).toHaveProperty('assets')
  })
})
