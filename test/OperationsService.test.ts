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
})
