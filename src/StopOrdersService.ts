import { Common, MoneyValue, Quotation } from './Common'

/**
 * Направление сделки стоп-заявки
 * @see https://tinkoff.github.io/investAPI/stoporders/#stoporderdirection
 */
export enum StopOrderDirection {
  /** Значение не указано */
  STOP_ORDER_DIRECTION_UNSPECIFIED,
  /** Покупка */
  STOP_ORDER_DIRECTION_BUY,
  /** Продажа */
  STOP_ORDER_DIRECTION_SELL
}

/**
 * Тип экспирации стоп-заявке
 * @see https://tinkoff.github.io/investAPI/stoporders/#stoporderexpirationtype
 */
export enum StopOrderExpirationType {
  /** Значение не указано */
  STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED,
  /** Действительно до отмены */
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL,
  /** Действительно до даты снятия */
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE
}

/**
 * Тип стоп-заявки
 * @see https://tinkoff.github.io/investAPI/stoporders/#stopordertype
 */
export enum StopOrderType {
  /** Значение не указано */
  STOP_ORDER_TYPE_UNSPECIFIED,
  /** Take-profit заявка */
  STOP_ORDER_TYPE_TAKE_PROFIT,
  /** Stop-loss заявка */
  STOP_ORDER_TYPE_STOP_LOSS,
  /** Stop-limit заявка */
  STOP_ORDER_TYPE_STOP_LIMIT
}

/**
 * Информация о стоп-заявке
 * @see https://tinkoff.github.io/investAPI/stoporders/#stoporder
 */
export interface StopOrder {
  /** Идентификатор-идентификатор стоп-заявки */
  stopOrderId: string
  /**
   * Запрошено лотов
   * @type `int64`
   */
  lotsRequested: string
  /** Figi-идентификатор инструмента */
  figi: string
  /** Направление операции */
  direction: StopOrderDirection
  /** Валюта стоп-заявки */
  currency: string
  /** Тип стоп-заявки */
  orderType: StopOrderType
  /**
   * Дата и время выставления заявки в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  createDate: string
  /**
   * Дата и время конвертации стоп-заявки в биржевую в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  activationDateTime: string
  /**
   * Дата и время снятия заявки в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  expirationTime: string
  /**
   * Цена заявки за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента
   */
  price: MoneyValue
  /**
   * Цена активации стоп-заявки за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента
   */
  stopPrice: MoneyValue
  /** instrumentUid идентификатор инструмента */
  instrumentUid: string
}

/**
 * Запрос выставления стоп-заявки
 * @see https://tinkoff.github.io/investAPI/stoporders/#poststoporderrequest
 */
export interface PostStopOrderRequest {
  /**
   * Figi-идентификатор инструмента. Необходимо использовать instrumentId
   * @deprecated Deprecated
   */
  figi?: string
  /**
   * Количество лотов
   * @type `int64`
   */
  quantity: string
  /**
   * Цена за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента
   */
  price: Quotation
  /**
   * Стоп-цена заявки за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента
   */
  stopPrice: Quotation
  /** Направление операции */
  direction: StopOrderDirection
  /** Номер счёта */
  accountId: string
  /** Тип экспирации заявки */
  expirationType: StopOrderExpirationType
  /** Тип заявки */
  stopOrderType: StopOrderType
  /**
   * Дата и время окончания действия стоп-заявки в часовом поясе UTC
   * @description Для ExpirationType = GoodTillDate заполнение обязательно
   * @type `google.protobuf.Timestamp`
   */
  expireDate: string
  /** Идентификатор инструмента, принимает значения Figi или instrumentUid */
  instrumentId: string
}

/**
 * Результат выставления стоп-заявки
 * @see https://tinkoff.github.io/investAPI/stoporders/#poststoporderresponse
 */
export interface PostStopOrderResponse {
  /** Уникальный идентификатор стоп-заявки */
  stopOrderId: string
}

/**
 * Запрос получения списка активных стоп-заявок
 * @see https://tinkoff.github.io/investAPI/stoporders/#getstopordersrequest
 */
export interface GetStopOrdersRequest {
  /** Идентификатор счёта клиента */
  accountId: string
}

/**
 * Список активных стоп-заявок
 * @see https://tinkoff.github.io/investAPI/stoporders/#getstopordersresponse
 */
export interface GetStopOrdersResponse {
  /** Массив стоп-заявок по счёту */
  stopOrders: StopOrder[]
}

/**
 * Запрос отмены выставленной стоп-заявки
 * @see https://tinkoff.github.io/investAPI/stoporders/#cancelstoporderrequest
 */
export interface CancelStopOrderRequest {
  /** Идентификатор счёта клиента */
  accountId: string
  /** Уникальный идентификатор стоп-заявки */
  stopOrderId: string
}

/**
 * Результат отмены выставленной стоп-заявки
 * @see https://tinkoff.github.io/investAPI/stoporders/#cancelstoporderresponse
 */
export interface CancelStopOrderResponse {
  /**
   * Время отмены заявки в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  time: string
}

/**
 * Сервис предназначен для работы со стоп-заявками:
 * 1. выставление;
 * 2. отмена;
 * 3. получение списка стоп-заявок.
 * @see https://tinkoff.github.io/investAPI/stoporders/#stopordersservice
 */
export class StopOrdersService extends Common {
  /**
   * Метод выставления стоп-заявки
   * @see https://tinkoff.github.io/investAPI/stoporders/#poststoporder
   */
  public PostStopOrder(
    body: PostStopOrderRequest
  ): Promise<PostStopOrderResponse> {
    return this.request('StopOrdersService', 'PostStopOrder', body)
  }

  /**
   * Метод получения списка активных стоп заявок по счёту
   * @see https://tinkoff.github.io/investAPI/stoporders/#getstoporders
   */
  public GetStopOrders(
    body: GetStopOrdersRequest
  ): Promise<GetStopOrdersResponse> {
    return this.request('StopOrdersService', 'GetStopOrders', body)
  }

  /**
   * Метод отмены стоп-заявки
   * @see https://tinkoff.github.io/investAPI/stoporders/#cancelstoporder
   */
  public CancelStopOrder(
    body: CancelStopOrderRequest
  ): Promise<CancelStopOrderResponse> {
    return this.request('StopOrdersService', 'CancelStopOrder', body)
  }
}
