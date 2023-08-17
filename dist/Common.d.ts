export declare enum SecurityTradingStatus {
    SECURITY_TRADING_STATUS_UNSPECIFIED = 0,
    SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING = 1,
    SECURITY_TRADING_STATUS_OPENING_PERIOD = 2,
    SECURITY_TRADING_STATUS_CLOSING_PERIOD = 3,
    SECURITY_TRADING_STATUS_BREAK_IN_TRADING = 4,
    SECURITY_TRADING_STATUS_NORMAL_TRADING = 5,
    SECURITY_TRADING_STATUS_CLOSING_AUCTION = 6,
    SECURITY_TRADING_STATUS_DARK_POOL_AUCTION = 7,
    SECURITY_TRADING_STATUS_DISCRETE_AUCTION = 8,
    SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD = 9,
    SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE = 10,
    SECURITY_TRADING_STATUS_SESSION_ASSIGNED = 11,
    SECURITY_TRADING_STATUS_SESSION_CLOSE = 12,
    SECURITY_TRADING_STATUS_SESSION_OPEN = 13,
    SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING = 14,
    SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING = 15,
    SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING = 16
}
export interface MoneyValue {
    currency: string;
    units: string;
    nano: number;
}
export interface Quotation {
    units: string;
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
     * @param token Токен приложения
     * @param isSandbox Флаг включения режима `Песочницы`
     */
    constructor(token: string, isSandbox: boolean);
    /**
     * Метод `HTTP` запроса к серверу **Tinkoff Invest API**
     * @param service Имя сервиса
     * @param method Имя метода
     * @param body Тело запроса
     */
    protected request(service: string, method: string, body: any): Promise<any>;
}
