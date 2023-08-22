"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandboxService = void 0;
const Common_1 = require("./Common");
/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 * @see https://tinkoff.github.io/investAPI/sandbox/#sandboxservice
 */
class SandboxService extends Common_1.Common {
    /**
     * Метод регистрации счёта в песочнице
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const result = await sandboxService.OpenSandboxAccount({})
     *
     * console.log(result)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#opensandboxaccount
     */
    OpenSandboxAccount(body) {
        return this.request('SandboxService', '  OpenSandboxAccount', body);
    }
    /**
     * Метод получения счетов в песочнице
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const { accounts } = await sandboxService.GetSandboxAccounts({})
     *
     * console.log(accounts)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxaccounts
     */
    GetSandboxAccounts(body) {
        return this.request('SandboxService', 'GetSandboxAccounts', body);
    }
    /**
     * Метод закрытия счёта в песочнице
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const result = await sandboxService.OpenSandboxAccount({
     *  accountId: 'ad49188f-6d97-4493-8a68-c9adcd15db42'
     * })
     *
     * console.log(result)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#closesandboxaccount
     */
    CloseSandboxAccount(body) {
        return this.request('SandboxService', 'CloseSandboxAccount', body);
    }
    /**
     * Метод выставления торгового поручения в песочнице
     * ```js
     * import { SandboxService, OrderDirection, OrderType } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const result = await sandboxService.PostSandboxOrder({
     *  quantity: '1',
     *  price: SandboxService.StringToQuotation('1.0'),
     *  direction: OrderDirection.ORDER_DIRECTION_BUY,
     *  accountId: '<ACCOUNT_ID>',
     *  orderType: OrderType.ORDER_TYPE_MARKET,
     *  orderId: '',
     *  instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
     * })
     *
     * console.log(result)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#postsandboxorder
     */
    PostSandboxOrder(body) {
        return this.request('SandboxService', 'PostSandboxOrder', body);
    }
    /**
     * Метод изменения выставленной заявки
     * ```js
     * import { SandboxService, PriceType } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const result = await sandboxService.ReplaceSandboxOrder({
     *  quantity: '1',
     *  price: SandboxService.StringToQuotation('1.0'),
     *  accountId: '<ACCOUNT_ID>',
     *  orderId: '',
     *  idempotencyKey: ''
     *  priceType: PriceType.PRICE_TYPE_CURRENCY
     * })
     *
     * console.log(result)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#replacesandboxorder
     */
    ReplaceSandboxOrder(body) {
        return this.request('SandboxService', 'ReplaceSandboxOrder', body);
    }
    /**
     * Метод получения списка активных заявок по счёту в песочнице
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const { orders } = await sandboxService.GetSandboxOrders({
     *  accountId: '<ACCOUNT_ID>'
     * })
     *
     * console.log(orders)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
     */
    GetSandboxOrders(body) {
        return this.request('SandboxService', 'GetSandboxOrders', body);
    }
    /**
     * Метод отмены торгового поручения в песочнице
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const { orders } = await sandboxService.CancelSandboxOrder({
     *  accountId: '<ACCOUNT_ID>',
     *  orderId: '<ORDER_ID>'
     * })
     *
     * console.log(orders)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#cancelsandboxorder
     */
    CancelSandboxOrder(body) {
        return this.request('SandboxService', 'CancelSandboxOrder', body);
    }
    /**
     * Метод получения статуса заявки в песочнице
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const { orders } = await sandboxService.GetSandboxOrderState({
     *  accountId: '<ACCOUNT_ID>',
     *  orderId: '<ORDER_ID>'
     * })
     *
     * console.log(orders)
     * ```
     * @description Заявки хранятся в таблице 7 дней
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorderstate
     */
    GetSandboxOrderState(body) {
        return this.request('SandboxService', 'GetSandboxOrderState', body);
    }
    /**
     * Метод получения позиций по виртуальному счёту
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const sandboxPositions = await sandboxService.GetSandboxPositions({
     *  accountId: '<ACCOUNT_ID>'
     * })
     *
     * console.log(sandboxPositions)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxpositions
     */
    GetSandboxPositions(body) {
        return this.request('SandboxService', 'GetSandboxPositions', body);
    }
    /**
     * Метод получения операций в песочнице по номеру счёта
     * ```js
     * import { SandboxService, OperationState } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const { operations } = await sandboxService.GetSandboxOperations({
     *  accountId: '<ACCOUNT_ID>',
     *  from: '2023-07-18T00:00:00:000Z',
     *  to: '2023-08-19T00:00:00:000Z',
     *  state: OperationState.OPERATION_STATE_EXECUTED
     * })
     *
     * console.log(operations)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxoperations
     */
    GetSandboxOperations(body) {
        return this.request('SandboxService', 'GetSandboxOperations', body);
    }
    /**
     * Метод получения операций в песочнице по номеру счета с пагинацией
     * ```js
     * import { SandboxService, OperationState, OperationType } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const operationsByCursor = await sandboxService.GetSandboxOperationsByCursor({
     *  accountId: '<ACCOUNT_ID>',
     *  instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76',
     *  from: '2023-07-18T00:00:00:000Z',
     *  to: '2023-08-19T00:00:00:000Z',
     *  cursor: '',
     *  limit: 10,
     *  state: OperationState.OPERATION_STATE_CANCELED,
     *  operationTypes: [
     *    OperationType.OPERATION_TYPE_BUY,
     *    OperationType.OPERATION_TYPE_SELL
     *  ],
     *  withoutCommissions: false,
     *  withoutTrades: false,
     *  withoutOvernights: false
     * })
     *
     * console.log(operationsByCursor)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxoperationsbycursor
     */
    GetSandboxOperationsByCursor(body) {
        return this.request('SandboxService', 'GetSandboxOperationsByCursor', body);
    }
    /**
     * Метод получения портфолио в песочнице
     * ```js
     * import { SandboxService, PortfolioRequestCurrencyRequest } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const portfolio = await sandboxService.GetPortfolio({
     *  accountId: '<ACCOUNT_ID>'
     *  currency: PortfolioRequestCurrencyRequest.RUB
     * })
     *
     * console.log(portfolio)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxportfolio
     */
    GetSandboxPortfolio(body) {
        return this.request('SandboxService', 'GetSandboxPortfolio', body);
    }
    /**
     * Метод пополнения счёта в песочнице
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const { orders } = await sandboxService.SandboxPayIn({
     *  accountId: '<ACCOUNT_ID>',
     *  amount: SandboxService.StringToMoneyValue('114,25 rub')
     * })
     *
     * console.log(orders)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#sandboxpayin
     */
    SandboxPayIn(body) {
        return this.request('SandboxService', 'SandboxPayIn', body);
    }
    /**
     * Метод получения доступного остатка для вывода средств в песочнице
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const withdrawLimits = await sandboxService.GetWithdrawLimits({
     *  accountId: '<ACCOUNT_ID>'
     * })
     *
     * console.log(withdrawLimits)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxwithdrawlimits
     */
    GetSandboxWithdrawLimits(body) {
        return this.request('SandboxService', 'GetSandboxWithdrawLimits', body);
    }
}
exports.SandboxService = SandboxService;
