import dotenv from 'dotenv'

import { OperationState, OperationsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const operationsService = new OperationsService(TOKEN, true)

describe.each([
  OperationState.OPERATION_STATE_CANCELED,
  OperationState.OPERATION_STATE_EXECUTED,
  OperationState.OPERATION_STATE_PROGRESS,
  OperationState.OPERATION_STATE_UNSPECIFIED
])('state as "%i"', operationState => {
  test.skip('Expect "response" to have property "operations"', async () => {
    const response = await operationsService.GetOperations({
      accountId: ACCOUNT_ID,
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      state: operationState,
      figi: 'BBG00YTS96G2'
    })
    expect(response).toHaveProperty('operations')
  })
})
