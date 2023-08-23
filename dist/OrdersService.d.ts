import { Common, MoneyValue, Quotation } from './';
/**
 * Направление операции
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
 * Тип заявки
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
 * Тип цены
 * @see https://tinkoff.github.io/investAPI/orders/#pricetype
 */
export declare enum PriceType {
    /** Значение не определено */
    PRICE_TYPE_UNSPECIFIED = 0,
    /** Цена в пунктах (только для фьючерсов и облигаций) */
    PRICE_TYPE_POINT = 1,
    /** Цена в валюте расчётов по инструменту */
    PRICE_TYPE_CURRENCY = 2
}
/**
 * Сделки в рамках торгового поручения
 * @see https://tinkoff.github.io/investAPI/orders/#orderstage
 */
export interface OrderStage {
    /**
     * Цена за 1 инструмент
     * @description Для получения стоимости лота требуется умножить на лотность инструмента
     */
    price: MoneyValue;
    /**
     * Количество лотов
     * @remarks `int64`
     */
    quantity: string;
    /** Идентификатор сделки */
    tradeId: string;
}
/**
 * Запрос выставления торгового поручения
 * @see https://tinkoff.github.io/investAPI/orders/#postorderrequest
 */
export interface PostOrderRequest {
    /**
     * Количество лотов
     * @remarks `int64`
     */
    quantity: string;
    /**
     * Цена за 1 инструмент
     * @description Для получения стоимости лота требуется умножить на лотность инструмента. Игнорируется для рыночных поручений
     */
    price: Quotation;
    /** Направление операции */
    direction: OrderDirection;
    /** Номер счёта */
    accountId: string;
    /** Тип заявки */
    orderType: OrderType;
    /**
     * Идентификатор запроса выставления поручения для целей идемпотентности в формате `UID`
     * @description Максимальная длина 36 символов
     */
    orderId?: string;
    /** Идентификатор инструмента, принимает значения `Figi` или `InstrumentUid` */
    instrumentId: string;
    /**
     * Figi-идентификатор инструмента
     * @deprecated Необходимо использовать `instrumentId`
     */
    figi?: string;
}
/**
 * Информация о выставлении поручения
 * @see https://tinkoff.github.io/investAPI/orders/#postorderresponse
 */
export interface PostOrderResponse {
    /** Биржевой идентификатор заявки */
    orderId: string;
    /** Текущий статус заявки */
    executionReportStatus: OrderExecutionReportStatus;
    /**
     * Запрошено лотов
     * @remarks `int64`
     */
    lotsRequested: string;
    /**
     * Исполнено лотов
     * @remarks `int64`
     */
    lotsExecuted: string;
    /**
     * Начальная цена заявки
     * @description Произведение количества запрошенных лотов на цену
     */
    initialOrderPrice: MoneyValue;
    /** Исполненная средняя цена одного инструмента в заявке */
    executedOrderPrice: MoneyValue;
    /** Итоговая стоимость заявки, включающая все комиссии */
    totalOrderAmount: MoneyValue;
    /**
     * Начальная комиссия
     * @description Комиссия рассчитанная при выставлении заявки
     */
    initialCommission: MoneyValue;
    /** Фактическая комиссия по итогам исполнения заявки */
    executedCommission: MoneyValue;
    /**
     * Значение НКД (накопленного купонного дохода) на дату
     * @description Подробнее: НКД при выставлении торговых поручений
     */
    aciValue: MoneyValue;
    /** Figi-идентификатор инструмента */
    figi: string;
    /** Направление сделки */
    direction: OrderDirection;
    /**
     * Начальная цена за 1 инструмент
     * @description Для получения стоимости лота требуется умножить на лотность инструмента
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
 * Запрос отмены торгового поручения
 * @see https://tinkoff.github.io/investAPI/orders/#cancelorderrequest
 */
export interface CancelOrderRequest {
    /** Номер счёта */
    accountId: string;
    /** Идентификатор заявки */
    orderId: string;
}
/**
 * Результат отмены торгового поручения
 * @see https://tinkoff.github.io/investAPI/orders/#cancelorderresponse
 */
export interface CancelOrderResponse {
    /**
     * Дата и время отмены заявки в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    time: string;
}
/**
 * Запрос получения статуса торгового поручения
 * @see https://tinkoff.github.io/investAPI/orders/#getorderstaterequest
 */
export interface GetOrderStateRequest {
    /** Номер счёта */
    accountId: string;
    /** Идентификатор заявки */
    orderId: string;
}
/**
 * Информация о торговом поручении
 * @see https://tinkoff.github.io/investAPI/orders/#orderstate
 */
export interface OrderState {
    /** Биржевой идентификатор заявки */
    orderId: string;
    /** Текущий статус заявки */
    executionReportStatus: OrderExecutionReportStatus;
    /**
     * Запрошено лотов
     * @remarks `int64`
     */
    lotsRequested: string;
    /**
     * Исполнено лотов
     * @remarks `int64`
     */
    lotsExecuted: string;
    /**
     * Начальная цена заявки
     * @description Произведение количества запрошенных лотов на цену
     */
    initialOrderPrice: MoneyValue;
    /**
     * Исполненная цена заявки
     * @description Произведение средней цены покупки на количество лотов
     */
    executedOrderPrice: MoneyValue;
    /** Итоговая стоимость заявки, включающая все комиссии */
    totalOrderAmount: MoneyValue;
    /** Средняя цена позиции по сделке */
    averagePositionPrice: MoneyValue;
    /**
     * Начальная комиссия
     * @description Комиссия, рассчитанная на момент подачи заявки
     */
    initialCommission: MoneyValue;
    /** Фактическая комиссия по итогам исполнения заявки */
    executedCommission: MoneyValue;
    /** Figi-идентификатор инструмента */
    figi: string;
    /** Направление заявки */
    direction: OrderDirection;
    /**
     * Начальная цена за 1 инструмент
     * @description Для получения стоимости лота требуется умножить на лотность инструмента
     */
    initialSecurityPrice: MoneyValue;
    /** Стадии выполнения заявки */
    stages: OrderStage[];
    /** Сервисная комиссия */
    serviceCommission: MoneyValue;
    /** Валюта заявки */
    currency: string;
    /** Тип заявки */
    orderType: OrderType;
    /**
     * Дата и время выставления заявки в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    orderDate: string;
    /** UID идентификатор инструмента */
    instrumentUid: string;
    /**
     * Идентификатор ключа идемпотентности, переданный клиентом, в формате UID
     * @description Максимальная длина 36 символов.
     */
    orderRequestId: string;
}
/**
 * Запрос получения списка активных торговых поручений
 * @see https://tinkoff.github.io/investAPI/orders/#getordersrequest
 */
export interface GetOrdersRequest {
    /** Номер счёта */
    accountId: string;
}
/**
 * Список активных торговых поручений
 * @see https://tinkoff.github.io/investAPI/orders/#getordersresponse
 */
export interface GetOrdersResponse {
    /** Массив активных заявок */
    orders: OrderState[];
}
/**
 * Запрос изменения выставленной заявки
 * @see https://tinkoff.github.io/investAPI/orders/#replaceorderrequest
 */
export interface ReplaceOrderRequest {
    /** Номер счета */
    accountId: string;
    /** Идентификатор заявки на бирже */
    orderId: string;
    /**
     * Новый идентификатор запроса выставления поручения для целей идемпотентности
     * @description Максимальная длина 36 символов. Перезатирает старый ключ.
     */
    idempotencyKey: string;
    /**
     * Количество лотов
     * @remarks `int64`
     */
    quantity: string;
    /**
     * Цена за 1 инструмент
     */
    price: Quotation;
    /** Тип цены */
    priceType: PriceType;
}
/**
 * Сервис предназначен для работы с торговыми поручениями:
 * 1. выставление;
 * 2. отмена;
 * 3. получение статуса;
 * 4. расчёт полной стоимости;
 * 5. получение списка заявок.
 * @see https://tinkoff.github.io/investAPI/orders/#ordersservice
 */
export declare class OrdersService extends Common {
    /**
     * Метод выставления заявки
     * ```js
     * import { OrdersService, OrderDirection, OrderType } from '@tomasevich/tinkoff'
     *
     * const ordersService = new OrdersService('TOKEN', false)
     * const postOrder = await ordersService.PostOrder({
     *  figi: '',
     *  quantity: "1",
     *  price: OrdersService.Quotation('100.1'),
     *  direction: OrderDirection.STOP_ORDER_DIRECTION_BUY,
     *  accountId: '<ACCOUNT_ID>',
     *  orderType: OrderType.ORDER_TYPE_MARKET,
     *  orderId: '',
     *  instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
     * })
     *
     * console.log(postOrder)
     * ```
     * @see https://tinkoff.github.io/investAPI/orders/#postorder
     */
    PostOrder(body: PostOrderRequest): Promise<PostOrderResponse>;
    /**
     * Метод отмены биржевой заявки
     * ```js
     * import { OrdersService, OrderDirection, OrderType } from '@tomasevich/tinkoff'
     *
     * const ordersService = new OrdersService('TOKEN', false)
     * const postOrder = await ordersService.CancelOrder({
     *  accountId: '<ACCOUNT_ID>',
     *  orderId: '<ORDER_ID>'
     * })
     *
     * console.log(postOrder)
     * ```
     * @see https://tinkoff.github.io/investAPI/orders/#cancelorder
     */
    CancelOrder(body: CancelOrderRequest): Promise<CancelOrderResponse>;
    /**
     * Метод получения статуса торгового поручения
     * ```js
     * import { OrdersService } from '@tomasevich/tinkoff'
     *
     * const ordersService = new OrdersService('TOKEN', false)
     * const orderState = await ordersService.GetOrderState({
     *  accountId: '<ACCOUNT_ID>',
     *  orderId: '<ORDER_ID>'
     * })
     *
     * console.log(orderState)
     * ```
     * @see https://tinkoff.github.io/investAPI/orders/#getorderstate
     */
    GetOrderState(body: GetOrderStateRequest): Promise<OrderState>;
    /**
     * Метод получения списка активных заявок по счёту
     * ```js
     * import { OrdersService } from '@tomasevich/tinkoff'
     *
     * const ordersService = new OrdersService('TOKEN', false)
     * const { orders } = await ordersService.GetOrders({
     *  accountId: '<ACCOUNT_ID>'
     * })
     *
     * console.log(orders)
     * ```
     * @see https://tinkoff.github.io/investAPI/orders/#getorders
     */
    GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
    /**
     * Метод изменения выставленной заявки
     * ```js
     * import { OrdersService, PriceType } from '@tomasevich/tinkoff'
     *
     * const ordersService = new OrdersService('TOKEN', false)
     * const replaceOrder = await ordersService.ReplaceOrder({
     *  quantity: "1",
     *  price: OrdersService.Quotation('100.1'),
     *  priceType: PriceType.PRICE_TYPE_CURRENCY,
     *  accountId: '<ACCOUNT_ID>',
     *  orderId: '<ORDER_ID>',
     *  idempotencyKey: ''
     * })
     *
     * console.log(replaceOrder)
     * ```
     * @see https://tinkoff.github.io/investAPI/orders/#replaceorder
     */
    ReplaceOrder(body: ReplaceOrderRequest): Promise<PostOrderResponse>;
}
