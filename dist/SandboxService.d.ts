import { Common } from './Common';
import { GetOperationsByCursorRequest, GetOperationsByCursorResponse, OperationsRequest, OperationsResponse, PortfolioRequest, PortfolioResponse, PositionsRequest, PositionsResponse, WithdrawLimitsRequest, WithdrawLimitsResponse } from './OperationsService';
import { CancelOrderRequest, CancelOrderResponse, GetOrderStateRequest, GetOrdersRequest, GetOrdersResponse, OrderState, PostOrderRequest, PostOrderResponse, ReplaceOrderRequest } from './OrdersService';
import { GetAccountsRequest, GetAccountsResponse } from './UsersService';
export interface OpenSandboxAccountRequest {
}
export interface OpenSandboxAccountResponse {
    accountId: string;
}
export interface CloseSandboxAccountRequest {
    accountId: string;
}
export interface CloseSandboxAccountResponse {
}
export interface SandboxPayInRequest {
}
export interface SandboxPayInResponse {
}
/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 * @see https://tinkoff.github.io/investAPI/sandbox/#sandboxservice
 */
export declare class SandboxService extends Common {
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
    OpenSandboxAccount(body: OpenSandboxAccountRequest): Promise<OpenSandboxAccountResponse>;
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
    GetSandboxAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
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
    CloseSandboxAccount(body: CloseSandboxAccountRequest): Promise<CloseSandboxAccountResponse>;
    /**
     * Метод выставления торгового поручения в песочнице
     * ```js
     * import { SandboxService, OrderDirection, OrderType } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const result = await sandboxService.PostSandboxOrder({
     *  quantity: '1',
     *  price: { units: '1', nano: 0 },
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
    PostSandboxOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    /**
     * Метод изменения выставленной заявки
     * @see https://tinkoff.github.io/investAPI/sandbox/#replacesandboxorder
     */
    ReplaceSandboxOrder(body: ReplaceOrderRequest): Promise<PostOrderResponse>;
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
    GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
    /**
     * Метод отмены торгового поручения в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#cancelsandboxorder
     */
    CancelSandboxOrder(body: CancelOrderRequest): Promise<CancelOrderResponse>;
    /**
     * Метод получения статуса заявки в песочнице
     * @description Заявки хранятся в таблице 7 дней
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorderstate
     */
    GetSandboxOrderState(body: GetOrderStateRequest): Promise<OrderState>;
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
    GetSandboxPositions(body: PositionsRequest): Promise<PositionsResponse>;
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
    GetSandboxOperations(body: OperationsRequest): Promise<OperationsResponse>;
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
    GetSandboxOperationsByCursor(body: GetOperationsByCursorRequest): Promise<GetOperationsByCursorResponse>;
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
    GetSandboxPortfolio(body: PortfolioRequest): Promise<PortfolioResponse>;
    /**
     * Метод пополнения счёта в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#sandboxpayin
     */
    SandboxPayIn(body: SandboxPayInRequest): Promise<SandboxPayInResponse>;
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
    GetSandboxWithdrawLimits(body: WithdrawLimitsRequest): Promise<WithdrawLimitsResponse>;
}
