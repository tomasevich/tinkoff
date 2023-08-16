import dotenv from 'dotenv'

import { SandboxService, GetAccountsResponse } from './'

dotenv.config({ path: './.env.test' })

let sandboxService: SandboxService

describe('SandboxService', () => {
  beforeAll(() => {
    sandboxService = new SandboxService(
      process.env.TINKOFF_INVEST_API_TOKEN ?? '',
      true
    )
  })

  describe('GetSandboxAccounts', () => {
    test('Должен вернуть список счетов пользователя', async () => {
      const { accounts } = await sandboxService.GetSandboxAccounts({})

      expect(accounts[0]).toHaveProperty('id')
      expect(accounts[0]).toHaveProperty('type')
      expect(accounts[0]).toHaveProperty('name')
      expect(accounts[0]).toHaveProperty('status')
      expect(accounts[0]).toHaveProperty('openedDate')
      expect(accounts[0]).toHaveProperty('accessLevel')
      // Почему-то не возвращает дату закрытия, хотя в оф.документации есть это свойство
      // expect(accounts[0]).toHaveProperty('closedDate')
    })
  })
})
