"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = exports.PriceType = exports.OrderExecutionReportStatus = exports.OrderType = exports.OrderDirection = void 0;
const Common_1 = require("./Common");
/**
 * Направление операции
 * @see https://tinkoff.github.io/investAPI/orders/#orderdirection
 */
var OrderDirection;
(function (OrderDirection) {
    /** Значение не указано */
    OrderDirection[OrderDirection["ORDER_DIRECTION_UNSPECIFIED"] = 0] = "ORDER_DIRECTION_UNSPECIFIED";
    /** Покупка */
    OrderDirection[OrderDirection["ORDER_DIRECTION_BUY"] = 1] = "ORDER_DIRECTION_BUY";
    /** Продажа */
    OrderDirection[OrderDirection["ORDER_DIRECTION_SELL"] = 2] = "ORDER_DIRECTION_SELL";
})(OrderDirection || (exports.OrderDirection = OrderDirection = {}));
/**
 * Тип заявки
 * @see https://tinkoff.github.io/investAPI/orders/#ordertype
 */
var OrderType;
(function (OrderType) {
    /** Значение не указано */
    OrderType[OrderType["ORDER_TYPE_UNSPECIFIED"] = 0] = "ORDER_TYPE_UNSPECIFIED";
    /** Лимитная */
    OrderType[OrderType["ORDER_TYPE_LIMIT"] = 1] = "ORDER_TYPE_LIMIT";
    /** Рыночная */
    OrderType[OrderType["ORDER_TYPE_MARKET"] = 2] = "ORDER_TYPE_MARKET";
    /** Лучшая цена */
    OrderType[OrderType["ORDER_TYPE_BESTPRICE"] = 3] = "ORDER_TYPE_BESTPRICE";
})(OrderType || (exports.OrderType = OrderType = {}));
/**
 * Текущий статус заявки (поручения)
 * @see https://tinkoff.github.io/investAPI/orders/#orderexecutionreportstatus
 */
var OrderExecutionReportStatus;
(function (OrderExecutionReportStatus) {
    /** none */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_UNSPECIFIED"] = 0] = "EXECUTION_REPORT_STATUS_UNSPECIFIED";
    /** Исполнена */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_FILL"] = 1] = "EXECUTION_REPORT_STATUS_FILL";
    /** Отклонена */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_REJECTED"] = 2] = "EXECUTION_REPORT_STATUS_REJECTED";
    /** Отменена пользователем */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_CANCELLED"] = 3] = "EXECUTION_REPORT_STATUS_CANCELLED";
    /** Новая */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_NEW"] = 4] = "EXECUTION_REPORT_STATUS_NEW";
    /** Частично исполнена */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_PARTIALLYFILL"] = 5] = "EXECUTION_REPORT_STATUS_PARTIALLYFILL";
})(OrderExecutionReportStatus || (exports.OrderExecutionReportStatus = OrderExecutionReportStatus = {}));
/**
 * Тип цены
 * @see https://tinkoff.github.io/investAPI/orders/#pricetype
 */
var PriceType;
(function (PriceType) {
    /** Значение не определено */
    PriceType[PriceType["PRICE_TYPE_UNSPECIFIED"] = 0] = "PRICE_TYPE_UNSPECIFIED";
    /** Цена в пунктах (только для фьючерсов и облигаций) */
    PriceType[PriceType["PRICE_TYPE_POINT"] = 1] = "PRICE_TYPE_POINT";
    /** Цена в валюте расчётов по инструменту */
    PriceType[PriceType["PRICE_TYPE_CURRENCY"] = 2] = "PRICE_TYPE_CURRENCY";
})(PriceType || (exports.PriceType = PriceType = {}));
/**
 * Сервис предназначен для работы с торговыми поручениями:
 * 1. выставление;
 * 2. отмена;
 * 3. получение статуса;
 * 4. расчёт полной стоимости;
 * 5. получение списка заявок.
 * @see https://tinkoff.github.io/investAPI/orders/#ordersservice
 */
class OrdersService extends Common_1.Common {
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
    PostOrder(body) {
        return this.request('OrdersService', 'PostOrder', body);
    }
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
    CancelOrder(body) {
        return this.request('OrdersService', 'CancelOrder', body);
    }
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
    GetOrderState(body) {
        return this.request('OrdersService', 'GetOrderState', body);
    }
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
    GetOrders(body) {
        return this.request('OrdersService', 'GetOrders', body);
    }
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
    ReplaceOrder(body) {
        return this.request('OrdersService', 'ReplaceOrder', body);
    }
}
exports.OrdersService = OrdersService;
