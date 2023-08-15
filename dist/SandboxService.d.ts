import { Common } from './Common';
import { GetOrdersRequest, GetOrdersResponse, PostOrderRequest, PostOrderResponse } from './OrdersService';
import { GetAccountsRequest, GetAccountsResponse } from './UsersService';
/** Запрос открытия счёта в песочнице */
export interface OpenSandboxAccountRequest {
}
/** Номер открытого счёта в песочнице */
export interface OpenSandboxAccountResponse {
    /** Номер счёта */
    accountId: string;
}
/** Запрос закрытия счёта в песочнице */
export interface CloseSandboxAccountRequest {
    /** Номер счёта */
    accountId: string;
}
/** Результат закрытия счёта в песочнице */
export interface CloseSandboxAccountResponse {
}
/** Интерфейс сервиса Песочницы */
export interface Sandbox {
    /**
     * Метод регистрации счёта в песочнице
     * @param {OpenSandboxAccountRequest} body Тело запроса
     * @returns Номер счёта
     * @see https://tinkoff.github.io/investAPI/sandbox/#opensandboxaccount
     * @example
     * ```js
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * sandboxService.OpenSandboxAccount({})
     *   .then(response => response.json())
     *   .then(data => console.log(data))
     * ```
     */
    OpenSandboxAccount(body: OpenSandboxAccountRequest): Promise<OpenSandboxAccountResponse>;
    /**
     * Метод получения счетов в песочнице
     * @param {GetAccountsRequest} body Тело запроса
     * @returns Пустой ответ
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxaccounts
     * @example
     * ```js
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * sandboxService.GetSandboxAccounts({})
     *   .then(response => response.json())
     *   .then(data => console.log(data))
     * ```
     */
    GetSandboxAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
    /**
     * Метод закрытия счёта в песочнице
     * @param {CloseSandboxAccountRequest} body Тело запроса
     * @returns Пустой ответ
     * @see https://tinkoff.github.io/investAPI/sandbox/#closesandboxaccount
     * @example
     * ```js
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * sandboxService.CloseSandboxAccount({ accountId: '<ACCOUNT_ID>' })
     *   .then(response => response.json())
     *   .then(data => console.log(data))
     * ```
     */
    CloseSandboxAccount(body: CloseSandboxAccountRequest): Promise<CloseSandboxAccountResponse>;
    /**
     * Метод выставления торгового поручения в песочнице
     * @param {PostOrderRequest} body Тело запроса
     */
    PostSandboxOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    /**
     * Метод изменения выставленной заявки
     * @todo
     */
    /**
     * Метод получения списка активных заявок по счёту
     * @param {GetOrdersRequest} body Тело запроса
     * @returns Возвращает список ордеров
     * @see https://tinkoff.github.io/investAPI/orders/#getorders
     * @example
     * ```js
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * sandboxService.GetSandboxOrders({})
     *   .then(response => response.json())
     *   .then(data => console.log(data))
     * ```
     */
    GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
}
/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
 */
export declare class SandboxService extends Common implements Sandbox {
    PostSandboxOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    OpenSandboxAccount(body: OpenSandboxAccountRequest): Promise<OpenSandboxAccountResponse>;
    GetSandboxAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
    CloseSandboxAccount(body: CloseSandboxAccountRequest): Promise<CloseSandboxAccountResponse>;
    GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
}
