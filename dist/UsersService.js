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
class UsersService extends Common_1.Common {
    GetAccounts(body) {
        return this.request('UsersService', 'GetAccounts', body);
    }
    GetMarginAttributes(body) {
        return this.request('UsersService', 'GetMarginAttributes', body);
    }
    GetUserTariff(body) {
        return this.request('UsersService', 'GetUserTariff', body);
    }
    GetInfo(body) {
        return this.request('UsersService', 'GetInfo', body);
    }
}
exports.UsersService = UsersService;
