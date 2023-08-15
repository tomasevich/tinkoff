import { Common, MoneyValue } from './Common'
import { OperationsRequest, OperationsResponse } from './OperationsService'
import {
  GetOrdersRequest,
  GetOrdersResponse,
  PostOrderRequest,
  PostOrderResponse
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

export interface PositionsSecurities {
  figi: string
  blocked: string
  balance: string
  positionUid: string
  instrumentUid: string
  exchangeBlocked: boolean
  instrumentType: string
}

export interface PositionsFutures {
  figi: string
  blocked: string
  balance: string
  positionUid: string
  instrumentUid: string
}

export interface PositionsOptions {
  blocked: string
  balance: string
  positionUid: string
  instrumentUid: string
}

export interface PositionsRequest {
  accountId: string
}

export interface PositionsResponse {
  money: MoneyValue[]
  blocked: MoneyValue[]

  securities: PositionsSecurities[]
  limitsLoadingInProgress: boolean

  futures: PositionsFutures[]

  options: PositionsOptions[]
}

export class SandboxService extends Common {
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

  public PostSandboxOrder(body: PostOrderRequest): Promise<PostOrderResponse> {
    return this.request('SandboxService', 'PostSandboxOrder', body)
  }

  public GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse> {
    return this.request('SandboxService', 'GetSandboxOrders', body)
  }

  public GetSandboxPositions(
    body: PositionsRequest
  ): Promise<PositionsResponse> {
    return this.request('SandboxService', 'GetSandboxPositions', body)
  }

  public GetSandboxOperations(
    body: OperationsRequest
  ): Promise<OperationsResponse> {
    return this.request('SandboxService', 'GetSandboxOperations', body)
  }
}
