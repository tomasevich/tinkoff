import dotenv from 'dotenv'

import {
  InstrumentIdType,
  InstrumentType,
  InstrumentsService,
  Share
} from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

let instrument: any

describe('Запрашиваем списки инструментов', () => {
  test('Получаем список инструментов (не указав тип)', async () => {
    const response = await instrumentsService.FindInstrument({
      query: 'Tinkoff',
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_UNSPECIFIED,
      apiTradeAvailableFlag: false
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем список инструментов (указав облигацию)', async () => {
    const response = await instrumentsService.FindInstrument({
      query: 'Tinkoff',
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_BOND,
      apiTradeAvailableFlag: true
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем список инструментов (указав сертификат)', async () => {
    const response = await instrumentsService.FindInstrument({
      query: 'Tinkoff',
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_CLEARING_CERTIFICATE,
      apiTradeAvailableFlag: true
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем список инструментов (указав валюту)', async () => {
    const response = await instrumentsService.FindInstrument({
      query: 'usd',
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_CURRENCY,
      apiTradeAvailableFlag: true
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем список инструментов (указав инвест.фонд)', async () => {
    const response = await instrumentsService.FindInstrument({
      query: 'Tinkoff',
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_ETF,
      apiTradeAvailableFlag: true
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем список инструментов (указав фьючерс)', async () => {
    const response = await instrumentsService.FindInstrument({
      query: 'Tinkoff',
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_FUTURES,
      apiTradeAvailableFlag: true
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем список инструментов (указав опцион)', async () => {
    const response = await instrumentsService.FindInstrument({
      query: 'Tinkoff',
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_OPTION,
      apiTradeAvailableFlag: true
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем список инструментов (указав акцию)', async () => {
    const response = await instrumentsService.FindInstrument({
      query: 'Tinkoff',
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_SHARE,
      apiTradeAvailableFlag: true
    })
    instrument = response.instruments[0]
    expect(response).toHaveProperty('instruments')
  })

  describe('Запрашиваем конкретную акцию', () => {
    test('Получаем ошибку сервера (без указания типа)', async () => {
      const response = await instrumentsService.GetInstrumentBy({
        idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
        classCode: '',
        id: ''
      })
      expect(response).toHaveProperty('code')
      expect(response).toHaveProperty('message')
      expect(response).toHaveProperty('description')
    })

    test('Получаем акцию (указав фиги)', async () => {
      const response = await instrumentsService.GetInstrumentBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        classCode: '',
        id: instrument.figi
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем акцию (указав тикер)', async () => {
      const response = await instrumentsService.GetInstrumentBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
        classCode: instrument.classCode,
        id: instrument.ticker
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем акцию (указав айди)', async () => {
      const response = await instrumentsService.GetInstrumentBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID,
        classCode: '',
        id: instrument.uid
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем акцию (указав позицию)', async () => {
      const response = await instrumentsService.GetInstrumentBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
        classCode: '',
        id: instrument.positionUid
      })
      expect(response).toHaveProperty('instrument')
    })
  })

  test('Получаем список инструментов (указав структ.ноту)', async () => {
    const response = await instrumentsService.FindInstrument({
      query: 'Tinkoff',
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_SP,
      apiTradeAvailableFlag: true
    })
    expect(response).toHaveProperty('instruments')
  })
})
