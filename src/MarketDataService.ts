import { Common, Quotation, SecurityTradingStatus } from './Common'

/**
 * Направление сделки
 * @see https://tinkoff.github.io/investAPI/marketdata/#tradedirection
 */
export enum TradeDirection {
  /** Направление сделки не определено */
  TRADE_DIRECTION_UNSPECIFIED,
  /** Покупка */
  TRADE_DIRECTION_BUY,
  /** Продажа */
  TRADE_DIRECTION_SELL
}

/**
 * Интервал свечей
 * @see https://tinkoff.github.io/investAPI/marketdata/#candleinterval
 */
export enum CandleInterval {
  /** Интервал не определён */
  CANDLE_INTERVAL_UNSPECIFIED,
  /** от 1 минуты до 1 дня */
  CANDLE_INTERVAL_1_MIN,
  /** от 5 минут до 1 дня */
  CANDLE_INTERVAL_5_MIN,
  /** от 15 минут до 1 дня */
  CANDLE_INTERVAL_15_MIN,
  /** от 1 часа до 1 недели */
  CANDLE_INTERVAL_HOUR,
  /** от 1 дня до 1 года */
  CANDLE_INTERVAL_DAY,
  /** от 2 минут до 1 дня */
  CANDLE_INTERVAL_2_MIN,
  /** от 3 минут до 1 дня */
  CANDLE_INTERVAL_3_MIN,
  /** от 10 минут до 1 дня */
  CANDLE_INTERVAL_10_MIN,
  /** от 30 минут до 2 дней */
  CANDLE_INTERVAL_30_MIN,
  /** от 2 часов до 1 месяца */
  CANDLE_INTERVAL_2_HOUR,
  /** от 4 часов до 1 месяца */
  CANDLE_INTERVAL_4_HOUR,
  /** от 1 недели до 2 лет */
  CANDLE_INTERVAL_WEEK,
  /** от 1 месяца до 10 лет */
  CANDLE_INTERVAL_MONTH
}

/**
 * Информация о свече
 * @see https://tinkoff.github.io/investAPI/marketdata/#historiccandle
 */
export interface HistoricCandle {
  /**
   * Цена открытия за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  open: Quotation
  /**
   * Максимальная цена за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  high: Quotation
  /**
   * Минимальная цена за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  low: Quotation
  /**
   * Цена закрытия за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  close: Quotation
  /**
   * Объём торгов в лотах
   * @type `int64`
   */
  volume: string
  /**
   * Время свечи в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  time: string
  /**
   * Признак завершённости свечи
   * @description `false` значит, свеча за текущие интервал ещё сформирована не полностью
   */
  isComplete: boolean
}

/**
 * Информация о цене последней сделки
 * @see https://tinkoff.github.io/investAPI/marketdata/#lastprice
 */
export interface LastPrice {
  /** Figi инструмента */
  figi: string
  /**
   * Цена последней сделки за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  price: Quotation
  /**
   * Время получения последней цены в часовом поясе UTC по времени биржи
   * @type `google.protobuf.Timestamp`
   */
  time: string
  /** Uid инструмента */
  instrumentUid: string
}

/**
 * Запрос исторических свечей
 * @see https://tinkoff.github.io/investAPI/marketdata/#getcandlesrequest
 */
export interface GetCandlesRequest {
  /**
   * Figi-идентификатор инструмента
   * @deprecated Необходимо использовать instrumentId
   */
  figi?: string
  /**
   * Начало запрашиваемого периода в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  from: string
  /**
   * Окончание запрашиваемого периода в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  to: string
  /** Интервал запрошенных свечей */
  interval: CandleInterval
  /** Идентификатор инструмента, принимает значение figi или instrumentUid */
  instrumentId: string
}

/**
 * Массив предложений/спроса
 * @see https://tinkoff.github.io/investAPI/marketdata/#order
 */
export interface Order {
  /**
   * Цена за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  price: Quotation
  /**
   * Количество в лотах
   * @type `int64`
   */
  quantity: string
}

/**
 * Информация о сделке
 * @see https://tinkoff.github.io/investAPI/marketdata/#trade
 */
export interface Trade {
  /** Figi-идентификатор инструмента */
  figi: string
  /** Направление сделки */
  direction: TradeDirection
  /**
   * Цена за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  price: Quotation
  /**
   * Количество лотов
   * @type `int64`
   */
  quantity: string
  /**
   * Время сделки в часовом поясе UTC по времени биржи
   * @type `google.protobuf.Timestamp`
   */
  time: string
  /** Uid инструмента */
  instrumentUid: string
}

/**
 * Список свечей
 * @see https://tinkoff.github.io/investAPI/marketdata/#getcandlesresponse
 */
export interface GetCandlesResponse {
  /** Массив свечей */
  candles: HistoricCandle[]
}

/**
 * Запрос получения цен последних сделок
 * @see https://tinkoff.github.io/investAPI/marketdata/#getlastpricesrequest
 */
export interface GetLastPricesRequest {
  /**
   * Figi-идентификатор инструмента
   * @deprecated Необходимо использовать instrumentId
   */
  figi?: string[]
  /** Массив идентификаторов инструмента, принимает значения figi или instrumentUid */
  instrumentId: string[]
}

/**
 * Список цен последних сделок
 * @see https://tinkoff.github.io/investAPI/marketdata/#getlastpricesresponse
 */
export interface GetLastPricesResponse {
  /** Массив цен последних сделок */
  lastPrices: LastPrice[]
}

/**
 * Запрос стакана
 * @see https://tinkoff.github.io/investAPI/marketdata/#getorderbookrequest
 */
export interface GetOrderBookRequest {
  /**
   * Figi-идентификатор инструмента
   * @deprecated Необходимо использовать instrumentId
   */
  figi?: string
  /**
   * Глубина стакана
   * @type `int32`
   */
  depth: number
  /** Идентификатор инструмента, принимает значение figi или instrumentUid */
  instrumentId: string
}

/**
 * Информация о стакане
 * @see https://tinkoff.github.io/investAPI/marketdata/#getorderbookresponse
 */
export interface GetOrderBookResponse {
  /** Figi-идентификатор инструмента */
  figi: string
  /**
   * Глубина стакана
   * @type `int32`
   */
  depth: number
  /** Множество пар значений на покупку */
  bids: Order[]
  /** Множество пар значений на продажу */
  asks: Order[]
  /**
   * Цена последней сделки за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  lastPrice: Quotation
  /**
   * Цена закрытия за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  closePrice: Quotation
  /**
   * Верхний лимит цены за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  limitUp: Quotation
  /**
   * Нижний лимит цены за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать информацию со страницы
   */
  limitDown: Quotation
  /**
   * Время получения цены последней сделки
   * @type `google.protobuf.Timestamp`
   */
  lastPriceTs: string
  /**
   * Время получения цены закрытия
   * @type `google.protobuf.Timestamp`
   */
  closePriceTs: string
  /**
   * Время формирования стакана на бирже
   * @type `google.protobuf.Timestamp`
   */
  orderbookTs: string
  /** Uid инструмента */
  instrumentUid: string
}

/**
 * Запрос получения торгового статуса
 * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatusrequest
 */
export interface GetTradingStatusRequest {
  /**
   * Figi-идентификатор инструмента
   * @deprecated Необходимо использовать instrumentId
   */
  figi?: string
  /** Идентификатор инструмента, принимает значение figi или instrumentUid */
  instrumentId: string
}

/**
 * Информация о торговом статусе
 * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatusresponse
 */
export interface GetTradingStatusResponse {
  /** Figi-идентификатор инструмента */
  figi: string
  /** Статус торговли инструментом */
  tradingStatus: SecurityTradingStatus
  /** Признак доступности выставления лимитной заявки по инструменту */
  limitOrderAvailableFlag: boolean
  /** Признак доступности выставления рыночной заявки по инструменту */
  marketOrderAvailableFlag: boolean
  /** Признак доступности торгов через API */
  apiTradeAvailableFlag: boolean
  /** Uid инструмента */
  instrumentUid: string
}

/**
 * Запрос получения торгового статуса
 * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatusesrequest
 */
export interface GetTradingStatusesRequest {
  /** Идентификатор инструмента, принимает значение figi или instrumentUi */
  instrumentId: string[]
}

/**
 * Информация о торговом статусе
 * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatusesresponse
 */
export interface GetTradingStatusesResponse {
  /** Массив информации о торговых статусах */
  tradingStatuses: GetTradingStatusResponse[]
}

/**
 * Запрос обезличенных сделок за последний час
 * @see https://tinkoff.github.io/investAPI/marketdata/#getlasttradesrequest
 */
export interface GetLastTradesRequest {
  /**
   * Figi-идентификатор инструмента
   * @deprecated Необходимо использовать instrumentId
   */
  figi?: string
  /**
   * Начало запрашиваемого периода в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  from: string
  /**
   * Окончание запрашиваемого периода в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  to: string
  /** Идентификатор инструмента, принимает значение figi или instrumentUid */
  instrumentId: string
}

/**
 * Обезличенных сделок за последний час
 * @see https://tinkoff.github.io/investAPI/marketdata/#getlasttradesresponse
 */
export interface GetLastTradesResponse {
  /** Массив сделок */
  trades: Trade[]
}

/**
 * Запрос цен закрытия торговой сессии по инструментам
 * @see https://tinkoff.github.io/investAPI/marketdata/#getclosepricesrequest
 */
export interface GetClosePricesRequest {
  /** Массив по инструментам */
  instruments: InstrumentClosePriceRequest[]
}

/**
 * Цены закрытия торговой сессии по инструментам
 * @see https://tinkoff.github.io/investAPI/marketdata/#getclosepricesresponse
 */
export interface GetClosePricesResponse {
  /** Массив по инструментам */
  closePrices: InstrumentClosePriceResponse[]
}

/**
 * Запрос цен закрытия торговой сессии по инструменту
 * @see https://tinkoff.github.io/investAPI/marketdata/#instrumentclosepricerequest
 */
export interface InstrumentClosePriceRequest {
  /** Идентификатор инструмента, принимает значение figi или instrumentUid */
  instrumentId: string
}

/**
 * Цена закрытия торговой сессии по инструменту
 * @see https://tinkoff.github.io/investAPI/marketdata/#instrumentclosepriceresponse
 */
export interface InstrumentClosePriceResponse {
  /** Figi инструмента */
  figi: string
  /** Uid инструмента */
  instrumentUid: string
  /** Цена закрытия торговой сессии */
  price: Quotation
  /**
   * Дата совершения торгов
   * @type `google.protobuf.Timestamp`
   */
  time: string
}

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
   * ```js
   * import { MarketDataService, CandleInterval } from '@tomasevich/tinkoff'
   *
   * const marketDataService = new MarketDataService('<TOKEN>', true)
   * const { candles } = await marketDataService.GetCandles({
   *  from: '2023-08-18T00:00:00:000Z',
   *  to: '2023-08-19T00:00:00:000Z',
   *  interval: CandleInterval.CANDLE_INTERVAL_HOUR,
   *  instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
   * })
   *
   * console.log(candles)
   * ```
   * @see https://tinkoff.github.io/investAPI/marketdata/#getcandles
   */
  public GetCandles(body: GetCandlesRequest): Promise<GetCandlesResponse> {
    return this.request('MarketDataService', 'GetCandles', body)
  }

  /**
   * Метод запроса цен последних сделок по инструментам
   * ```js
   * import { MarketDataService } from '@tomasevich/tinkoff'
   *
   * const marketDataService = new MarketDataService('<TOKEN>', true)
   * const { candles } = await marketDataService.GetLastPrices({
   *  instrumentId: ['6afa6f80-03a7-4d83-9cf0-c19d7d021f76']
   * })
   *
   * console.log(candles)
   * ```
   * @see https://tinkoff.github.io/investAPI/marketdata/#getlastprices
   */
  public GetLastPrices(
    body: GetLastPricesRequest
  ): Promise<GetLastPricesResponse> {
    return this.request('MarketDataService', 'GetLastPrices', body)
  }

  /**
   * Метод получения стакана по инструменту
   * ```js
   * import { MarketDataService } from '@tomasevich/tinkoff'
   *
   * const marketDataService = new MarketDataService('<TOKEN>', true)
   * const { candles } = await marketDataService.GetOrderBook({
   *  depth: 10,
   *  instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
   * })
   *
   * console.log(candles)
   * ```
   * @see https://tinkoff.github.io/investAPI/marketdata/#getorderbook
   */
  public GetOrderBook(
    body: GetOrderBookRequest
  ): Promise<GetOrderBookResponse> {
    return this.request('MarketDataService', 'GetOrderBook', body)
  }

  /**
   * Метод запроса статуса торгов по инструментам
   * ```js
   * import { MarketDataService } from '@tomasevich/tinkoff'
   *
   * const marketDataService = new MarketDataService('<TOKEN>', true)
   * const tradingStatus = await marketDataService.GetTradingStatus({
   *  instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
   * })
   *
   * console.log(tradingStatus)
   * ```
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
