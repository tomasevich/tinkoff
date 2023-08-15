import { Common, MoneyValue, Quotation } from './Common';
/**
 * Направление операции
 *
 * @see https://tinkoff.github.io/investAPI/orders/#orderdirection
 */
export declare enum OrderDirection {
    /** Значение не указано */
    ORDER_DIRECTION_UNSPECIFIED = 0,
    /** Покупка */
    ORDER_DIRECTION_BUY = 1,
    /** Продажа */
    ORDER_DIRECTION_SELL = 2
}
/**
 * Сделки в рамках торгового поручения
 *
 * @see https://tinkoff.github.io/investAPI/orders/#orderstage
 */
export interface OrderStage {
    /**
     * Цена за 1 инструмент
     *
     * @remarks Для получения стоимости лота требуется умножить на лотность инструмента
     */
    price: MoneyValue;
    /** Количество лотов */
    quantity: string;
    /** Идентификатор сделки */
    tradeId: string;
}
/**
 * Тип заявки
 *
 * @see https://tinkoff.github.io/investAPI/orders/#ordertype
 */
export declare enum OrderType {
    /** Значение не указано */
    ORDER_TYPE_UNSPECIFIED = 0,
    /** Лимитная */
    ORDER_TYPE_LIMIT = 1,
    /** Рыночная */
    ORDER_TYPE_MARKET = 2,
    /** Лучшая цена */
    ORDER_TYPE_BESTPRICE = 3
}
/**
 * Текущий статус заявки (поручения)
 *
 * @see https://tinkoff.github.io/investAPI/orders/#orderexecutionreportstatus
 */
export declare enum OrderExecutionReportStatus {
    /** none */
    EXECUTION_REPORT_STATUS_UNSPECIFIED = 0,
    /** Исполнена */
    EXECUTION_REPORT_STATUS_FILL = 1,
    /** Отклонена */
    EXECUTION_REPORT_STATUS_REJECTED = 2,
    /** Отменена пользователем */
    EXECUTION_REPORT_STATUS_CANCELLED = 3,
    /** Новая */
    EXECUTION_REPORT_STATUS_NEW = 4,
    /** Частично исполнена */
    EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5
}
/**
 * Информация о торговом поручении
 *
 * @see https://tinkoff.github.io/investAPI/orders/#orderstate
 */
export interface OrderState {
    /** Биржевой идентификатор заявки */
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
     * Начальная цена заявки
     *
     * @remarks Произведение количества запрошенных лотов на цену
     */
    initialOrderPrice: MoneyValue;
    /**
     * Исполненная цена заявки
     *
     * @remarks Произведение средней цены покупки на количество лотов
     */
    executedOrderPrice: MoneyValue;
    /** Итоговая стоимость заявки, включающая все комиссии */
    totalOrderAmount: MoneyValue;
    /** Средняя цена позиции по сделке */
    averagePositionPrice: MoneyValue;
    /**
     * Начальная комиссия
     *
     * @remarks Комиссия, рассчитанная на момент подачи заявки
     */
    initialCommission: MoneyValue;
    /** Фактическая комиссия по итогам исполнения заявки */
    executedCommission: MoneyValue;
    /** Figi-идентификатор инструмента */
    figi: string;
    /**
     * Направление операции
     *
     * @default ORDER_DIRECTION_UNSPECIFIED
     */
    direction: OrderDirection;
    /**
     * Начальная цена за 1 инструмент
     *
     * @remarks Для получения стоимости лота требуется умножить на лотность инструмента
     */
    initialSecurityPrice: MoneyValue;
    /** Стадии выполнения заявки */
    stages: OrderStage[];
    /** Сервисная комиссия */
    serviceCommission: MoneyValue;
    /** Валюта заявки */
    currency: string;
    /**
     * Тип заявки
     *
     * @default ORDER_TYPE_UNSPECIFIED
     */
    orderType: OrderType;
    /** Дата и время выставления заявки в часовом поясе UTC */
    orderDate: string;
    /** UID идентификатор инструмента */
    instrumentUid: string;
    /**
     * Идентификатор ключа идемпотентности, переданный клиентом, в формате UID
     *
     * @remarks Максимальная длина 36 символов
     */
    orderRequestId: string;
}
/**
 * Запрос выставления торгового поручения
 *
 * @see https://tinkoff.github.io/investAPI/orders/#postorderrequest
 */
export interface PostOrderRequest {
    /**
     * Figi-идентификатор инструмента
     *
     * @deprecated Необходимо использовать `instrumentId`
     */
    figi: string;
    /**
     * Количество лотов
     *
     * @remarks Число в формате `int64`
     */
    quantity: string;
    /**
     * Цена за 1 инструмент
     *
     * @remarks Для получения стоимости лота требуется умножить на лотность инструмента. Игнорируется для рыночных поручений
     */
    price: Quotation;
    /** Направление операции */
    direction: OrderDirection;
    /** Номер счёта */
    accountId: string;
    /** Тип заявки */
    orderType: OrderType;
    /**
     * Идентификатор запроса выставления поручения для целей идемпотентности в формате UID
     *
     * @remarks Максимальная длина 36 символов
     */
    orderId: string;
    /** Идентификатор инструмента, принимает значения `Figi` или `InstrumentUid` */
    instrumentId: string;
}
/**
 * Информация о выставлении поручения
 *
 * @see https://tinkoff.github.io/investAPI/orders/#postorderresponse
 */
export interface PostOrderResponse {
    /** Биржевой идентификатор заявки */
    orderId: string;
    /** Текущий статус заявки */
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
     * Начальная цена заявки
     *
     * @remarks Произведение количества запрошенных лотов на цену
     */
    initialOrderPrice: MoneyValue;
    /** Исполненная средняя цена одного инструмента в заявке */
    executedOrderPrice: MoneyValue;
    /** Итоговая стоимость заявки, включающая все комиссии */
    totalOrderAmount: MoneyValue;
    /** Начальная комиссия. Комиссия рассчитанная при выставлении заявки */
    initialCommission: MoneyValue;
    /** Фактическая комиссия по итогам исполнения заявки */
    executedCommission: MoneyValue;
    /**
     * Значение НКД (накопленного купонного дохода) на дату
     *
     * @remarks Подробнее: НКД при выставлении торговых поручени
     */
    aciValue: MoneyValue;
    /** Figi-идентификатор инструмента */
    figi: string;
    /** Направление сделки */
    direction: OrderDirection;
    /**
     * Начальная цена за 1 инструмент
     *
     * @remarks Для получения стоимости лота требуется умножить на лотность инструмента
     */
    initialSecurityPrice: MoneyValue;
    /** Тип заявки */
    orderType: OrderType;
    /** Дополнительные данные об исполнении заявки */
    message: string;
    /** Начальная цена заявки в пунктах (для фьючерсов) */
    initialOrderPricePt: Quotation;
    /** UID идентификатор инструмента */
    instrumentUid: string;
}
/**
 * Запрос получения списка активных торговых поручений
 *
 * @see https://tinkoff.github.io/investAPI/orders/#getordersrequest
 */
export interface GetOrdersRequest {
    /** Номер счёта */
    accountId: string;
}
/**
 * Список активных торговых поручений
 *
 * @see https://tinkoff.github.io/investAPI/orders/#getordersresponse
 */
export interface GetOrdersResponse {
    /** Массив объектов OrderState */
    orders: OrderState[];
}
/**
 * Интерфейс сервиса Ордеров
 */
export interface Orders {
    /**
     * Запрос выставления торгового поручения
     *
     * @param {PostOrderRequest} body Тело запроса
     *
     * @returns Информация о выставлении поручения
     *
     * @see https://tinkoff.github.io/investAPI/orders/#postorder
     *
     * @example
     * ```js
     * const ordersService = new OrdersService('<TOKEN>', false)
     * ordersService.PostOrder({})
     *   .then(response => response.json())
     *   .then(data => console.log(data))
     * ```
     */
    PostOrder: (body: PostOrderRequest) => Promise<PostOrderResponse>;
    /**
     * Метод получения списка активных заявок по счёту
     *
     * @param {GetOrdersRequest} body Тело запроса
     *
     * @returns Возвращает список ордеров
     *
     * @see https://tinkoff.github.io/investAPI/orders/#getorders
     *
     * @example
     * ```js
     * const ordersService = new OrdersService('<TOKEN>', false)
     * ordersService.GetOrders({ accountId: '<ACCOUNT_ID>' })
     *   .then(response => response.json())
     *   .then(data => console.log(data))
     * ```
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
 * @see https://tinkoff.github.io/investAPI/orders/#ordersservice
 */
export declare class OrdersService extends Common implements Orders {
    PostOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
}
