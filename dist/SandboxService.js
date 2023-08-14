"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SandboxService = exports.AccessLevel = exports.AccountStatus = exports.AccountType = void 0;
const Common_1 = require("./Common");
/**
 * Тип счёта
 */
var AccountType;
(function (AccountType) {
    /**
     * Тип аккаунта не определён
     */
    AccountType[AccountType["ACCOUNT_TYPE_UNSPECIFIED"] = 0] = "ACCOUNT_TYPE_UNSPECIFIED";
    /**
     * Брокерский счёт Тинькофф
     */
    AccountType[AccountType["ACCOUNT_TYPE_TINKOFF"] = 1] = "ACCOUNT_TYPE_TINKOFF";
    /**
     * ИИС счёт
     */
    AccountType[AccountType["ACCOUNT_TYPE_TINKOFF_IIS"] = 2] = "ACCOUNT_TYPE_TINKOFF_IIS";
    /**
     * Инвесткопилка
     */
    AccountType[AccountType["ACCOUNT_TYPE_INVEST_BOX"] = 3] = "ACCOUNT_TYPE_INVEST_BOX";
})(AccountType || (exports.AccountType = AccountType = {}));
/**
 * Статус счёта
 */
var AccountStatus;
(function (AccountStatus) {
    /**
     * Статус счёта не определён
     */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_UNSPECIFIED"] = 0] = "ACCOUNT_STATUS_UNSPECIFIED";
    /**
     * Новый, в процессе открытия
     */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_NEW"] = 1] = "ACCOUNT_STATUS_NEW";
    /**
     * Открытый и активный счёт
     */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_OPEN"] = 2] = "ACCOUNT_STATUS_OPEN";
    /**
     * Закрытый счёт
     */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_CLOSED"] = 3] = "ACCOUNT_STATUS_CLOSED";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
/**
 * Уровень доступа к счёту
 */
var AccessLevel;
(function (AccessLevel) {
    /**
     * Уровень доступа не определён
     */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_UNSPECIFIED"] = 0] = "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED";
    /**
     * Полный доступ к счёту
     */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_FULL_ACCESS"] = 1] = "ACCOUNT_ACCESS_LEVEL_FULL_ACCESS";
    /**
     * Доступ с уровнем прав "только чтение"
     */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_READ_ONLY"] = 2] = "ACCOUNT_ACCESS_LEVEL_READ_ONLY";
    /**
     * Доступ отсутствует
     */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_NO_ACCESS"] = 3] = "ACCOUNT_ACCESS_LEVEL_NO_ACCESS";
})(AccessLevel || (exports.AccessLevel = AccessLevel = {}));
/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 *
 * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
 */
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
    GetSandboxOrders(body) {
        return this.request('SandboxService', 'GetSandboxOrders', body);
    }
}
exports.SandboxService = SandboxService;
