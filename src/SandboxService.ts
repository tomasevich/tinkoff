import { Common } from './Common'
import { GetOrdersRequest, GetOrdersResponse, Orders } from './OrdersService'

/**
 * Запрос открытия счёта в песочнице
 */
export interface OpenSandboxAccountRequest {
  // Пустой запрос
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
  // Пустой ответ
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
}

/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 *
 * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
 */
export class SandboxService extends Common implements Sandbox {
  public OpenSandboxAccount(
    body: OpenSandboxAccountRequest
  ): Promise<OpenSandboxAccountResponse> {
    return this.request('SandboxService', 'OpenSandboxAccount', body)
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
