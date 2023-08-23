import dotenv from 'dotenv'

import { InstrumentStatus, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

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

describe('Запрашиваем конкретную облигацию', () => {
  beforeAll(async () => {
    const response = await instrumentsService.Bonds({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
    })
    this.instrument = response.instruments[0]
  })

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

  test.each([
    {
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: this.instrument.figi
    },
    {
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
      classCode: this.instrument.classCode,
      id: this.instrument.ticker
    },
    {
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID,
      classCode: '',
      id: this.instrument.uid
    },
    {
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
      classCode: '',
      id: this.instrument.positionUid
    }
  ])(
    'Получаем конкретную облигацию с параметрами ($idType, $classCode, $id)',
    async ({ idType, classCode, id }) => {
      const response = await instrumentsService.BondBy({
        idType,
        classCode,
        id
      })
      expect(response).toHaveProperty('instrument')
    }
  )
})

describe('Запрашиваем конкретный график выплат купонов по облигации', () => {
  beforeAll(async () => {
    const response = await instrumentsService.Bonds({
      instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
    })
    this.instrument = response.instruments[0]
  })

  test('Получаем конкретный графика выплат купонов по облигации', async () => {
    const currTime = new Date()
    const nextTime = new Date(currTime)
    nextTime.setDate(currTime.getDate() + 1)

    const response = await instrumentsService.GetBondCoupons({
      figi: this.instrument.figi,
      from: currTime.toISOString(),
      to: nextTime.toISOString()
    })
    expect(response).toHaveProperty('events')
  })
})
