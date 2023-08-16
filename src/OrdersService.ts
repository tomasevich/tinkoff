import { Common, MoneyValue, Quotation } from './Common'

export enum OrderDirection {
  ORDER_DIRECTION_UNSPECIFIED,
  ORDER_DIRECTION_BUY,
  ORDER_DIRECTION_SELL
}

export enum OrderType {
  ORDER_TYPE_UNSPECIFIED,
  ORDER_TYPE_LIMIT,
  ORDER_TYPE_MARKET,
  ORDER_TYPE_BESTPRICE
}

export enum OrderExecutionReportStatus {
  EXECUTION_REPORT_STATUS_UNSPECIFIED,
  EXECUTION_REPORT_STATUS_FILL,
  EXECUTION_REPORT_STATUS_REJECTED,
  EXECUTION_REPORT_STATUS_CANCELLED,
  EXECUTION_REPORT_STATUS_NEW,
  EXECUTION_REPORT_STATUS_PARTIALLYFILL
}

export interface OrderStage {
  price: MoneyValue
  quantity: string
  tradeId: string
}

export interface OrderState {
  orderId: string
  executionReportStatus: OrderExecutionReportStatus
  lotsRequested: string
  lotsExecuted: string
  initialOrderPrice: MoneyValue
  executedOrderPrice: MoneyValue
  totalOrderAmount: MoneyValue
  averagePositionPrice: MoneyValue
  initialCommission: MoneyValue
  executedCommission: MoneyValue
  figi: string
  direction: OrderDirection
  initialSecurityPrice: MoneyValue
  stages: OrderStage[]
  serviceCommission: MoneyValue
  currency: string
  orderType: OrderType
  orderDate: string
  instrumentUid: string
  orderRequestId: string
}

export interface PostOrderRequest {
  figi?: string
  quantity: string
  price: Quotation
  direction: OrderDirection
  accountId: string
  orderType: OrderType
  orderId: string
  instrumentId: string
}

export interface PostOrderResponse {
  orderId: string
  executionReportStatus: OrderExecutionReportStatus
  lotsRequested: string
  lotsExecuted: string
  initialOrderPrice: MoneyValue
  executedOrderPrice: MoneyValue
  totalOrderAmount: MoneyValue
  initialCommission: MoneyValue
  executedCommission: MoneyValue
  aciValue: MoneyValue
  figi: string
  direction: OrderDirection
  initialSecurityPrice: MoneyValue
  orderType: OrderType
  message: string
  initialOrderPricePt: Quotation
  instrumentUid: string
}

export interface CancelOrderRequest {}

export interface CancelOrderResponse {}

export interface GetOrderStateRequest {}

export interface OrderState {}

export interface GetOrdersRequest {
  accountId: string
}

export interface GetOrdersResponse {
  orders: OrderState[]
}

export interface ReplaceOrderRequest {}

export interface PostOrderResponse {}

/**
 * Сервис предназначен для работы с торговыми поручениями:
 * 1. выставление;
 * 2. отмена;
 * 3. получение статуса;
 * 4. расчёт полной стоимости;
 * 5. получение списка заявок.
 * @see https://tinkoff.github.io/investAPI/orders/#ordersservice
 */
export class OrdersService extends Common {
  /**
   * Метод выставления заявки
   * @see https://tinkoff.github.io/investAPI/orders/#postorder
   */
  public PostOrder(body: PostOrderRequest): Promise<PostOrderResponse> {
    return this.request('OrdersService', 'PostOrder', body)
  }

  /**
   * Метод отмены биржевой заявки
   * @see https://tinkoff.github.io/investAPI/orders/#cancelorder
   */
  public CancelOrder(body: CancelOrderRequest): Promise<CancelOrderResponse> {
    return this.request('OrdersService', 'CancelOrder', body)
  }

  /**
   * Метод получения статуса торгового поручения
   * @see https://tinkoff.github.io/investAPI/orders/#getorderstate
   */
  public GetOrderState(body: GetOrderStateRequest): Promise<OrderState> {
    return this.request('OrdersService', 'GetOrderState', body)
  }

  /**
   * Метод получения списка активных заявок по счёту
   * @see https://tinkoff.github.io/investAPI/orders/#getorders
   */
  public GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse> {
    return this.request('OrdersService', 'GetOrders', body)
  }

  /**
   * Метод изменения выставленной заявки
   * @see https://tinkoff.github.io/investAPI/orders/#replaceorder
   */
  public ReplaceOrder(body: ReplaceOrderRequest): Promise<PostOrderResponse> {
    return this.request('OrdersService', 'ReplaceOrder', body)
  }
}
