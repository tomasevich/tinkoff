import dotenv from 'dotenv'

import { BondsResponse, InstrumentStatus, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('InstrumentsService', () => {
  describe('Bonds', () => {
    describe('Try `instrumentStatus` as `INSTRUMENT_STATUS_BASE`', () => {
      let response: BondsResponse

      beforeAll(async () => {
        response = await instrumentsService.Bonds({
          instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
        })
      })

      test('Expect `response` to have property `instruments`', async () => {
        expect(response).toHaveProperty('instruments')
      })

      test('Expect `response.instruments[0]` to have `all` properties', async () => {
        const instruments = response.instruments[0]
        expect(instruments).toHaveProperty('figi')
        expect(instruments).toHaveProperty('ticker')
        expect(instruments).toHaveProperty('classCode')
        expect(instruments).toHaveProperty('isin')
        expect(instruments).toHaveProperty('lot')
        expect(instruments).toHaveProperty('currency')
        // expect(instruments).toHaveProperty('klong')
        // expect(instruments).toHaveProperty('kshort')
        // expect(instruments).toHaveProperty('dlong')
        // expect(instruments).toHaveProperty('dshort')
        // expect(instruments).toHaveProperty('dlongMin')
        // expect(instruments).toHaveProperty('dshortMin')
        expect(instruments).toHaveProperty('shortEnabledFlag')
        expect(instruments).toHaveProperty('name')
        expect(instruments).toHaveProperty('exchange')
        expect(instruments).toHaveProperty('couponQuantityPerYear')
        expect(instruments).toHaveProperty('maturityDate')
        expect(instruments).toHaveProperty('nominal')
        expect(instruments).toHaveProperty('initialNominal')
        expect(instruments).toHaveProperty('stateRegDate')
        expect(instruments).toHaveProperty('placementDate')
        expect(instruments).toHaveProperty('placementPrice')
        expect(instruments).toHaveProperty('aciValue')
        expect(instruments).toHaveProperty('countryOfRisk')
        expect(instruments).toHaveProperty('countryOfRiskName')
        expect(instruments).toHaveProperty('sector')
        expect(instruments).toHaveProperty('issueKind')
        expect(instruments).toHaveProperty('issueSize')
        expect(instruments).toHaveProperty('issueSizePlan')
        expect(instruments).toHaveProperty('tradingStatus')
        expect(instruments).toHaveProperty('otcFlag')
        expect(instruments).toHaveProperty('buyAvailableFlag')
        expect(instruments).toHaveProperty('sellAvailableFlag')
        expect(instruments).toHaveProperty('floatingCouponFlag')
        expect(instruments).toHaveProperty('perpetualFlag')
        expect(instruments).toHaveProperty('amortizationFlag')
        expect(instruments).toHaveProperty('minPriceIncrement')
        expect(instruments).toHaveProperty('apiTradeAvailableFlag')
        expect(instruments).toHaveProperty('uid')
        expect(instruments).toHaveProperty('realExchange')
        expect(instruments).toHaveProperty('positionUid')
        expect(instruments).toHaveProperty('forIisFlag')
        expect(instruments).toHaveProperty('forQualInvestorFlag')
        expect(instruments).toHaveProperty('weekendFlag')
        expect(instruments).toHaveProperty('blockedTcaFlag')
        expect(instruments).toHaveProperty('subordinatedFlag')
        expect(instruments).toHaveProperty('liquidityFlag')
        expect(instruments).toHaveProperty('first1minCandleDate')
        expect(instruments).toHaveProperty('first1dayCandleDate')
        expect(instruments).toHaveProperty('riskLevel')
      })
    })

    describe('Try `instrumentStatus` as `INSTRUMENT_STATUS_ALL`', () => {
      let response: BondsResponse

      beforeAll(async () => {
        response = await instrumentsService.Bonds({
          instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_ALL
        })
      })

      test('Expect `response` to have property `instruments`', async () => {
        expect(response).toHaveProperty('instruments')
      })

      test('Expect `response.instruments[0]` to have `all` properties', async () => {
        const instruments = response.instruments[0]
        expect(instruments).toHaveProperty('figi')
        expect(instruments).toHaveProperty('ticker')
        expect(instruments).toHaveProperty('classCode')
        expect(instruments).toHaveProperty('isin')
        expect(instruments).toHaveProperty('lot')
        expect(instruments).toHaveProperty('currency')
        // expect(instruments).toHaveProperty('klong')
        // expect(instruments).toHaveProperty('kshort')
        // expect(instruments).toHaveProperty('dlong')
        // expect(instruments).toHaveProperty('dshort')
        // expect(instruments).toHaveProperty('dlongMin')
        // expect(instruments).toHaveProperty('dshortMin')
        expect(instruments).toHaveProperty('shortEnabledFlag')
        expect(instruments).toHaveProperty('name')
        expect(instruments).toHaveProperty('exchange')
        expect(instruments).toHaveProperty('couponQuantityPerYear')
        expect(instruments).toHaveProperty('maturityDate')
        expect(instruments).toHaveProperty('nominal')
        expect(instruments).toHaveProperty('initialNominal')
        // expect(instruments).toHaveProperty('stateRegDate')
        expect(instruments).toHaveProperty('placementDate')
        expect(instruments).toHaveProperty('placementPrice')
        expect(instruments).toHaveProperty('aciValue')
        expect(instruments).toHaveProperty('countryOfRisk')
        expect(instruments).toHaveProperty('countryOfRiskName')
        expect(instruments).toHaveProperty('sector')
        expect(instruments).toHaveProperty('issueKind')
        expect(instruments).toHaveProperty('issueSize')
        expect(instruments).toHaveProperty('issueSizePlan')
        expect(instruments).toHaveProperty('tradingStatus')
        expect(instruments).toHaveProperty('otcFlag')
        expect(instruments).toHaveProperty('buyAvailableFlag')
        expect(instruments).toHaveProperty('sellAvailableFlag')
        expect(instruments).toHaveProperty('floatingCouponFlag')
        expect(instruments).toHaveProperty('perpetualFlag')
        expect(instruments).toHaveProperty('amortizationFlag')
        // expect(instruments).toHaveProperty('minPriceIncrement')
        expect(instruments).toHaveProperty('apiTradeAvailableFlag')
        expect(instruments).toHaveProperty('uid')
        expect(instruments).toHaveProperty('realExchange')
        expect(instruments).toHaveProperty('positionUid')
        expect(instruments).toHaveProperty('forIisFlag')
        expect(instruments).toHaveProperty('forQualInvestorFlag')
        expect(instruments).toHaveProperty('weekendFlag')
        expect(instruments).toHaveProperty('blockedTcaFlag')
        expect(instruments).toHaveProperty('subordinatedFlag')
        expect(instruments).toHaveProperty('liquidityFlag')
        // expect(instruments).toHaveProperty('first1minCandleDate')
        // expect(instruments).toHaveProperty('first1dayCandleDate')
        expect(instruments).toHaveProperty('riskLevel')
      })
    })

    describe('Try `instrumentStatus` as `INSTRUMENT_STATUS_UNSPECIFIED`', () => {
      let response: BondsResponse

      beforeAll(async () => {
        response = await instrumentsService.Bonds({
          instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED
        })
      })

      test('Expect `response` to have property `instruments`', async () => {
        expect(response).toHaveProperty('instruments')
      })

      test('Expect `response.instruments[0]` to have `all` properties', async () => {
        const instruments = response.instruments[0]
        expect(instruments).toHaveProperty('figi')
        expect(instruments).toHaveProperty('ticker')
        expect(instruments).toHaveProperty('classCode')
        expect(instruments).toHaveProperty('isin')
        expect(instruments).toHaveProperty('lot')
        expect(instruments).toHaveProperty('currency')
        // expect(instruments).toHaveProperty('klong')
        // expect(instruments).toHaveProperty('kshort')
        // expect(instruments).toHaveProperty('dlong')
        // expect(instruments).toHaveProperty('dshort')
        // expect(instruments).toHaveProperty('dlongMin')
        // expect(instruments).toHaveProperty('dshortMin')
        expect(instruments).toHaveProperty('shortEnabledFlag')
        expect(instruments).toHaveProperty('name')
        expect(instruments).toHaveProperty('exchange')
        expect(instruments).toHaveProperty('couponQuantityPerYear')
        expect(instruments).toHaveProperty('maturityDate')
        expect(instruments).toHaveProperty('nominal')
        expect(instruments).toHaveProperty('initialNominal')
        expect(instruments).toHaveProperty('stateRegDate')
        expect(instruments).toHaveProperty('placementDate')
        expect(instruments).toHaveProperty('placementPrice')
        expect(instruments).toHaveProperty('aciValue')
        expect(instruments).toHaveProperty('countryOfRisk')
        expect(instruments).toHaveProperty('countryOfRiskName')
        expect(instruments).toHaveProperty('sector')
        expect(instruments).toHaveProperty('issueKind')
        expect(instruments).toHaveProperty('issueSize')
        expect(instruments).toHaveProperty('issueSizePlan')
        expect(instruments).toHaveProperty('tradingStatus')
        expect(instruments).toHaveProperty('otcFlag')
        expect(instruments).toHaveProperty('buyAvailableFlag')
        expect(instruments).toHaveProperty('sellAvailableFlag')
        expect(instruments).toHaveProperty('floatingCouponFlag')
        expect(instruments).toHaveProperty('perpetualFlag')
        expect(instruments).toHaveProperty('amortizationFlag')
        expect(instruments).toHaveProperty('minPriceIncrement')
        expect(instruments).toHaveProperty('apiTradeAvailableFlag')
        expect(instruments).toHaveProperty('uid')
        expect(instruments).toHaveProperty('realExchange')
        expect(instruments).toHaveProperty('positionUid')
        expect(instruments).toHaveProperty('forIisFlag')
        expect(instruments).toHaveProperty('forQualInvestorFlag')
        expect(instruments).toHaveProperty('weekendFlag')
        expect(instruments).toHaveProperty('blockedTcaFlag')
        expect(instruments).toHaveProperty('subordinatedFlag')
        expect(instruments).toHaveProperty('liquidityFlag')
        expect(instruments).toHaveProperty('first1minCandleDate')
        expect(instruments).toHaveProperty('first1dayCandleDate')
        expect(instruments).toHaveProperty('riskLevel')
      })
    })
  })
})
