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

describe('Запрашиваем список облигаций', () => {
  test.each([
    InstrumentStatus.INSTRUMENT_STATUS_BASE,
    InstrumentStatus.INSTRUMENT_STATUS_ALL,
    InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED
  ])('Получаем список облигаций со статусом (%i)"', async instrumentStatus => {
    const response = await instrumentsService.Bonds({ instrumentStatus })
    expect(response).toHaveProperty('instruments')
  })
})

describe('Запрашиваем конкретную облигацию из списка', () => {
  beforeAll(async () => {
    const response = await instrumentsService.Bonds({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
    })
    instrument = response.instruments[0]
    expect(response).toHaveProperty('instruments')
  })

  test('Получаем конкретную облигацию с параметрами ($idType, $classCode, $id)', async () => {
    ;[
      {
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        classCode: '',
        id: instrument.figi
      },
      {
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
        classCode: instrument.classCode,
        id: instrument.ticker
      },
      {
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID,
        classCode: '',
        id: instrument.uid
      },
      {
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
        classCode: '',
        id: instrument.positionUid
      }
    ].forEach(async param => {
      const response = await instrumentsService.BondBy(param)
      expect(response).toHaveProperty('instrument')
    })
  })
})

describe('Запрашиваем конкретную облигацию с ошибкой', () => {
  test.each([
    {
      idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
      classCode: '',
      id: ''
    }
  ])(
    'Получаем ошибку сервера с параметрами ($idType, $classCode, $id)',
    async ({ idType, classCode, id }) => {
      const response = await instrumentsService.BondBy({
        idType,
        classCode,
        id
      })
      expect(response).toHaveProperty('code')
      expect(response).toHaveProperty('message')
      expect(response).toHaveProperty('description')
    }
  )
})

describe('Запрашиваем конкретный график выплат купонов по облигации', () => {
  beforeAll(async () => {
    const response = await instrumentsService.Bonds({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
    })
    expect(response).toHaveProperty('instruments')

    instrument = response.instruments[0]
  })

  test('Получаем конкретный графика выплат купонов по облигации', async () => {
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
