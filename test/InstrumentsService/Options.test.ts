import dotenv from 'dotenv'

import {
  InstrumentStatus,
  InstrumentIdType,
  InstrumentsService,
  Option
} from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

let instrument: Option

describe('Запрашиваем списки опционов', () => {
  test('Получаем (весь) список опционов', async () => {
    const response = await instrumentsService.Options({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем (без указания статуса) список опционов', async () => {
    const response = await instrumentsService.Options({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем (базовый) список опционов', async () => {
    const response = await instrumentsService.Options({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
    })
    instrument = response.instruments[0]
    expect(response).toHaveProperty('instruments')
  })

  describe('Запрашиваем конкретный опцион', () => {
    test('Получаем ошибку сервера (без указания типа)', async () => {
      const response = await instrumentsService.OptionBy({
        idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
        classCode: '',
        id: ''
      })
      expect(response).toHaveProperty('code')
      expect(response).toHaveProperty('message')
      expect(response).toHaveProperty('description')
    })

    test('Получаем опцион (указав несуществующий фиги)', async () => {
      const response = await instrumentsService.OptionBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        classCode: '',
        id: ''
      })
      expect(response).toHaveProperty('code')
      expect(response).toHaveProperty('message')
      expect(response).toHaveProperty('description')
    })

    test('Получаем опцион (указав тикер)', async () => {
      const response = await instrumentsService.OptionBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
        classCode: instrument.classCode,
        id: instrument.ticker
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем опцион (указав айди)', async () => {
      const response = await instrumentsService.OptionBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID,
        classCode: '',
        id: instrument.uid
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем опцион (указав позицию)', async () => {
      const response = await instrumentsService.OptionBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
        classCode: '',
        id: instrument.positionUid
      })
      expect(response).toHaveProperty('instrument')
    })
  })
})
