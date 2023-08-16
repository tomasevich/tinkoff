"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandboxService = void 0;
const Common_1 = require("./Common");
class SandboxService extends Common_1.Common {
    OpenSandboxAccount(body) {
        return this.request('SandboxService', '  OpenSandboxAccount', body);
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
    ReplaceSandboxOrder(body) {
        return this.request('SandboxService', 'ReplaceSandboxOrder', body);
    }
    GetSandboxOrders(body) {
        return this.request('SandboxService', 'GetSandboxOrders', body);
    }
    CancelSandboxOrder(body) {
        return this.request('SandboxService', 'CancelSandboxOrder', body);
    }
    GetSandboxOrderState(body) {
        return this.request('SandboxService', 'GetSandboxOrderState', body);
    }
    GetSandboxPositions(body) {
        return this.request('SandboxService', 'GetSandboxPositions', body);
    }
    GetSandboxOperations(body) {
        return this.request('SandboxService', 'GetSandboxOperations', body);
    }
    GetSandboxOperationsByCursor(body) {
        return this.request('SandboxService', 'GetSandboxOperationsByCursor', body);
    }
    GetSandboxPortfolio(body) {
        return this.request('SandboxService', 'GetSandboxPortfolio', body);
    }
    SandboxPayIn(body) {
        return this.request('SandboxService', 'SandboxPayIn', body);
    }
    GetSandboxWithdrawLimits(body) {
        return this.request('SandboxService', 'GetSandboxWithdrawLimits', body);
    }
}
exports.SandboxService = SandboxService;
