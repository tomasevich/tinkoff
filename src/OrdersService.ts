import { Common, MoneyValue, Quotation } from './Common'

export enum OrderDirection {
  ORDER_DIRECTION_UNSPECIFIED,
  ORDER_DIRECTION_BUY,
  ORDER_DIRECTION_SELL
}

export interface OrderStage {
  price: MoneyValue
  quantity: string
  tradeId: string
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

export interface GetOrdersRequest {
  accountId: string
}

export interface GetOrdersResponse {
  orders: OrderState[]
}

export class OrdersService extends Common {
  public PostOrder(body: PostOrderRequest): Promise<PostOrderResponse> {
    return this.request('OrdersService', 'GetOrders', body)
  }

  public GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse> {
    return this.request('OrdersService', 'GetOrders', body)
  }
}
