"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = exports.SecurityTradingStatus = void 0;
/**
 * Статус безопасной торговли
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
/** Общий класс для взаимодействия с сервисами Tinkoff Invest API */
class Common {
    /**
     * Конструктор
     * @param {string} token Токен приложения
     * @param {boolean} isSandbox Флаг включения режима `Песочницы`
     * @remarks Получить `Токен` можно по ссылке
     * @see https://tinkoff.github.io/investAPI/token
     */
    constructor(token, isSandbox) {
        this.token = token;
        this.isSandbox = isSandbox;
        /** Публичный адрес работы с Биржей */
        this.production = 'https://invest-public-api.tinkoff.ru';
        /** Адрес для работы в Песочнице */
        this.development = 'https://sandbox-invest-public-api.tinkoff.ru';
    }
    /**
     * Метод HTTPs запроса к Tinkoff Invest API
     * @param {Service} service Имя сервиса
     * @param {Method} method Метод сервиса
     * @param {any} body Тело запроса
     * @returns {Promise<any>}
     */
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
