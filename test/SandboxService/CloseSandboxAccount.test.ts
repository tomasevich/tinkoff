import dotenv from 'dotenv'

import { SandboxService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const sandboxService = new SandboxService(TOKEN, true)

describe('accountId as "ad49188f-6d97-4493-8a68-c9adcd15db42"', () => {
  test.skip('Expect "response" to have property "{}"', async () => {
    const response = await sandboxService.CloseSandboxAccount({
      accountId: 'ad49188f-6d97-4493-8a68-c9adcd15db42'
    })
    expect(response).toEqual({})
  })
})
