"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketDataService = exports.CandleInterval = exports.TradeDirection = void 0;
const Common_1 = require("./Common");
/**
 * Направление сделки
 * @see https://tinkoff.github.io/investAPI/marketdata/#tradedirection
 */
var TradeDirection;
(function (TradeDirection) {
    /** Направление сделки не определено */
    TradeDirection[TradeDirection["TRADE_DIRECTION_UNSPECIFIED"] = 0] = "TRADE_DIRECTION_UNSPECIFIED";
    /** Покупка */
    TradeDirection[TradeDirection["TRADE_DIRECTION_BUY"] = 1] = "TRADE_DIRECTION_BUY";
    /** Продажа */
    TradeDirection[TradeDirection["TRADE_DIRECTION_SELL"] = 2] = "TRADE_DIRECTION_SELL";
})(TradeDirection || (exports.TradeDirection = TradeDirection = {}));
/**
 * Интервал свечей
 * @see https://tinkoff.github.io/investAPI/marketdata/#candleinterval
 */
var CandleInterval;
(function (CandleInterval) {
    /** Интервал не определён */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_UNSPECIFIED"] = 0] = "CANDLE_INTERVAL_UNSPECIFIED";
    /** от 1 минуты до 1 дня */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_1_MIN"] = 1] = "CANDLE_INTERVAL_1_MIN";
    /** от 5 минут до 1 дня */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_5_MIN"] = 2] = "CANDLE_INTERVAL_5_MIN";
    /** от 15 минут до 1 дня */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_15_MIN"] = 3] = "CANDLE_INTERVAL_15_MIN";
    /** от 1 часа до 1 недели */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_HOUR"] = 4] = "CANDLE_INTERVAL_HOUR";
    /** от 1 дня до 1 года */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_DAY"] = 5] = "CANDLE_INTERVAL_DAY";
    /** от 2 минут до 1 дня */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_2_MIN"] = 6] = "CANDLE_INTERVAL_2_MIN";
    /** от 3 минут до 1 дня */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_3_MIN"] = 7] = "CANDLE_INTERVAL_3_MIN";
    /** от 10 минут до 1 дня */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_10_MIN"] = 8] = "CANDLE_INTERVAL_10_MIN";
    /** от 30 минут до 2 дней */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_30_MIN"] = 9] = "CANDLE_INTERVAL_30_MIN";
    /** от 2 часов до 1 месяца */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_2_HOUR"] = 10] = "CANDLE_INTERVAL_2_HOUR";
    /** от 4 часов до 1 месяца */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_4_HOUR"] = 11] = "CANDLE_INTERVAL_4_HOUR";
    /** от 1 недели до 2 лет */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_WEEK"] = 12] = "CANDLE_INTERVAL_WEEK";
    /** от 1 месяца до 10 лет */
    CandleInterval[CandleInterval["CANDLE_INTERVAL_MONTH"] = 13] = "CANDLE_INTERVAL_MONTH";
})(CandleInterval || (exports.CandleInterval = CandleInterval = {}));
/**
 * Сервис получения биржевой информации:
 * 1. свечи;
 * 2. стаканы;
 * 3. торговые статусы;
 * 4. лента сделок.
 * @see https://tinkoff.github.io/investAPI/marketdata/#marketdataservice
 */
class MarketDataService extends Common_1.Common {
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
    GetCandles(body) {
        return this.request('MarketDataService', 'GetCandles', body);
    }
    /**
     * Метод запроса цен последних сделок по инструментам
     * ```js
     * import { MarketDataService } from '@tomasevich/tinkoff'
     *
     * const marketDataService = new MarketDataService('<TOKEN>', true)
     * const { lastPrices } = await marketDataService.GetLastPrices({
     *  instrumentId: ['6afa6f80-03a7-4d83-9cf0-c19d7d021f76']
     * })
     *
     * console.log(lastPrices)
     * ```
     * @see https://tinkoff.github.io/investAPI/marketdata/#getlastprices
     */
    GetLastPrices(body) {
        return this.request('MarketDataService', 'GetLastPrices', body);
    }
    /**
     * Метод получения стакана по инструменту
     * ```js
     * import { MarketDataService } from '@tomasevich/tinkoff'
     *
     * const marketDataService = new MarketDataService('<TOKEN>', true)
     * const orderBook = await marketDataService.GetOrderBook({
     *  depth: 10,
     *  instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
     * })
     *
     * console.log(orderBook)
     * ```
     * @see https://tinkoff.github.io/investAPI/marketdata/#getorderbook
     */
    GetOrderBook(body) {
        return this.request('MarketDataService', 'GetOrderBook', body);
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
    GetTradingStatus(body) {
        return this.request('MarketDataService', 'GetTradingStatus', body);
    }
    /**
     * Метод запроса статуса торгов по инструментам
     * ```js
     * import { MarketDataService } from '@tomasevich/tinkoff'
     *
     * const marketDataService = new MarketDataService('<TOKEN>', true)
     * const { tradingStatuses } = await marketDataService.GetTradingStatuses({
     *  instrumentId: ['6afa6f80-03a7-4d83-9cf0-c19d7d021f76']
     * })
     *
     * console.log(tradingStatuses)
     * ```
     * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatuses
     */
    GetTradingStatuses(body) {
        return this.request('MarketDataService', 'GetTradingStatuses', body);
    }
    /**
     * Метод запроса обезличенных сделок за последний час
     * ```js
     * import { MarketDataService } from '@tomasevich/tinkoff'
     *
     * const marketDataService = new MarketDataService('<TOKEN>', true)
     * const { trades } = await marketDataService.GetLastTrades({
     *  from: '2023-08-18T00:00:00:000Z',
     *  to: '2023-08-19T00:00:00:000Z',
     *  instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
     * })
     *
     * console.log(trades)
     * ```
     * @see https://tinkoff.github.io/investAPI/marketdata/#getlasttrades
     */
    GetLastTrades(body) {
        return this.request('MarketDataService', 'GetLastTrades', body);
    }
    /**
     * Метод запроса цен закрытия торговой сессии по инструментам
     * ```js
     * import { MarketDataService } from '@tomasevich/tinkoff'
     *
     * const marketDataService = new MarketDataService('<TOKEN>', true)
     * const { tradingStatuses } = await marketDataService.GetClosePrices({
     *  instruments: [{ instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76' }]
     * })
     *
     * console.log(tradingStatuses)
     * ```
     * @see https://tinkoff.github.io/investAPI/marketdata/#getcloseprices
     */
    GetClosePrices(body) {
        return this.request('MarketDataService', 'GetClosePrices', body);
    }
}
exports.MarketDataService = MarketDataService;
