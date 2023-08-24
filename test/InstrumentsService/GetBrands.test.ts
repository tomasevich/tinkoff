import dotenv from 'dotenv'

import { InstrumentsService, Brand } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)

let brand: Brand

describe('Запрашиваем список брендов', () => {
  test('Получаем список брендов', async () => {
    const response = await instrumentsService.GetBrands({})
    brand = response.brands[0]
    expect(response).toHaveProperty('brands')
  })

  describe('Запрашиваем конкретный бренд', () => {
    test('Получаем конкретный бренд (указав айди)', async () => {
      const response = await instrumentsService.GetBrandBy({
        id: brand.id
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
})
