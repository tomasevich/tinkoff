import { Common, MoneyValue, Quotation } from './Common';
import { InstrumentType } from './InstrumentsService';
export declare enum OperationState {
    OPERATION_STATE_UNSPECIFIED = 0,
    OPERATION_STATE_EXECUTED = 1,
    OPERATION_STATE_CANCELED = 2,
    OPERATION_STATE_PROGRESS = 3
}
export declare enum OperationType {
    OPERATION_TYPE_UNSPECIFIED = 0,
    OPERATION_TYPE_INPUT = 1,
    OPERATION_TYPE_BOND_TAX = 2,
    OPERATION_TYPE_OUTPUT_SECURITIES = 3,
    OPERATION_TYPE_OVERNIGHT = 4,
    OPERATION_TYPE_TAX = 5,
    OPERATION_TYPE_BOND_REPAYMENT_FULL = 6,
    OPERATION_TYPE_SELL_CARD = 7,
    OPERATION_TYPE_DIVIDEND_TAX = 8,
    OPERATION_TYPE_OUTPUT = 9,
    OPERATION_TYPE_BOND_REPAYMENT = 10,
    OPERATION_TYPE_TAX_CORRECTION = 11,
    OPERATION_TYPE_SERVICE_FEE = 12,
    OPERATION_TYPE_BENEFIT_TAX = 13,
    OPERATION_TYPE_MARGIN_FEE = 14,
    OPERATION_TYPE_BUY = 15,
    OPERATION_TYPE_BUY_CARD = 16,
    OPERATION_TYPE_INPUT_SECURITIES = 17,
    OPERATION_TYPE_SELL_MARGIN = 18,
    OPERATION_TYPE_BROKER_FEE = 19,
    OPERATION_TYPE_BUY_MARGIN = 20,
    OPERATION_TYPE_DIVIDEND = 21,
    OPERATION_TYPE_SELL = 22,
    OPERATION_TYPE_COUPON = 23,
    OPERATION_TYPE_SUCCESS_FEE = 24,
    OPERATION_TYPE_DIVIDEND_TRANSFER = 25,
    OPERATION_TYPE_ACCRUING_VARMARGIN = 26,
    OPERATION_TYPE_WRITING_OFF_VARMARGIN = 27,
    OPERATION_TYPE_DELIVERY_BUY = 28,
    OPERATION_TYPE_DELIVERY_SELL = 29,
    OPERATION_TYPE_TRACK_MFEE = 30,
    OPERATION_TYPE_TRACK_PFEE = 31,
    OPERATION_TYPE_TAX_PROGRESSIVE = 32,
    OPERATION_TYPE_BOND_TAX_PROGRESSIVE = 33,
    OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE = 34,
    OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE = 35,
    OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE = 36,
    OPERATION_TYPE_TAX_REPO_PROGRESSIVE = 37,
    OPERATION_TYPE_TAX_REPO = 38,
    OPERATION_TYPE_TAX_REPO_HOLD = 39,
    OPERATION_TYPE_TAX_REPO_REFUND = 40,
    OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE = 41,
    OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE = 42,
    OPERATION_TYPE_DIV_EXT = 43,
    OPERATION_TYPE_TAX_CORRECTION_COUPON = 44,
    OPERATION_TYPE_CASH_FEE = 45,
    OPERATION_TYPE_OUT_FEE = 46,
    OPERATION_TYPE_OUT_STAMP_DUTY = 47,
    OPERATION_TYPE_OUTPUT_SWIFT = 48,
    OPERATION_TYPE_INPUT_SWIFT = 49,
    OPERATION_TYPE_OUTPUT_ACQUIRING = 50,
    OPERATION_TYPE_INPUT_ACQUIRING = 51,
    OPERATION_TYPE_OUTPUT_PENALTY = 52,
    OPERATION_TYPE_ADVICE_FEE = 53,
    OPERATION_TYPE_TRANS_IIS_BS = 54,
    OPERATION_TYPE_TRANS_BS_BS = 55,
    OPERATION_TYPE_OUT_MULTI = 56,
    OPERATION_TYPE_INP_MULTI = 57,
    OPERATION_TYPE_OVER_PLACEMENT = 58,
    OPERATION_TYPE_OVER_COM = 59,
    OPERATION_TYPE_OVER_INCOME = 60,
    OPERATION_TYPE_OPTION_EXPIRATION = 61
}
export declare enum PortfolioRequestCurrencyRequest {
    RUB = 0,
    USD = 1,
    EUR = 2
}
export interface Operation {
    id: string;
    parentOperationId: string;
    currency: string;
    payment: MoneyValue;
    price: MoneyValue;
    state: OperationState;
    quantity: string;
    quantityRest: string;
    figi: string;
    instrumentType: string;
    date: string;
    type: string;
    operationType: OperationType;
    trades: OperationTrade[];
    assetUid: string;
    positionUid: string;
    instrumentUid: string;
}
export interface OperationTrade {
    tradeId: string;
    dateTime: string;
    quantity: string;
    price: MoneyValue;
}
export interface OperationsRequest {
    accountId: string;
    from: string;
    to: string;
    state: OperationState;
    figi: string;
}
export interface OperationsResponse {
    operations: Operation[];
}
export interface PortfolioRequest {
    accountId: string;
    currency: PortfolioRequestCurrencyRequest;
}
export interface PortfolioResponse {
    totalAmountShares: MoneyValue;
    totalAmountBonds: MoneyValue;
    totalAmountEtf: MoneyValue;
    totalAmountCurrencies: MoneyValue;
    totalAmountFutures: MoneyValue;
    expectedYield: Quotation;
    positions: PortfolioPosition[];
    accountId: string;
    totalAmountOptions: MoneyValue;
    totalAmountSp: MoneyValue;
    totalAmountPortfolio: MoneyValue;
    virtualPositions: VirtualPortfolioPosition[];
}
export interface PortfolioPosition {
    figi: string;
    instrumentType: string;
    quantity: Quotation;
    averagePositionPrice: MoneyValue;
    expectedYield: Quotation;
    currentNkd: MoneyValue;
    averagePositionPricePt: Quotation;
    currentPrice: MoneyValue;
    averagePositionPriceFifo: MoneyValue;
    quantityLots: Quotation;
    blocked: boolean;
    blockedLots: Quotation;
    positionUid: string;
    instrumentUid: string;
    varMargin: MoneyValue;
    expectedYieldFifo: Quotation;
}
export interface VirtualPortfolioPosition {
    positionUid: string;
    instrumentUid: string;
    figi: string;
    instrumentType: string;
    quantity: Quotation;
    averagePositionPrice: MoneyValue;
    expectedYield: Quotation;
    expectedYieldFifo: Quotation;
    expireDate: string;
    currentPrice: MoneyValue;
    averagePositionPriceFifo: MoneyValue;
}
export interface PositionsSecurities {
    figi: string;
    blocked: string;
    balance: string;
    positionUid: string;
    instrumentUid: string;
    exchangeBlocked: boolean;
    instrumentType: string;
}
export interface PositionsFutures {
    figi: string;
    blocked: string;
    balance: string;
    positionUid: string;
    instrumentUid: string;
}
export interface PositionsOptions {
    positionUid: string;
    instrumentUid: string;
    blocked: string;
    balance: string;
}
export interface PositionsRequest {
    accountId: string;
}
export interface PositionsResponse {
    money: MoneyValue[];
    blocked: MoneyValue[];
    securities: PositionsSecurities[];
    limitsLoadingInProgress: boolean;
    futures: PositionsFutures[];
    options: PositionsOptions[];
}
export interface WithdrawLimitsRequest {
    accountId: string;
}
export interface WithdrawLimitsResponse {
    money: MoneyValue[];
    blocked: MoneyValue[];
    blockedGuarantee: MoneyValue[];
}
export interface GenerateBrokerReportRequest {
    accountId: string;
    from: string;
    to: string;
}
export interface GenerateBrokerReportResponse {
    taskId: string;
}
export interface BrokerReportRequest {
    generateBrokerReportRequest: GenerateBrokerReportRequest;
    getBrokerReportRequest: GetBrokerReportRequest;
}
export interface BrokerReportResponse {
    generateBrokerReportResponse: GenerateBrokerReportResponse;
    getBrokerReportResponse: GetBrokerReportResponse;
}
export interface GetBrokerReportRequest {
    taskId: string;
    page: number;
}
export interface GetBrokerReportResponse {
    brokerReport: BrokerReport[];
    itemsCount: number;
    pagesCount: number;
    page: number;
}
export interface BrokerReport {
    tradeId: string;
    orderId: string;
    figi: string;
    executeSign: string;
    tradeDatetime: string;
    exchange: string;
    classCode: string;
    direction: string;
    name: string;
    ticker: string;
    price: MoneyValue;
    quantity: string;
    orderAmount: MoneyValue;
    aciValue: Quotation;
    totalOrderAmount: MoneyValue;
    brokerCommission: MoneyValue;
    exchangeCommission: MoneyValue;
    exchangeClearingCommission: MoneyValue;
    repoRate: Quotation;
    party: string;
    clearValueDate: string;
    secValueDate: string;
    brokerStatus: string;
    separateAgreementType: string;
    separateAgreementNumber: string;
    separateAgreementDate: string;
    deliveryType: string;
}
export interface GetDividendsForeignIssuerRequest {
    generateDivForeignIssuerReport: GenerateDividendsForeignIssuerReportRequest;
    getDivForeignIssuerReport: GetDividendsForeignIssuerReportRequest;
}
export interface GetDividendsForeignIssuerResponse {
    generateDivForeignIssuerReportResponse: GenerateDividendsForeignIssuerReportResponse;
    divForeignIssuerReport: GetDividendsForeignIssuerReportResponse;
}
export interface GenerateDividendsForeignIssuerReportRequest {
    accountId: string;
    from: string;
    to: string;
}
export interface GetDividendsForeignIssuerReportRequest {
    taskId: string;
    page: number;
}
export interface GenerateDividendsForeignIssuerReportResponse {
    taskId: string;
}
export interface GetDividendsForeignIssuerReportResponse {
    dividendsForeignIssuerReport: DividendsForeignIssuerReport[];
    itemsCount: number;
    pagesCount: number;
    page: number;
}
export interface DividendsForeignIssuerReport {
    recordDate: string;
    paymentDate: string;
    securityName: string;
    isin: string;
    issuerCountry: string;
    quantity: string;
    dividend: Quotation;
    externalCommission: Quotation;
    dividendGross: Quotation;
    tax: Quotation;
    dividendAmount: Quotation;
    currency: string;
}
export interface GetOperationsByCursorRequest {
    accountId: string;
    instrumentId: string;
    from: string;
    to: string;
    cursor: string;
    limit: number;
    operationTypes: OperationType[];
    state: OperationState;
    withoutCommissions: boolean;
    withoutTrades: boolean;
    withoutOvernights: boolean;
}
export interface GetOperationsByCursorResponse {
    hasNext: boolean;
    nextCursor: string;
    items: OperationItem[];
}
export interface OperationItem {
    cursor: string;
    brokerAccountId: string;
    id: string;
    parentOperationId: string;
    name: string;
    date: string;
    type: OperationType;
    description: string;
    state: OperationState;
    instrumentUid: string;
    figi: string;
    instrumentType: string;
    instrumentKind: InstrumentType;
    positionUid: string;
    payment: MoneyValue;
    price: MoneyValue;
    commission: MoneyValue;
    yield: MoneyValue;
    yieldRelative: Quotation;
    accruedInt: MoneyValue;
    quantity: string;
    quantityRest: string;
    quantityDone: string;
    cancelDateTime: string;
    cancelReason: string;
    tradesInfo: OperationItemTrades;
    assetUid: string;
}
export interface OperationItemTrades {
    trades: OperationItemTrade[];
}
export interface OperationItemTrade {
    num: string;
    date: string;
    quantity: string;
    price: MoneyValue;
    yield: MoneyValue;
    yieldRelative: Quotation;
}
export interface PositionData {
    accountId: string;
    money: PositionsMoney[];
    securities: PositionsSecurities[];
    futures: PositionsFutures[];
    options: PositionsOptions[];
    date: string;
}
export interface PositionsMoney {
    availableValue: MoneyValue;
    blockedValue: MoneyValue;
}
export declare class OperationsService extends Common {
    GetOperations(body: OperationsRequest): Promise<OperationsResponse>;
    GetPortfolio(body: PortfolioRequest): Promise<PortfolioResponse>;
    GetPositions(body: PositionsRequest): Promise<PositionsResponse>;
    GetWithdrawLimits(body: WithdrawLimitsRequest): Promise<WithdrawLimitsResponse>;
    GetBrokerReport(body: BrokerReportRequest): Promise<BrokerReportResponse>;
    GetDividendsForeignIssuer(body: GetDividendsForeignIssuerRequest): Promise<GetDividendsForeignIssuerResponse>;
    GetOperationsByCursor(body: GetOperationsByCursorRequest): Promise<GetOperationsByCursorResponse>;
}
