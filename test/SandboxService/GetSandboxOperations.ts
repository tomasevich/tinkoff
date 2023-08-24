import dotenv from 'dotenv'

import { OperationState, SandboxService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const sandboxService = new SandboxService(TOKEN, true)

describe('accountId as "ACCOUNT_ID"', () => {
  describe('state as "OPERATION_STATE_CANCELED"', () => {
    test('Expect "response" to have property "operations"', async () => {
      const response = await sandboxService.GetSandboxOperations({
        accountId: ACCOUNT_ID,
        from: '2023-07-18T00:00:00:000Z',
        to: '2023-08-19T00:00:00:000Z',
        state: OperationState.OPERATION_STATE_CANCELED
      })

      expect(response).toHaveProperty('operations')
    })
  })

  describe('state as "OPERATION_STATE_EXECUTED"', () => {
    test('Expect "response" to have property "operations"', async () => {
      const response = await sandboxService.GetSandboxOperations({
        accountId: ACCOUNT_ID,
        from: '2023-07-18T00:00:00:000Z',
        to: '2023-08-19T00:00:00:000Z',
        state: OperationState.OPERATION_STATE_EXECUTED
      })

      expect(response).toHaveProperty('operations')
    })
  })

  describe('state as "OPERATION_STATE_PROGRESS"', () => {
    test('Expect "response" to have property "operations"', async () => {
      const response = await sandboxService.GetSandboxOperations({
        accountId: ACCOUNT_ID,
        from: '2023-07-18T00:00:00:000Z',
        to: '2023-08-19T00:00:00:000Z',
        state: OperationState.OPERATION_STATE_PROGRESS
      })

      expect(response).toHaveProperty('operations')
    })
  })

  describe('state as "OPERATION_STATE_UNSPECIFIED"', () => {
    test('Expect "response" to have property "operations"', async () => {
      const response = await sandboxService.GetSandboxOperations({
        accountId: ACCOUNT_ID,
        from: '2023-07-18T00:00:00:000Z',
        to: '2023-08-19T00:00:00:000Z',
        state: OperationState.OPERATION_STATE_UNSPECIFIED
      })

      expect(response).toHaveProperty('operations')
    })
  })
})
