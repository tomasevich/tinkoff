import { Common } from './Common';
export interface GetCandlesRequest {
}
export interface GetCandlesResponse {
}
export interface GetLastPricesRequest {
}
export interface GetLastPricesResponse {
}
export interface GetOrderBookRequest {
}
export interface GetOrderBookResponse {
}
export interface GetTradingStatusRequest {
}
export interface GetTradingStatusResponse {
}
export interface GetTradingStatusesRequest {
}
export interface GetTradingStatusesResponse {
}
export interface GetLastTradesRequest {
}
export interface GetLastTradesResponse {
}
export interface GetClosePricesRequest {
}
export interface GetClosePricesResponse {
}
/**
 * Сервис получения биржевой информации:
 * 1. свечи;
 * 2. стаканы;
 * 3. торговые статусы;
 * 4. лента сделок.
 * @see https://tinkoff.github.io/investAPI/marketdata/#marketdataservice
 */
export declare class MarketDataService extends Common {
    /**
     * Метод запроса исторических свечей по инструменту
     * @see https://tinkoff.github.io/investAPI/marketdata/#getcandles
     */
    GetCandles(body: GetCandlesRequest): Promise<GetCandlesResponse>;
    /**
     * Метод запроса цен последних сделок по инструментам
     * @see https://tinkoff.github.io/investAPI/marketdata/#getlastprices
     */
    GetLastPrices(body: GetLastPricesRequest): Promise<GetLastPricesResponse>;
    /**
     * Метод получения стакана по инструменту
     * @see https://tinkoff.github.io/investAPI/marketdata/#getorderbook
     */
    GetOrderBook(body: GetOrderBookRequest): Promise<GetOrderBookResponse>;
    /**
     * Метод запроса статуса торгов по инструментам
     * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatus
     */
    GetTradingStatus(body: GetTradingStatusRequest): Promise<GetTradingStatusResponse>;
    /**
     * Метод запроса статуса торгов по инструментам
     * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatuses
     */
    GetTradingStatuses(body: GetTradingStatusesRequest): Promise<GetTradingStatusesResponse>;
    /**
     * Метод запроса обезличенных сделок за последний час
     * @see https://tinkoff.github.io/investAPI/marketdata/#getlasttrades
     */
    GetLastTrades(body: GetLastTradesRequest): Promise<GetLastTradesResponse>;
    /**
     * Метод запроса цен закрытия торговой сессии по инструментам
     * @see https://tinkoff.github.io/investAPI/marketdata/#getcloseprices
     */
    GetClosePrices(body: GetClosePricesRequest): Promise<GetClosePricesResponse>;
}
