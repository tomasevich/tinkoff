"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopOrdersService = exports.StopOrderType = exports.StopOrderExpirationType = exports.StopOrderDirection = void 0;
const Common_1 = require("./Common");
/**
 * Направление сделки стоп-заявки
 * @see https://tinkoff.github.io/investAPI/stoporders/#stoporderdirection
 */
var StopOrderDirection;
(function (StopOrderDirection) {
    /** Значение не указано */
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_UNSPECIFIED"] = 0] = "STOP_ORDER_DIRECTION_UNSPECIFIED";
    /** Покупка */
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_BUY"] = 1] = "STOP_ORDER_DIRECTION_BUY";
    /** Продажа */
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_SELL"] = 2] = "STOP_ORDER_DIRECTION_SELL";
})(StopOrderDirection || (exports.StopOrderDirection = StopOrderDirection = {}));
/**
 * Тип экспирации стоп-заявке
 * @see https://tinkoff.github.io/investAPI/stoporders/#stoporderexpirationtype
 */
var StopOrderExpirationType;
(function (StopOrderExpirationType) {
    /** Значение не указано */
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED"] = 0] = "STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED";
    /** Действительно до отмены */
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL"] = 1] = "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL";
    /** Действительно до даты снятия */
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE"] = 2] = "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE";
})(StopOrderExpirationType || (exports.StopOrderExpirationType = StopOrderExpirationType = {}));
/**
 * Тип стоп-заявки
 * @see https://tinkoff.github.io/investAPI/stoporders/#stopordertype
 */
var StopOrderType;
(function (StopOrderType) {
    /** Значение не указано */
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_UNSPECIFIED"] = 0] = "STOP_ORDER_TYPE_UNSPECIFIED";
    /** Take-profit заявка */
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_TAKE_PROFIT"] = 1] = "STOP_ORDER_TYPE_TAKE_PROFIT";
    /** Stop-loss заявка */
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_STOP_LOSS"] = 2] = "STOP_ORDER_TYPE_STOP_LOSS";
    /** Stop-limit заявка */
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_STOP_LIMIT"] = 3] = "STOP_ORDER_TYPE_STOP_LIMIT";
})(StopOrderType || (exports.StopOrderType = StopOrderType = {}));
/**
 * Сервис предназначен для работы со стоп-заявками:
 * 1. выставление;
 * 2. отмена;
 * 3. получение списка стоп-заявок.
 * @see https://tinkoff.github.io/investAPI/stoporders/#stopordersservice
 */
class StopOrdersService extends Common_1.Common {
    /**
     * Метод выставления стоп-заявки
     * @see https://tinkoff.github.io/investAPI/stoporders/#poststoporder
     */
    PostStopOrder(body) {
        return this.request('StopOrdersService', 'PostStopOrder', body);
    }
    /**
     * Метод получения списка активных стоп заявок по счёту
     * @see https://tinkoff.github.io/investAPI/stoporders/#getstoporders
     */
    GetStopOrders(body) {
        return this.request('StopOrdersService', 'GetStopOrders', body);
    }
    /**
     * Метод отмены стоп-заявки
     * @see https://tinkoff.github.io/investAPI/stoporders/#cancelstoporder
     */
    CancelStopOrder(body) {
        return this.request('StopOrdersService', 'CancelStopOrder', body);
    }
}
exports.StopOrdersService = StopOrdersService;
