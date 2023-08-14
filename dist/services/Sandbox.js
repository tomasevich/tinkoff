"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandboxService = void 0;
const Core_1 = require("../Core");
/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 */
class SandboxService extends Core_1.Core {
    GetOrders(body) {
        return this.request('SandboxService', 'GetSandboxOrders', body);
    }
}
exports.SandboxService = SandboxService;
