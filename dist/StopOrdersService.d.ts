import { Common, MoneyValue, Quotation } from './Common';
export declare enum StopOrderDirection {
    STOP_ORDER_DIRECTION_UNSPECIFIED = 0,
    STOP_ORDER_DIRECTION_BUY = 1,
    STOP_ORDER_DIRECTION_SELL = 2
}
export declare enum StopOrderExpirationType {
    STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED = 0,
    STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL = 1,
    STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE = 2
}
export declare enum StopOrderType {
    STOP_ORDER_TYPE_UNSPECIFIED = 0,
    STOP_ORDER_TYPE_TAKE_PROFIT = 1,
    STOP_ORDER_TYPE_STOP_LOSS = 2,
    STOP_ORDER_TYPE_STOP_LIMIT = 3
}
export interface StopOrder {
    stopOrderId: string;
    lotsRequested: string;
    figi: string;
    direction: StopOrderDirection;
    currency: string;
    orderType: StopOrderType;
    createDate: string;
    activationDateTime: string;
    expirationTime: string;
    price: MoneyValue;
    stopPrice: MoneyValue;
    instrumentUid: string;
}
export interface PostStopOrderRequest {
    figi?: string;
    quantity: string;
    price: Quotation;
    stopPrice: Quotation;
    direction: StopOrderDirection;
    accountId: string;
    expirationType: StopOrderExpirationType;
    stopOrderType: StopOrderType;
    expireDate: string;
    instrumentId: string;
}
export interface PostStopOrderResponse {
    stopOrderId: string;
}
export interface GetStopOrdersRequest {
    accountId: string;
}
export interface GetStopOrdersResponse {
    stopOrders: StopOrder[];
}
export interface CancelStopOrderRequest {
    accountId: string;
    stopOrderId: string;
}
export interface CancelStopOrderResponse {
    time: string;
}
export declare class StopOrdersService extends Common {
    PostStopOrder(body: PostStopOrderRequest): Promise<PostStopOrderResponse>;
    GetStopOrders(body: GetStopOrdersRequest): Promise<GetStopOrdersResponse>;
    CancelStopOrder(body: CancelStopOrderRequest): Promise<CancelStopOrderResponse>;
}
