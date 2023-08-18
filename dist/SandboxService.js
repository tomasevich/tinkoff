"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandboxService = void 0;
const Common_1 = require("./Common");
/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 * @see https://tinkoff.github.io/investAPI/sandbox/#sandboxservice
 */
class SandboxService extends Common_1.Common {
    /**
     * Метод регистрации счёта в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#opensandboxaccount
     */
    OpenSandboxAccount(body) {
        return this.request('SandboxService', '  OpenSandboxAccount', body);
    }
    /**
     * Метод получения счетов в песочнице
     * ```js
     * import { SandboxService } from '@tomasevich/tinkoff'
     *
     * const sandboxService = new SandboxService('<TOKEN>', true)
     * const { accounts } = await sandboxService.GetSandboxAccounts({})
     *
     * console.log(accounts)
     * ```
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxaccounts
     */
    GetSandboxAccounts(body) {
        return this.request('SandboxService', 'GetSandboxAccounts', body);
    }
    /**
     * Метод закрытия счёта в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#closesandboxaccount
     */
    CloseSandboxAccount(body) {
        return this.request('SandboxService', 'CloseSandboxAccount', body);
    }
    /**
     * Метод выставления торгового поручения в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#postsandboxorder
     */
    PostSandboxOrder(body) {
        return this.request('SandboxService', 'PostSandboxOrder', body);
    }
    /**
     * Метод изменения выставленной заявки
     * @see https://tinkoff.github.io/investAPI/sandbox/#replacesandboxorder
     */
    ReplaceSandboxOrder(body) {
        return this.request('SandboxService', 'ReplaceSandboxOrder', body);
    }
    /**
     * Метод получения списка активных заявок по счёту в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
     */
    GetSandboxOrders(body) {
        return this.request('SandboxService', 'GetSandboxOrders', body);
    }
    /**
     * Метод отмены торгового поручения в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#cancelsandboxorder
     */
    CancelSandboxOrder(body) {
        return this.request('SandboxService', 'CancelSandboxOrder', body);
    }
    /**
     * Метод получения статуса заявки в песочнице
     * @description Заявки хранятся в таблице 7 дней
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorderstate
     */
    GetSandboxOrderState(body) {
        return this.request('SandboxService', 'GetSandboxOrderState', body);
    }
    /**
     * Метод получения позиций по виртуальному счёту
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxpositions
     */
    GetSandboxPositions(body) {
        return this.request('SandboxService', 'GetSandboxPositions', body);
    }
    /**
     * Метод получения операций в песочнице по номеру счёта
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxoperations
     */
    GetSandboxOperations(body) {
        return this.request('SandboxService', 'GetSandboxOperations', body);
    }
    /**
     * Метод получения операций в песочнице по номеру счета с пагинацией
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxoperationsbycursor
     */
    GetSandboxOperationsByCursor(body) {
        return this.request('SandboxService', 'GetSandboxOperationsByCursor', body);
    }
    /**
     * Метод получения портфолио в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxportfolio
     */
    GetSandboxPortfolio(body) {
        return this.request('SandboxService', 'GetSandboxPortfolio', body);
    }
    /**
     * Метод пополнения счёта в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#sandboxpayin
     */
    SandboxPayIn(body) {
        return this.request('SandboxService', 'SandboxPayIn', body);
    }
    /**
     * Метод получения доступного остатка для вывода средств в песочнице
     * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxwithdrawlimits
     */
    GetSandboxWithdrawLimits(body) {
        return this.request('SandboxService', 'GetSandboxWithdrawLimits', body);
    }
}
exports.SandboxService = SandboxService;
