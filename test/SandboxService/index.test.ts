import dotenv from 'dotenv'

dotenv.config({ path: './.env.test' })

import { SandboxService, PortfolioRequestCurrencyRequest } from '../../src'

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const sandboxService = new SandboxService(TOKEN, true)

let accountId: string

describe('Открываем счёт', () => {
  test('Убеждаемся, что счет открыт', async () => {
    const response = await sandboxService.OpenSandboxAccount({})
    expect(response).toHaveProperty('accountId')
    accountId = response.accountId
  })

  describe('Запрашиваем список счётов', () => {
    test('Получаем список счетов', async () => {
      const response = await sandboxService.GetSandboxAccounts({})
      expect(response).toHaveProperty('accounts')
      const account = response.accounts[0] // Один из
      expect(account).toHaveProperty('id')
      expect(account).toHaveProperty('type')
      expect(account).toHaveProperty('name')
      expect(account).toHaveProperty('status')
      expect(account).toHaveProperty('openedDate')
      expect(account).toHaveProperty('accessLevel')
      expect(account).not.toHaveProperty('closedDate') // <- почему-то не возвращает это свойство
    })
  })

  describe('Пополняем баланс', () => {
    test('Получаем данные о текущем балансе', async () => {
      const response = await sandboxService.SandboxPayIn({
        accountId,
        amount: SandboxService.StringToMoneyValue('10000.5 rub')
      })
      expect(response).toHaveProperty('balance')
    })
  })

  describe('Выставляем ордера', () => {
    test.todo('Убеждаемся, что ордер №1 открыт')
    test.todo('Убеждаемся, что ордер №2 открыт')
    test.todo('Убеждаемся, что ордер №3 открыт')

    describe('Запрашиваем список ордеров', () => {
      test('Получаем список ордеров', async () => {
        const response = await sandboxService.GetSandboxOrders({
          accountId
        })
        expect(response).toHaveProperty('orders')
        const order = response.orders[0] // Один из
        expect(order).toHaveProperty('orderId')
        expect(order).toHaveProperty('executionReportStatus')
        expect(order).toHaveProperty('lotsRequested')
        expect(order).toHaveProperty('lotsExecuted')
        expect(order).toHaveProperty('initialOrderPrice')
        expect(order).toHaveProperty('executedOrderPrice')
        expect(order).toHaveProperty('totalOrderAmount')
        expect(order).toHaveProperty('averagePositionPrice')
        expect(order).toHaveProperty('initialCommission')
        expect(order).toHaveProperty('executedCommission')
        expect(order).toHaveProperty('figi')
        expect(order).toHaveProperty('direction')
        expect(order).toHaveProperty('initialSecurityPrice')
        expect(order).toHaveProperty('stages')
        expect(order).toHaveProperty('serviceCommission')
        expect(order).toHaveProperty('currency')
        expect(order).toHaveProperty('orderType')
        expect(order).toHaveProperty('orderDate')
        expect(order).toHaveProperty('instrumentUid')
        expect(order).toHaveProperty('orderRequestId')
      })
    })

    describe('Запрашиваем информацию по конкретному ордеру', () => {
      test.todo('Получаем информацию по конкретному ордеру')
    })

    describe('Запрашиваем позицию по счёту', () => {
      test('Получаем позицию по счёту', async () => {
        const response = await sandboxService.GetSandboxPositions({
          accountId
        })
        expect(response).toHaveProperty('money')
        expect(response).toHaveProperty('blocked')
        expect(response).toHaveProperty('securities')
        expect(response).toHaveProperty('limitsLoadingInProgress')
        expect(response).toHaveProperty('futures')
        expect(response).toHaveProperty('options')
      })
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
      test('Получаем портфолио в рублях', async () => {
        const response = await sandboxService.GetSandboxPortfolio({
          accountId,
          currency: PortfolioRequestCurrencyRequest.RUB
        })
        expect(response).toHaveProperty('totalAmountShares')
        expect(response).toHaveProperty('totalAmountBonds')
        expect(response).toHaveProperty('totalAmountEtf')
        expect(response).toHaveProperty('totalAmountCurrencies')
        expect(response).toHaveProperty('totalAmountFutures')
        expect(response).not.toHaveProperty('expectedYield')
        expect(response).toHaveProperty('positions')
        expect(response).toHaveProperty('accountId')
        expect(response).toHaveProperty('totalAmountOptions')
        expect(response).toHaveProperty('totalAmountSp')
        expect(response).toHaveProperty('totalAmountPortfolio')
        expect(response).toHaveProperty('virtualPositions')
      })

      test('Получаем портфолио в евро', async () => {
        const response = await sandboxService.GetSandboxPortfolio({
          accountId,
          currency: PortfolioRequestCurrencyRequest.EUR
        })
        expect(response).toHaveProperty('totalAmountShares')
        expect(response).toHaveProperty('totalAmountBonds')
        expect(response).toHaveProperty('totalAmountEtf')
        expect(response).toHaveProperty('totalAmountCurrencies')
        expect(response).toHaveProperty('totalAmountFutures')
        expect(response).not.toHaveProperty('expectedYield')
        expect(response).toHaveProperty('positions')
        expect(response).toHaveProperty('accountId')
        expect(response).toHaveProperty('totalAmountOptions')
        expect(response).toHaveProperty('totalAmountSp')
        expect(response).toHaveProperty('totalAmountPortfolio')
        expect(response).toHaveProperty('virtualPositions')
      })

      test('Получаем портфолио в долларах', async () => {
        const response = await sandboxService.GetSandboxPortfolio({
          accountId,
          currency: PortfolioRequestCurrencyRequest.USD
        })
        expect(response).toHaveProperty('totalAmountShares')
        expect(response).toHaveProperty('totalAmountBonds')
        expect(response).toHaveProperty('totalAmountEtf')
        expect(response).toHaveProperty('totalAmountCurrencies')
        expect(response).toHaveProperty('totalAmountFutures')
        expect(response).not.toHaveProperty('expectedYield')
        expect(response).toHaveProperty('positions')
        expect(response).toHaveProperty('accountId')
        expect(response).toHaveProperty('totalAmountOptions')
        expect(response).toHaveProperty('totalAmountSp')
        expect(response).toHaveProperty('totalAmountPortfolio')
        expect(response).toHaveProperty('virtualPositions')
      })
    })

    describe('Запрашиваем остаток по счёту', () => {
      test('Получаем остаток по счёту', async () => {
        const response = await sandboxService.GetSandboxWithdrawLimits({
          accountId
        })
        expect(response).toHaveProperty('money')
        expect(response).toHaveProperty('blocked')
        expect(response).toHaveProperty('blockedGuarantee')
      })
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
