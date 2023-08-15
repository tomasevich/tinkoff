import { Common } from './Common'

export enum StopOrderDirection {
  STOP_ORDER_DIRECTION_UNSPECIFIED,
  STOP_ORDER_DIRECTION_BUY,
  STOP_ORDER_DIRECTION_SELL
}

export enum StopOrderExpirationType {
  STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED,
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL,
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE
}

export enum StopOrderType {
  STOP_ORDER_TYPE_UNSPECIFIED,
  STOP_ORDER_TYPE_TAKE_PROFIT,
  STOP_ORDER_TYPE_STOP_LOSS,
  STOP_ORDER_TYPE_STOP_LIMIT
}

export interface StopOrder {
  // stop_order_id	string	Идентификатор-идентификатор стоп-заявки.
  // lots_requested	int64	Запрошено лотов.
  // figi	string	Figi-идентификатор инструмента.
  // direction	StopOrderDirection	Направление операции.
  // currency	string	Валюта стоп-заявки.
  // order_type	StopOrderType	Тип стоп-заявки.
  // create_date	google.protobuf.Timestamp	Дата и время выставления заявки в часовом поясе UTC.
  // activation_date_time	google.protobuf.Timestamp	Дата и время конвертации стоп-заявки в биржевую в часовом поясе UTC.
  // expiration_time	google.protobuf.Timestamp	Дата и время снятия заявки в часовом поясе UTC.
  // price	MoneyValue	Цена заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.
  // stop_price	MoneyValue	Цена активации стоп-заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.
  // instrument_uid	string	instrument_uid идентификатор инструмента.
}

export interface PostStopOrderRequest {
  // figi	string	Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
  // quantity	int64	Количество лотов.
  // price	Quotation	Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.
  // stop_price	Quotation	Стоп-цена заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.
  // direction	StopOrderDirection	Направление операции.
  // account_id	string	Номер счёта.
  // expiration_type	StopOrderExpirationType	Тип экспирации заявки.
  // stop_order_type	StopOrderType	Тип заявки.
  // expire_date	google.protobuf.Timestamp	Дата и время окончания действия стоп-заявки в часовом поясе UTC. Для ExpirationType = GoodTillDate заполнение обязательно.
  // instrument_id	string	Идентификатор инструмента, принимает значения Figi или instrument_uid.
}

export interface PostStopOrderResponse {
  // stop_order_id	string	Уникальный идентификатор стоп-заявки.
}

export interface GetStopOrdersRequest {
  // account_id	string	Идентификатор счёта клиента.
}

export interface GetStopOrdersResponse {
  // stop_orders	Массив объектов StopOrder	Массив стоп-заявок по счёту.
}

export interface CancelStopOrderRequest {
  // account_id	string	Идентификатор счёта клиента.
  // stop_order_id	string	Уникальный идентификатор стоп-заявки.
}

export interface CancelStopOrderResponse {
  // time	google.protobuf.Timestamp	Время отмены заявки в часовом поясе UTC.
}

export interface iStopOrders {
  PostStopOrder(body: PostStopOrderRequest): Promise<PostStopOrderResponse>

  GetStopOrders(body: GetStopOrdersRequest): Promise<GetStopOrdersResponse>

  CancelStopOrder(
    body: CancelStopOrderRequest
  ): Promise<CancelStopOrderResponse>
}

export class StopOrdersService extends Common implements iStopOrders {
  public PostStopOrder(
    body: PostStopOrderRequest
  ): Promise<PostStopOrderResponse> {
    return this.request('StopOrdersService', 'PostStopOrder', body)
  }
  public GetStopOrders(
    body: GetStopOrdersRequest
  ): Promise<GetStopOrdersResponse> {
    return this.request('StopOrdersService', 'GetStopOrders', body)
  }
  public CancelStopOrder(
    body: CancelStopOrderRequest
  ): Promise<CancelStopOrderResponse> {
    return this.request('StopOrdersService', 'CancelStopOrder', body)
  }
}
