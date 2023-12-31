"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = exports.AccessLevel = exports.AccountStatus = exports.AccountType = void 0;
const _1 = require("./");
/**
 * Тип счёта
 * @see https://tinkoff.github.io/investAPI/users/#accounttype
 */
var AccountType;
(function (AccountType) {
    /** Тип аккаунта не определён */
    AccountType[AccountType["ACCOUNT_TYPE_UNSPECIFIED"] = 0] = "ACCOUNT_TYPE_UNSPECIFIED";
    /** Брокерский счёт Тинькофф */
    AccountType[AccountType["ACCOUNT_TYPE_TINKOFF"] = 1] = "ACCOUNT_TYPE_TINKOFF";
    /** ИИС счёт */
    AccountType[AccountType["ACCOUNT_TYPE_TINKOFF_IIS"] = 2] = "ACCOUNT_TYPE_TINKOFF_IIS";
    /** Инвесткопилка */
    AccountType[AccountType["ACCOUNT_TYPE_INVEST_BOX"] = 3] = "ACCOUNT_TYPE_INVEST_BOX";
})(AccountType || (exports.AccountType = AccountType = {}));
/**
 * Статус счёта
 * @see https://tinkoff.github.io/investAPI/users/#accountstatus
 */
var AccountStatus;
(function (AccountStatus) {
    /** Статус счёта не определён */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_UNSPECIFIED"] = 0] = "ACCOUNT_STATUS_UNSPECIFIED";
    /** Новый, в процессе открытия */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_NEW"] = 1] = "ACCOUNT_STATUS_NEW";
    /** Открытый и активный счёт */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_OPEN"] = 2] = "ACCOUNT_STATUS_OPEN";
    /** Закрытый счёт */
    AccountStatus[AccountStatus["ACCOUNT_STATUS_CLOSED"] = 3] = "ACCOUNT_STATUS_CLOSED";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
/**
 * Уровень доступа к счёту
 * @see https://tinkoff.github.io/investAPI/users/#accesslevel
 */
var AccessLevel;
(function (AccessLevel) {
    /** Уровень доступа не определён */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_UNSPECIFIED"] = 0] = "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED";
    /** Полный доступ к счёту */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_FULL_ACCESS"] = 1] = "ACCOUNT_ACCESS_LEVEL_FULL_ACCESS";
    /** Доступ с уровнем прав "только чтение" */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_READ_ONLY"] = 2] = "ACCOUNT_ACCESS_LEVEL_READ_ONLY";
    /** Доступ отсутствует */
    AccessLevel[AccessLevel["ACCOUNT_ACCESS_LEVEL_NO_ACCESS"] = 3] = "ACCOUNT_ACCESS_LEVEL_NO_ACCESS";
})(AccessLevel || (exports.AccessLevel = AccessLevel = {}));
/**
 * Сервис предназначен для получения:
 * 1. списка счетов пользователя;
 * 2. маржинальных показателей по счёту.
 * @see https://tinkoff.github.io/investAPI/users/#usersservice
 */
class UsersService extends _1.Common {
    /**
     * Метод получения счетов пользователя
     * ```js
     * import { UsersService } from '@tomasevich/tinkoff'
     *
     * const usersService = new UsersService('TOKEN', false)
     * const { accounts } = await usersService.GetAccounts({})
     *
     * console.log(accounts)
     * ```
     * @see https://tinkoff.github.io/investAPI/users/#getaccounts
     */
    GetAccounts(body) {
        return this.request('UsersService', 'GetAccounts', body);
    }
    /**
     * Расчёт маржинальных показателей по счёту
     * ```js
     * import { UsersService } from '@tomasevich/tinkoff'
     *
     * const usersService = new UsersService('TOKEN', false)
     * const marginAttributes = await usersService.GetMarginAttributes({ accountId: 'ACCOUNT_ID' })
     *
     * console.log(marginAttributes)
     * ```
     * @see https://tinkoff.github.io/investAPI/users/#getmarginattributes
     */
    GetMarginAttributes(body) {
        return this.request('UsersService', 'GetMarginAttributes', body);
    }
    /**
     * Запрос тарифа пользователя
     * ```js
     * import { UsersService } from '@tomasevich/tinkoff'
     *
     * const usersService = new UsersService('TOKEN', false)
     * const userTariff = await usersService.GetUserTariff({})
     *
     * console.log(userTariff)
     * ```
     * @see https://tinkoff.github.io/investAPI/users/#getusertariff
     */
    GetUserTariff(body) {
        return this.request('UsersService', 'GetUserTariff', body);
    }
    /**
     * Метод получения информации о пользователе
     * ```js
     * import { UsersService } from '@tomasevich/tinkoff'
     *
     * const usersService = new UsersService('TOKEN', false)
     * const info = await usersService.GetInfo({})
     *
     * console.log(info)
     * ```
     * @see https://tinkoff.github.io/investAPI/users/#getinfo
     */
    GetInfo(body) {
        return this.request('UsersService', 'GetInfo', body);
    }
}
exports.UsersService = UsersService;
