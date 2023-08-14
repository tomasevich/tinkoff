import * as dotenv from 'dotenv'

import { SandboxService } from './Sandbox'
import { GetOrdersResponse } from './Orders'

dotenv.config({ path: './.env.test' })

let sandboxService: any

describe('SandboxService', () => {
  beforeAll(() => {
    sandboxService = new SandboxService(
      process.env.TINKOFF_INVEST_API_TOKEN ?? '',
      true
    )
  })

  describe('GetOrders', () => {
    test('Должен вернуть массив ордеров', () => {
      sandboxService
        .GetOrders({
          accountId: process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
        })
        .then((response: any) => response.json())
        .then((data: GetOrdersResponse) => {
          expect(data.orders.length).toBeGreaterThanOrEqual(0)
          expect(data.orders[0]).toHaveProperty('orderId')
        })
    })
  })
})
