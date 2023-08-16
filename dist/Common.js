"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
/**
 * Общий класс
 * 1. Позволяет сделать `HTTP` запрос к серверу **Tinkoff Invest API**
 * 2. Конвертировать `MoneyValue` и `Quotation` в обе стороны
 */
class Common {
    /**
     * Конструктор
     * @param token Токен приложения
     * @param isSandbox Флаг включения режима `Песочницы`
     */
    constructor(token, isSandbox) {
        this.token = token;
        this.isSandbox = isSandbox;
        /**
         * Продуктивный сервер
         */
        this.production = 'https://invest-public-api.tinkoff.ru';
        /**
         * Сервер песочницы
         */
        this.development = 'https://sandbox-invest-public-api.tinkoff.ru';
    }
    /**
     * Метод `HTTP` запроса к серверу **Tinkoff Invest API**
     * @param service Имя сервиса
     * @param method Имя метода
     * @param body Тело запроса
     */
    request(service, method, body) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const res = yield fetch(url, opt);
            return res.json();
        });
    }
}
exports.Common = Common;
