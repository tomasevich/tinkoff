import dotenv from 'dotenv'

import { EditFavoritesActionType, InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('Empty body', () => {
  test('Expect "response" to have property "description"', async () => {
    const response = await instrumentsService.EditFavorites({
      instruments: [],
      actionType: EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED
    })
    expect(response).toHaveProperty('description')
  })
})

describe('actionType as EDIT_FAVORITES_ACTION_TYPE_ADD', () => {
  test('Expect "response" to have property "favoriteInstruments"', async () => {
    const response = await instrumentsService.EditFavorites({
      instruments: [{ figi: 'BBG00YTS96G2' }],
      actionType: EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_ADD
    })
    expect(response).toHaveProperty('favoriteInstruments')
  })
})

describe('actionType as EDIT_FAVORITES_ACTION_TYPE_ADD', () => {
  test('Expect "response" to have property "favoriteInstruments"', async () => {
    const response = await instrumentsService.EditFavorites({
      instruments: [{ figi: 'BBG00YTS96G2' }],
      actionType: EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_DEL
    })
    expect(response).toHaveProperty('favoriteInstruments')
  })
})
