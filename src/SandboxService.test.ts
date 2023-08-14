import dotenv from 'dotenv'

import {
  CloseSandboxAccountResponse,
  OpenSandboxAccountResponse,
  Sandbox,
  SandboxService
} from './SandboxService'
import { GetOrdersResponse } from './OrdersService'

dotenv.config({ path: './.env.test' })

let sandboxService: Sandbox
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

  describe('CloseSandboxAccount', () => {
    test('Должен удалить новый аккаунт', async () => {
      const response: any = await sandboxService.CloseSandboxAccount({
        accountId: tempAccountId
      })
      const data: CloseSandboxAccountResponse = await response.json()

      expect(data).toEqual({})
    })
  })

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
