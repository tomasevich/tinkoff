import dotenv from 'dotenv'

import {
  InstrumentStatus,
  InstrumentIdType,
  InstrumentsService,
  Bond
} from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

let instrument: Bond

describe('Запрашиваем списки облигаций', () => {
  test('Получаем (весь) список облигаций', async () => {
    const response = await instrumentsService.Bonds({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем (без указания статуса) список облигаций', async () => {
    const response = await instrumentsService.Bonds({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED
    })
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем (базовый) список облигаций', async () => {
    const response = await instrumentsService.Bonds({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
    })
    instrument = response.instruments[0]
    expect(response).toHaveProperty('instruments')
  })

  describe('Запрашиваем конкретную облигацию', () => {
    test('Получаем ошибку сервера (без указания типа)', async () => {
      const response = await instrumentsService.BondBy({
        idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
        classCode: '',
        id: ''
      })
      expect(response).toHaveProperty('code')
      expect(response).toHaveProperty('message')
      expect(response).toHaveProperty('description')
    })

    test('Получаем облигацию (указав фиги)', async () => {
      const response = await instrumentsService.BondBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        classCode: '',
        id: instrument.figi
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем облигацию (указав тикер)', async () => {
      const response = await instrumentsService.BondBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
        classCode: instrument.classCode,
        id: instrument.ticker
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем облигацию (указав айди)', async () => {
      const response = await instrumentsService.BondBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID,
        classCode: '',
        id: instrument.uid
      })
      expect(response).toHaveProperty('instrument')
    })

    test('Получаем облигацию (указав позицию)', async () => {
      const response = await instrumentsService.BondBy({
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
        classCode: '',
        id: instrument.positionUid
      })
      expect(response).toHaveProperty('instrument')
    })
  })

  describe('Запрашиваем график выплат купонов по облигации', () => {
    test('Получаем графика выплат купонов по облигации (указав фиги)', async () => {
      const currTime = new Date()
      const nextTime = new Date(currTime)
      nextTime.setDate(currTime.getDate() + 1)

      const response = await instrumentsService.GetBondCoupons({
        figi: instrument.figi,
        from: currTime.toISOString(),
        to: nextTime.toISOString()
      })
      expect(response).toHaveProperty('events')
    })
  })
})
