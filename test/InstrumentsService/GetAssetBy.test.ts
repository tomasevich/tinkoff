import dotenv from 'dotenv'

import { InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('instrumentType as INSTRUMENT_TYPE_BOND', () => {
  test('Expect "response" to have property "asset"', async () => {
    const response = await instrumentsService.GetAssetBy({
      id: 'b6a73950-20a8-46c7-8b49-9dfbc14fe0ba'
    })
    expect(response).toHaveProperty('asset')
  })
})
