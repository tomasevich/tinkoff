"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = exports.SecurityTradingStatus = void 0;
var SecurityTradingStatus;
(function (SecurityTradingStatus) {
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_UNSPECIFIED"] = 0] = "SECURITY_TRADING_STATUS_UNSPECIFIED";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING"] = 1] = "SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_OPENING_PERIOD"] = 2] = "SECURITY_TRADING_STATUS_OPENING_PERIOD";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_CLOSING_PERIOD"] = 3] = "SECURITY_TRADING_STATUS_CLOSING_PERIOD";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_BREAK_IN_TRADING"] = 4] = "SECURITY_TRADING_STATUS_BREAK_IN_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_NORMAL_TRADING"] = 5] = "SECURITY_TRADING_STATUS_NORMAL_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_CLOSING_AUCTION"] = 6] = "SECURITY_TRADING_STATUS_CLOSING_AUCTION";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DARK_POOL_AUCTION"] = 7] = "SECURITY_TRADING_STATUS_DARK_POOL_AUCTION";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DISCRETE_AUCTION"] = 8] = "SECURITY_TRADING_STATUS_DISCRETE_AUCTION";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD"] = 9] = "SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE"] = 10] = "SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_ASSIGNED"] = 11] = "SECURITY_TRADING_STATUS_SESSION_ASSIGNED";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_CLOSE"] = 12] = "SECURITY_TRADING_STATUS_SESSION_CLOSE";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_OPEN"] = 13] = "SECURITY_TRADING_STATUS_SESSION_OPEN";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING"] = 14] = "SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING"] = 15] = "SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING";
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING"] = 16] = "SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING";
})(SecurityTradingStatus || (exports.SecurityTradingStatus = SecurityTradingStatus = {}));
class Common {
    constructor(token, isSandbox) {
        this.token = token;
        this.isSandbox = isSandbox;
        this.production = 'https://invest-public-api.tinkoff.ru';
        this.development = 'https://sandbox-invest-public-api.tinkoff.ru';
    }
    request(service, method, body) {
        const server = this.isSandbox ? this.development : this.production;
        const contract = '/rest/tinkoff.public.invest.api.contract.v1.';
        const url = server + contract + service + '/' + method;
        const opt = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        };
        return fetch(url, opt);
    }
}
exports.Common = Common;
