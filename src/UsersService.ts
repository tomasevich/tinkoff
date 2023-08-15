import { Common } from './Common'

export enum AccountType {
  ACCOUNT_TYPE_UNSPECIFIED,
  ACCOUNT_TYPE_TINKOFF,
  ACCOUNT_TYPE_TINKOFF_IIS,
  ACCOUNT_TYPE_INVEST_BOX
}

export enum AccountStatus {
  ACCOUNT_STATUS_UNSPECIFIED,
  ACCOUNT_STATUS_NEW,
  ACCOUNT_STATUS_OPEN,
  ACCOUNT_STATUS_CLOSED
}

export enum AccessLevel {
  ACCOUNT_ACCESS_LEVEL_UNSPECIFIED,
  ACCOUNT_ACCESS_LEVEL_FULL_ACCESS,
  ACCOUNT_ACCESS_LEVEL_READ_ONLY,
  ACCOUNT_ACCESS_LEVEL_NO_ACCESS
}

export interface Account {
  id: string
  type: AccountType
  name: string
  status: AccountStatus
  openedDate: string
  closedDate: string
  accessLevel: AccessLevel
}

export interface GetAccountsRequest {}

export interface GetAccountsResponse {
  accounts: Account[]
}

export interface GetMarginAttributesRequest {}

export interface GetMarginAttributesResponse {}

export interface GetUserTariffRequest {}

export interface GetUserTariffResponse {}

export interface GetInfoRequest {}

export interface GetInfoResponse {}

/**
 * Сервис предназначен для получения:
 * 1. списка счетов пользователя;
 * 2. маржинальных показателей по счёту.
 * @see https://tinkoff.github.io/investAPI/users/#usersservice
 */
export class UsersService extends Common {
  /**
   * Метод получения счетов пользователя
   * @see https://tinkoff.github.io/investAPI/users/#getaccounts
   */
  public GetAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse> {
    return this.request('UsersService', 'GetAccounts', body)
  }

  /**
   * Расчёт маржинальных показателей по счёту
   * @see https://tinkoff.github.io/investAPI/users/#getmarginattributes
   */
  public GetMarginAttributes(
    body: GetMarginAttributesRequest
  ): Promise<GetMarginAttributesResponse> {
    return this.request('UsersService', 'GetMarginAttributes', body)
  }

  /**
   * Запрос тарифа пользователя
   * @see https://tinkoff.github.io/investAPI/users/#getusertariff
   */
  public GetUserTariff(
    body: GetUserTariffRequest
  ): Promise<GetUserTariffResponse> {
    return this.request('UsersService', 'GetUserTariff', body)
  }

  /**
   * Метод получения информации о пользователе
   * @see https://tinkoff.github.io/investAPI/users/#getinfo
   */
  public GetInfo(body: GetInfoRequest): Promise<GetInfoResponse> {
    return this.request('UsersService', 'GetInfo', body)
  }
}
