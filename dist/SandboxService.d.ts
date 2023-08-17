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
     * @see https://tinkoff.github.io/investAPI/sandbox/#opensandboxaccount
     */
    OpenSandboxAccount(body: OpenSandboxAccountRequest): Promise<OpenSandboxAccountResponse>;
    /**
     * Метод получения счетов в песочнице
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('TOKEN', true)
     * const { accounts } = await sandboxService.GetSandboxAccounts({})
     *
     * console.log(accounts)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxaccounts
     */
    GetSandboxAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
    /**
     * Метод закрытия счёта в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#closesandboxaccount
     */
    CloseSandboxAccount(body: CloseSandboxAccountRequest): Promise<CloseSandboxAccountResponse>;
    /**
     * Метод выставления торгового поручения в песочнице
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
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxpositions
     */
    GetSandboxPositions(body: PositionsRequest): Promise<PositionsResponse>;
    /**
     * Метод получения операций в песочнице по номеру счёта
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxoperations
     */
    GetSandboxOperations(body: OperationsRequest): Promise<OperationsResponse>;
    /**
     * Метод получения операций в песочнице по номеру счета с пагинацией
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxoperationsbycursor
     */
    GetSandboxOperationsByCursor(body: GetOperationsByCursorRequest): Promise<GetOperationsByCursorResponse>;
    /**
     * Метод получения портфолио в песочнице
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
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxwithdrawlimits
     */
    GetSandboxWithdrawLimits(body: WithdrawLimitsRequest): Promise<WithdrawLimitsResponse>;
}
