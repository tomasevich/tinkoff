"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandboxService = void 0;
const Common_1 = require("./Common");
/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 *
 * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
 */
class SandboxService extends Common_1.Common {
    GetOrders(body) {
        return this.request('SandboxService', 'GetSandboxOrders', body);
    }
}
exports.SandboxService = SandboxService;
