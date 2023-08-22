import dotenv from 'dotenv'

import { OrderDirection, OrderType, SandboxService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const sandboxService = new SandboxService(TOKEN, true)

describe('direction as "ORDER_DIRECTION_BUY"', () => {
  describe('orderType as "ORDER_TYPE_MARKET"', () => {
    test('Expect "response" to have "all" propertis', async () => {
      const response = await sandboxService.PostSandboxOrder({
        quantity: '1',
        price: SandboxService.StringToQuotation('1.0'),
        direction: OrderDirection.ORDER_DIRECTION_BUY,
        accountId: ACCOUNT_ID,
        orderType: OrderType.ORDER_TYPE_MARKET,
        orderId: '',
        instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
      })

      expect(response).toHaveProperty('orderId')
      expect(response).toHaveProperty('executionReportStatus')
      expect(response).toHaveProperty('lotsRequested')
      expect(response).toHaveProperty('lotsExecuted')
      expect(response).toHaveProperty('initialOrderPrice')
      expect(response).toHaveProperty('executedOrderPrice')
      expect(response).toHaveProperty('totalOrderAmount')
      expect(response).toHaveProperty('initialCommission')
      expect(response).toHaveProperty('executedCommission')
      // expect(response).toHaveProperty('aciValue')
      expect(response).toHaveProperty('figi')
      expect(response).toHaveProperty('direction')
      expect(response).toHaveProperty('initialSecurityPrice')
      expect(response).toHaveProperty('orderType')
      expect(response).toHaveProperty('message')
      // expect(response).toHaveProperty('initialOrderPricePt')
      expect(response).toHaveProperty('instrumentUid')
    })
  })
})
