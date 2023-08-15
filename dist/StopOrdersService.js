"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopOrdersService = exports.StopOrderType = exports.StopOrderExpirationType = exports.StopOrderDirection = void 0;
const Common_1 = require("./Common");
var StopOrderDirection;
(function (StopOrderDirection) {
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_UNSPECIFIED"] = 0] = "STOP_ORDER_DIRECTION_UNSPECIFIED";
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_BUY"] = 1] = "STOP_ORDER_DIRECTION_BUY";
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_SELL"] = 2] = "STOP_ORDER_DIRECTION_SELL";
})(StopOrderDirection || (exports.StopOrderDirection = StopOrderDirection = {}));
var StopOrderExpirationType;
(function (StopOrderExpirationType) {
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED"] = 0] = "STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED";
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL"] = 1] = "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL";
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE"] = 2] = "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE";
})(StopOrderExpirationType || (exports.StopOrderExpirationType = StopOrderExpirationType = {}));
var StopOrderType;
(function (StopOrderType) {
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_UNSPECIFIED"] = 0] = "STOP_ORDER_TYPE_UNSPECIFIED";
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_TAKE_PROFIT"] = 1] = "STOP_ORDER_TYPE_TAKE_PROFIT";
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_STOP_LOSS"] = 2] = "STOP_ORDER_TYPE_STOP_LOSS";
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_STOP_LIMIT"] = 3] = "STOP_ORDER_TYPE_STOP_LIMIT";
})(StopOrderType || (exports.StopOrderType = StopOrderType = {}));
class StopOrdersService extends Common_1.Common {
    PostStopOrder(body) {
        return this.request('StopOrdersService', 'PostStopOrder', body);
    }
    GetStopOrders(body) {
        return this.request('StopOrdersService', 'GetStopOrders', body);
    }
    CancelStopOrder(body) {
        return this.request('StopOrdersService', 'CancelStopOrder', body);
    }
}
exports.StopOrdersService = StopOrdersService;
