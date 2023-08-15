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

export interface iUsers {
  GetAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>
}

export class UsersService extends Common implements iUsers {
  public GetAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse> {
    return this.request('UsersService', 'GetAccounts', body)
  }
}
