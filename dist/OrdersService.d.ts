import { Common, MoneyValue } from './Common';
/**
 * Направление операции
 *
 * @see https://tinkoff.github.io/investAPI/orders/#orderdirection
 */
export declare enum OrderDirection {
    /**
     * Значение не указано
     */
    ORDER_DIRECTION_UNSPECIFIED = 0,
    /**
     * Покупка
     */
    ORDER_DIRECTION_BUY = 1,
    /**
     * Продажа
     */
    ORDER_DIRECTION_SELL = 2
}
/**
 * Сделки в рамках торгового поручения
 *
 * @see https://tinkoff.github.io/investAPI/orders/#orderstage
 */
export interface OrderStage {
    /**
     * Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента
     */
    price: MoneyValue;
    /**
     * Количество лотов
     */
    quantity: string;
    /**
     * Идентификатор сделки
     */
    tradeId: string;
}
/**
 * Тип заявки
 *
 * @see https://tinkoff.github.io/investAPI/orders/#ordertype
 */
export declare enum OrderType {
    /**
     * Значение не указано
     */
    ORDER_TYPE_UNSPECIFIED = 0,
    /**
     * Лимитная
     */
    ORDER_TYPE_LIMIT = 1,
    /**
     * Рыночная
     */
    ORDER_TYPE_MARKET = 2,
    /**
     * Лучшая цена
     */
    ORDER_TYPE_BESTPRICE = 3
}
/**
 * Текущий статус заявки (поручения)
 *
 * @see https://tinkoff.github.io/investAPI/orders/#orderexecutionreportstatus
 */
export declare enum OrderExecutionReportStatus {
    /**
     * none
     */
    EXECUTION_REPORT_STATUS_UNSPECIFIED = 0,
    /**
     * Исполнена
     */
    EXECUTION_REPORT_STATUS_FILL = 1,
    /**
     * Отклонена
     */
    EXECUTION_REPORT_STATUS_REJECTED = 2,
    /**
     * Отменена пользователем
     */
    EXECUTION_REPORT_STATUS_CANCELLED = 3,
    /**
     * Новая
     */
    EXECUTION_REPORT_STATUS_NEW = 4,
    /**
     * Частично исполнена
     */
    EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5
}
/**
 * Информация о торговом поручении
 *
 * @see https://tinkoff.github.io/investAPI/orders/#orderstate
 */
export interface OrderState {
    /**
     * Биржевой идентификатор заявки
     */
    orderId: string;
    /**
     * Текущий статус заявки (поручения)
     *
     * @default EXECUTION_REPORT_STATUS_UNSPECIFIED
     */
    executionReportStatus: OrderExecutionReportStatus;
    /**
     * Запрошено лотов
     *
     * @remarks Число в формате `int64`
     */
    lotsRequested: string;
    /**
     * Исполнено лотов
     *
     * @remarks Число в формате `int64`
     */
    lotsExecuted: string;
    /**
     * Начальная цена заявки. Произведение количества запрошенных лотов на цену
     */
    initialOrderPrice: MoneyValue;
    /**
     * Исполненная цена заявки. Произведение средней цены покупки на количество лотов
     */
    executedOrderPrice: MoneyValue;
    /**
     * Итоговая стоимость заявки, включающая все комиссии
     */
    totalOrderAmount: MoneyValue;
    /**
     * Средняя цена позиции по сделке
     */
    averagePositionPrice: MoneyValue;
    /**
     * Начальная комиссия. Комиссия, рассчитанная на момент подачи заявки
     */
    initialCommission: MoneyValue;
    /**
     * Фактическая комиссия по итогам исполнения заявки
     */
    executedCommission: MoneyValue;
    /**
     * Figi-идентификатор инструмента
     */
    figi: string;
    /**
     * Направление операции
     *
     * @default ORDER_DIRECTION_UNSPECIFIED
     */
    direction: OrderDirection;
    /**
     * Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента
     */
    initialSecurityPrice: MoneyValue;
    /**
     * Стадии выполнения заявки
     */
    stages: OrderStage[];
    /**
     * Сервисная комиссия
     */
    serviceCommission: MoneyValue;
    /**
     * Валюта заявки
     */
    currency: string;
    /**
     * Тип заявки
     *
     * @default ORDER_TYPE_UNSPECIFIED
     */
    orderType: OrderType;
    /**
     * Дата и время выставления заявки в часовом поясе UTC
     */
    orderDate: string;
    /**
     * UID идентификатор инструмента
     */
    instrumentUid: string;
    /**
     * Идентификатор ключа идемпотентности, переданный клиентом, в формате UID. Максимальная длина 36 символов
     */
    orderRequestId: string;
}
/**
 * Запрос получения списка активных торговых поручений
 *
 * @see https://tinkoff.github.io/investAPI/orders/#getordersrequest
 */
export interface GetOrdersRequest {
    /**
     * Номер счёта
     */
    accountId: string;
}
/**
 * Список активных торговых поручений
 *
 * @see https://tinkoff.github.io/investAPI/orders/#getordersresponse
 */
export interface GetOrdersResponse {
    /**
     * Массив объектов OrderState
     */
    orders: OrderState[];
}
/**
 * Интерфейс сервиса Ордеров
 */
export interface Orders {
    /**
     * Метод получения списка активных заявок по счёту
     *
     * @param {GetOrdersRequest} body Тело запроса
     *
     * @returns Возвращает список ордеров
     */
    GetOrders: (body: GetOrdersRequest) => Promise<GetOrdersResponse>;
}
/**
 * Сервис предназначен для работы с торговыми поручениями:
 * 1. выставление;
 * 2. отмена;
 * 3. получение статуса;
 * 4. расчёт полной стоимости;
 * 5. получение списка заявок.
 *
 * @see https://tinkoff.github.io/investAPI/orders/#getorders
 */
export declare class OrdersService extends Common implements Orders {
    GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
}
