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
export interface GetMarginAttributesRequest {
}
export interface GetMarginAttributesResponse {
}
export interface GetUserTariffRequest {
}
export interface GetUserTariffResponse {
}
export interface GetInfoRequest {
}
export interface GetInfoResponse {
}
/**
 * Сервис предназначен для получения:
 * 1. списка счетов пользователя;
 * 2. маржинальных показателей по счёту.
 * @see https://tinkoff.github.io/investAPI/users/#usersservice
 */
export declare class UsersService extends Common {
    /**
     * Метод получения счетов пользователя
     * @see https://tinkoff.github.io/investAPI/users/#getaccounts
     */
    GetAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
    /**
     * Расчёт маржинальных показателей по счёту
     * @see https://tinkoff.github.io/investAPI/users/#getmarginattributes
     */
    GetMarginAttributes(body: GetMarginAttributesRequest): Promise<GetMarginAttributesResponse>;
    /**
     * Запрос тарифа пользователя
     * @see https://tinkoff.github.io/investAPI/users/#getusertariff
     */
    GetUserTariff(body: GetUserTariffRequest): Promise<GetUserTariffResponse>;
    /**
     * Метод получения информации о пользователе
     * @see https://tinkoff.github.io/investAPI/users/#getinfo
     */
    GetInfo(body: GetInfoRequest): Promise<GetInfoResponse>;
}
