import { Common, MoneyValue } from './Common'

export enum OperationState {
  OPERATION_STATE_UNSPECIFIED,
  OPERATION_STATE_EXECUTED,
  OPERATION_STATE_CANCELED,
  OPERATION_STATE_PROGRESS
}

export enum OperationType {
  OPERATION_TYPE_UNSPECIFIED,
  OPERATION_TYPE_INPUT,
  OPERATION_TYPE_BOND_TAX,
  OPERATION_TYPE_OUTPUT_SECURITIES,
  OPERATION_TYPE_OVERNIGHT,
  OPERATION_TYPE_TAX,
  OPERATION_TYPE_BOND_REPAYMENT_FULL,
  OPERATION_TYPE_SELL_CARD,
  OPERATION_TYPE_DIVIDEND_TAX,
  OPERATION_TYPE_OUTPUT,
  OPERATION_TYPE_BOND_REPAYMENT,
  OPERATION_TYPE_TAX_CORRECTION,
  OPERATION_TYPE_SERVICE_FEE,
  OPERATION_TYPE_BENEFIT_TAX,
  OPERATION_TYPE_MARGIN_FEE,
  OPERATION_TYPE_BUY,
  OPERATION_TYPE_BUY_CARD,
  OPERATION_TYPE_INPUT_SECURITIES,
  OPERATION_TYPE_SELL_MARGIN,
  OPERATION_TYPE_BROKER_FEE,
  OPERATION_TYPE_BUY_MARGIN,
  OPERATION_TYPE_DIVIDEND,
  OPERATION_TYPE_SELL,
  OPERATION_TYPE_COUPON,
  OPERATION_TYPE_SUCCESS_FEE,
  OPERATION_TYPE_DIVIDEND_TRANSFER,
  OPERATION_TYPE_ACCRUING_VARMARGIN,
  OPERATION_TYPE_WRITING_OFF_VARMARGIN,
  OPERATION_TYPE_DELIVERY_BUY,
  OPERATION_TYPE_DELIVERY_SELL,
  OPERATION_TYPE_TRACK_MFEE,
  OPERATION_TYPE_TRACK_PFEE,
  OPERATION_TYPE_TAX_PROGRESSIVE,
  OPERATION_TYPE_BOND_TAX_PROGRESSIVE,
  OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE,
  OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE,
  OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE,
  OPERATION_TYPE_TAX_REPO_PROGRESSIVE,
  OPERATION_TYPE_TAX_REPO,
  OPERATION_TYPE_TAX_REPO_HOLD,
  OPERATION_TYPE_TAX_REPO_REFUND,
  OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE,
  OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE,
  OPERATION_TYPE_DIV_EXT,
  OPERATION_TYPE_TAX_CORRECTION_COUPON,
  OPERATION_TYPE_CASH_FEE,
  OPERATION_TYPE_OUT_FEE,
  OPERATION_TYPE_OUT_STAMP_DUTY,
  OPERATION_TYPE_OUTPUT_SWIFT,
  OPERATION_TYPE_INPUT_SWIFT,
  OPERATION_TYPE_OUTPUT_ACQUIRING,
  OPERATION_TYPE_INPUT_ACQUIRING,
  OPERATION_TYPE_OUTPUT_PENALTY,
  OPERATION_TYPE_ADVICE_FEE,
  OPERATION_TYPE_TRANS_IIS_BS,
  OPERATION_TYPE_TRANS_BS_BS,
  OPERATION_TYPE_OUT_MULTI,
  OPERATION_TYPE_INP_MULTI,
  OPERATION_TYPE_OVER_PLACEMENT,
  OPERATION_TYPE_OVER_COM,
  OPERATION_TYPE_OVER_INCOME,
  OPERATION_TYPE_OPTION_EXPIRATION
}

export interface OperationTrade {
  tradeId: string
  dateTime: string
  quantity: string
  price: MoneyValue
}

export interface Operation {
  id: string
  parentOperationId: string
  currency: string
  payment: MoneyValue
  price: MoneyValue
  state: OperationState
  quantity: string
  quantityRest: string
  figi: string
  instrumentType: string
  date: string
  type: string
  operationType: OperationType
  trades: OperationTrade
  assetUid: string
  positionUid: string
  instrumentUid: string
}

export interface OperationsRequest {
  accountId: string
  from: string
  to: string
  state: OperationState
  figi: string
}

export interface OperationsResponse {
  operations: Operation[]
}

export interface PortfolioRequest {}

export interface PortfolioResponse {}

export interface PositionsSecurities {
  figi: string
  blocked: string
  balance: string
  positionUid: string
  instrumentUid: string
  exchangeBlocked: boolean
  instrumentType: string
}

export interface PositionsFutures {
  figi: string
  blocked: string
  balance: string
  positionUid: string
  instrumentUid: string
}

export interface PositionsOptions {
  blocked: string
  balance: string
  positionUid: string
  instrumentUid: string
}

export interface PositionsRequest {
  accountId: string
}

export interface PositionsResponse {
  money: MoneyValue[]
  blocked: MoneyValue[]
  securities: PositionsSecurities[]
  limitsLoadingInProgress: boolean
  futures: PositionsFutures[]
  options: PositionsOptions[]
}

export interface WithdrawLimitsRequest {}

export interface WithdrawLimitsResponse {}

export interface BrokerReportRequest {}

export interface BrokerReportResponse {}

export interface GetDividendsForeignIssuerRequest {}

export interface GetDividendsForeignIssuerResponse {}

export interface GetOperationsByCursorRequest {}

export interface GetOperationsByCursorResponse {}

/**
 * Сервис предназначен для получения:
 * 1. списка операций по счёту;
 * 2. портфеля по счёту;
 * 3. позиций ценных бумаг на счёте;
 * 4. доступного остатка для вывода средств;
 * 5. получения различных отчётов.
 * @see https://tinkoff.github.io/investAPI/operations/#operationsservice
 */
export class OperationsService extends Common {
  /**
   * Метод получения списка операций по счёту
   * @description При работе с данным методом необходимо учитывать особенности взаимодействия с данным методом
   * @see https://tinkoff.github.io/investAPI/operations/#getoperations
   */
  public GetOperations(body: OperationsRequest): Promise<OperationsResponse> {
    return this.request('OperationsService', 'OperationsResponse', body)
  }

  /**
   * Метод получения портфеля по счёту
   * @see https://tinkoff.github.io/investAPI/operations/#getportfolio
   */
  public GetPortfolio(body: PortfolioRequest): Promise<PortfolioResponse> {
    return this.request('OperationsService', 'PortfolioResponse', body)
  }

  /**
   * Метод получения списка позиций по счёту
   * @see https://tinkoff.github.io/investAPI/operations/#getpositions
   */
  public GetPositions(body: PositionsRequest): Promise<PositionsResponse> {
    return this.request('OperationsService', 'PositionsResponse', body)
  }

  /**
   * Метод получения доступного остатка для вывода средств
   * @see https://tinkoff.github.io/investAPI/operations/#getwithdrawlimits
   */
  public GetWithdrawLimits(
    body: WithdrawLimitsRequest
  ): Promise<WithdrawLimitsResponse> {
    return this.request('OperationsService', 'WithdrawLimitsResponse', body)
  }

  /**
   * Метод получения брокерского отчёта
   * @see https://tinkoff.github.io/investAPI/operations/#getbrokerreport
   */
  public GetBrokerReport(
    body: BrokerReportRequest
  ): Promise<BrokerReportResponse> {
    return this.request('OperationsService', 'BrokerReportResponse', body)
  }

  /**
   * Метод получения отчёта "Справка о доходах за пределами РФ"
   * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuer
   */
  public GetDividendsForeignIssuer(
    body: GetDividendsForeignIssuerRequest
  ): Promise<GetDividendsForeignIssuerResponse> {
    return this.request(
      'OperationsService',
      'GetDividendsForeignIssuerResponse',
      body
    )
  }

  /**
   * Метод получения списка операций по счёту с пагинацией
   * @description При работе с данным методом необходимо учитывать особенности взаимодействия с данным методом
   * @see https://tinkoff.github.io/investAPI/operations/#getoperationsbycursor
   */
  public GetOperationsByCursor(
    body: GetOperationsByCursorRequest
  ): Promise<GetOperationsByCursorResponse> {
    return this.request(
      'OperationsService',
      'GetOperationsByCursorResponse',
      body
    )
  }
}
