import { Common } from './Common'
import {
  GetOperationsByCursorRequest,
  GetOperationsByCursorResponse,
  OperationsRequest,
  OperationsResponse,
  PortfolioRequest,
  PortfolioResponse,
  PositionsRequest,
  PositionsResponse,
  WithdrawLimitsRequest,
  WithdrawLimitsResponse
} from './OperationsService'
import {
  CancelOrderRequest,
  CancelOrderResponse,
  GetOrderStateRequest,
  GetOrdersRequest,
  GetOrdersResponse,
  OrderState,
  PostOrderRequest,
  PostOrderResponse,
  ReplaceOrderRequest
} from './OrdersService'
import { GetAccountsRequest, GetAccountsResponse } from './UsersService'

export interface OpenSandboxAccountRequest {}

export interface OpenSandboxAccountResponse {
  accountId: string
}

export interface CloseSandboxAccountRequest {
  accountId: string
}

export interface CloseSandboxAccountResponse {}

export interface SandboxPayInRequest {}

export interface SandboxPayInResponse {}

/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 * @see https://tinkoff.github.io/investAPI/sandbox/#sandboxservice
 */
export class SandboxService extends Common {
  /**
   * Метод регистрации счёта в песочнице
   * @see https://tinkoff.github.io/investAPI/sandbox/#opensandboxaccount
   */
  public OpenSandboxAccount(
    body: OpenSandboxAccountRequest
  ): Promise<OpenSandboxAccountResponse> {
    return this.request('SandboxService', '  OpenSandboxAccount', body)
  }

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
  public GetSandboxAccounts(
    body: GetAccountsRequest
  ): Promise<GetAccountsResponse> {
    return this.request('SandboxService', 'GetSandboxAccounts', body)
  }

  /**
   * Метод закрытия счёта в песочнице
   * @see https://tinkoff.github.io/investAPI/sandbox/#closesandboxaccount
   */
  public CloseSandboxAccount(
    body: CloseSandboxAccountRequest
  ): Promise<CloseSandboxAccountResponse> {
    return this.request('SandboxService', 'CloseSandboxAccount', body)
  }

  /**
   * Метод выставления торгового поручения в песочнице
   * @see https://tinkoff.github.io/investAPI/sandbox/#postsandboxorder
   */
  public PostSandboxOrder(body: PostOrderRequest): Promise<PostOrderResponse> {
    return this.request('SandboxService', 'PostSandboxOrder', body)
  }

  /**
   * Метод изменения выставленной заявки
   * @see https://tinkoff.github.io/investAPI/sandbox/#replacesandboxorder
   */
  public ReplaceSandboxOrder(
    body: ReplaceOrderRequest
  ): Promise<PostOrderResponse> {
    return this.request('SandboxService', 'ReplaceSandboxOrder', body)
  }

  /**
   * Метод получения списка активных заявок по счёту в песочнице
   * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
   */
  public GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse> {
    return this.request('SandboxService', 'GetSandboxOrders', body)
  }

  /**
   * Метод отмены торгового поручения в песочнице
   * @see https://tinkoff.github.io/investAPI/sandbox/#cancelsandboxorder
   */
  public CancelSandboxOrder(
    body: CancelOrderRequest
  ): Promise<CancelOrderResponse> {
    return this.request('SandboxService', 'CancelSandboxOrder', body)
  }

  /**
   * Метод получения статуса заявки в песочнице
   * @description Заявки хранятся в таблице 7 дней
   * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorderstate
   */
  public GetSandboxOrderState(body: GetOrderStateRequest): Promise<OrderState> {
    return this.request('SandboxService', 'GetSandboxOrderState', body)
  }

  /**
   * Метод получения позиций по виртуальному счёту
   * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxpositions
   */
  public GetSandboxPositions(
    body: PositionsRequest
  ): Promise<PositionsResponse> {
    return this.request('SandboxService', 'GetSandboxPositions', body)
  }

  /**
   * Метод получения операций в песочнице по номеру счёта
   * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxoperations
   */
  public GetSandboxOperations(
    body: OperationsRequest
  ): Promise<OperationsResponse> {
    return this.request('SandboxService', 'GetSandboxOperations', body)
  }

  /**
   * Метод получения операций в песочнице по номеру счета с пагинацией
   * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxoperationsbycursor
   */
  public GetSandboxOperationsByCursor(
    body: GetOperationsByCursorRequest
  ): Promise<GetOperationsByCursorResponse> {
    return this.request('SandboxService', 'GetSandboxOperationsByCursor', body)
  }

  /**
   * Метод получения портфолио в песочнице
   * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxportfolio
   */
  public GetSandboxPortfolio(
    body: PortfolioRequest
  ): Promise<PortfolioResponse> {
    return this.request('SandboxService', 'GetSandboxPortfolio', body)
  }

  /**
   * Метод пополнения счёта в песочнице
   * @see https://tinkoff.github.io/investAPI/sandbox/#sandboxpayin
   */
  public SandboxPayIn(
    body: SandboxPayInRequest
  ): Promise<SandboxPayInResponse> {
    return this.request('SandboxService', 'SandboxPayIn', body)
  }

  /**
   * Метод получения доступного остатка для вывода средств в песочнице
   * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxwithdrawlimits
   */
  public GetSandboxWithdrawLimits(
    body: WithdrawLimitsRequest
  ): Promise<WithdrawLimitsResponse> {
    return this.request('SandboxService', 'GetSandboxWithdrawLimits', body)
  }
}
