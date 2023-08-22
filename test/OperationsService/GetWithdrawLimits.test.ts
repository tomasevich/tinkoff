import dotenv from 'dotenv'

import { OperationsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const operationsService = new OperationsService(TOKEN, true)

describe('accountId as ACCOUNT_ID', () => {
  test.skip('Expect "response" to have "all" properties', async () => {
    const response = await operationsService.GetWithdrawLimits({
      accountId: ACCOUNT_ID
    })
    expect(response).toHaveProperty('money')
    expect(response).toHaveProperty('blocked')
    expect(response).toHaveProperty('blockedGuarantee')
  })
})
