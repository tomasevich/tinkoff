import dotenv from 'dotenv'

import { CandleInterval, MarketDataService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const marketDataService = new MarketDataService(TOKEN, true)

describe('interval as CANDLE_INTERVAL_UNSPECIFIED', () => {
  test('Expect "response" to have property "description"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_UNSPECIFIED,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('description')
  })
})

describe('interval as CANDLE_INTERVAL_1_MIN', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_1_MIN,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_2_MIN', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_2_MIN,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_3_MIN', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_3_MIN,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_5_MIN', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_5_MIN,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_10_MIN', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_10_MIN,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_15_MIN', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_15_MIN,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_30_MIN', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_30_MIN,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_HOUR', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_HOUR,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_2_HOUR', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_2_HOUR,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_4_HOUR', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_4_HOUR,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_DAY', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_DAY,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_WEEK', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_WEEK,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})

describe('interval as CANDLE_INTERVAL_MONTH', () => {
  test('Expect "response" to have property "candles"', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_MONTH,
      instrumentId: '5ec3a0de-80b4-4572-ba48-0a18c9f371fd'
    })
    expect(response).toHaveProperty('candles')
  })
})
