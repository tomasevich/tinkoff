import { Common } from './Common';
import { GetOperationsByCursorRequest, GetOperationsByCursorResponse, OperationsRequest, OperationsResponse, PortfolioRequest, PortfolioResponse, PositionsRequest, PositionsResponse, WithdrawLimitsRequest, WithdrawLimitsResponse } from './OperationsService';
import { CancelOrderRequest, CancelOrderResponse, GetOrderStateRequest, GetOrdersRequest, GetOrdersResponse, OrderState, PostOrderRequest, PostOrderResponse, ReplaceOrderRequest } from './OrdersService';
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
export interface SandboxPayInRequest {
}
export interface SandboxPayInResponse {
}
export declare class SandboxService extends Common {
    OpenSandboxAccount(body: OpenSandboxAccountRequest): Promise<OpenSandboxAccountResponse>;
    GetSandboxAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>;
    CloseSandboxAccount(body: CloseSandboxAccountRequest): Promise<CloseSandboxAccountResponse>;
    PostSandboxOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    ReplaceSandboxOrder(body: ReplaceOrderRequest): Promise<PostOrderResponse>;
    GetSandboxOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
    CancelSandboxOrder(body: CancelOrderRequest): Promise<CancelOrderResponse>;
    GetSandboxOrderState(body: GetOrderStateRequest): Promise<OrderState>;
    GetSandboxPositions(body: PositionsRequest): Promise<PositionsResponse>;
    GetSandboxOperations(body: OperationsRequest): Promise<OperationsResponse>;
    GetSandboxOperationsByCursor(body: GetOperationsByCursorRequest): Promise<GetOperationsByCursorResponse>;
    GetSandboxPortfolio(body: PortfolioRequest): Promise<PortfolioResponse>;
    SandboxPayIn(body: SandboxPayInRequest): Promise<SandboxPayInResponse>;
    GetSandboxWithdrawLimits(body: WithdrawLimitsRequest): Promise<WithdrawLimitsResponse>;
}
