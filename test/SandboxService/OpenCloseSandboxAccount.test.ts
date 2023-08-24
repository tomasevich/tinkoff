import dotenv from 'dotenv'

import { SandboxService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const sandboxService = new SandboxService(TOKEN, true)

describe('Открываем и закрываем счёт', () => {
  test.skip('Должен открыть счёт', async () => {
    const response = await sandboxService.OpenSandboxAccount({})
    expect(response).toEqual({})
  })

  test.skip('Должен закрыть счёт', async () => {
    const { accounts } = await sandboxService.GetSandboxAccounts({})
    const response = await sandboxService.CloseSandboxAccount({
      accountId: accounts[1].id
    })
    expect(response).toEqual({})
  })
})
