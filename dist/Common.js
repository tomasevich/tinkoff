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
/**
 * Торговый статус
 * @see https://tinkoff.github.io/investAPI/common/#securitytradingstatus
 */
var SecurityTradingStatus;
(function (SecurityTradingStatus) {
    /** Торговый статус не определён */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_UNSPECIFIED"] = 0] = "SECURITY_TRADING_STATUS_UNSPECIFIED";
    /** Недоступен для торгов */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING"] = 1] = "SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING";
    /** Период открытия торгов */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_OPENING_PERIOD"] = 2] = "SECURITY_TRADING_STATUS_OPENING_PERIOD";
    /** Период закрытия торгов */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_CLOSING_PERIOD"] = 3] = "SECURITY_TRADING_STATUS_CLOSING_PERIOD";
    /** Перерыв в торговле */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_BREAK_IN_TRADING"] = 4] = "SECURITY_TRADING_STATUS_BREAK_IN_TRADING";
    /** Нормальная торговля */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_NORMAL_TRADING"] = 5] = "SECURITY_TRADING_STATUS_NORMAL_TRADING";
    /** Аукцион закрытия */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_CLOSING_AUCTION"] = 6] = "SECURITY_TRADING_STATUS_CLOSING_AUCTION";
    /** Аукцион крупных пакетов */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DARK_POOL_AUCTION"] = 7] = "SECURITY_TRADING_STATUS_DARK_POOL_AUCTION";
    /** Дискретный аукцион */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DISCRETE_AUCTION"] = 8] = "SECURITY_TRADING_STATUS_DISCRETE_AUCTION";
    /** Аукцион открытия */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD"] = 9] = "SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD";
    /** Период торгов по цене аукциона закрытия */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE"] = 10] = "SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE";
    /** Сессия назначена */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_ASSIGNED"] = 11] = "SECURITY_TRADING_STATUS_SESSION_ASSIGNED";
    /** Сессия закрыта */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_CLOSE"] = 12] = "SECURITY_TRADING_STATUS_SESSION_CLOSE";
    /** Сессия открыта */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_SESSION_OPEN"] = 13] = "SECURITY_TRADING_STATUS_SESSION_OPEN";
    /** Доступна торговля в режиме внутренней ликвидности брокера */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING"] = 14] = "SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING";
    /** Перерыв торговли в режиме внутренней ликвидности брокера */
    SecurityTradingStatus[SecurityTradingStatus["SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING"] = 15] = "SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING";
    /** Недоступна торговля в режиме внутренней ликвидности брокера */
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
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * // Для работы с реальными данными
     * const realServer = new SandboxService('<REAL_TOKEN>', false)
     *
     * // Для работы с данными в тестовом режиме
     * const sandboxServer = new SandboxService('<SANDBOX_TOKEN>', true)
     * ```
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
     * ```js
     * import { Common } from '@tomasevich/tinkoff'
     *
     * class Application extends Common {
     *  public SandboxService(body) {
     *    return this.request('SandboxService', 'GetSandboxOrders', body)
     *  }
     * }
     *
     * const app = new Application('<TOKEN>', true)
     * const { orders } = await app.SandboxService({
     *  accountId: '<ACCOUNT_ID>'
     * })
     *
     * console.log(orders)
     * ```
     * @param service Имя сервиса
     * @param operation Имя операции
     * @param body Тело запроса
     */
    request(service, operation, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const server = this.isSandbox ? this.development : this.production;
            const contract = '/rest/tinkoff.public.invest.api.contract.v1.';
            const url = server + contract + service + '/' + operation;
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
    /**
     * Статичный метод конвертирования денежной суммы в определенной валюте в строку
     * ```js
     * import { Common } from '@tomasevich/tinkoff'
     *
     * console.log(Common.MoneyValueToString({ units: '114', nano: 250000000, currency: 'rub' })) // '114.25 rub'
     * console.log(Common.MoneyValueToString({ units: '-200', nano: -200000000, currency: 'usd' })) // '-200.20 usd'
     * console.log(Common.MoneyValueToString({ units: '-0', nano: -10000000, currency: 'eur' })) // '-0.01 eur'
     * ```
     */
    static MoneyValueToString(moneyValue) {
        return `${Common.QuotationToString(moneyValue)} ${moneyValue.currency}`;
    }
    /**
     * Статичный метод конвертирования котировки в строку
     * ```js
     * import { Common } from '@tomasevich/tinkoff'
     *
     * console.log(Common.QuotationToString({ units: '114', nano: 250000000 })) // '114.25'
     * console.log(Common.QuotationToString({ units: '-200', nano: -200000000 })) // '-200.20'
     * console.log(Common.QuotationToString({ units: '-0', nano: -10000000 })) // '-0.01'
     * ```
     */
    static QuotationToString(quotation) {
        const nano = String(Math.abs(quotation.nano) / 1000000000).split('.')[1];
        return `${quotation.units}.${nano}`;
    }
    /**
     * Статичный метод конвертирования строки в денежную сумму в определенной валюте
     * ```js
     * import { Common } from '@tomasevich/tinkoff'
     *
     * console.log(Common.StringToMoneyValue('114.25 rub')) // { units: '114', nano: 250000000, currency: 'rub' }
     * console.log(Common.StringToMoneyValue('-200.20 usd')) // { units: '-200', nano: -200000000, currency: 'usd' }
     * console.log(Common.StringToMoneyValue('-0.01 eur')) // { units: '-0', nano: -10000000, currency: 'eur' }
     * ```
     */
    static StringToMoneyValue(moneyValue) {
        const price = moneyValue.split(' ');
        const quotation = price[0];
        const currency = price[1];
        return Object.assign(Object.assign({}, Common.StringToQuotation(quotation)), { currency });
    }
    /**
     * Статичный метод конвертирования строки в котировку
     * ```js
     * import { Common } from '@tomasevich/tinkoff'
     *
     * console.log(Common.StringToQuotation('114.25')) // { units: '114', nano: 250000000 }
     * console.log(Common.StringToQuotation('-200.20')) // { units: '-200', nano: -200000000 }
     * console.log(Common.StringToQuotation('-0.01')) // { units: '-0', nano: -10000000 }
     * ```
     */
    static StringToQuotation(quotation) {
        const number = Number(quotation.replace(',', '.'));
        const units = number.toFixed(0);
        const nano = Number(Math.round((number - Number(units)) * 1000000000));
        return { units, nano };
    }
}
exports.Common = Common;
