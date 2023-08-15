import { Common } from './Common'
import {
  GetOrdersRequest,
  GetOrdersResponse,
  PostOrderRequest,
  PostOrderResponse
} from './OrdersService'

/**
 * Тип счёта
 */
export enum AccountType {
  /**
   * Тип аккаунта не определён
   */
  ACCOUNT_TYPE_UNSPECIFIED,
  /**
   * Брокерский счёт Тинькофф
   */
  ACCOUNT_TYPE_TINKOFF,
  /**
   * ИИС счёт
   */
  ACCOUNT_TYPE_TINKOFF_IIS,
  /**
   * Инвесткопилка
   */
  ACCOUNT_TYPE_INVEST_BOX
}

/**
 * Статус счёта
 */
export enum AccountStatus {
  /**
   * Статус счёта не определён
   */
  ACCOUNT_STATUS_UNSPECIFIED,
  /**
   * Новый, в процессе открытия
   */
  ACCOUNT_STATUS_NEW,
  /**
   * Открытый и активный счёт
   */
  ACCOUNT_STATUS_OPEN,
  /**
   * Закрытый счёт
   */
  ACCOUNT_STATUS_CLOSED
}

/**
 * Уровень доступа к счёту
 */
export enum AccessLevel {
  /**
   * Уровень доступа не определён
   */
  ACCOUNT_ACCESS_LEVEL_UNSPECIFIED,
  /**
   * Полный доступ к счёту
   */
  ACCOUNT_ACCESS_LEVEL_FULL_ACCESS,
  /**
   * Доступ с уровнем прав "только чтение"
   */
  ACCOUNT_ACCESS_LEVEL_READ_ONLY,
  /**
   * Доступ отсутствует
   */
  ACCOUNT_ACCESS_LEVEL_NO_ACCESS
}

/**
 * Информация о счёте
 */
export interface Account {
  /**
   * Идентификатор счёта
   */
  id: string

  /**
   * Тип счёта
   *
   * @default ACCOUNT_TYPE_UNSPECIFIED
   */
  type: AccountType

  /**
   * Название счёта
   */
  name: string

  /**
   * Статус счёта
   *
   * @default ACCOUNT_STATUS_UNSPECIFIED
   */
  status: AccountStatus

  /**
   * Дата открытия счёта в часовом поясе UTC
   */
  openedDate: string

  /**
   * Дата закрытия счёта в часовом поясе UTC
   */
  closedDate: string

  /**
   * Уровень доступа к счёту
   *
   * @default ACCOUNT_ACCESS_LEVEL_UNSPECIFIED
   */
  accessLevel: AccessLevel
}

/**
 * Запрос открытия счёта в песочнице
 */
export interface OpenSandboxAccountRequest {
  /**
   * @remarks Пустой запрос
   */
}

/**
 * Номер открытого счёта в песочнице
 */
export interface OpenSandboxAccountResponse {
  /**
   * Номер счёта
   */
  accountId: string
}

/**
 * Запрос получения счетов пользователя
 */
export interface GetAccountsRequest {
  /**
   * @remarks Пустой запрос
   */
}

/**
 * Список счетов пользователя
 */
export interface GetAccountsResponse {
  /**
   * Массив счетов клиента
   */
  accounts: Account[]
}

/**
 * Запрос закрытия счёта в песочнице
 */
export interface CloseSandboxAccountRequest {
  /**
   * Номер счёта
   */
  accountId: string
}

/**
 * Результат закрытия счёта в песочнице
 */
export interface CloseSandboxAccountResponse {
  /**
   * @remarks Пустой ответ
   */
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
  OpenSandboxAccount(
    body: OpenSandboxAccountRequest
  ): Promise<OpenSandboxAccountResponse>

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
  GetSandboxAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>

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
  CloseSandboxAccount(
    body: CloseSandboxAccountRequest
  ): Promise<CloseSandboxAccountResponse>

  /**
   * Метод выставления торгового поручения в песочнице
   *
   * @param {PostOrderRequest} body Тело запроса
   */
  PostSandboxOrder(body: PostOrderRequest): Promise<PostOrderResponse>

  /**
   * Метод изменения выставленной заявки
   * @todo
   */
  // ReplaceSandboxOrder(body: ReplaceOrderRequest): Promise<ReplaceOrderResponse>

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
  GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>

  /**
   * Метод отмены торгового поручения в песочнице
   * @todo
   */
  // CancelSandboxOrder(body: CancelOrderRequest): Promise<CancelOrderResponse>

  /**
   * Метод отмены торгового поручения в песочнице
   * @todo
   */
  // GetSandboxOrderState(body: GetOrderStateRequest): Promise<OrderState>

  /**
   * Метод получения позиций по виртуальному счёту песочницы
   * @todo
   */
  // GetSandboxPositions(body: PositionsRequest): Promise<PositionsResponse>

  /**
   * Метод получения операций в песочнице по номеру счёта
   * @todo
   */
  // GetSandboxOperations(body: OperationsRequest): Promise<OperationsResponse>

  /**
   * Метод получения операций в песочнице по номеру счета с пагинацией
   * @todo
   */
  // GetSandboxOperationsByCursor(
  //   body: GetOperationsByCursorRequest
  // ): Promise<GetOperationsByCursorResponse>

  /**
   * Метод получения портфолио в песочнице
   * @todo
   */
  // GetSandboxPortfolio(body: PortfolioRequest): Promise<PortfolioResponse>

  /**
   * Метод пополнения счёта в песочнице
   * @todo
   */
  // SandboxPayIn(body: SandboxPayInRequest): Promise<SandboxPayInResponse>

  /**
   * Метод получения доступного остатка для вывода средств в песочнице
   * @todo
   */
  // GetSandboxWithdrawLimits(
  //   body: WithdrawLimitsRequest
  // ): Promise<WithdrawLimitsResponse>
}

/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 *
 * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
 */
export class SandboxService extends Common implements Sandbox {
  public PostSandboxOrder(body: PostOrderRequest): Promise<PostOrderResponse> {
    return this.request('SandboxService', 'PostSandboxOrder', body)
  }

  public OpenSandboxAccount(
    body: OpenSandboxAccountRequest
  ): Promise<OpenSandboxAccountResponse> {
    return this.request('SandboxService', 'OpenSandboxAccount', body)
  }

  public GetSandboxAccounts(
    body: GetAccountsRequest
  ): Promise<GetAccountsResponse> {
    return this.request('SandboxService', 'GetSandboxAccounts', body)
  }

  public CloseSandboxAccount(
    body: CloseSandboxAccountRequest
  ): Promise<CloseSandboxAccountResponse> {
    return this.request('SandboxService', 'CloseSandboxAccount', body)
  }

  public GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse> {
    return this.request('SandboxService', 'GetSandboxOrders', body)
  }
}