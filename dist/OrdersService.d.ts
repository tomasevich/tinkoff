import { Common, MoneyValue, Quotation } from './Common';
export declare enum OrderDirection {
    ORDER_DIRECTION_UNSPECIFIED = 0,
    ORDER_DIRECTION_BUY = 1,
    ORDER_DIRECTION_SELL = 2
}
export interface OrderStage {
    price: MoneyValue;
    quantity: string;
    tradeId: string;
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
export interface PostOrderRequest {
    figi?: string;
    quantity: string;
    price: Quotation;
    direction: OrderDirection;
    accountId: string;
    orderType: OrderType;
    orderId: string;
    instrumentId: string;
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
export interface GetOrdersRequest {
    accountId: string;
}
export interface GetOrdersResponse {
    orders: OrderState[];
}
export interface iOrders {
    PostOrder: (body: PostOrderRequest) => Promise<PostOrderResponse>;
    GetOrders: (body: GetOrdersRequest) => Promise<GetOrdersResponse>;
}
export declare class OrdersService extends Common implements iOrders {
    PostOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
}
