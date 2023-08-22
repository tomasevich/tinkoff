import dotenv from 'dotenv'

import { OperationsService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const operationsService = new OperationsService(TOKEN, true)

describe('generateBrokerReportRequest & getBrokerReportRequest', () => {
  test.skip('Expect "response" to have "all" properties', async () => {
    const response = await operationsService.GetDividendsForeignIssuer({
      generateDivForeignIssuerReport: {
        accountId: ACCOUNT_ID,
        from: '2023-07-18T00:00:00:000Z',
        to: '2023-08-19T00:00:00:000Z'
      },
      getDivForeignIssuerReport: { taskId: '', page: 0 }
    })
    expect(response).toHaveProperty('generateDivForeignIssuerReportResponse')
    expect(response).toHaveProperty('divForeignIssuerReport')
  })
})
