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

/**
 * Сервис получения биржевой информации:
 * 1. свечи;
 * 2. стаканы;
 * 3. торговые статусы;
 * 4. лента сделок.
 * @see https://tinkoff.github.io/investAPI/marketdata/#marketdataservice
 */
export class MarketDataService extends Common {
  /**
   * Метод запроса исторических свечей по инструменту
   * @see https://tinkoff.github.io/investAPI/marketdata/#getcandles
   */
  public GetCandles(body: GetCandlesRequest): Promise<GetCandlesResponse> {
    return this.request('MarketDataService', 'GetCandles', body)
  }

  /**
   * Метод запроса цен последних сделок по инструментам
   * @see https://tinkoff.github.io/investAPI/marketdata/#getlastprices
   */
  public GetLastPrices(
    body: GetLastPricesRequest
  ): Promise<GetLastPricesResponse> {
    return this.request('MarketDataService', 'GetLastPrices', body)
  }

  /**
   * Метод получения стакана по инструменту
   * @see https://tinkoff.github.io/investAPI/marketdata/#getorderbook
   */
  public GetOrderBook(
    body: GetOrderBookRequest
  ): Promise<GetOrderBookResponse> {
    return this.request('MarketDataService', 'GetOrderBook', body)
  }

  /**
   * Метод запроса статуса торгов по инструментам
   * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatus
   */
  public GetTradingStatus(
    body: GetTradingStatusRequest
  ): Promise<GetTradingStatusResponse> {
    return this.request('MarketDataService', 'GetTradingStatus', body)
  }

  /**
   * Метод запроса статуса торгов по инструментам
   * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatuses
   */
  public GetTradingStatuses(
    body: GetTradingStatusesRequest
  ): Promise<GetTradingStatusesResponse> {
    return this.request('MarketDataService', 'GetTradingStatuses', body)
  }

  /**
   * Метод запроса обезличенных сделок за последний час
   * @see https://tinkoff.github.io/investAPI/marketdata/#getlasttrades
   */
  public GetLastTrades(
    body: GetLastTradesRequest
  ): Promise<GetLastTradesResponse> {
    return this.request('MarketDataService', 'GetLastTrades', body)
  }

  /**
   * Метод запроса цен закрытия торговой сессии по инструментам
   * @see https://tinkoff.github.io/investAPI/marketdata/#getcloseprices
   */
  public GetClosePrices(
    body: GetClosePricesRequest
  ): Promise<GetClosePricesResponse> {
    return this.request('MarketDataService', 'GetClosePrices', body)
  }
}
