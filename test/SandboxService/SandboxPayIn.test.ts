import dotenv from 'dotenv'

import { SandboxService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const ACCOUNT_ID = process.env.TINKOFF_INVEST_API_ACCOUNT_ID ?? ''
const sandboxService = new SandboxService(TOKEN, true)

describe('Пополняем баланс', () => {
  test('Должен вернуть текущий баланс', async () => {
    const response = await sandboxService.SandboxPayIn({
      accountId: ACCOUNT_ID,
      amount: SandboxService.StringToMoneyValue('114,25 rub')
    })

    expect(response).toHaveProperty('balance')
  })
})
