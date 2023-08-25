import dotenv from 'dotenv'

dotenv.config({ path: './.env.test' })

import {
  InstrumentsService,
  InstrumentType,
  MarketDataService,
  SandboxService,
  PortfolioRequestCurrencyRequest,
  OperationState,
  OperationType,
  OrderDirection,
  OrderType
} from '../../src'

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const sandboxService = new SandboxService(TOKEN, true)
const instrumentsService = new InstrumentsService(TOKEN, true)

let accountId: string
let instrumentId: string
let postOrderId: string
let canceledOrderId: string // Бронируем ордер для будущей отмены

describe('Открываем счёт', () => {
  beforeAll(async () => {
    const { instruments } = await instrumentsService.FindInstrument({
      query: 'TCSG', // Акции Тинькофф
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_SHARE,
      apiTradeAvailableFlag: false
    })
    instrumentId = instruments[0].uid
  })

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
    test.todo('Убеждаемся, что ордер №2 открыт')
    test.todo('Убеждаемся, что ордер №3 открыт')

    test('Убеждаемся, что ордер на покупку по лимитной цене открыт', async () => {
      const response = await sandboxService.PostSandboxOrder({
        quantity: '1',
        price: SandboxService.StringToQuotation('5000.0'),
        direction: OrderDirection.ORDER_DIRECTION_BUY,
        accountId,
        orderType: OrderType.ORDER_TYPE_LIMIT,
        orderId: '',
        instrumentId
      })
      expect(response).toHaveProperty('orderId')
      postOrderId = response.orderId // Запоминаем айди ордера для отддельного теста (ниже)
      expect(response).toHaveProperty('executionReportStatus')
      expect(response).toHaveProperty('lotsRequested')
      expect(response).toHaveProperty('lotsExecuted')
      expect(response).toHaveProperty('initialOrderPrice')
      expect(response).toHaveProperty('executedOrderPrice')
      expect(response).toHaveProperty('totalOrderAmount')
      expect(response).toHaveProperty('initialCommission')
      expect(response).toHaveProperty('executedCommission')
      expect(response).not.toHaveProperty('aciValue')
      expect(response).toHaveProperty('figi')
      expect(response).toHaveProperty('direction')
      expect(response).toHaveProperty('initialSecurityPrice')
      expect(response).toHaveProperty('orderType')
      expect(response).toHaveProperty('message')
      expect(response).not.toHaveProperty('initialOrderPricePt')
      expect(response).toHaveProperty('instrumentUid')
    })

    describe('Запрашиваем список ордеров', () => {
      test('Получаем список ордеров', async () => {
        const response = await sandboxService.GetSandboxOrders({
          accountId
        })
        expect(response).toHaveProperty('orders')
        const order = response.orders[0] // Один из
        expect(order).toHaveProperty('orderId')
        canceledOrderId = order.orderId
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
      test('Получаем информацию по конкретному ордеру', async () => {
        const response = await sandboxService.GetSandboxOrderState({
          accountId,
          orderId: postOrderId
        })
        expect(response).toHaveProperty('orderId')
        expect(response).toHaveProperty('executionReportStatus')
        expect(response).toHaveProperty('lotsRequested')
        expect(response).toHaveProperty('lotsExecuted')
        expect(response).toHaveProperty('initialOrderPrice')
        expect(response).toHaveProperty('executedOrderPrice')
        expect(response).toHaveProperty('totalOrderAmount')
        expect(response).toHaveProperty('averagePositionPrice')
        expect(response).toHaveProperty('initialCommission')
        expect(response).toHaveProperty('executedCommission')
        expect(response).toHaveProperty('figi')
        expect(response).toHaveProperty('direction')
        expect(response).toHaveProperty('initialSecurityPrice')
        expect(response).toHaveProperty('stages')
        expect(response).toHaveProperty('serviceCommission')
        expect(response).toHaveProperty('currency')
        expect(response).toHaveProperty('orderType')
        expect(response).toHaveProperty('orderDate')
        expect(response).toHaveProperty('instrumentUid')
        expect(response).toHaveProperty('orderRequestId')
      })
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
      // OPERATION_STATE_PROGRESS
      // OPERATION_STATE_UNSPECIFIED
      // OPERATION_STATE_CANCELED
      test('Получаем список выполненных операций', async () => {
        const fromDate = new Date()
        fromDate.setHours(fromDate.getHours() - 1)
        const toDate = new Date()
        fromDate.setHours(fromDate.getHours() + 1)
        const response = await sandboxService.GetSandboxOperations({
          accountId,
          from: fromDate.toISOString(),
          to: toDate.toISOString(),
          state: OperationState.OPERATION_STATE_EXECUTED
        })
        expect(response).toHaveProperty('operations')

        /**
         * @todo Для тестирования списка операций, нужно убедиться, что ордер был открыт
         */
        // const operation = response.operations[0] // Один из
        // expect(operation).toHaveProperty('id')
        // expect(operation).toHaveProperty('parentOperationId')
        // expect(operation).toHaveProperty('currency')
        // expect(operation).toHaveProperty('payment')
        // expect(operation).toHaveProperty('price')
        // expect(operation).toHaveProperty('state')
        // expect(operation).toHaveProperty('quantity')
        // expect(operation).toHaveProperty('quantityRest')
        // expect(operation).toHaveProperty('figi')
        // expect(operation).toHaveProperty('instrumentType')
        // expect(operation).toHaveProperty('date')
        // expect(operation).toHaveProperty('type')
        // expect(operation).toHaveProperty('operationType')
        // expect(operation).toHaveProperty('trades')
        // expect(operation).toHaveProperty('assetUid')
        // expect(operation).toHaveProperty('positionUid')
        // expect(operation).toHaveProperty('instrumentUid')
      })
    })

    describe('Запрашиваем список операций с навигацией', () => {
      // OPERATION_STATE_PROGRESS
      // OPERATION_STATE_UNSPECIFIED
      // OPERATION_STATE_CANCELED
      test('Получаем список выполненных операций с навигацией', async () => {
        const fromDate = new Date()
        fromDate.setHours(fromDate.getHours() - 1)
        const toDate = new Date()
        fromDate.setHours(fromDate.getHours() + 1)
        const response = await sandboxService.GetSandboxOperationsByCursor({
          accountId,
          instrumentId,
          from: fromDate.toISOString(),
          to: toDate.toISOString(),
          cursor: '',
          limit: 10,
          state: OperationState.OPERATION_STATE_EXECUTED,
          operationTypes: [
            OperationType.OPERATION_TYPE_BUY,
            OperationType.OPERATION_TYPE_SELL
          ],
          withoutCommissions: false,
          withoutTrades: false,
          withoutOvernights: false
        })
        expect(response).toHaveProperty('hasNext')
        expect(response).toHaveProperty('nextCursor')
        expect(response).toHaveProperty('items')

        /**
         * @todo Для тестирования списка операций, нужно убедиться, что ордер был открыт
         */
        // const item = response.items[0] // Один из
        // expect(item).toHaveProperty('cursor')
        // expect(item).toHaveProperty('brokerAccountId')
        // expect(item).toHaveProperty('id')
        // expect(item).toHaveProperty('parentOperationId')
        // expect(item).toHaveProperty('name')
        // expect(item).toHaveProperty('date')
        // expect(item).toHaveProperty('type')
        // expect(item).toHaveProperty('description')
        // expect(item).toHaveProperty('state')
        // expect(item).toHaveProperty('instrumentUid')
        // expect(item).toHaveProperty('figi')
        // expect(item).toHaveProperty('instrumentType')
        // expect(item).toHaveProperty('instrumentKind')
        // expect(item).toHaveProperty('positionUid')
        // expect(item).toHaveProperty('payment')
        // expect(item).toHaveProperty('price')
        // expect(item).toHaveProperty('commission')
        // expect(item).toHaveProperty('yield')
        // expect(item).toHaveProperty('yieldRelative')
        // expect(item).toHaveProperty('accruedInt')
        // expect(item).toHaveProperty('quantity')
        // expect(item).toHaveProperty('quantityRest')
        // expect(item).toHaveProperty('quantityDone')
        // expect(item).toHaveProperty('cancelDateTime')
        // expect(item).toHaveProperty('cancelReason')
        // expect(item).toHaveProperty('tradesInfo')
        // expect(item).toHaveProperty('assetUid')
      })
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
    test('Убеждаемся, что ордел отменен', async () => {
      const response = await sandboxService.CancelSandboxOrder({
        accountId,
        orderId: canceledOrderId
      })
      expect(response).toHaveProperty('time')
    })
  })
})

describe('Закрываем счёт', () => {
  test('Убеждаемся, что счёт закрыт', async () => {
    const response = await sandboxService.CloseSandboxAccount({ accountId })
    expect(response).toEqual({})
  })
})
