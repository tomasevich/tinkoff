import { Core } from '../Core'

/**
 * Денежная сумма в определенной валюте
 */
export interface MoneyValue {
  /**
   * Строковый ISO-код валюты
   */
  currency: string

  /**
   * Целая часть суммы, может быть отрицательным числом
   *
   * @type int64
   */
  units: string

  /**
   * Дробная часть суммы, может быть отрицательным числом
   *
   * @type int32
   */
  nano: number
}

/**
 * Направление операции
 */
export enum OrderDirection {
  /**
   * Значение не указано
   */
  ORDER_DIRECTION_UNSPECIFIED,

  /**
   * Покупка
   */
  ORDER_DIRECTION_BUY,

  /**
   * Продажа
   */
  ORDER_DIRECTION_SELL
}

/**
 * Сделки в рамках торгового поручения
 */
export interface OrderStage {
  /**
   * Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента
   */
  price: MoneyValue

  /**
   * Количество лотов
   */
  quantity: string

  /**
   * Идентификатор сделки
   */
  tradeId: string
}

/**
 * Тип заявки
 */
export enum OrderType {
  /**
   * Значение не указано
   */
  ORDER_TYPE_UNSPECIFIED,

  /**
   * Лимитная
   */
  ORDER_TYPE_LIMIT,

  /**
   * Рыночная
   */
  ORDER_TYPE_MARKET,

  /**
   * Лучшая цена
   */
  ORDER_TYPE_BESTPRICE
}

/**
 * Текущий статус заявки (поручения)
 */
export enum OrderExecutionReportStatus {
  /**
   * none
   */
  EXECUTION_REPORT_STATUS_UNSPECIFIED,
  /**
   * Исполнена
   */
  EXECUTION_REPORT_STATUS_FILL,
  /**
   * Отклонена
   */
  EXECUTION_REPORT_STATUS_REJECTED,
  /**
   * Отменена пользователем
   */
  EXECUTION_REPORT_STATUS_CANCELLED,
  /**
   * Новая
   */
  EXECUTION_REPORT_STATUS_NEW,
  /**
   * Частично исполнена
   */
  EXECUTION_REPORT_STATUS_PARTIALLYFILL
}

/**
 * Информация о торговом поручении
 */
export interface OrderState {
  /**
   * Биржевой идентификатор заявки
   */
  orderId: string

  /**
   * Текущий статус заявки (поручения)
   *
   * @default EXECUTION_REPORT_STATUS_UNSPECIFIED
   */
  executionReportStatus: OrderExecutionReportStatus

  /**
   * Запрошено лотов
   *
   * @type int64
   */
  lotsRequested: string

  /**
   * Исполнено лотов
   *
   * @type int64
   */
  lotsExecuted: string

  /**
   * Начальная цена заявки. Произведение количества запрошенных лотов на цену
   */
  initialOrderPrice: MoneyValue

  /**
   * Исполненная цена заявки. Произведение средней цены покупки на количество лотов
   */
  executedOrderPrice: MoneyValue

  /**
   * Итоговая стоимость заявки, включающая все комиссии
   */
  totalOrderAmount: MoneyValue

  /**
   * Средняя цена позиции по сделке
   */
  averagePositionPrice: MoneyValue

  /**
   * Начальная комиссия. Комиссия, рассчитанная на момент подачи заявки
   */
  initialCommission: MoneyValue

  /**
   * Фактическая комиссия по итогам исполнения заявки
   */
  executedCommission: MoneyValue

  /**
   * Figi-идентификатор инструмента
   */
  figi: string

  /**
   * Направление операции
   *
   * @default ORDER_DIRECTION_UNSPECIFIED
   */
  direction: OrderDirection

  /**
   * Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента
   */
  initialSecurityPrice: MoneyValue

  /**
   * Стадии выполнения заявки
   */
  stages: OrderStage[]

  /**
   * Сервисная комиссия
   */
  serviceCommission: MoneyValue

  /**
   * Валюта заявки
   */
  currency: string

  /**
   * Тип заявки
   *
   * @default ORDER_TYPE_UNSPECIFIED
   */
  orderType: OrderType

  /**
   * Дата и время выставления заявки в часовом поясе UTC
   */
  orderDate: string

  /**
   * UID идентификатор инструмента
   */
  instrumentUid: string

  /**
   * Идентификатор ключа идемпотентности, переданный клиентом, в формате UID. Максимальная длина 36 символов
   */
  orderRequestId: string
}

/**
 * Запрос получения списка активных торговых поручений
 */
export interface GetOrdersRequest {
  /**
   * Номер счёта
   */
  accountId: string
}

/**
 * Список активных торговых поручений
 */
export interface GetOrdersResponse {
  /**
   * Массив объектов OrderState
   */
  orders: OrderState[]
}

/**
 * Интерфейс сервиса Ордеров
 */
export interface Orders {
  /**
   * Метод получения списка активных заявок по счёту
   *
   * @param {GetOrdersRequest} body Тело запроса
   *
   * @returns {GetOrdersResponse} Возвращает список ордеров
   */
  GetOrders: (body: GetOrdersRequest) => Promise<GetOrdersResponse>
}

/**
 * Сервис предназначен для работы с торговыми поручениями:
 * 1. выставление;
 * 2. отмена;
 * 3. получение статуса;
 * 4. расчёт полной стоимости;
 * 5. получение списка заявок.
 */
export class OrdersService extends Core implements Orders {
  public GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse> {
    return this.request('OrdersService', 'GetOrders', body)
  }
}
