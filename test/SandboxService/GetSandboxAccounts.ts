const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const sandboxService = new SandboxService(TOKEN, true)

export default async () => {
  const response = await sandboxService.GetSandboxAccounts({})
  expect(response).toHaveProperty('accounts')
}
