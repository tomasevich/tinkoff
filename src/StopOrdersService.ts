import { Common, MoneyValue, Quotation } from './'

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
   * @remarks `int64`
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
   * @remarks `google.protobuf.Timestamp`
   */
  createDate: string
  /**
   * Дата и время конвертации стоп-заявки в биржевую в часовом поясе UTC
   * @remarks `google.protobuf.Timestamp`
   */
  activationDateTime: string
  /**
   * Дата и время снятия заявки в часовом поясе UTC
   * @remarks `google.protobuf.Timestamp`
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
   * Figi-идентификатор инструмента
   * @description Необходимо использовать instrumentId
   * @deprecated Deprecated
   */
  figi?: string
  /**
   * Количество лотов
   * @remarks `int64`
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
   * @remarks `google.protobuf.Timestamp`
   */
  expireDate?: string
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
   * @remarks `google.protobuf.Timestamp`
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
   * ```js
   * import { StopOrdersService, StopOrderDirection, StopOrderType, StopOrderExpirationType } from '@tomasevich/tinkoff'
   *
   * const stopOrdersService = new StopOrdersService('TOKEN', false)
   * const { stopOrderId } = await stopOrdersService.PostStopOrder({
   *  figi: '',
   *  quantity: "1",
   *  price: StopOrdersService.Quotation('100.1'),
   *  stopPrice: StopOrdersService.Quotation('102.1'),
   *  direction: StopOrderDirection.STOP_ORDER_DIRECTION_BUY,
   *  accountId: '<ACCOUNT_ID>'
   *  expirationType: StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL,
   *  stopOrderType: StopOrderType.STOP_ORDER_TYPE_STOP_LOSS,
   *  expireDate: ''
   *  instrumentId: '6afa6f80-03a7-4d83-9cf0-c19d7d021f76'
   * })
   *
   * console.log(stopOrderId)
   * ```
   * @see https://tinkoff.github.io/investAPI/stoporders/#poststoporder
   */
  public PostStopOrder(
    body: PostStopOrderRequest
  ): Promise<PostStopOrderResponse> {
    return this.request('StopOrdersService', 'PostStopOrder', body)
  }

  /**
   * Метод получения списка активных стоп заявок по счёту
   * ```js
   * import { StopOrdersService } from '@tomasevich/tinkoff'
   *
   * const stopOrdersService = new StopOrdersService('TOKEN', false)
   * const { stopOrders } = await stopOrdersService.GetStopOrders({
   *  accountId: '<ACCOUNT_ID>',
   * })
   *
   * console.log(stopOrders)
   * ```
   * @see https://tinkoff.github.io/investAPI/stoporders/#getstoporders
   */
  public GetStopOrders(
    body: GetStopOrdersRequest
  ): Promise<GetStopOrdersResponse> {
    return this.request('StopOrdersService', 'GetStopOrders', body)
  }

  /**
   * Метод отмены стоп-заявки
   * ```js
   * import { StopOrdersService } from '@tomasevich/tinkoff'
   *
   * const stopOrdersService = new StopOrdersService('TOKEN', false)
   * const { time } = await stopOrdersService.CancelStopOrder({
   *  accountId: '<ACCOUNT_ID>',
   *  stopOrderId: '<STOP_ORDER_ID>',
   * })
   *
   * console.log(time)
   * ```
   * @see https://tinkoff.github.io/investAPI/stoporders/#cancelstoporder
   */
  public CancelStopOrder(
    body: CancelStopOrderRequest
  ): Promise<CancelStopOrderResponse> {
    return this.request('StopOrdersService', 'CancelStopOrder', body)
  }
}
