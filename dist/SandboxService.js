"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandboxService = void 0;
const Common_1 = require("./Common");
class SandboxService extends Common_1.Common {
    OpenSandboxAccount(body) {
        return this.request('SandboxService', 'OpenSandboxAccount', body);
    }
    GetSandboxAccounts(body) {
        return this.request('SandboxService', 'GetSandboxAccounts', body);
    }
    CloseSandboxAccount(body) {
        return this.request('SandboxService', 'CloseSandboxAccount', body);
    }
    PostSandboxOrder(body) {
        return this.request('SandboxService', 'PostSandboxOrder', body);
    }
    GetSandboxOrders(body) {
        return this.request('SandboxService', 'GetSandboxOrders', body);
    }
    GetSandboxPositions(body) {
        return this.request('SandboxService', 'GetSandboxPositions', body);
    }
    GetSandboxOperations(body) {
        return this.request('SandboxService', 'GetSandboxOperations', body);
    }
}
exports.SandboxService = SandboxService;
