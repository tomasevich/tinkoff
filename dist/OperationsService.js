"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationsService = exports.PortfolioRequestCurrencyRequest = exports.OperationType = exports.OperationState = void 0;
const _1 = require("./");
/**
 * Статус запрашиваемых операций
 * @see https://tinkoff.github.io/investAPI/operations/#operationstate
 */
var OperationState;
(function (OperationState) {
    /** Статус операции не определё */
    OperationState[OperationState["OPERATION_STATE_UNSPECIFIED"] = 0] = "OPERATION_STATE_UNSPECIFIED";
    /** Исполнена */
    OperationState[OperationState["OPERATION_STATE_EXECUTED"] = 1] = "OPERATION_STATE_EXECUTED";
    /** Отменена */
    OperationState[OperationState["OPERATION_STATE_CANCELED"] = 2] = "OPERATION_STATE_CANCELED";
    /** Исполняется */
    OperationState[OperationState["OPERATION_STATE_PROGRESS"] = 3] = "OPERATION_STATE_PROGRESS";
})(OperationState || (exports.OperationState = OperationState = {}));
/**
 * Тип операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationtype
 */
var OperationType;
(function (OperationType) {
    /** Тип операции не определён */
    OperationType[OperationType["OPERATION_TYPE_UNSPECIFIED"] = 0] = "OPERATION_TYPE_UNSPECIFIED";
    /** Пополнение брокерского счёта */
    OperationType[OperationType["OPERATION_TYPE_INPUT"] = 1] = "OPERATION_TYPE_INPUT";
    /** Удержание НДФЛ по купонам */
    OperationType[OperationType["OPERATION_TYPE_BOND_TAX"] = 2] = "OPERATION_TYPE_BOND_TAX";
    /** Вывод ЦБ */
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_SECURITIES"] = 3] = "OPERATION_TYPE_OUTPUT_SECURITIES";
    /** Доход по сделке РЕПО овернайт */
    OperationType[OperationType["OPERATION_TYPE_OVERNIGHT"] = 4] = "OPERATION_TYPE_OVERNIGHT";
    /** Удержание налога */
    OperationType[OperationType["OPERATION_TYPE_TAX"] = 5] = "OPERATION_TYPE_TAX";
    /** Полное погашение облигаций */
    OperationType[OperationType["OPERATION_TYPE_BOND_REPAYMENT_FULL"] = 6] = "OPERATION_TYPE_BOND_REPAYMENT_FULL";
    /** Продажа ЦБ с карты */
    OperationType[OperationType["OPERATION_TYPE_SELL_CARD"] = 7] = "OPERATION_TYPE_SELL_CARD";
    /** Удержание налога по дивидендам */
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TAX"] = 8] = "OPERATION_TYPE_DIVIDEND_TAX";
    /** Вывод денежных средств */
    OperationType[OperationType["OPERATION_TYPE_OUTPUT"] = 9] = "OPERATION_TYPE_OUTPUT";
    /** Частичное погашение облигаций */
    OperationType[OperationType["OPERATION_TYPE_BOND_REPAYMENT"] = 10] = "OPERATION_TYPE_BOND_REPAYMENT";
    /** Корректировка налога */
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION"] = 11] = "OPERATION_TYPE_TAX_CORRECTION";
    /** Удержание комиссии за обслуживание брокерского счёта */
    OperationType[OperationType["OPERATION_TYPE_SERVICE_FEE"] = 12] = "OPERATION_TYPE_SERVICE_FEE";
    /** Удержание налога за материальную выгоду */
    OperationType[OperationType["OPERATION_TYPE_BENEFIT_TAX"] = 13] = "OPERATION_TYPE_BENEFIT_TAX";
    /** Удержание комиссии за непокрытую позицию */
    OperationType[OperationType["OPERATION_TYPE_MARGIN_FEE"] = 14] = "OPERATION_TYPE_MARGIN_FEE";
    /** Покупка ЦБ */
    OperationType[OperationType["OPERATION_TYPE_BUY"] = 15] = "OPERATION_TYPE_BUY";
    /** Покупка ЦБ с карты */
    OperationType[OperationType["OPERATION_TYPE_BUY_CARD"] = 16] = "OPERATION_TYPE_BUY_CARD";
    /** Перевод ценных бумаг из другого депозитария */
    OperationType[OperationType["OPERATION_TYPE_INPUT_SECURITIES"] = 17] = "OPERATION_TYPE_INPUT_SECURITIES";
    /** Продажа в результате Margin-call */
    OperationType[OperationType["OPERATION_TYPE_SELL_MARGIN"] = 18] = "OPERATION_TYPE_SELL_MARGIN";
    /** Удержание комиссии за операцию */
    OperationType[OperationType["OPERATION_TYPE_BROKER_FEE"] = 19] = "OPERATION_TYPE_BROKER_FEE";
    /** Покупка в результате Margin-call */
    OperationType[OperationType["OPERATION_TYPE_BUY_MARGIN"] = 20] = "OPERATION_TYPE_BUY_MARGIN";
    /** Выплата дивидендов */
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND"] = 21] = "OPERATION_TYPE_DIVIDEND";
    /** Продажа ЦБ */
    OperationType[OperationType["OPERATION_TYPE_SELL"] = 22] = "OPERATION_TYPE_SELL";
    /** Выплата купонов */
    OperationType[OperationType["OPERATION_TYPE_COUPON"] = 23] = "OPERATION_TYPE_COUPON";
    /** Удержание комиссии SuccessFee */
    OperationType[OperationType["OPERATION_TYPE_SUCCESS_FEE"] = 24] = "OPERATION_TYPE_SUCCESS_FEE";
    /** Передача дивидендного дохода */
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TRANSFER"] = 25] = "OPERATION_TYPE_DIVIDEND_TRANSFER";
    /** Зачисление вариационной маржи */
    OperationType[OperationType["OPERATION_TYPE_ACCRUING_VARMARGIN"] = 26] = "OPERATION_TYPE_ACCRUING_VARMARGIN";
    /** Списание вариационной маржи */
    OperationType[OperationType["OPERATION_TYPE_WRITING_OFF_VARMARGIN"] = 27] = "OPERATION_TYPE_WRITING_OFF_VARMARGIN";
    /** Покупка в рамках экспирации фьючерсного контракта */
    OperationType[OperationType["OPERATION_TYPE_DELIVERY_BUY"] = 28] = "OPERATION_TYPE_DELIVERY_BUY";
    /** Продажа в рамках экспирации фьючерсного контракта */
    OperationType[OperationType["OPERATION_TYPE_DELIVERY_SELL"] = 29] = "OPERATION_TYPE_DELIVERY_SELL";
    /** Комиссия за управление по счёту автоследования */
    OperationType[OperationType["OPERATION_TYPE_TRACK_MFEE"] = 30] = "OPERATION_TYPE_TRACK_MFEE";
    /** Комиссия за результат по счёту автоследования */
    OperationType[OperationType["OPERATION_TYPE_TRACK_PFEE"] = 31] = "OPERATION_TYPE_TRACK_PFEE";
    /** Удержание налога по ставке 15% */
    OperationType[OperationType["OPERATION_TYPE_TAX_PROGRESSIVE"] = 32] = "OPERATION_TYPE_TAX_PROGRESSIVE";
    /** Удержание налога по купонам по ставке 15% */
    OperationType[OperationType["OPERATION_TYPE_BOND_TAX_PROGRESSIVE"] = 33] = "OPERATION_TYPE_BOND_TAX_PROGRESSIVE";
    /** Удержание налога по дивидендам по ставке 15% */
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE"] = 34] = "OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE";
    /** Удержание налога за материальную выгоду по ставке 15% */
    OperationType[OperationType["OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE"] = 35] = "OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE";
    /** Корректировка налога по ставке 15% */
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE"] = 36] = "OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE";
    /** Удержание налога за возмещение по сделкам РЕПО по ставке 15% */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_PROGRESSIVE"] = 37] = "OPERATION_TYPE_TAX_REPO_PROGRESSIVE";
    /** Удержание налога за возмещение по сделкам РЕПО */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO"] = 38] = "OPERATION_TYPE_TAX_REPO";
    /** Удержание налога по сделкам РЕПО */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_HOLD"] = 39] = "OPERATION_TYPE_TAX_REPO_HOLD";
    /** Возврат налога по сделкам РЕПО */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_REFUND"] = 40] = "OPERATION_TYPE_TAX_REPO_REFUND";
    /** Удержание налога по сделкам РЕПО по ставке 15% */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE"] = 41] = "OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE";
    /** Возврат налога по сделкам РЕПО по ставке 15% */
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE"] = 42] = "OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE";
    /** Выплата дивидендов на карту */
    OperationType[OperationType["OPERATION_TYPE_DIV_EXT"] = 43] = "OPERATION_TYPE_DIV_EXT";
    /** Корректировка налога по купонам */
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION_COUPON"] = 44] = "OPERATION_TYPE_TAX_CORRECTION_COUPON";
    /** Комиссия за валютный остаток */
    OperationType[OperationType["OPERATION_TYPE_CASH_FEE"] = 45] = "OPERATION_TYPE_CASH_FEE";
    /** Комиссия за вывод валюты с брокерского счета */
    OperationType[OperationType["OPERATION_TYPE_OUT_FEE"] = 46] = "OPERATION_TYPE_OUT_FEE";
    /** Гербовый сбор */
    OperationType[OperationType["OPERATION_TYPE_OUT_STAMP_DUTY"] = 47] = "OPERATION_TYPE_OUT_STAMP_DUTY";
    /** SWIFT-перевод */
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_SWIFT"] = 48] = "OPERATION_TYPE_OUTPUT_SWIFT";
    /** SWIFT-перевод */
    OperationType[OperationType["OPERATION_TYPE_INPUT_SWIFT"] = 49] = "OPERATION_TYPE_INPUT_SWIFT";
    /** Перевод на карту */
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_ACQUIRING"] = 50] = "OPERATION_TYPE_OUTPUT_ACQUIRING";
    /** Перевод с карты */
    OperationType[OperationType["OPERATION_TYPE_INPUT_ACQUIRING"] = 51] = "OPERATION_TYPE_INPUT_ACQUIRING";
    /** Комиссия за вывод средств */
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_PENALTY"] = 52] = "OPERATION_TYPE_OUTPUT_PENALTY";
    /** Списание оплаты за сервис Советов */
    OperationType[OperationType["OPERATION_TYPE_ADVICE_FEE"] = 53] = "OPERATION_TYPE_ADVICE_FEE";
    /** Перевод ценных бумаг с ИИС на Брокерский счет */
    OperationType[OperationType["OPERATION_TYPE_TRANS_IIS_BS"] = 54] = "OPERATION_TYPE_TRANS_IIS_BS";
    /** Перевод ценных бумаг с одного брокерского счета на другой */
    OperationType[OperationType["OPERATION_TYPE_TRANS_BS_BS"] = 55] = "OPERATION_TYPE_TRANS_BS_BS";
    /** Вывод денежных средств со счета */
    OperationType[OperationType["OPERATION_TYPE_OUT_MULTI"] = 56] = "OPERATION_TYPE_OUT_MULTI";
    /** Пополнение денежных средств со счета */
    OperationType[OperationType["OPERATION_TYPE_INP_MULTI"] = 57] = "OPERATION_TYPE_INP_MULTI";
    /** Размещение биржевого овернайта */
    OperationType[OperationType["OPERATION_TYPE_OVER_PLACEMENT"] = 58] = "OPERATION_TYPE_OVER_PLACEMENT";
    /** Списание комиссии */
    OperationType[OperationType["OPERATION_TYPE_OVER_COM"] = 59] = "OPERATION_TYPE_OVER_COM";
    /** Доход от оверанайта */
    OperationType[OperationType["OPERATION_TYPE_OVER_INCOME"] = 60] = "OPERATION_TYPE_OVER_INCOME";
    /** Экспирация */
    OperationType[OperationType["OPERATION_TYPE_OPTION_EXPIRATION"] = 61] = "OPERATION_TYPE_OPTION_EXPIRATION";
})(OperationType || (exports.OperationType = OperationType = {}));
/**
 * Запрос валют
 * @see https://tinkoff.github.io/investAPI/operations/#positionsaccountsubscriptionstatus
 */
var PortfolioRequestCurrencyRequest;
(function (PortfolioRequestCurrencyRequest) {
    /** Рубли */
    PortfolioRequestCurrencyRequest[PortfolioRequestCurrencyRequest["RUB"] = 0] = "RUB";
    /** Доллары */
    PortfolioRequestCurrencyRequest[PortfolioRequestCurrencyRequest["USD"] = 1] = "USD";
    /** Евро */
    PortfolioRequestCurrencyRequest[PortfolioRequestCurrencyRequest["EUR"] = 2] = "EUR";
})(PortfolioRequestCurrencyRequest || (exports.PortfolioRequestCurrencyRequest = PortfolioRequestCurrencyRequest = {}));
/**
 * Сервис предназначен для получения:
 * 1. списка операций по счёту;
 * 2. портфеля по счёту;
 * 3. позиций ценных бумаг на счёте;
 * 4. доступного остатка для вывода средств;
 * 5. получения различных отчётов.
 * @see https://tinkoff.github.io/investAPI/operations/#operationsservice
 */
class OperationsService extends _1.Common {
    /**
     * Метод получения списка операций по счёту
     * ```js
     * import { OperationsService, OperationState } from '@tomasevich/tinkoff'
     *
     * const operationsService = new OperationsService('<TOKEN>', true)
     * const { operations } = await operationsService.GetOperations({
     *  accountId: '<ACCOUNT_ID>',
     *  from: '2023-07-18T00:00:00:000Z',
     *  to: '2023-08-19T00:00:00:000Z',
     *  state: OperationState.OPERATION_STATE_CANCELED,
     *  figi: 'BBG00YTS96G2'
     * })
     *
     * console.log(operations)
     * ```
     * @description При работе с данным методом необходимо учитывать особенности взаимодействия с данным методом
     * @see https://tinkoff.github.io/investAPI/operations/#getoperations
     */
    GetOperations(body) {
        return this.request('OperationsService', 'OperationsResponse', body);
    }
    /**
     * Метод получения портфеля по счёту
     * ```js
     * import { OperationsService, PortfolioRequestCurrencyRequest } from '@tomasevich/tinkoff'
     *
     * const operationsService = new OperationsService('<TOKEN>', true)
     * const portfolio = await operationsService.GetPortfolio({
     *  accountId: '<ACCOUNT_ID>',,
     *  currency: PortfolioRequestCurrencyRequest.RUB
     * })
     *
     * console.log(portfolio)
     * ```
     * @see https://tinkoff.github.io/investAPI/operations/#getportfolio
     */
    GetPortfolio(body) {
        return this.request('OperationsService', 'PortfolioResponse', body);
    }
    /**
     * Метод получения списка позиций по счёту
     * ```js
     * import { OperationsService } from '@tomasevich/tinkoff'
     *
     * const operationsService = new OperationsService('<TOKEN>', true)
     * const positions = await operationsService.GetPositions({
     *  accountId: '<ACCOUNT_ID>'
     * })
     *
     * console.log(positions)
     * ```
     * @see https://tinkoff.github.io/investAPI/operations/#getpositions
     */
    GetPositions(body) {
        return this.request('OperationsService', 'PositionsResponse', body);
    }
    /**
     * Метод получения доступного остатка для вывода средств
     * ```js
     * import { OperationsService } from '@tomasevich/tinkoff'
     *
     * const operationsService = new OperationsService('<TOKEN>', true)
     * const withdrawLimits = await operationsService.GetWithdrawLimits({
     *  accountId: '<ACCOUNT_ID>'
     * })
     *
     * console.log(withdrawLimits)
     * ```
     * @see https://tinkoff.github.io/investAPI/operations/#getwithdrawlimits
     */
    GetWithdrawLimits(body) {
        return this.request('OperationsService', 'WithdrawLimitsResponse', body);
    }
    /**
     * Метод получения брокерского отчёта
     * ```js
     * import { OperationsService } from '@tomasevich/tinkoff'
     *
     * const operationsService = new OperationsService('<TOKEN>', true)
     * const brokerReport = await operationsService.GetBrokerReport({
     *  generateBrokerReportRequest: {
     *    accountId: '<ACCOUNT_ID>',
     *    from: '2023-07-18T00:00:00:000Z',
     *    to: '2023-08-19T00:00:00:000Z'
     *  },
     *  getBrokerReportRequest: { taskId: '', page: 0 }
     * })
     *
     * console.log(brokerReport)
     * ```
     * @see https://tinkoff.github.io/investAPI/operations/#getbrokerreport
     */
    GetBrokerReport(body) {
        return this.request('OperationsService', 'BrokerReportResponse', body);
    }
    /**
     * Метод получения отчёта "Справка о доходах за пределами РФ"
     * ```js
     * import { OperationsService } from '@tomasevich/tinkoff'
     *
     * const operationsService = new OperationsService('<TOKEN>', true)
     * const dividendsForeignIssuer = await operationsService.GetDividendsForeignIssuer({
     *  generateDivForeignIssuerReport: {
     *    accountId: '<ACCOUNT_ID>',
     *    from: '2023-07-18T00:00:00:000Z',
     *    to: '2023-08-19T00:00:00:000Z'
     *  },
     *  getDivForeignIssuerReport: { taskId: '', page: 0 }
     * })
     *
     * console.log(dividendsForeignIssuer)
     * ```
     * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuer
     */
    GetDividendsForeignIssuer(body) {
        return this.request('OperationsService', 'GetDividendsForeignIssuerResponse', body);
    }
    /**
     * Метод получения списка операций по счёту с пагинацией
     * ```js
     * import { OperationsService, OperationState, OperationType } from '@tomasevich/tinkoff'
     *
     * const operationsService = new OperationsService('<TOKEN>', true)
     * const operationsByCursor = await operationsService.GetOperationsByCursor({
     *  accountId: '<ACCOUNT_ID>',
     *  instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76',
     *  from: '2023-07-18T00:00:00:000Z',
     *  to: '2023-08-19T00:00:00:000Z',
     *  cursor: '',
     *  limit: 10,
     *  state: OperationState.OPERATION_STATE_CANCELED,
     *  operationTypes: [
     *    OperationType.OPERATION_TYPE_BUY,
     *    OperationType.OPERATION_TYPE_SELL
     *  ],
     *  withoutCommissions: false,
     *  withoutTrades: false,
     *  withoutOvernights: false
     * })
     *
     * console.log(operationsByCursor)
     * ```
     * @description При работе с данным методом необходимо учитывать особенности взаимодействия с данным методом
     * @see https://tinkoff.github.io/investAPI/operations/#getoperationsbycursor
     */
    GetOperationsByCursor(body) {
        return this.request('OperationsService', 'GetOperationsByCursorResponse', body);
    }
}
exports.OperationsService = OperationsService;
