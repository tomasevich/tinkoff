import dotenv from 'dotenv'

import { SandboxService, Account } from './'

dotenv.config({ path: './.env.test' })

let sandboxService: SandboxService
let tempAccounts: Account[]

describe('SandboxService', () => {
  beforeAll(async () => {
    sandboxService = new SandboxService(
      process.env.TINKOFF_INVEST_API_TOKEN ?? '',
      true
    )
  })

  describe('GetSandboxAccounts', () => {
    beforeAll(async () => {
      const { accounts } = await sandboxService.GetSandboxAccounts({})
      tempAccounts = accounts
    })

    describe('Expect returned "Accounts" length', () => {
      test('To be greater than "0"', () => {
        expect(tempAccounts.length).toBeGreaterThan(0)
      })
    })

    describe('Expect returned "Account"', () => {
      test('To have property "id"', () => {
        expect(tempAccounts[0]).toHaveProperty('id')
      })

      test('To have property "type"', () => {
        expect(tempAccounts[0]).toHaveProperty('type')
      })

      test('To have property "name"', () => {
        expect(tempAccounts[0]).toHaveProperty('name')
      })

      test('To have property "status"', () => {
        expect(tempAccounts[0]).toHaveProperty('status')
      })

      test('To have property "openedDate"', () => {
        expect(tempAccounts[0]).toHaveProperty('openedDate')
      })

      test('To have property "accessLevel"', () => {
        expect(tempAccounts[0]).toHaveProperty('accessLevel')
      })

      // test('To have property "closedDate"', () => {
      // Почему-то не возвращает дату закрытия, хотя в оф.документации есть это свойство
      // expect(tempAccounts[0]).toHaveProperty('closedDate')
      // })
    })
  })
})
