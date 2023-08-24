import dotenv from 'dotenv'

import {
  InstrumentStatus,
  InstrumentIdType,
  InstrumentsService,
  Share
} from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

let instrument: Share

describe('Запрашиваем списки акций', () => {
  test('Получаем (весь) список акций', async () => {
    const response = await instrumentsService.Shares({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем (без указания статуса) список акций', async () => {
    const response = await instrumentsService.Shares({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем (базовый) список акций', async () => {
    const response = await instrumentsService.Shares({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
    })
    instrument = response.instruments[0]
    expect(response).toHaveProperty('instruments')
  })

  describe('Запрашиваем конкретную акцию', () => {
    test('Получаем ошибку сервера (без указания типа)', async () => {
      const response = await instrumentsService.ShareBy({
        idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
        classCode: '',
        id: ''
      })
      expect(response).toHaveProperty('code')
      expect(response).toHaveProperty('message')
      expect(response).toHaveProperty('description')
    })

    test('Получаем акцию (указав фиги)', async () => {
      const response = await instrumentsService.ShareBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        classCode: '',
        id: instrument.figi
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем акцию (указав тикер)', async () => {
      const response = await instrumentsService.ShareBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
        classCode: instrument.classCode,
        id: instrument.ticker
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем акцию (указав айди)', async () => {
      const response = await instrumentsService.ShareBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID,
        classCode: '',
        id: instrument.uid
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем акцию (указав позицию)', async () => {
      const response = await instrumentsService.ShareBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
        classCode: '',
        id: instrument.positionUid
      })
      expect(response).toHaveProperty('instrument')
    })
  })

  describe('Запрашиваем информации по дивидентам', () => {
    test('Получаем информации по дивидентам (указав фиги)', async () => {
      const currTime = new Date()
      const nextTime = new Date(currTime)
      nextTime.setDate(currTime.getDate() + 1)

      const response = await instrumentsService.GetDividends({
        figi: instrument.figi,
        from: currTime.toISOString(),
        to: nextTime.toISOString()
      })
      expect(response).toHaveProperty('dividends')
    })
  })
})
