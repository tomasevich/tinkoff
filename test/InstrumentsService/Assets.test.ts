import dotenv from 'dotenv'

import { InstrumentType, InstrumentsService, AssetFull } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

let asset: AssetFull

describe('Запрашиваем список активов', () => {
  test('Получаем список активов (без указания типа)', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_UNSPECIFIED
    })
    expect(response).toHaveProperty('assets')
  })

  test('Получаем список активов (указав тип облигацию)', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_BOND
    })
    expect(response).toHaveProperty('assets')
  })

  test('Получаем список активов (указав тип сертификат)', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_CLEARING_CERTIFICATE
    })
    expect(response).toHaveProperty('assets')
  })

  test('Получаем список активов (указав тип валюту)', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_CURRENCY
    })
    expect(response).toHaveProperty('assets')
  })

  test('Получаем список активов (указав тип инвест.фонд)', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_ETF
    })
    expect(response).toHaveProperty('assets')
  })

  test('Получаем список активов (указав тип фьючерс)', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_FUTURES
    })
    expect(response).toHaveProperty('assets')
  })

  test('Получаем список активов (указав тип опцион)', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_OPTION
    })
    asset = response.assets[0]
    expect(response).toHaveProperty('assets')
  })

  describe('Запрашиваем конкретный опцион', () => {
    test('Получаем конкретный опцион (указав конкретный актив)', async () => {
      const response = await instrumentsService.OptionsBy({
        basicAssetUid: asset.uid,
        basicAssetPositionUid: ''
      })
      expect(response).toHaveProperty('instruments')
    })
  })

  test('Получаем список активов (указав тип акции)', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_SHARE
    })
    asset = response.assets[0]
    expect(response).toHaveProperty('assets')
  })

  describe('Запрашиваем конкретный актив', () => {
    test('Получаем конкретный актив (указав акцию)', async () => {
      const response = await instrumentsService.GetAssetBy({
        id: asset.id
      })
      expect(response).toHaveProperty('asset')
    })
  })

  test('Получаем список активов (указав тип структ.ноту)', async () => {
    const response = await instrumentsService.GetAssets({
      instrumentType: InstrumentType.INSTRUMENT_TYPE_SP
    })
    expect(response).toHaveProperty('assets')
  })
})
