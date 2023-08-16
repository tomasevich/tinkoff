import { Common, MoneyValue, Quotation } from './Common';
export declare enum OrderDirection {
    ORDER_DIRECTION_UNSPECIFIED = 0,
    ORDER_DIRECTION_BUY = 1,
    ORDER_DIRECTION_SELL = 2
}
export declare enum OrderType {
    ORDER_TYPE_UNSPECIFIED = 0,
    ORDER_TYPE_LIMIT = 1,
    ORDER_TYPE_MARKET = 2,
    ORDER_TYPE_BESTPRICE = 3
}
export declare enum OrderExecutionReportStatus {
    EXECUTION_REPORT_STATUS_UNSPECIFIED = 0,
    EXECUTION_REPORT_STATUS_FILL = 1,
    EXECUTION_REPORT_STATUS_REJECTED = 2,
    EXECUTION_REPORT_STATUS_CANCELLED = 3,
    EXECUTION_REPORT_STATUS_NEW = 4,
    EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5
}
export declare enum PriceType {
    PRICE_TYPE_UNSPECIFIED = 0,
    PRICE_TYPE_POINT = 1,
    PRICE_TYPE_CURRENCY = 2
}
export interface OrderStage {
    price: MoneyValue;
    quantity: string;
    tradeId: string;
}
export interface PostOrderRequest {
    quantity: string;
    price: Quotation;
    direction: OrderDirection;
    accountId: string;
    orderType: OrderType;
    orderId: string;
    instrumentId: string;
    figi?: string;
}
export interface PostOrderResponse {
    orderId: string;
    executionReportStatus: OrderExecutionReportStatus;
    lotsRequested: string;
    lotsExecuted: string;
    initialOrderPrice: MoneyValue;
    executedOrderPrice: MoneyValue;
    totalOrderAmount: MoneyValue;
    initialCommission: MoneyValue;
    executedCommission: MoneyValue;
    aciValue: MoneyValue;
    figi: string;
    direction: OrderDirection;
    initialSecurityPrice: MoneyValue;
    orderType: OrderType;
    message: string;
    initialOrderPricePt: Quotation;
    instrumentUid: string;
}
export interface CancelOrderRequest {
    accountId: string;
    orderId: string;
}
export interface CancelOrderResponse {
    time: string;
}
export interface GetOrderStateRequest {
    accountId: string;
    orderId: string;
}
export interface OrderState {
    orderId: string;
    executionReportStatus: OrderExecutionReportStatus;
    lotsRequested: string;
    lotsExecuted: string;
    initialOrderPrice: MoneyValue;
    executedOrderPrice: MoneyValue;
    totalOrderAmount: MoneyValue;
    averagePositionPrice: MoneyValue;
    initialCommission: MoneyValue;
    executedCommission: MoneyValue;
    figi: string;
    direction: OrderDirection;
    initialSecurityPrice: MoneyValue;
    stages: OrderStage[];
    serviceCommission: MoneyValue;
    currency: string;
    orderType: OrderType;
    orderDate: string;
    instrumentUid: string;
    orderRequestId: string;
}
export interface GetOrdersRequest {
    accountId: string;
}
export interface GetOrdersResponse {
    orders: OrderState[];
}
export interface ReplaceOrderRequest {
    accountId: string;
    orderId: string;
    idempotencyKey: string;
    quantity: string;
    price: Quotation;
    priceType: PriceType;
}
export declare class OrdersService extends Common {
    PostOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    CancelOrder(body: CancelOrderRequest): Promise<CancelOrderResponse>;
    GetOrderState(body: GetOrderStateRequest): Promise<OrderState>;
    GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
    ReplaceOrder(body: ReplaceOrderRequest): Promise<PostOrderResponse>;
}
