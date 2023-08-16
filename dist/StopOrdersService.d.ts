import { Common } from './Common';
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
}
export interface PostStopOrderRequest {
}
export interface PostStopOrderResponse {
}
export interface GetStopOrdersRequest {
}
export interface GetStopOrdersResponse {
}
export interface CancelStopOrderRequest {
}
export interface CancelStopOrderResponse {
}
/**
 * Сервис предназначен для работы со стоп-заявками:
 * 1. выставление;
 * 2. отмена;
 * 3. получение списка стоп-заявок.
 * @see https://tinkoff.github.io/investAPI/stoporders/#stopordersservice
 */
export declare class StopOrdersService extends Common {
    /**
     * Метод выставления стоп-заявки
     * @see https://tinkoff.github.io/investAPI/stoporders/#poststoporder
     */
    PostStopOrder(body: PostStopOrderRequest): Promise<PostStopOrderResponse>;
    /**
     * Метод получения списка активных стоп заявок по счёту
     * @see https://tinkoff.github.io/investAPI/stoporders/#getstoporders
     */
    GetStopOrders(body: GetStopOrdersRequest): Promise<GetStopOrdersResponse>;
    /**
     * Метод отмены стоп-заявки
     * @see https://tinkoff.github.io/investAPI/stoporders/#cancelstoporder
     */
    CancelStopOrder(body: CancelStopOrderRequest): Promise<CancelStopOrderResponse>;
}
