import dotenv from 'dotenv'

dotenv.config({ path: './.env.test' })

import {
  InstrumentsService,
  InstrumentType,
  PortfolioRequestCurrencyRequest,
  OperationState,
  OperationType,
  OrderDirection,
  OrderType,
  PriceType,
  OrdersService,
  UsersService,
  OperationsService
} from '../src'

const TOKEN = process.env.TINKOFF_INVEST_API_TOKEN ?? ''
const instrumentsService = new InstrumentsService(TOKEN, true)
const ordersService = new OrdersService(TOKEN, true)
const usersService = new UsersService(TOKEN, true)
const operationsService = new OperationsService(TOKEN, true)

let accountId: string
let instrumentId: string
let postOrderId: string
let canceledOrderId: string // Бронируем ордер для будущей отмены

describe('Запрашиваем инструмент и айди аккаунта', () => {
  beforeAll(async () => {
    const { instruments } = await instrumentsService.FindInstrument({
      query: 'TCSG', // Акции Тинькофф
      instrumentKind: InstrumentType.INSTRUMENT_TYPE_SHARE,
      apiTradeAvailableFlag: false
    })
    instrumentId = instruments[0].uid

    const { accounts } = await usersService.GetAccounts({})
    accountId = accounts[0].id
  })

  describe('Выставляем ордера', () => {
    test('Убеждаемся, что ордер на покупку по рыночной цене открыт', async () => {
      const response = await ordersService.PostOrder({
        quantity: '1',
        price: OrdersService.StringToQuotation('5000.0'),
        direction: OrderDirection.ORDER_DIRECTION_BUY,
        accountId,
        orderType: OrderType.ORDER_TYPE_MARKET,
        orderId: '',
        instrumentId
      })
      expect(response).toHaveProperty('orderId')
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

    test('Убеждаемся, что ордер на покупку по лимитной цене открыт', async () => {
      const response = await ordersService.PostOrder({
        quantity: '1',
        price: OrdersService.StringToQuotation('5000.0'),
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
        const response = await ordersService.GetOrders({
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
        const response = await ordersService.GetOrderState({
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
        const response = await operationsService.GetPositions({
          accountId
        })
        expect(response).not.toHaveProperty('money')
        expect(response).not.toHaveProperty('blocked')
        expect(response).not.toHaveProperty('securities')
        expect(response).not.toHaveProperty('limitsLoadingInProgress')
        expect(response).not.toHaveProperty('futures')
        expect(response).not.toHaveProperty('options')
      })
    })
  })

  describe('Изменяем выставленный ордер', () => {
    test('Убеждаемся, что ордер изменен', async () => {
      const response = await ordersService.ReplaceOrder({
        accountId,
        orderId: canceledOrderId,
        idempotencyKey: canceledOrderId,
        quantity: '1',
        price: OrdersService.StringToQuotation('4000.0'),
        priceType: PriceType.PRICE_TYPE_CURRENCY
      })
      expect(response).toHaveProperty('orderId')
      canceledOrderId = response.orderId
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

    describe('Запрашиваем список операций', () => {
      // OPERATION_STATE_PROGRESS
      // OPERATION_STATE_UNSPECIFIED
      // OPERATION_STATE_CANCELED
      test('Получаем список выполненных операций', async () => {
        const fromDate = new Date()
        fromDate.setHours(fromDate.getHours() - 1)
        const toDate = new Date()

        const response = await operationsService.GetOperations({
          accountId,
          from: fromDate.toISOString(),
          to: toDate.toISOString(),
          state: OperationState.OPERATION_STATE_EXECUTED
        })
        expect(response).not.toHaveProperty('operations')
      })
    })

    describe('Запрашиваем список операций с пагинацией', () => {
      // OPERATION_STATE_PROGRESS
      // OPERATION_STATE_UNSPECIFIED
      // OPERATION_STATE_CANCELED
      test('Получаем список выполненных операций с пагинацией', async () => {
        const fromDate = new Date()
        fromDate.setHours(fromDate.getHours() - 1)
        const toDate = new Date()
        const response = await operationsService.GetOperationsByCursor({
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
        expect(response).not.toHaveProperty('hasNext')
        expect(response).not.toHaveProperty('nextCursor')
        expect(response).not.toHaveProperty('items')
      })
    })

    describe('Запрашиваем портфолио', () => {
      test('Получаем портфолио в рублях', async () => {
        const response = await operationsService.GetPortfolio({
          accountId,
          currency: PortfolioRequestCurrencyRequest.RUB
        })
        expect(response).not.toHaveProperty('totalAmountShares')
        expect(response).not.toHaveProperty('totalAmountBonds')
        expect(response).not.toHaveProperty('totalAmountEtf')
        expect(response).not.toHaveProperty('totalAmountCurrencies')
        expect(response).not.toHaveProperty('totalAmountFutures')
        expect(response).not.toHaveProperty('expectedYield')
        expect(response).not.toHaveProperty('positions')
        expect(response).not.toHaveProperty('accountId')
        expect(response).not.toHaveProperty('totalAmountOptions')
        expect(response).not.toHaveProperty('totalAmountSp')
        expect(response).not.toHaveProperty('totalAmountPortfolio')
        expect(response).not.toHaveProperty('virtualPositions')
      })
    })

    describe('Запрашиваем остаток по счёту', () => {
      test('Получаем остаток по счёту', async () => {
        const response = await operationsService.GetWithdrawLimits({
          accountId
        })
        expect(response).not.toHaveProperty('money')
        expect(response).not.toHaveProperty('blocked')
        expect(response).not.toHaveProperty('blockedGuarantee')
      })
    })
  })

  describe('Отменяем выставленный ордер', () => {
    test('Убеждаемся, что ордел отменен', async () => {
      const response = await ordersService.CancelOrder({
        accountId,
        orderId: canceledOrderId
      })
      expect(response).toHaveProperty('time')
    })
  })
})
