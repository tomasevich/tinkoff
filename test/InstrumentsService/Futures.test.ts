import dotenv from 'dotenv'

import {
  InstrumentStatus,
  InstrumentIdType,
  InstrumentsService,
  Future
} from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

let instrument: Future

describe('Запрашиваем списки фьючерсов', () => {
  test('Получаем (весь) список фьючерсов', async () => {
    const response = await instrumentsService.Futures({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем (без указания статуса) список фьючерсов', async () => {
    const response = await instrumentsService.Futures({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем (базовый) список фьючерсов', async () => {
    const response = await instrumentsService.Futures({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
    })
    instrument = response.instruments[0]
    expect(response).toHaveProperty('instruments')
  })

  describe('Запрашиваем конкретный фьючерс', () => {
    test('Получаем ошибку сервера (без указания типа)', async () => {
      const response = await instrumentsService.FutureBy({
        idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
        classCode: '',
        id: ''
      })
      expect(response).toHaveProperty('code')
      expect(response).toHaveProperty('message')
      expect(response).toHaveProperty('description')
    })

    test('Получаем фьючерс (указав фиги)', async () => {
      const response = await instrumentsService.FutureBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        classCode: '',
        id: instrument.figi
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем фьючерс (указав тикер)', async () => {
      const response = await instrumentsService.FutureBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
        classCode: instrument.classCode,
        id: instrument.ticker
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем фьючерс (указав айди)', async () => {
      const response = await instrumentsService.FutureBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID,
        classCode: '',
        id: instrument.uid
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем фьючерс (указав позицию)', async () => {
      const response = await instrumentsService.FutureBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
        classCode: '',
        id: instrument.positionUid
      })
      expect(response).toHaveProperty('instrument')
    })
  })

  describe('Запрашиваем информацию о фьючерсе', () => {
    test('Получаем информацию о фьючерсе (указав фиги)', async () => {
      const response = await instrumentsService.GetFuturesMargin({
        figi: instrument.figi
      })
      expect(response).toHaveProperty('initialMarginOnBuy')
      expect(response).toHaveProperty('initialMarginOnSell')
      expect(response).toHaveProperty('minPriceIncrement')
      expect(response).toHaveProperty('minPriceIncrementAmount')
    })
  })
})
