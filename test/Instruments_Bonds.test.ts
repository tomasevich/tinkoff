import dotenv from 'dotenv'

import { InstrumentStatus, InstrumentIdType, InstrumentsService } from '../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe.each([InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED])(
  'Запрашиваем список облигаций по статусу %i',
  instrumentStatus => {
    test('Получаем ошибку от сервера', async () => {
      const bonds = await instrumentsService.Bonds(instrumentStatus)
      expect(bonds).toHaveProperty('code')
      expect(bonds).toHaveProperty('message')
      expect(bonds).toHaveProperty('description')
    })
  }
)

describe.each([
  InstrumentStatus.INSTRUMENT_STATUS_BASE,
  InstrumentStatus.INSTRUMENT_STATUS_ALL
])('Запрашиваем список облигаций по статусу %i', instrumentStatus => {
  test('Получаем список облигаций', async () => {
    const bonds = await instrumentsService.Bonds(instrumentStatus)
    expect(bonds).toHaveProperty('instruments')

    describe.each([
      'figi',
      'ticker',
      'classCode',
      'isin',
      'lot',
      'currency',
      'klong',
      'kshort',
      'dlong',
      'dshort',
      'dlongMin',
      'dshortMin',
      'shortEnabledFlag',
      'name',
      'exchange',
      'couponQuantityPerYear',
      'maturityDate',
      'nominal',
      'initialNominal',
      'stateRegDate',
      'placementDate',
      'placementPrice',
      'aciValue',
      'countryOfRisk',
      'countryOfRiskName',
      'sector',
      'issueKind',
      'issueSize',
      'issueSizePlan',
      'tradingStatus',
      'otcFlag',
      'buyAvailableFlag',
      'sellAvailableFlag',
      'floatingCouponFlag',
      'perpetualFlag',
      'amortizationFlag',
      'minPriceIncrement',
      'apiTradeAvailableFlag',
      'uid',
      'realExchange',
      'positionUid',
      'forIisFlag',
      'forQualInvestorFlag',
      'weekendFlag',
      'blockedTcaFlag',
      'subordinatedFlag',
      'liquidityFlag',
      'first1minCandleDate',
      'first1dayCandleDate',
      'riskLevel'
    ])('Проверяем свойства облигации', property => {
      test('Получаем список облигаций', async () => {
        expect(bonds.instruments[0]).toHaveProperty(property)
      })
    })

    describe.each([
      {
        idType: InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED,
        classCode: '',
        id: ''
      }
    ])(
      'Запрашиваем облигацию по типу $idType, классКоду $classCode и айди $id',
      ({ idType, classCode, id }) => {
        test('Получаем ошибку от сервера', async () => {
          const bondBy = await instrumentsService.BondBy(idType, classCode, id)
          expect(bondBy).toHaveProperty('code')
          expect(bondBy).toHaveProperty('message')
          expect(bondBy).toHaveProperty('description')
        })
      }
    )

    describe.each([
      {
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
        classCode: '',
        id: bonds.instruments[0].figi
      },
      {
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
        classCode: bonds.instruments[0].classCode,
        id: bonds.instruments[0].ticker
      },
      {
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID,
        classCode: '',
        id: bonds.instruments[0].uid
      },
      {
        idType: InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID,
        classCode: '',
        id: bonds.instruments[0].positionUid
      }
    ])(
      'Запрашиваем облигацию по типу $idType, классКоду $classCode и айди $id',
      ({ idType, classCode, id }) => {
        test('Получаем детали облигации', async () => {
          const bondBy = await instrumentsService.BondBy(idType, classCode, id)
          expect(bondBy).toHaveProperty('instrument')
        })
      }
    )
  })
})
