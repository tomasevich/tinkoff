"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationsService = exports.PortfolioRequestCurrencyRequest = exports.OperationType = exports.OperationState = void 0;
const Common_1 = require("./Common");
var OperationState;
(function (OperationState) {
    OperationState[OperationState["OPERATION_STATE_UNSPECIFIED"] = 0] = "OPERATION_STATE_UNSPECIFIED";
    OperationState[OperationState["OPERATION_STATE_EXECUTED"] = 1] = "OPERATION_STATE_EXECUTED";
    OperationState[OperationState["OPERATION_STATE_CANCELED"] = 2] = "OPERATION_STATE_CANCELED";
    OperationState[OperationState["OPERATION_STATE_PROGRESS"] = 3] = "OPERATION_STATE_PROGRESS";
})(OperationState || (exports.OperationState = OperationState = {}));
var OperationType;
(function (OperationType) {
    OperationType[OperationType["OPERATION_TYPE_UNSPECIFIED"] = 0] = "OPERATION_TYPE_UNSPECIFIED";
    OperationType[OperationType["OPERATION_TYPE_INPUT"] = 1] = "OPERATION_TYPE_INPUT";
    OperationType[OperationType["OPERATION_TYPE_BOND_TAX"] = 2] = "OPERATION_TYPE_BOND_TAX";
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_SECURITIES"] = 3] = "OPERATION_TYPE_OUTPUT_SECURITIES";
    OperationType[OperationType["OPERATION_TYPE_OVERNIGHT"] = 4] = "OPERATION_TYPE_OVERNIGHT";
    OperationType[OperationType["OPERATION_TYPE_TAX"] = 5] = "OPERATION_TYPE_TAX";
    OperationType[OperationType["OPERATION_TYPE_BOND_REPAYMENT_FULL"] = 6] = "OPERATION_TYPE_BOND_REPAYMENT_FULL";
    OperationType[OperationType["OPERATION_TYPE_SELL_CARD"] = 7] = "OPERATION_TYPE_SELL_CARD";
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TAX"] = 8] = "OPERATION_TYPE_DIVIDEND_TAX";
    OperationType[OperationType["OPERATION_TYPE_OUTPUT"] = 9] = "OPERATION_TYPE_OUTPUT";
    OperationType[OperationType["OPERATION_TYPE_BOND_REPAYMENT"] = 10] = "OPERATION_TYPE_BOND_REPAYMENT";
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION"] = 11] = "OPERATION_TYPE_TAX_CORRECTION";
    OperationType[OperationType["OPERATION_TYPE_SERVICE_FEE"] = 12] = "OPERATION_TYPE_SERVICE_FEE";
    OperationType[OperationType["OPERATION_TYPE_BENEFIT_TAX"] = 13] = "OPERATION_TYPE_BENEFIT_TAX";
    OperationType[OperationType["OPERATION_TYPE_MARGIN_FEE"] = 14] = "OPERATION_TYPE_MARGIN_FEE";
    OperationType[OperationType["OPERATION_TYPE_BUY"] = 15] = "OPERATION_TYPE_BUY";
    OperationType[OperationType["OPERATION_TYPE_BUY_CARD"] = 16] = "OPERATION_TYPE_BUY_CARD";
    OperationType[OperationType["OPERATION_TYPE_INPUT_SECURITIES"] = 17] = "OPERATION_TYPE_INPUT_SECURITIES";
    OperationType[OperationType["OPERATION_TYPE_SELL_MARGIN"] = 18] = "OPERATION_TYPE_SELL_MARGIN";
    OperationType[OperationType["OPERATION_TYPE_BROKER_FEE"] = 19] = "OPERATION_TYPE_BROKER_FEE";
    OperationType[OperationType["OPERATION_TYPE_BUY_MARGIN"] = 20] = "OPERATION_TYPE_BUY_MARGIN";
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND"] = 21] = "OPERATION_TYPE_DIVIDEND";
    OperationType[OperationType["OPERATION_TYPE_SELL"] = 22] = "OPERATION_TYPE_SELL";
    OperationType[OperationType["OPERATION_TYPE_COUPON"] = 23] = "OPERATION_TYPE_COUPON";
    OperationType[OperationType["OPERATION_TYPE_SUCCESS_FEE"] = 24] = "OPERATION_TYPE_SUCCESS_FEE";
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TRANSFER"] = 25] = "OPERATION_TYPE_DIVIDEND_TRANSFER";
    OperationType[OperationType["OPERATION_TYPE_ACCRUING_VARMARGIN"] = 26] = "OPERATION_TYPE_ACCRUING_VARMARGIN";
    OperationType[OperationType["OPERATION_TYPE_WRITING_OFF_VARMARGIN"] = 27] = "OPERATION_TYPE_WRITING_OFF_VARMARGIN";
    OperationType[OperationType["OPERATION_TYPE_DELIVERY_BUY"] = 28] = "OPERATION_TYPE_DELIVERY_BUY";
    OperationType[OperationType["OPERATION_TYPE_DELIVERY_SELL"] = 29] = "OPERATION_TYPE_DELIVERY_SELL";
    OperationType[OperationType["OPERATION_TYPE_TRACK_MFEE"] = 30] = "OPERATION_TYPE_TRACK_MFEE";
    OperationType[OperationType["OPERATION_TYPE_TRACK_PFEE"] = 31] = "OPERATION_TYPE_TRACK_PFEE";
    OperationType[OperationType["OPERATION_TYPE_TAX_PROGRESSIVE"] = 32] = "OPERATION_TYPE_TAX_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_BOND_TAX_PROGRESSIVE"] = 33] = "OPERATION_TYPE_BOND_TAX_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE"] = 34] = "OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE"] = 35] = "OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE"] = 36] = "OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_PROGRESSIVE"] = 37] = "OPERATION_TYPE_TAX_REPO_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO"] = 38] = "OPERATION_TYPE_TAX_REPO";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_HOLD"] = 39] = "OPERATION_TYPE_TAX_REPO_HOLD";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_REFUND"] = 40] = "OPERATION_TYPE_TAX_REPO_REFUND";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE"] = 41] = "OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE"] = 42] = "OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE";
    OperationType[OperationType["OPERATION_TYPE_DIV_EXT"] = 43] = "OPERATION_TYPE_DIV_EXT";
    OperationType[OperationType["OPERATION_TYPE_TAX_CORRECTION_COUPON"] = 44] = "OPERATION_TYPE_TAX_CORRECTION_COUPON";
    OperationType[OperationType["OPERATION_TYPE_CASH_FEE"] = 45] = "OPERATION_TYPE_CASH_FEE";
    OperationType[OperationType["OPERATION_TYPE_OUT_FEE"] = 46] = "OPERATION_TYPE_OUT_FEE";
    OperationType[OperationType["OPERATION_TYPE_OUT_STAMP_DUTY"] = 47] = "OPERATION_TYPE_OUT_STAMP_DUTY";
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_SWIFT"] = 48] = "OPERATION_TYPE_OUTPUT_SWIFT";
    OperationType[OperationType["OPERATION_TYPE_INPUT_SWIFT"] = 49] = "OPERATION_TYPE_INPUT_SWIFT";
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_ACQUIRING"] = 50] = "OPERATION_TYPE_OUTPUT_ACQUIRING";
    OperationType[OperationType["OPERATION_TYPE_INPUT_ACQUIRING"] = 51] = "OPERATION_TYPE_INPUT_ACQUIRING";
    OperationType[OperationType["OPERATION_TYPE_OUTPUT_PENALTY"] = 52] = "OPERATION_TYPE_OUTPUT_PENALTY";
    OperationType[OperationType["OPERATION_TYPE_ADVICE_FEE"] = 53] = "OPERATION_TYPE_ADVICE_FEE";
    OperationType[OperationType["OPERATION_TYPE_TRANS_IIS_BS"] = 54] = "OPERATION_TYPE_TRANS_IIS_BS";
    OperationType[OperationType["OPERATION_TYPE_TRANS_BS_BS"] = 55] = "OPERATION_TYPE_TRANS_BS_BS";
    OperationType[OperationType["OPERATION_TYPE_OUT_MULTI"] = 56] = "OPERATION_TYPE_OUT_MULTI";
    OperationType[OperationType["OPERATION_TYPE_INP_MULTI"] = 57] = "OPERATION_TYPE_INP_MULTI";
    OperationType[OperationType["OPERATION_TYPE_OVER_PLACEMENT"] = 58] = "OPERATION_TYPE_OVER_PLACEMENT";
    OperationType[OperationType["OPERATION_TYPE_OVER_COM"] = 59] = "OPERATION_TYPE_OVER_COM";
    OperationType[OperationType["OPERATION_TYPE_OVER_INCOME"] = 60] = "OPERATION_TYPE_OVER_INCOME";
    OperationType[OperationType["OPERATION_TYPE_OPTION_EXPIRATION"] = 61] = "OPERATION_TYPE_OPTION_EXPIRATION";
})(OperationType || (exports.OperationType = OperationType = {}));
var PortfolioRequestCurrencyRequest;
(function (PortfolioRequestCurrencyRequest) {
    PortfolioRequestCurrencyRequest[PortfolioRequestCurrencyRequest["RUB"] = 0] = "RUB";
    PortfolioRequestCurrencyRequest[PortfolioRequestCurrencyRequest["USD"] = 1] = "USD";
    PortfolioRequestCurrencyRequest[PortfolioRequestCurrencyRequest["EUR"] = 2] = "EUR";
})(PortfolioRequestCurrencyRequest || (exports.PortfolioRequestCurrencyRequest = PortfolioRequestCurrencyRequest = {}));
class OperationsService extends Common_1.Common {
    GetOperations(body) {
        return this.request('OperationsService', 'OperationsResponse', body);
    }
    GetPortfolio(body) {
        return this.request('OperationsService', 'PortfolioResponse', body);
    }
    GetPositions(body) {
        return this.request('OperationsService', 'PositionsResponse', body);
    }
    GetWithdrawLimits(body) {
        return this.request('OperationsService', 'WithdrawLimitsResponse', body);
    }
    GetBrokerReport(body) {
        return this.request('OperationsService', 'BrokerReportResponse', body);
    }
    GetDividendsForeignIssuer(body) {
        return this.request('OperationsService', 'GetDividendsForeignIssuerResponse', body);
    }
    GetOperationsByCursor(body) {
        return this.request('OperationsService', 'GetOperationsByCursorResponse', body);
    }
}
exports.OperationsService = OperationsService;
