import dotenv from 'dotenv'

import { UsersService, GetAccountsResponse } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const usersService = new UsersService(TOKEN, true)

let accountsResponse: GetAccountsResponse

describe('Empty body', () => {
  beforeAll(async () => {
    accountsResponse = await usersService.GetAccounts({})
  })

  test('Expect "response" to have property "accounts"', async () => {
    expect(accountsResponse).toHaveProperty('accounts')
    expect(accountsResponse.accounts.length).toBeGreaterThan(0)
  })

  describe('Expect "Info" properies', () => {
    const account = accountsResponse.accounts[0]

    test('To have "id"', () => {
      expect(infoResponse).toHaveProperty('id')
    })
    test('To have "type"', () => {
      expect(infoResponse).toHaveProperty('type')
    })
    test('To have "name"', () => {
      expect(infoResponse).toHaveProperty('name')
    })
    test('To have "status"', () => {
      expect(infoResponse).toHaveProperty('status')
    })
    test('To have "openedDate"', () => {
      expect(infoResponse).toHaveProperty('openedDate')
    })
    test('To have "accessLevel"', () => {
      expect(infoResponse).toHaveProperty('accessLevel')
    })
    test('To have "closedDate"', () => {
      expect(infoResponse).toHaveProperty('closedDate')
    })
  })
})
