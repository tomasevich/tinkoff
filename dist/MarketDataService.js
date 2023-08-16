"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketDataService = void 0;
const Common_1 = require("./Common");
class MarketDataService extends Common_1.Common {
    GetCandles(body) {
        return this.request('MarketDataService', 'GetCandles', body);
    }
    GetLastPrices(body) {
        return this.request('MarketDataService', 'GetLastPrices', body);
    }
    GetOrderBook(body) {
        return this.request('MarketDataService', 'GetOrderBook', body);
    }
    GetTradingStatus(body) {
        return this.request('MarketDataService', 'GetTradingStatus', body);
    }
    GetTradingStatuses(body) {
        return this.request('MarketDataService', 'GetTradingStatuses', body);
    }
    GetLastTrades(body) {
        return this.request('MarketDataService', 'GetLastTrades', body);
    }
    GetClosePrices(body) {
        return this.request('MarketDataService', 'GetClosePrices', body);
    }
}
exports.MarketDataService = MarketDataService;
