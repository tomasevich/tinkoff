import dotenv from 'dotenv'

import { UsersService, GetInfoResponse } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const usersService = new UsersService(TOKEN, true)

let infoResponse: GetInfoResponse

describe('Empty body', () => {
  beforeAll(async () => {
    infoResponse = await usersService.GetInfo({})
  })

  describe('Expect "Info" properies', () => {
    test('To have "premStatus"', () => {
      expect(infoResponse).toHaveProperty('premStatus')
    })
    test('To have "qualStatus"', () => {
      expect(infoResponse).toHaveProperty('qualStatus')
    })
    test('To have "qualifiedForWorkWith"', () => {
      expect(infoResponse).toHaveProperty('qualifiedForWorkWith')
    })
    test('To have "tariff"', () => {
      expect(infoResponse).toHaveProperty('tariff')
    })
  })
})
