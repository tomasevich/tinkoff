import { Common } from './Common';
export declare enum AccountType {
    ACCOUNT_TYPE_UNSPECIFIED = 0,
    ACCOUNT_TYPE_TINKOFF = 1,
    ACCOUNT_TYPE_TINKOFF_IIS = 2,
    ACCOUNT_TYPE_INVEST_BOX = 3
}
export declare enum AccountStatus {
    ACCOUNT_STATUS_UNSPECIFIED = 0,
    ACCOUNT_STATUS_NEW = 1,
    ACCOUNT_STATUS_OPEN = 2,
    ACCOUNT_STATUS_CLOSED = 3
}
export declare enum AccessLevel {
    ACCOUNT_ACCESS_LEVEL_UNSPECIFIED = 0,
    ACCOUNT_ACCESS_LEVEL_FULL_ACCESS = 1,
    ACCOUNT_ACCESS_LEVEL_READ_ONLY = 2,
    ACCOUNT_ACCESS_LEVEL_NO_ACCESS = 3
}
export interface Account {
    id: string;
    type: AccountType;
    name: string;
    status: AccountStatus;
    openedDate: string;
    closedDate: string;
    accessLevel: AccessLevel;
}
export interface GetAccountsRequest {
}
export interface GetAccountsResponse {
    accounts: Account[];
}
export interface iUsers {
    GetAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
}
export declare class UsersService extends Common implements iUsers {
    GetAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
}
