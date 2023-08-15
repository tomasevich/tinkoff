import dotenv from 'dotenv'

import {
  CloseSandboxAccountResponse,
  OpenSandboxAccountResponse,
  SandboxService,
  GetOrdersResponse,
  GetAccountsResponse,
  PositionsResponse
} from './'

dotenv.config({ path: './.env.test' })

let sandboxService: SandboxService
let tempAccountId: string

describe('SandboxService', () => {
  beforeAll(() => {
    sandboxService = new SandboxService(
      process.env.TINKOFF_INVEST_API_TOKEN ?? '',
      true
    )
  })

  describe('OpenSandboxAccount', () => {
    test('Должен создать новый аккаунт', async () => {
      const response: any = await sandboxService.OpenSandboxAccount({})
      const data: OpenSandboxAccountResponse = await response.json()

      tempAccountId = data.accountId
      expect(data).toHaveProperty('accountId')
    })
  })

  describe('GetSandboxAccounts', () => {
    test('Должен вернуть список счетов пользователя', async () => {
      const response: any = await sandboxService.GetSandboxAccounts({})
      const data: GetAccountsResponse = await response.json()

      expect(data.accounts[0]).toHaveProperty('id')
      expect(data.accounts[0]).toHaveProperty('type')
      expect(data.accounts[0]).toHaveProperty('name')
      expect(data.accounts[0]).toHaveProperty('status')
      expect(data.accounts[0]).toHaveProperty('openedDate')
      // expect(data.accounts[0]).toHaveProperty('closedDate') Почему-то не возвращает (хотя в доке есть это свойство)
      expect(data.accounts[0]).toHaveProperty('accessLevel')
    })
  })

  describe('GetSandboxPositions', () => {
    test('Должен вернуть список позиций по счёту', async () => {
      const response: any = await sandboxService.GetSandboxPositions({
        accountId: tempAccountId
      })
      const data: PositionsResponse = await response.json()

      expect(data).toHaveProperty('money')
      expect(data).toHaveProperty('blocked')
      expect(data).toHaveProperty('securities')
      expect(data).toHaveProperty('limitsLoadingInProgress')
      expect(data).toHaveProperty('futures')
      expect(data).toHaveProperty('options')
    })
  })

  describe('CloseSandboxAccount', () => {
    test('Должен удалить новый аккаунт', async () => {
      const response: any = await sandboxService.CloseSandboxAccount({
        accountId: tempAccountId
      })
      const data: CloseSandboxAccountResponse = await response.json()

      expect(data).toEqual({})
    })
  })

  // Ордера будем тестировать позже
  describe('GetOrders', () => {
    test('Должен вернуть массив ордеров', async () => {
      const response: any = await sandboxService.GetSandboxOrders({
        accountId: process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
      })
      const data: GetOrdersResponse = await response.json()

      expect(data.orders.length).toBeGreaterThanOrEqual(0)
      expect(data.orders[0]).toHaveProperty('orderId')
    })
  })
})
