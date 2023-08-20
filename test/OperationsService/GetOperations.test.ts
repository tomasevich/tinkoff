import dotenv from 'dotenv'

import { OperationState, OperationsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const operationsService = new OperationsService(TOKEN, true)

describe('state as OPERATION_STATE_CANCELED', () => {
  test('Expect "response" to have property "operations"', async () => {
    const response = await operationsService.GetOperations({
      accountId: ACCOUNT_ID,
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      state: OperationState.OPERATION_STATE_CANCELED,
      figi: 'BBG00YTS96G2'
    })
    expect(response).toHaveProperty('operations')
  })
})

describe('state as OPERATION_STATE_EXECUTED', () => {
  test('Expect "response" to have property "operations"', async () => {
    const response = await operationsService.GetOperations({
      accountId: ACCOUNT_ID,
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      state: OperationState.OPERATION_STATE_EXECUTED,
      figi: 'BBG00YTS96G2'
    })
    expect(response).toHaveProperty('operations')
  })
})

describe('state as OPERATION_STATE_PROGRESS', () => {
  test('Expect "response" to have property "operations"', async () => {
    const response = await operationsService.GetOperations({
      accountId: ACCOUNT_ID,
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      state: OperationState.OPERATION_STATE_PROGRESS,
      figi: 'BBG00YTS96G2'
    })
    expect(response).toHaveProperty('operations')
  })
})

describe('state as OPERATION_STATE_UNSPECIFIED', () => {
  test('Expect "response" to have property "operations"', async () => {
    const response = await operationsService.GetOperations({
      accountId: ACCOUNT_ID,
      from: '2023-07-18T00:00:00:000Z',
      to: '2023-08-19T00:00:00:000Z',
      state: OperationState.OPERATION_STATE_UNSPECIFIED,
      figi: 'BBG00YTS96G2'
    })
    expect(response).toHaveProperty('operations')
  })
})
