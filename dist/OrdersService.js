"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = exports.OrderExecutionReportStatus = exports.OrderType = exports.OrderDirection = void 0;
const Common_1 = require("./Common");
var OrderDirection;
(function (OrderDirection) {
    OrderDirection[OrderDirection["ORDER_DIRECTION_UNSPECIFIED"] = 0] = "ORDER_DIRECTION_UNSPECIFIED";
    OrderDirection[OrderDirection["ORDER_DIRECTION_BUY"] = 1] = "ORDER_DIRECTION_BUY";
    OrderDirection[OrderDirection["ORDER_DIRECTION_SELL"] = 2] = "ORDER_DIRECTION_SELL";
})(OrderDirection || (exports.OrderDirection = OrderDirection = {}));
var OrderType;
(function (OrderType) {
    OrderType[OrderType["ORDER_TYPE_UNSPECIFIED"] = 0] = "ORDER_TYPE_UNSPECIFIED";
    OrderType[OrderType["ORDER_TYPE_LIMIT"] = 1] = "ORDER_TYPE_LIMIT";
    OrderType[OrderType["ORDER_TYPE_MARKET"] = 2] = "ORDER_TYPE_MARKET";
    OrderType[OrderType["ORDER_TYPE_BESTPRICE"] = 3] = "ORDER_TYPE_BESTPRICE";
})(OrderType || (exports.OrderType = OrderType = {}));
var OrderExecutionReportStatus;
(function (OrderExecutionReportStatus) {
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_UNSPECIFIED"] = 0] = "EXECUTION_REPORT_STATUS_UNSPECIFIED";
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_FILL"] = 1] = "EXECUTION_REPORT_STATUS_FILL";
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_REJECTED"] = 2] = "EXECUTION_REPORT_STATUS_REJECTED";
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_CANCELLED"] = 3] = "EXECUTION_REPORT_STATUS_CANCELLED";
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_NEW"] = 4] = "EXECUTION_REPORT_STATUS_NEW";
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_PARTIALLYFILL"] = 5] = "EXECUTION_REPORT_STATUS_PARTIALLYFILL";
})(OrderExecutionReportStatus || (exports.OrderExecutionReportStatus = OrderExecutionReportStatus = {}));
class OrdersService extends Common_1.Common {
    PostOrder(body) {
        return this.request('OrdersService', 'GetOrders', body);
    }
    GetOrders(body) {
        return this.request('OrdersService', 'GetOrders', body);
    }
}
exports.OrdersService = OrdersService;
