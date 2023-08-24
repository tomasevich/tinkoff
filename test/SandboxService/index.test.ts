import dotenv from 'dotenv'

dotenv.config({ path: './.env.test' })

import { SandboxService, Account } from '../../src'

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const sandboxService = new SandboxService(TOKEN, true)

let accounts: Account[]
let account: Account
let accountId: string

describe('Открываем счёт', () => {
  test('Убеждаемся, что счет открыт', async () => {
    const response = await sandboxService.OpenSandboxAccount({})
    expect(response).toHaveProperty('accountId')
  })

  describe('Запрашиваем список счётов', () => {
    test('Получаем список счетов', async () => {
      const response = await sandboxService.GetSandboxAccounts({})
      expect(response).toHaveProperty('accounts')
      accounts = response.accounts
      account = accounts[accounts.length - 1] // Крайний счёт
      expect(account).toHaveProperty('id')
      expect(account).toHaveProperty('type')
      expect(account).toHaveProperty('name')
      expect(account).toHaveProperty('status')
      expect(account).toHaveProperty('openedDate')
      expect(account).toHaveProperty('accessLevel')
      expect(account).not.toHaveProperty('closedDate') // <- почему-то не возвращает это свойство
      accountId = account.id
    })
  })

  describe('Пополняем баланс', () => {
    test.todo('Получаем данные о текущем балансе')
  })

  describe('Выставляем ордера', () => {
    test.todo('Убеждаемся, что ордер №1 открыт')
    test.todo('Убеждаемся, что ордер №2 открыт')
    test.todo('Убеждаемся, что ордер №3 открыт')

    describe('Запрашиваем список ордеров', () => {
      test.todo('Получаем список ордеров')
    })

    describe('Запрашиваем информацию по конкретному ордеру', () => {
      test.todo('Получаем информацию по конкретному ордеру')
    })

    describe('Запрашиваем позицию по счёту', () => {
      test.todo('Получаем позицию по счёту')
    })
  })

  describe('Изменяем выставленный ордер', () => {
    test.todo('Убеждаемся, что ордер изменен')

    describe('Запрашиваем список операций', () => {
      test.todo('Получаем список операций')
    })

    describe('Запрашиваем список операций с навигацией', () => {
      test.todo('Получаем список операций с навигацией')
    })

    describe('Запрашиваем портфолио', () => {
      test.todo('Получаем портфолио')
    })

    describe('Запрашиваем остаток по счёту', () => {
      test.todo('Получаем остаток по счёту')
    })
  })

  describe('Отменяем выставленный ордер', () => {
    test.todo('Убеждаемся, что ордел отменен')
  })
})

describe('Закрываем счёт', () => {
  test('Убеждаемся, что счёт закрыт', async () => {
    const response = await sandboxService.CloseSandboxAccount({ accountId })
    expect(response).toEqual({})
  })
})
