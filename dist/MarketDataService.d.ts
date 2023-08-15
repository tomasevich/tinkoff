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
export interface iMarketData {
    GetCandles(body: GetCandlesRequest): Promise<GetCandlesResponse>;
    GetLastPrices(body: GetLastPricesRequest): Promise<GetLastPricesResponse>;
    GetOrderBook(body: GetOrderBookRequest): Promise<GetOrderBookResponse>;
    GetTradingStatus(body: GetTradingStatusRequest): Promise<GetTradingStatusResponse>;
    GetTradingStatuses(body: GetTradingStatusesRequest): Promise<GetTradingStatusesResponse>;
    GetLastTrades(body: GetLastTradesRequest): Promise<GetLastTradesResponse>;
    GetClosePrices(body: GetClosePricesRequest): Promise<GetClosePricesResponse>;
}
export declare class MarketDataService extends Common implements iMarketData {
    GetCandles(body: GetCandlesRequest): Promise<GetCandlesResponse>;
    GetLastPrices(body: GetLastPricesRequest): Promise<GetLastPricesResponse>;
    GetOrderBook(body: GetOrderBookRequest): Promise<GetOrderBookResponse>;
    GetTradingStatus(body: GetTradingStatusRequest): Promise<GetTradingStatusResponse>;
    GetTradingStatuses(body: GetTradingStatusesRequest): Promise<GetTradingStatusesResponse>;
    GetLastTrades(body: GetLastTradesRequest): Promise<GetLastTradesResponse>;
    GetClosePrices(body: GetClosePricesRequest): Promise<GetClosePricesResponse>;
}
