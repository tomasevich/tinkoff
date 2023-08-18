import dotenv from 'dotenv'

import { InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('Empty body', () => {
  test('Expect "response" to have property "favoriteInstruments"', async () => {
    const response = await instrumentsService.GetFavorites({})
    expect(response).toHaveProperty('favoriteInstruments')
  })
})
