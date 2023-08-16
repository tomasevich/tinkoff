"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = exports.AccessLevel = exports.AccountStatus = exports.AccountType = void 0;
const Common_1 = require("./Common");
var AccountType;
(function (AccountType) {
    AccountType[AccountType["ACCOUNT_TYPE_UNSPECIFIED"] = 0] = "ACCOUNT_TYPE_UNSPECIFIED";
    AccountType[AccountType["ACCOUNT_TYPE_TINKOFF"] = 1] = "ACCOUNT_TYPE_TINKOFF";
    AccountType[AccountType["ACCOUNT_TYPE_TINKOFF_IIS"] = 2] = "ACCOUNT_TYPE_TINKOFF_IIS";
    AccountType[AccountType["ACCOUNT_TYPE_INVEST_BOX"] = 3] = "ACCOUNT_TYPE_INVEST_BOX";
})(AccountType || (exports.AccountType = AccountType = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus[AccountStatus["ACCOUNT_STATUS_UNSPECIFIED"] = 0] = "ACCOUNT_STATUS_UNSPECIFIED";
    AccountStatus[AccountStatus["ACCOUNT_STATUS_NEW"] = 1] = "ACCOUNT_STATUS_NEW";
    AccountStatus[AccountStatus["ACCOUNT_STATUS_OPEN"] = 2] = "ACCOUNT_STATUS_OPEN";
    AccountStatus[AccountStatus["ACCOUNT_STATUS_CLOSED"] = 3] = "ACCOUNT_STATUS_CLOSED";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
var AccessLevel;
(function (AccessLevel) {
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_UNSPECIFIED"] = 0] = "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED";
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_FULL_ACCESS"] = 1] = "ACCOUNT_ACCESS_LEVEL_FULL_ACCESS";
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_READ_ONLY"] = 2] = "ACCOUNT_ACCESS_LEVEL_READ_ONLY";
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_NO_ACCESS"] = 3] = "ACCOUNT_ACCESS_LEVEL_NO_ACCESS";
})(AccessLevel || (exports.AccessLevel = AccessLevel = {}));
/**
 * Сервис предназначен для получения:
 * 1. списка счетов пользователя;
 * 2. маржинальных показателей по счёту.
 * @see https://tinkoff.github.io/investAPI/users/#usersservice
 */
class UsersService extends Common_1.Common {
    /**
     * Метод получения счетов пользователя
     * @see https://tinkoff.github.io/investAPI/users/#getaccounts
     */
    GetAccounts(body) {
        return this.request('UsersService', 'GetAccounts', body);
    }
    /**
     * Расчёт маржинальных показателей по счёту
     * @see https://tinkoff.github.io/investAPI/users/#getmarginattributes
     */
    GetMarginAttributes(body) {
        return this.request('UsersService', 'GetMarginAttributes', body);
    }
    /**
     * Запрос тарифа пользователя
     * @see https://tinkoff.github.io/investAPI/users/#getusertariff
     */
    GetUserTariff(body) {
        return this.request('UsersService', 'GetUserTariff', body);
    }
    /**
     * Метод получения информации о пользователе
     * @see https://tinkoff.github.io/investAPI/users/#getinfo
     */
    GetInfo(body) {
        return this.request('UsersService', 'GetInfo', body);
    }
}
exports.UsersService = UsersService;
