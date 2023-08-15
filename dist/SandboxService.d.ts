import { Common, MoneyValue } from './Common';
import { OperationsRequest, OperationsResponse } from './OperationsService';
import { GetOrdersRequest, GetOrdersResponse, PostOrderRequest, PostOrderResponse } from './OrdersService';
import { GetAccountsRequest, GetAccountsResponse } from './UsersService';
export interface OpenSandboxAccountRequest {
}
export interface OpenSandboxAccountResponse {
    accountId: string;
}
export interface CloseSandboxAccountRequest {
    accountId: string;
}
export interface CloseSandboxAccountResponse {
}
export interface PositionsSecurities {
    figi: string;
    blocked: string;
    balance: string;
    positionUid: string;
    instrumentUid: string;
    exchangeBlocked: boolean;
    instrumentType: string;
}
export interface PositionsFutures {
    figi: string;
    blocked: string;
    balance: string;
    positionUid: string;
    instrumentUid: string;
}
export interface PositionsOptions {
    blocked: string;
    balance: string;
    positionUid: string;
    instrumentUid: string;
}
export interface PositionsRequest {
    accountId: string;
}
export interface PositionsResponse {
    money: MoneyValue[];
    blocked: MoneyValue[];
    securities: PositionsSecurities[];
    limitsLoadingInProgress: boolean;
    futures: PositionsFutures[];
    options: PositionsOptions[];
}
export interface iSandbox {
    OpenSandboxAccount(body: OpenSandboxAccountRequest): Promise<OpenSandboxAccountResponse>;
    GetSandboxAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
    CloseSandboxAccount(body: CloseSandboxAccountRequest): Promise<CloseSandboxAccountResponse>;
    PostSandboxOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
    GetSandboxPositions(body: PositionsRequest): Promise<PositionsResponse>;
    GetSandboxOperations(body: OperationsRequest): Promise<OperationsResponse>;
}
export declare class SandboxService extends Common implements iSandbox {
    OpenSandboxAccount(body: OpenSandboxAccountRequest): Promise<OpenSandboxAccountResponse>;
    GetSandboxAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
    CloseSandboxAccount(body: CloseSandboxAccountRequest): Promise<CloseSandboxAccountResponse>;
    PostSandboxOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
    GetSandboxPositions(body: PositionsRequest): Promise<PositionsResponse>;
    GetSandboxOperations(body: OperationsRequest): Promise<OperationsResponse>;
}
