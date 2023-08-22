import dotenv from 'dotenv'

import { SandboxService } from '../../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const sandboxService = new SandboxService(TOKEN, true)

describe('Empty body', () => {
  test.skip('Expect "response" to have property "{}"', async () => {
    const response = await sandboxService.OpenSandboxAccount({})
    expect(response).toEqual({})
  })
})
