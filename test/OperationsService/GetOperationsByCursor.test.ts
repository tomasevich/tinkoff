import dotenv from 'dotenv'

import { OperationState, OperationType, OperationsService } from '../../src'

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
    const response = await operationsService.GetOperationsByCursor({
      accountId: ACCOUNT_ID,
      instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76',
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      cursor: '',
      limit: 10,
      state: operationState,
      operationTypes: [
        OperationType.OPERATION_TYPE_BUY,
        OperationType.OPERATION_TYPE_SELL
      ],
      withoutCommissions: false,
      withoutTrades: false,
      withoutOvernights: false
    })
    expect(response).toHaveProperty('hasNext')
    expect(response).toHaveProperty('nextCursor')
    expect(response).toHaveProperty('items')
  })
})
