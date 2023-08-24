import dotenv from 'dotenv'

import {
  CandleInterval,
  MarketDataService,
  InstrumentsService,
  Share
} from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const marketDataService = new MarketDataService(TOKEN, true)
const instrumentsService = new InstrumentsService(TOKEN, true)

let instrument: Share

describe('Запрашиваем список свечей', () => {
  beforeAll(async () => {
    const response = await instrumentsService.ShareBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
      classCode: 'TQBR',
      id: 'TCSG'
    })
    instrument = response.instrument
  })

  test('Получаем ошибку сервера (не указав параметры)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_UNSPECIFIED,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('code')
    expect(response).toHaveProperty('message')
    expect(response).toHaveProperty('description')
  })

  test('Получаем список свечей (указав интервал 1 миин)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_1_MIN,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 2 миин)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_2_MIN,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 3 миин)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_3_MIN,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 5 миин)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_5_MIN,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 10 миин)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_10_MIN,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 15 миин)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_15_MIN,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 30 миин)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_30_MIN,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 1 час)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_HOUR,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 2 часа)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_2_HOUR,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 4 часа)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_4_HOUR,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 1 день)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-08-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_DAY,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 1 неделя)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_WEEK,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })

  test('Получаем список свечей (указав интервал 1 месяц)', async () => {
    const response = await marketDataService.GetCandles({
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      interval: CandleInterval.CANDLE_INTERVAL_MONTH,
      instrumentId: instrument.uid
    })
    expect(response).toHaveProperty('candles')
  })
})
