"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketDataService = void 0;
const Common_1 = require("./Common");
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
     * @see https://tinkoff.github.io/investAPI/marketdata/#getcandles
     */
    GetCandles(body) {
        return this.request('MarketDataService', 'GetCandles', body);
    }
    /**
     * Метод запроса цен последних сделок по инструментам
     * @see https://tinkoff.github.io/investAPI/marketdata/#getlastprices
     */
    GetLastPrices(body) {
        return this.request('MarketDataService', 'GetLastPrices', body);
    }
    /**
     * Метод получения стакана по инструменту
     * @see https://tinkoff.github.io/investAPI/marketdata/#getorderbook
     */
    GetOrderBook(body) {
        return this.request('MarketDataService', 'GetOrderBook', body);
    }
    /**
     * Метод запроса статуса торгов по инструментам
     * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatus
     */
    GetTradingStatus(body) {
        return this.request('MarketDataService', 'GetTradingStatus', body);
    }
    /**
     * Метод запроса статуса торгов по инструментам
     * @see https://tinkoff.github.io/investAPI/marketdata/#gettradingstatuses
     */
    GetTradingStatuses(body) {
        return this.request('MarketDataService', 'GetTradingStatuses', body);
    }
    /**
     * Метод запроса обезличенных сделок за последний час
     * @see https://tinkoff.github.io/investAPI/marketdata/#getlasttrades
     */
    GetLastTrades(body) {
        return this.request('MarketDataService', 'GetLastTrades', body);
    }
    /**
     * Метод запроса цен закрытия торговой сессии по инструментам
     * @see https://tinkoff.github.io/investAPI/marketdata/#getcloseprices
     */
    GetClosePrices(body) {
        return this.request('MarketDataService', 'GetClosePrices', body);
    }
}
exports.MarketDataService = MarketDataService;
