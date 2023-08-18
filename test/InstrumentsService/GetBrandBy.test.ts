import dotenv from 'dotenv'

import { InstrumentsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

describe('id as 8c478c0a-c4e3-412c-ab4d-a2df4648d97f', () => {
  test('Expect "response" to have property "brands"', async () => {
    const response = await instrumentsService.GetBrandBy({
      id: '8c478c0a-c4e3-412c-ab4d-a2df4648d97f'
    })
    expect(response).toHaveProperty('uid')
    expect(response).toHaveProperty('name')
    expect(response).toHaveProperty('description')
    expect(response).toHaveProperty('info')
    expect(response).toHaveProperty('company')
    expect(response).toHaveProperty('sector')
    expect(response).toHaveProperty('countryOfRisk')
    expect(response).toHaveProperty('countryOfRiskName')
  })
})
