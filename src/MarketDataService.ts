import { Common } from './Common'

export interface GetCandlesRequest {}

export interface GetCandlesResponse {}

export interface GetLastPricesRequest {}

export interface GetLastPricesResponse {}

export interface GetOrderBookRequest {}

export interface GetOrderBookResponse {}

export interface GetTradingStatusRequest {}

export interface GetTradingStatusResponse {}

export interface GetTradingStatusesRequest {}

export interface GetTradingStatusesResponse {}

export interface GetLastTradesRequest {}

export interface GetLastTradesResponse {}

export interface GetClosePricesRequest {}

export interface GetClosePricesResponse {}

export class MarketDataService extends Common {
  GetCandles(body: GetCandlesRequest): Promise<GetCandlesResponse> {
    return this.request('MarketDataService', 'GetCandles', body)
  }

  GetLastPrices(body: GetLastPricesRequest): Promise<GetLastPricesResponse> {
    return this.request('MarketDataService', 'GetLastPrices', body)
  }

  GetOrderBook(body: GetOrderBookRequest): Promise<GetOrderBookResponse> {
    return this.request('MarketDataService', 'GetOrderBook', body)
  }

  GetTradingStatus(
    body: GetTradingStatusRequest
  ): Promise<GetTradingStatusResponse> {
    return this.request('MarketDataService', 'GetTradingStatus', body)
  }

  GetTradingStatuses(
    body: GetTradingStatusesRequest
  ): Promise<GetTradingStatusesResponse> {
    return this.request('MarketDataService', 'GetTradingStatuses', body)
  }

  GetLastTrades(body: GetLastTradesRequest): Promise<GetLastTradesResponse> {
    return this.request('MarketDataService', 'GetLastTrades', body)
  }

  GetClosePrices(body: GetClosePricesRequest): Promise<GetClosePricesResponse> {
    return this.request('MarketDataService', 'GetClosePrices', body)
  }
}
