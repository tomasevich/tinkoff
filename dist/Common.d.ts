/** Список Сервисов */
export type Service = 'InstrumentsService' | 'MarketDataService' | 'OperationsService' | 'OrdersService' | 'SandboxService' | 'StopOrdersService' | 'UsersService';
/** Список методов */
export type Method = 'GetOrders' | 'GetSandboxOrders' | 'OpenSandboxAccount' | 'CloseSandboxAccount' | 'GetSandboxAccounts' | 'PostSandboxOrder';
/** Статус безопасной торговли */
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
 *
 * @see https://tinkoff.github.io/investAPI/common/#moneyvalue
 */
export interface MoneyValue {
    /** Строковый ISO-код валюты */
    currency: string;
    /**
     * Целая часть суммы, может быть отрицательным числом
     *
     * @remarks Число в формате `int64`
     */
    units: string;
    /**
     * Дробная часть суммы, может быть отрицательным числом
     *
     * @remarks Число в формате `int32`
     */
    nano: number;
}
/** Котировка - денежная сумма без указания валюты */
export interface Quotation {
    /**
     * Целая часть суммы, может быть отрицательным числом
     *
     * @remarks Число в формате `int64`
     */
    units: string;
    /**
     * Дробная часть суммы, может быть отрицательным числом
     *
     * @remarks Число в формате `int32`
     */
    nano: number;
}
/** Общий класс для взаимодействия с сервисами Tinkoff Invest API */
export declare class Common {
    private token;
    private isSandbox;
    /** Публичный адрес работы с Биржей */
    private production;
    /** Адрес для работы в Песочнице */
    private development;
    /**
     * Конструктор
     *
     * @param {string} token Токен приложения
     * @param {boolean} isSandbox Флаг включения режима "Песочницы"
     */
    constructor(token: string, isSandbox: boolean);
    /**
     * Метод HTTPs запроса к Tinkoff Invest API
     *
     * @param {Service} service Имя сервиса
     * @param {Method} method Метод сервиса
     * @param {any} body Тело запроса
     *
     * @returns {Promise<any>}
     */
    protected request(service: Service, method: Method, body: any): Promise<any>;
}
