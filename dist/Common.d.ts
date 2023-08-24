/**
 * Торговый статус
 * @see https://tinkoff.github.io/investAPI/common/#securitytradingstatus
 */
export declare enum SecurityTradingStatus {
    /** Торговый статус не определён */
    SECURITY_TRADING_STATUS_UNSPECIFIED = 0,
    /** Недоступен для торгов */
    SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING = 1,
    /** Период открытия торгов */
    SECURITY_TRADING_STATUS_OPENING_PERIOD = 2,
    /** Период закрытия торгов */
    SECURITY_TRADING_STATUS_CLOSING_PERIOD = 3,
    /** Перерыв в торговле */
    SECURITY_TRADING_STATUS_BREAK_IN_TRADING = 4,
    /** Нормальная торговля */
    SECURITY_TRADING_STATUS_NORMAL_TRADING = 5,
    /** Аукцион закрытия */
    SECURITY_TRADING_STATUS_CLOSING_AUCTION = 6,
    /** Аукцион крупных пакетов */
    SECURITY_TRADING_STATUS_DARK_POOL_AUCTION = 7,
    /** Дискретный аукцион */
    SECURITY_TRADING_STATUS_DISCRETE_AUCTION = 8,
    /** Аукцион открытия */
    SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD = 9,
    /** Период торгов по цене аукциона закрытия */
    SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE = 10,
    /** Сессия назначена */
    SECURITY_TRADING_STATUS_SESSION_ASSIGNED = 11,
    /** Сессия закрыта */
    SECURITY_TRADING_STATUS_SESSION_CLOSE = 12,
    /** Сессия открыта */
    SECURITY_TRADING_STATUS_SESSION_OPEN = 13,
    /** Доступна торговля в режиме внутренней ликвидности брокера */
    SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING = 14,
    /** Перерыв торговли в режиме внутренней ликвидности брокера */
    SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING = 15,
    /** Недоступна торговля в режиме внутренней ликвидности брокера */
    SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING = 16
}
/**
 * Денежная сумма в определенной валюте
 * @see https://tinkoff.github.io/investAPI/common/#moneyvalue
 */
export interface MoneyValue {
    /** Строковый ISO-код валюты */
    currency: string;
    /**
     * Целая часть суммы, может быть отрицательным числом
     * @remarks `int64`
     */
    units: string;
    /**
     * Дробная часть суммы, может быть отрицательным числом
     * @remarks `int32`
     */
    nano: number;
}
/**
 * Котировка - денежная сумма без указания валюты
 * @see https://tinkoff.github.io/investAPI/common/#quotation
 */
export interface Quotation {
    /**
     * Целая часть суммы, может быть отрицательным числом
     * @remarks `int64`
     */
    units: string;
    /**
     * Дробная часть суммы, может быть отрицательным числом
     * @remarks `int32`
     */
    nano: number;
}
/**
 * Общий класс
 * 1. Позволяет сделать `HTTP` запрос к серверу **Tinkoff Invest API**
 * 2. Конвертировать `MoneyValue` и `Quotation` в обе стороны
 */
export declare class Common {
    private token;
    private isSandbox;
    /**
     * Продуктивный сервер
     */
    private production;
    /**
     * Сервер песочницы
     */
    private development;
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
    constructor(token: string, isSandbox: boolean);
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
    protected request(service: string, operation: string, body: any): Promise<any>;
    /**
     * Статичный метод конвертирования денежной суммы в определенной валюте в строку
     * ```js
     * import { Common } from '@tomasevich/tinkoff'
     *
     * console.log(Common.MoneyValueToString({ units: '114', nano: 250000000, currency: 'rub' })) // '114,25 rub'
     * console.log(Common.MoneyValueToString({ units: '-200', nano: -200000000, currency: 'usd' })) // '-200,20 usd'
     * console.log(Common.MoneyValueToString({ units: '-0', nano: -10000000, currency: 'eur' })) // '-0,01 eur'
     * ```
     */
    static MoneyValueToString(moneyValue: MoneyValue): string;
    /**
     * Статичный метод конвертирования котировки в строку
     * ```js
     * import { Common } from '@tomasevich/tinkoff'
     *
     * console.log(Common.QuotationToString({ units: '114', nano: 250000000 })) // '114,25'
     * console.log(Common.QuotationToString({ units: '-200', nano: -200000000 })) // '-200,20'
     * console.log(Common.QuotationToString({ units: '-0', nano: -10000000 })) // '-0,01'
     * ```
     */
    static QuotationToString(quotation: Quotation): string;
    /**
     * Статичный метод конвертирования строки в денежную сумму в определенной валюте
     * ```js
     * import { Common } from '@tomasevich/tinkoff'
     *
     * console.log(Common.StringToMoneyValue('114,25 rub')) // { units: '114', nano: 250000000, currency: 'rub' }
     * console.log(Common.StringToMoneyValue('-200,20 usd')) // { units: '-200', nano: -200000000, currency: 'usd' }
     * console.log(Common.StringToMoneyValue('-0,01 eur')) // { units: '-0', nano: -10000000, currency: 'eur' }
     * ```
     */
    static StringToMoneyValue(moneyValue: string): MoneyValue;
    /**
     * Статичный метод конвертирования строки в котировку
     * ```js
     * import { Common } from '@tomasevich/tinkoff'
     *
     * console.log(Common.StringToQuotation('114,25')) // { units: '114', nano: 250000000 }
     * console.log(Common.StringToQuotation('-200,20')) // { units: '-200', nano: -200000000 }
     * console.log(Common.StringToQuotation('-0,01')) // { units: '-0', nano: -10000000 }
     * ```
     */
    static StringToQuotation(quotation: string): Quotation;
}
