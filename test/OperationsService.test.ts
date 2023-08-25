import dotenv from 'dotenv'

import {
  Account,
  OperationState,
  OperationType,
  OperationsService,
  PortfolioRequestCurrencyRequest,
  UsersService
} from '../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const operationsService = new OperationsService(TOKEN, true)
const usersService = new UsersService(TOKEN, true)

let account: Account

describe('Запрашиваем список аккаунтов', () => {
  beforeAll(async () => {
    const response = await usersService.GetAccounts({})
    account = response.accounts[0]
  })

  describe('Запрашиваем брокерский отчёт', () => {
    test('Получаем брокерский отчёт', async () => {
      const response = await operationsService.GetBrokerReport({
        generateBrokerReportRequest: {
          accountId: account.id,
          from: '2023-07-18T00:00:00:000Z',
          to: '2023-08-19T00:00:00:000Z'
        },
        getBrokerReportRequest: { taskId: '', page: 0 }
      })
      expect(response).not.toHaveProperty('generateBrokerReportResponse')
      expect(response).not.toHaveProperty('getBrokerReportResponse')
    })
  })

  describe('Запрашиваем отчёт "Справка о доходах за пределами РФ"', () => {
    test('Получаем отчёт "Справка о доходах за пределами РФ"', async () => {
      const response = await operationsService.GetDividendsForeignIssuer({
        generateDivForeignIssuerReport: {
          accountId: account.id,
          from: '2023-07-18T00:00:00:000Z',
          to: '2023-08-19T00:00:00:000Z'
        },
        getDivForeignIssuerReport: { taskId: '', page: 0 }
      })
      expect(response).not.toHaveProperty(
        'generateDivForeignIssuerReportResponse'
      )
      expect(response).not.toHaveProperty('divForeignIssuerReport')
    })
  })

  describe('Запрашиваем список операций по счёту', () => {
    test('Получаем список операций по счёту', async () => {
      const response = await operationsService.GetOperations({
        accountId: account.id,
        from: '2023-07-18T00:00:00:000Z',
        to: '2023-08-19T00:00:00:000Z',
        state: OperationState.OPERATION_STATE_EXECUTED
      })
      expect(response).not.toHaveProperty('operations')
    })
  })

  describe('Запрашиваем список операций по счёту с пагинацией', () => {
    test('Получаем список операций по счёту с пагинацией', async () => {
      const response = await operationsService.GetOperationsByCursor({
        accountId: account.id,
        instrumentId: '',
        from: '2023-07-18T00:00:00:000Z',
        to: '2023-08-19T00:00:00:000Z',
        cursor: '',
        limit: 10,
        state: OperationState.OPERATION_STATE_EXECUTED,
        operationTypes: [
          OperationType.OPERATION_TYPE_BUY,
          OperationType.OPERATION_TYPE_SELL
        ],
        withoutCommissions: false,
        withoutTrades: false,
        withoutOvernights: false
      })
      expect(response).not.toHaveProperty('hasNext')
      expect(response).not.toHaveProperty('nextCursor')
      expect(response).not.toHaveProperty('items')
    })
  })

  describe('Запрашиваем портфель по счёту', () => {
    test('Получаем портфель по счёту', async () => {
      const response = await operationsService.GetPortfolio({
        accountId: account.id,
        currency: PortfolioRequestCurrencyRequest.RUB
      })
      expect(response).not.toHaveProperty('totalAmountShares')
      expect(response).not.toHaveProperty('totalAmountBonds')
      expect(response).not.toHaveProperty('totalAmountEtf')
      expect(response).not.toHaveProperty('totalAmountCurrencies')
      expect(response).not.toHaveProperty('totalAmountFutures')
      expect(response).not.toHaveProperty('expectedYield')
      expect(response).not.toHaveProperty('positions')
      expect(response).not.toHaveProperty('accountId')
      expect(response).not.toHaveProperty('totalAmountOptions')
      expect(response).not.toHaveProperty('totalAmountSp')
      expect(response).not.toHaveProperty('totalAmountPortfolio')
      expect(response).not.toHaveProperty('virtualPositions')
    })
  })

  describe('Запрашиваем список позиций по счёту', () => {
    test('Получаем список позиций по счёту', async () => {
      const response = await operationsService.GetPositions({
        accountId: account.id
      })
      expect(response).not.toHaveProperty('money')
      expect(response).not.toHaveProperty('blocked')
      expect(response).not.toHaveProperty('securities')
      expect(response).not.toHaveProperty('limitsLoadingInProgress')
      expect(response).not.toHaveProperty('futures')
      expect(response).not.toHaveProperty('options')
    })
  })

  describe('Запрашиваем доступный остаток для вывода средств', () => {
    test('Запрашиваем доступный остаток для вывода средств', async () => {
      const response = await operationsService.GetWithdrawLimits({
        accountId: account.id
      })
      expect(response).not.toHaveProperty('money')
      expect(response).not.toHaveProperty('blocked')
      expect(response).not.toHaveProperty('blockedGuarantee')
    })
  })
})
