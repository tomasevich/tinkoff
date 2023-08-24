import dotenv from 'dotenv'

import {
  EditFavoritesActionType,
  InstrumentIdType,
  InstrumentsService,
  Share
} from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

let instrument: Share

describe('Редактируем избранные инструменты', () => {
  beforeAll(async () => {
    const response = await instrumentsService.ShareBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
      classCode: 'TQBR',
      id: 'TCSG'
    })
    instrument = response.instrument
  })

  test('Получаем ошибку сервера (не указав тип)', async () => {
    const response = await instrumentsService.EditFavorites({
      instruments: [],
      actionType: EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED
    })
    expect(response).toHaveProperty('description')
  })

  test('Получаем список инструментов (добавив акцию)', async () => {
    const response = await instrumentsService.EditFavorites({
      instruments: [{ figi: instrument.figi }],
      actionType: EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_ADD
    })
    expect(response).toHaveProperty('favoriteInstruments')
  })

  describe('Запрашиваем список инструментов', () => {
    test('Получаем список инструментов', async () => {
      const response = await instrumentsService.GetFavorites({})
      expect(response).toHaveProperty('favoriteInstruments')
    })
  })

  test('Получаем список инструментов (удалив акцию)', async () => {
    const response = await instrumentsService.EditFavorites({
      instruments: [{ figi: instrument.figi }],
      actionType: EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_DEL
    })
    expect(response).toHaveProperty('favoriteInstruments')
  })
})
