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
export interface OrderStage {
    price: MoneyValue;
    quantity: string;
    tradeId: string;
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
export interface CancelOrderRequest {
}
export interface CancelOrderResponse {
}
export interface GetOrderStateRequest {
}
export interface OrderState {
}
export interface GetOrdersRequest {
    accountId: string;
}
export interface GetOrdersResponse {
    orders: OrderState[];
}
export interface ReplaceOrderRequest {
}
export interface PostOrderResponse {
}
/**
 * Сервис предназначен для работы с торговыми поручениями:
 * 1. выставление;
 * 2. отмена;
 * 3. получение статуса;
 * 4. расчёт полной стоимости;
 * 5. получение списка заявок.
 * @see https://tinkoff.github.io/investAPI/orders/#ordersservice
 */
export declare class OrdersService extends Common {
    /**
     * Метод выставления заявки
     * @see https://tinkoff.github.io/investAPI/orders/#postorder
     */
    PostOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    /**
     * Метод отмены биржевой заявки
     * @see https://tinkoff.github.io/investAPI/orders/#cancelorder
     */
    CancelOrder(body: CancelOrderRequest): Promise<CancelOrderResponse>;
    /**
     * Метод получения статуса торгового поручения
     * @see https://tinkoff.github.io/investAPI/orders/#getorderstate
     */
    GetOrderState(body: GetOrderStateRequest): Promise<OrderState>;
    /**
     * Метод получения списка активных заявок по счёту
     * @see https://tinkoff.github.io/investAPI/orders/#getorders
     */
    GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
    /**
     * Метод изменения выставленной заявки
     * @see https://tinkoff.github.io/investAPI/orders/#replaceorder
     */
    ReplaceOrder(body: ReplaceOrderRequest): Promise<PostOrderResponse>;
}
