import { Common } from './Common';
import { GetOrdersRequest, GetOrdersResponse } from './OrdersService';
/**
 * Тип счёта
 */
export declare enum AccountType {
    /**
     * Тип аккаунта не определён
     */
    ACCOUNT_TYPE_UNSPECIFIED = 0,
    /**
     * Брокерский счёт Тинькофф
     */
    ACCOUNT_TYPE_TINKOFF = 1,
    /**
     * ИИС счёт
     */
    ACCOUNT_TYPE_TINKOFF_IIS = 2,
    /**
     * Инвесткопилка
     */
    ACCOUNT_TYPE_INVEST_BOX = 3
}
/**
 * Статус счёта
 */
export declare enum AccountStatus {
    /**
     * Статус счёта не определён
     */
    ACCOUNT_STATUS_UNSPECIFIED = 0,
    /**
     * Новый, в процессе открытия
     */
    ACCOUNT_STATUS_NEW = 1,
    /**
     * Открытый и активный счёт
     */
    ACCOUNT_STATUS_OPEN = 2,
    /**
     * Закрытый счёт
     */
    ACCOUNT_STATUS_CLOSED = 3
}
/**
 * Уровень доступа к счёту
 */
export declare enum AccessLevel {
    /**
     * Уровень доступа не определён
     */
    ACCOUNT_ACCESS_LEVEL_UNSPECIFIED = 0,
    /**
     * Полный доступ к счёту
     */
    ACCOUNT_ACCESS_LEVEL_FULL_ACCESS = 1,
    /**
     * Доступ с уровнем прав "только чтение"
     */
    ACCOUNT_ACCESS_LEVEL_READ_ONLY = 2,
    /**
     * Доступ отсутствует
     */
    ACCOUNT_ACCESS_LEVEL_NO_ACCESS = 3
}
/**
 * Информация о счёте
 */
export interface Account {
    /**
     * Идентификатор счёта
     */
    id: string;
    /**
     * Тип счёта
     *
     * @default ACCOUNT_TYPE_UNSPECIFIED
     */
    type: AccountType;
    /**
     * Название счёта
     */
    name: string;
    /**
     * Статус счёта
     *
     * @default ACCOUNT_STATUS_UNSPECIFIED
     */
    status: AccountStatus;
    /**
     * Дата открытия счёта в часовом поясе UTC
     */
    openedDate: string;
    /**
     * Дата закрытия счёта в часовом поясе UTC
     */
    closedDate: string;
    /**
     * Уровень доступа к счёту
     *
     * @default ACCOUNT_ACCESS_LEVEL_UNSPECIFIED
     */
    accessLevel: AccessLevel;
}
/**
 * Запрос открытия счёта в песочнице
 */
export interface OpenSandboxAccountRequest {
}
/**
 * Номер открытого счёта в песочнице
 */
export interface OpenSandboxAccountResponse {
    /**
     * Номер счёта
     */
    accountId: string;
}
/**
 * Запрос получения счетов пользователя
 */
export interface GetAccountsRequest {
}
/**
 * Список счетов пользователя
 */
export interface GetAccountsResponse {
    /**
     * Массив счетов клиента
     */
    accounts: Account[];
}
/**
 * Запрос закрытия счёта в песочнице
 */
export interface CloseSandboxAccountRequest {
    /**
     * Номер счёта
     */
    accountId: string;
}
/**
 * Результат закрытия счёта в песочнице
 */
export interface CloseSandboxAccountResponse {
}
/**
 * Интерфейс сервиса Песочницы
 */
export interface Sandbox {
    /**
     * Метод регистрации счёта в песочнице
     *
     * @param {OpenSandboxAccountRequest} body Тело запроса
     *
     * @returns Номер счёта
     *
     * @see https://tinkoff.github.io/investAPI/sandbox/#opensandboxaccount
     *
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
     *
     * @param {GetAccountsRequest} body Тело запроса
     *
     * @returns Пустой ответ
     *
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxaccounts
     *
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
     *
     * @param {CloseSandboxAccountRequest} body Тело запроса
     *
     * @returns Пустой ответ
     *
     * @see https://tinkoff.github.io/investAPI/sandbox/#closesandboxaccount
     *
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
     * Метод получения списка активных заявок по счёту
     *
     * @param {GetOrdersRequest} body Тело запроса
     *
     * @returns Возвращает список ордеров
     *
     * @see https://tinkoff.github.io/investAPI/orders/#getorders
     *
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
 *
 * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
 */
export declare class SandboxService extends Common implements Sandbox {
    OpenSandboxAccount(body: OpenSandboxAccountRequest): Promise<OpenSandboxAccountResponse>;
    GetSandboxAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
    CloseSandboxAccount(body: CloseSandboxAccountRequest): Promise<CloseSandboxAccountResponse>;
    GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
}
