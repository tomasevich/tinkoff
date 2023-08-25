import dotenv from 'dotenv'

import { UsersService, Account } from '../src'

dotenv.config({ path: './.env.test' })

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const usersService = new UsersService(TOKEN, true)

let account: Account

describe('Запрашиваем список аккаунтов', () => {
  beforeAll(async () => {
    const response = await usersService.GetAccounts({})
    account = response.accounts[0]
  })

  test('Проверяем список аккаунтов', async () => {
    expect(account).toHaveProperty('id')
    expect(account).toHaveProperty('type')
    expect(account).toHaveProperty('name')
    expect(account).toHaveProperty('status')
    expect(account).toHaveProperty('openedDate')
    expect(account).toHaveProperty('accessLevel')
    expect(account).not.toHaveProperty('closedDate')
  })

  describe('Запрашиваем расчёт маржинальных показателей по счёту', () => {
    test('Получаем расчёт маржинальных показателей по счёту', async () => {
      const response = await usersService.GetMarginAttributes({
        accountId: account.id
      })
      expect(response).toHaveProperty('liquidPortfolio')
      expect(response).toHaveProperty('startingMargin')
      expect(response).toHaveProperty('minimalMargin')
      expect(response).toHaveProperty('fundsSufficiencyLevel')
      expect(response).toHaveProperty('amountOfMissingFunds')
      expect(response).toHaveProperty('correctedMargin')
    })
  })

  describe('Запрашиваем текущие лимиты пользователя', () => {
    test('Получаем текущие лимиты пользователя"', async () => {
      const response = await usersService.GetUserTariff({})
      expect(response).toHaveProperty('unaryLimits')
      expect(response).toHaveProperty('streamLimits')
    })
  })

  describe('Запрашиваем информацию о пользователе', () => {
    test('Получаем информацию о пользователе"', async () => {
      const response = await usersService.GetInfo({})
      expect(response).toHaveProperty('premStatus')
      expect(response).toHaveProperty('qualStatus')
      expect(response).toHaveProperty('qualifiedForWorkWith')
      expect(response).toHaveProperty('tariff')
    })
  })
})
