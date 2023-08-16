import { Common, MoneyValue, Quotation } from './Common'
import { InstrumentType } from './InstrumentsService'

/**
 * Статус запрашиваемых операций
 * @see https://tinkoff.github.io/investAPI/operations/#operationstate
 */
export enum OperationState {
  /** Статус операции не определё */
  OPERATION_STATE_UNSPECIFIED,
  /** Исполнена */
  OPERATION_STATE_EXECUTED,
  /** Отменена */
  OPERATION_STATE_CANCELED,
  /** Исполняется */
  OPERATION_STATE_PROGRESS
}

/**
 * Тип операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationtype
 */
export enum OperationType {
  /** Тип операции не определён */
  OPERATION_TYPE_UNSPECIFIED,
  /** Пополнение брокерского счёта */
  OPERATION_TYPE_INPUT,
  /** Удержание НДФЛ по купонам */
  OPERATION_TYPE_BOND_TAX,
  /** Вывод ЦБ */
  OPERATION_TYPE_OUTPUT_SECURITIES,
  /** Доход по сделке РЕПО овернайт */
  OPERATION_TYPE_OVERNIGHT,
  /** Удержание налога */
  OPERATION_TYPE_TAX,
  /** Полное погашение облигаций */
  OPERATION_TYPE_BOND_REPAYMENT_FULL,
  /** Продажа ЦБ с карты */
  OPERATION_TYPE_SELL_CARD,
  /** Удержание налога по дивидендам */
  OPERATION_TYPE_DIVIDEND_TAX,
  /** Вывод денежных средств */
  OPERATION_TYPE_OUTPUT,
  /** Частичное погашение облигаций */
  OPERATION_TYPE_BOND_REPAYMENT,
  /** Корректировка налога */
  OPERATION_TYPE_TAX_CORRECTION,
  /** Удержание комиссии за обслуживание брокерского счёта */
  OPERATION_TYPE_SERVICE_FEE,
  /** Удержание налога за материальную выгоду */
  OPERATION_TYPE_BENEFIT_TAX,
  /** Удержание комиссии за непокрытую позицию */
  OPERATION_TYPE_MARGIN_FEE,
  /** Покупка ЦБ */
  OPERATION_TYPE_BUY,
  /** Покупка ЦБ с карты */
  OPERATION_TYPE_BUY_CARD,
  /** Перевод ценных бумаг из другого депозитария */
  OPERATION_TYPE_INPUT_SECURITIES,
  /** Продажа в результате Margin-call */
  OPERATION_TYPE_SELL_MARGIN,
  /** Удержание комиссии за операцию */
  OPERATION_TYPE_BROKER_FEE,
  /** Покупка в результате Margin-call */
  OPERATION_TYPE_BUY_MARGIN,
  /** Выплата дивидендов */
  OPERATION_TYPE_DIVIDEND,
  /** Продажа ЦБ */
  OPERATION_TYPE_SELL,
  /** Выплата купонов */
  OPERATION_TYPE_COUPON,
  /** Удержание комиссии SuccessFee */
  OPERATION_TYPE_SUCCESS_FEE,
  /** Передача дивидендного дохода */
  OPERATION_TYPE_DIVIDEND_TRANSFER,
  /** Зачисление вариационной маржи */
  OPERATION_TYPE_ACCRUING_VARMARGIN,
  /** Списание вариационной маржи */
  OPERATION_TYPE_WRITING_OFF_VARMARGIN,
  /** Покупка в рамках экспирации фьючерсного контракта */
  OPERATION_TYPE_DELIVERY_BUY,
  /** Продажа в рамках экспирации фьючерсного контракта */
  OPERATION_TYPE_DELIVERY_SELL,
  /** Комиссия за управление по счёту автоследования */
  OPERATION_TYPE_TRACK_MFEE,
  /** Комиссия за результат по счёту автоследования */
  OPERATION_TYPE_TRACK_PFEE,
  /** Удержание налога по ставке 15% */
  OPERATION_TYPE_TAX_PROGRESSIVE,
  /** Удержание налога по купонам по ставке 15% */
  OPERATION_TYPE_BOND_TAX_PROGRESSIVE,
  /** Удержание налога по дивидендам по ставке 15% */
  OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE,
  /** Удержание налога за материальную выгоду по ставке 15% */
  OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE,
  /** Корректировка налога по ставке 15% */
  OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE,
  /** Удержание налога за возмещение по сделкам РЕПО по ставке 15% */
  OPERATION_TYPE_TAX_REPO_PROGRESSIVE,
  /** Удержание налога за возмещение по сделкам РЕПО */
  OPERATION_TYPE_TAX_REPO,
  /** Удержание налога по сделкам РЕПО */
  OPERATION_TYPE_TAX_REPO_HOLD,
  /** Возврат налога по сделкам РЕПО */
  OPERATION_TYPE_TAX_REPO_REFUND,
  /** Удержание налога по сделкам РЕПО по ставке 15% */
  OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE,
  /** Возврат налога по сделкам РЕПО по ставке 15% */
  OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE,
  /** Выплата дивидендов на карту */
  OPERATION_TYPE_DIV_EXT,
  /** Корректировка налога по купонам */
  OPERATION_TYPE_TAX_CORRECTION_COUPON,
  /** Комиссия за валютный остаток */
  OPERATION_TYPE_CASH_FEE,
  /** Комиссия за вывод валюты с брокерского счета */
  OPERATION_TYPE_OUT_FEE,
  /** Гербовый сбор */
  OPERATION_TYPE_OUT_STAMP_DUTY,
  /** SWIFT-перевод */
  OPERATION_TYPE_OUTPUT_SWIFT,
  /** SWIFT-перевод */
  OPERATION_TYPE_INPUT_SWIFT,
  /** Перевод на карту */
  OPERATION_TYPE_OUTPUT_ACQUIRING,
  /** Перевод с карты */
  OPERATION_TYPE_INPUT_ACQUIRING,
  /** Комиссия за вывод средств */
  OPERATION_TYPE_OUTPUT_PENALTY,
  /** Списание оплаты за сервис Советов */
  OPERATION_TYPE_ADVICE_FEE,
  /** Перевод ценных бумаг с ИИС на Брокерский счет */
  OPERATION_TYPE_TRANS_IIS_BS,
  /** Перевод ценных бумаг с одного брокерского счета на другой */
  OPERATION_TYPE_TRANS_BS_BS,
  /** Вывод денежных средств со счета */
  OPERATION_TYPE_OUT_MULTI,
  /** Пополнение денежных средств со счета */
  OPERATION_TYPE_INP_MULTI,
  /** Размещение биржевого овернайта */
  OPERATION_TYPE_OVER_PLACEMENT,
  /** Списание комиссии */
  OPERATION_TYPE_OVER_COM,
  /** Доход от оверанайта */
  OPERATION_TYPE_OVER_INCOME,
  /** Экспирация */
  OPERATION_TYPE_OPTION_EXPIRATION
}

/**
 * Запрос валют
 * @see https://tinkoff.github.io/investAPI/operations/#positionsaccountsubscriptionstatus
 */
export enum PortfolioRequestCurrencyRequest {
  /** Рубли */
  RUB,
  /** Доллары */
  USD,
  /** Евро */
  EUR
}

/**
 * Данные по операции
 * @see https://tinkoff.github.io/investAPI/operations/#operation
 */
export interface Operation {
  /** Идентификатор операции */
  id: string
  /** Идентификатор родительской операции */
  parent_operation_id: string
  /** Валюта операции */
  currency: string
  /** Сумма операции */
  payment: MoneyValue
  /**
   * Цена операции за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента
   */
  price: MoneyValue
  /** Статус операции */
  state: OperationState
  /**
   * Количество единиц инструмента
   * @type `int64`
   */
  quantity: string
  /**
   * Неисполненный остаток по сделке
   * @type `int64`
   */
  quantity_rest: string
  /** Figi-идентификатор инструмента, связанного с операцией */
  figi: string
  /**
   * Тип инструмента. Возможные значения:
   * `bond` — облигация;
   * `share` — акция;
   * `currency` — валюта;
   * `etf` — фонд;
   * `futures` — фьючерс.
   */
  instrument_type: string
  /**
   * Дата и время операции в формате часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  date: string
  /** Текстовое описание типа операции */
  type: string
  /** Тип операции */
  operation_type: OperationType
  /** Массив сделок */
  trades: OperationTrade[]
  /** Идентификатор актива */
  asset_uid: string
  /** position_uid-идентификатора инструмента */
  position_uid: string
  /** Уникальный идентификатор инструмента */
  instrument_uid: string
}

/**
 * Сделка по операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationtrade
 */
export interface OperationTrade {
  /** Идентификатор сделки */
  trade_id: string
  /**
   * Дата и время сделки в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  date_time: string
  /**
   * Количество инструментов
   * @type `int64`
   */
  quantity: string
  /**
   * Цена за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента.
   */
  price: MoneyValue
}

/**
 * Запрос получения списка операций по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#operationsrequest
 */
export interface OperationsRequest {
  /** Идентификатор счёта клиента */
  account_id: string
  /**
   * Начало периода (по UTC).
   * @type `google.protobuf.Timestamp`
   */
  from: string
  /**
   * Окончание периода (по UTC).
   * @type `google.protobuf.Timestamp`
   */
  to: string
  /** Статус запрашиваемых операций */
  state: OperationState
  /** Figi-идентификатор инструмента для фильтрации */
  figi: string
}

/**
 * Список операций
 * @see https://tinkoff.github.io/investAPI/operations/#operationsresponse
 */
export interface OperationsResponse {
  /** Массив операций */
  operations: Operation[]
}

/**
 * Запрос получения текущего портфеля по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#portfoliorequest
 */
export interface PortfolioRequest {
  /** Идентификатор счёта пользователя */
  account_id: string
  /** Валюта, в которой требуется рассчитать портфель */
  currency: PortfolioRequestCurrencyRequest
}

/**
 * Текущий портфель по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#portfolioresponse
 */
export interface PortfolioResponse {
  /** Общая стоимость акций в портфеле */
  total_amount_shares: MoneyValue
  /** Общая стоимость облигаций в портфеле */
  total_amount_bonds: MoneyValue
  /** Общая стоимость фондов в портфеле */
  total_amount_etf: MoneyValue
  /** Общая стоимость валют в портфеле */
  total_amount_currencies: MoneyValue
  /** Общая стоимость фьючерсов в портфеле */
  total_amount_futures: MoneyValue
  /** Текущая относительная доходность портфеля, в % */
  expected_yield: Quotation
  /** Список позиций портфеля */
  positions: PortfolioPosition[]
  /** Идентификатор счёта пользователя */
  account_id: string
  /** Общая стоимость опционов в портфеле */
  total_amount_options: MoneyValue
  /** Общая стоимость структурных нот в портфеле */
  total_amount_sp: MoneyValue
  /** Общая стоимость портфеля */
  total_amount_portfolio: MoneyValue
  /** Массив виртуальных позиций портфеля */
  virtual_positions: VirtualPortfolioPosition[]
}

/**
 * Позиции портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#portfolioposition
 */
export interface PortfolioPosition {
  /** Figi-идентификатора инструмента */
  figi: string
  /** Тип инструмента */
  instrument_type: string
  /** Количество инструмента в портфеле в штуках */
  quantity: Quotation
  /**
   * Средневзвешенная цена позиции
   * @description Возможна задержка до секунды для пересчёта
   */
  average_position_price: MoneyValue
  /** Текущая рассчитанная доходность позиции */
  expected_yield: Quotation
  /** Текущий НКД */
  current_nkd: MoneyValue
  /**
   * Средняя цена позиции в пунктах (для фьючерсов)
   * Возможна задержка до секунды для пересчёта
   * @deprecated
   */
  average_position_price_pt: Quotation
  /**
   * Текущая цена за 1 инструмент
   * @description Для получения стоимости лота требуется умножить на лотность инструмента
   */
  current_price: MoneyValue
  /**
   * Средняя цена позиции по методу FIFO
   * @description Возможна задержка до секунды для пересчёта
   */
  average_position_price_fifo: MoneyValue
  /**
   * Количество лотов в портфеле
   * @deprecated
   */
  quantity_lots: Quotation
  /** Заблокировано на бирже */
  blocked: boolean
  /** Количество бумаг, заблокированных выставленными заявками */
  blocked_lots: Quotation
  /** position_uid-идентификатора инструмент */
  position_uid: string
  /** instrument_uid-идентификатора инструмент */
  instrument_uid: string
  /** Вариационная маржа */
  var_margin: MoneyValue
  /** Текущая рассчитанная доходность позиции */
  expected_yield_fifo: Quotation
}

/**
 * Виртуальные позиции портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#virtualportfolioposition
 */
export interface VirtualPortfolioPosition {
  /** position_uid-идентификатора инструмент */
  position_uid: string
  /** instrument_uid-идентификатора инструмент */
  instrument_uid: string
  /** Figi-идентификатора инструмента */
  figi: string
  /** Тип инструмента */
  instrument_type: string
  /** Количество инструмента в портфеле в штуках */
  quantity: Quotation
  /**
   * Средневзвешенная цена позиции
   * @description Возможна задержка до секунды для пересчёта
   */
  average_position_price: MoneyValue
  /** Текущая рассчитанная доходность позиции */
  expected_yield: Quotation
  /** Текущая рассчитанная доходность позиции */
  expected_yield_fifo: Quotation
  /**
   * Дата до которой нужно продать виртуальные бумаги, после этой даты виртуальная позиция "сгорит"
   * @type `google.protobuf.Timestamp`
   */
  expire_date: string
  /** Текущая цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента */
  current_price: MoneyValue
  /**
   * Средняя цена позиции по методу FIFO
   * @description Возможна задержка до секунды для пересчёта
   */
  average_position_price_fifo: MoneyValue
}

/**
 * Баланс позиции ценной бумаги
 * @see https://tinkoff.github.io/investAPI/operations/#positionssecurities
 */
export interface PositionsSecurities {
  /** Figi-идентификатор бумаги */
  figi: string
  /**
   * Количество бумаг заблокированных выставленными заявками
   * @type `int64`
   */
  blocked: string
  /**
   * Текущий незаблокированный баланс
   * @type `int64`
   */
  balance: string
  /** Уникальный идентификатор позиции */
  position_uid: string
  /** Уникальный идентификатор инструмента */
  instrument_uid: string
  /** Заблокировано на бирже */
  exchange_blocked: boolean
  /** Тип инструмента */
  instrument_type: string
}

/**
 * Баланс фьючерса
 * @see https://tinkoff.github.io/investAPI/operations/#positionsfutures
 */
export interface PositionsFutures {
  /** Figi-идентификатор фьючерса */
  figi: string
  /**
   * Количество бумаг заблокированных выставленными заявками
   * @type `int64`
   */
  blocked: string
  /**
   * Текущий незаблокированный баланс
   * @type `int64`
   */
  balance: string
  /** Уникальный идентификатор позиции */
  position_uid: string
  /** Уникальный идентификатор инструмента */
  instrument_uid: string
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#positionsoptions
 */
export interface PositionsOptions {
  /** Уникальный идентификатор позиции опциона */
  position_uid: string
  /** Уникальный идентификатор инструмента */
  instrument_uid: string
  /**
   * Количество бумаг заблокированных выставленными заявками
   * @type `int64`
   */
  blocked: string
  /**
   * Текущий незаблокированный баланс
   * @type `int64`
   */
  balance: string
}

/**
 * Запрос позиций портфеля по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#positionsrequest
 */
export interface PositionsRequest {
  /** Идентификатор счёта пользователя */
  accountId: string
}

/**
 * Список позиций по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#positionsresponse
 */
export interface PositionsResponse {
  /** Массив валютных позиций портфеля */
  money: MoneyValue[]
  /** Массив заблокированных валютных позиций портфеля */
  blocked: MoneyValue[]
  /** Список ценно-бумажных позиций портфеля */
  securities: PositionsSecurities[]
  /** Признак идущей в данный момент выгрузки лимитов */
  limits_loading_in_progress: boolean
  /** Список фьючерсов портфеля */
  futures: PositionsFutures[]
  /** Список опционов портфеля */
  options: PositionsOptions[]
}

/**
 * Запрос доступного для вывода остатка
 * @see https://tinkoff.github.io/investAPI/operations/#withdrawlimitsrequest
 */
export interface WithdrawLimitsRequest {
  /** Идентификатор счёта пользователя */
  account_id: string
}

/**
 * Доступный для вывода остаток
 * @see https://tinkoff.github.io/investAPI/operations/#withdrawlimitsresponse
 */
export interface WithdrawLimitsResponse {
  /** Массив валютных позиций портфеля */
  money: MoneyValue[]
  /** Массив заблокированных валютных позиций портфеля */
  blocked: MoneyValue[]
  /** Заблокировано под гарантийное обеспечение фьючерсов */
  blocked_guarantee: MoneyValue[]
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#generatebrokerreportrequest
 */
export interface GenerateBrokerReportRequest {
  /** Идентификатор счёта клиента */
  account_id: string
  /**
   * Начало периода в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  from: string
  /**
   * Окончание периода в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  to: string
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#generatebrokerreportresponse
 */
export interface GenerateBrokerReportResponse {
  /** Идентификатор задачи формирования брокерского отчёта */
  task_id: string
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#brokerreportrequest
 */
export interface BrokerReportRequest {
  /** @todo Нет описания */
  generate_broker_report_request: GenerateBrokerReportRequest
  /** @todo Нет описания */
  get_broker_report_request: GetBrokerReportRequest
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#brokerreportresponse
 */
export interface BrokerReportResponse {
  /** @todo Нет описания */
  generate_broker_report_response: GenerateBrokerReportResponse
  /** @todo Нет описания */
  get_broker_report_response: GetBrokerReportResponse
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#getbrokerreportrequest
 */
export interface GetBrokerReportRequest {
  /** Идентификатор задачи формирования брокерского отчёта */
  task_id: string
  /**
   * Номер страницы отчета (начинается с 1), значение по умолчанию: 0
   * @type `int32`
   */
  page: number
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#getbrokerreportresponse
 */
export interface GetBrokerReportResponse {
  /** @todo Нет описания */
  broker_report: BrokerReport[]
  /**
   * Количество записей в отчете
   * @type `int32`
   */
  itemsCount: number
  /**
   * Количество страниц с данными отчета (начинается с 0)
   * @type `int32`
   */
  pagesCount: number
  /**
   * Текущая страница (начинается с 0)
   * @type `int32`
   */
  page: number
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#brokerreport
 */
export interface BrokerReport {
  /** Номер сделки */
  trade_id: string
  /** Номер поручения */
  order_id: string
  /** Figi-идентификатор инструмента */
  figi: string
  /** Признак исполнения */
  execute_sign: string
  /**
   * Дата и время заключения в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  trade_datetime: string
  /** Торговая площадка */
  exchange: string
  /** Режим торгов */
  class_code: string
  /** Вид сделки */
  direction: string
  /** Сокращённое наименование актива */
  name: string
  /** Код актива */
  ticker: string
  /**
   * Цена за единицу.
   */
  price: MoneyValue
  /**
   * Количество
   * @type `int64`
   */
  quantity: string
  /** Сумма (без НКД) */
  order_amount: MoneyValue
  /** НКД */
  aci_value: Quotation
  /** Сумма сделки */
  total_order_amount: MoneyValue
  /** Комиссия брокера */
  broker_commission: MoneyValue
  /** Комиссия биржи */
  exchange_commission: MoneyValue
  /** Комиссия клир. центра */
  exchange_clearing_commission: MoneyValue
  /** Ставка РЕПО (%) */
  repo_rate: Quotation
  /** Контрагент/Брокер */
  party: string
  /**
   * Дата расчётов в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  clear_value_date: string
  /**
   * Дата поставки в часовом поясе UTC
   * @type `google.protobuf.Timestamp`
   */
  sec_value_date: string
  /** Статус брокера */
  broker_status: string
  /** Тип дог */
  separate_agreement_type: string
  /** Номер дог */
  separate_agreement_number: string
  /** Дата дог */
  separate_agreement_date: string
  /** Тип расчёта по сделке */
  delivery_type: string
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerrequest
 */
export interface GetDividendsForeignIssuerRequest {
  /** Объект запроса формирования отчёта */
  generate_div_foreign_issuer_report: GenerateDividendsForeignIssuerReportRequest
  /** Объект запроса сформированного отчёта */
  get_div_foreign_issuer_report: GetDividendsForeignIssuerReportRequest
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerresponse
 */
export interface GetDividendsForeignIssuerResponse {
  /** Объект результата задачи запуска формирования отчёта */
  generate_div_foreign_issuer_report_response: GenerateDividendsForeignIssuerReportResponse
  /** Отчёт "Справка о доходах за пределами РФ" */
  div_foreign_issuer_report: GetDividendsForeignIssuerReportResponse
}

/**
 * Объект запроса формирования отчёта "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#generatedividendsforeignissuerreportrequest
 */
export interface GenerateDividendsForeignIssuerReportRequest {
  /** Идентификатор счёта клиента */
  account_id: string
  /**
   * Начало периода (по UTC).
   * @type `google.protobuf.Timestamp`
   */
  from: string
  /**
   * Окончание периода (по UTC).
   * @type `google.protobuf.Timestamp`
   */
  to: string
}

/**
 * Объект запроса формирования отчёта "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerreportrequest
 */
export interface GetDividendsForeignIssuerReportRequest {
  /** Идентификатор задачи формирования отчёта */
  task_id: string
  /**
   * Номер страницы отчета (начинается с 0), значение по умолчанию: 0
   * @type `int32`
   */
  page: number
}

/**
 * Объект результата задачи запуска формирования отчёта "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#generatedividendsforeignissuerreportresponse
 */
export interface GenerateDividendsForeignIssuerReportResponse {
  /** Идентификатор задачи формирования отчёта */
  task_id: string
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerreportresponse
 */
export interface GetDividendsForeignIssuerReportResponse {
  /** @todo Нет описания */
  dividends_foreign_issuer_report: DividendsForeignIssuerReport[]
  /**
   * Количество записей в отчете
   * @type `int32`
   */
  itemsCount: number
  /**
   * Количество страниц с данными отчета (начинается с 0)
   * @type `int32`
   */
  pagesCount: number
  /**
   * Текущая страница (начинается с 0)
   * @type `int32`
   */
  page: number
}

/**
 * Отчёт "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#dividendsforeignissuerreport
 */
export interface DividendsForeignIssuerReport {
  /**
   * Дата фиксации реестра.
   * @type `google.protobuf.Timestamp`
   */
  record_date: string
  /**
   * Дата выплаты.
   * @type `google.protobuf.Timestamp`
   */
  payment_date: string
  /** Наименование ценной бумаги */
  security_name: string
  /** ISIN-идентификатор ценной бумаги */
  isin: string
  /**
   * Страна эмитента
   * @description Для депозитарных расписок указывается страна эмитента базового актива
   */
  issuer_country: string
  /**
   * Количество ценных бумаг
   * @type `int64`
   */
  quantity: string
  /** Выплаты на одну бумаг */
  dividend: Quotation
  /** Комиссия внешних платёжных агентов */
  external_commission: Quotation
  /** Сумма до удержания налога */
  dividend_gross: Quotation
  /** Сумма налога, удержанного агентом */
  tax: Quotation
  /** Итоговая сумма выплаты */
  dividend_amount: Quotation
  /** Валюта */
  currency: string
}

/**
 * Запрос списка операций по счёту с пагинацией
 * @see https://tinkoff.github.io/investAPI/operations/#getoperationsbycursorrequest
 */
export interface GetOperationsByCursorRequest {
  /** Идентификатор счёта клиента. Обязательный параметр для данного метода, остальные параметры опциональны */
  account_id: string
  /** Идентификатор инструмента (Figi инструмента или uid инструмента) */
  instrument_id: string
  /**
   * Начало периода (по UTC).
   * @type `google.protobuf.Timestamp`
   */
  from: string
  /**
   * Окончание периода (по UTC).
   * @type `google.protobuf.Timestamp`
   */
  to: string
  /** Идентификатор элемента, с которого начать формировать ответ */
  cursor: string
  /**
   * Лимит количества операций. По умолчанию устанавливается значение 100, максимальное значение 1000
   * @type `int32`
   */
  limit: number
  /**
   * Тип операции
   * @description Принимает значение из списка OperationType
   */
  operation_types: OperationType[]
  /** Статус запрашиваемых операций, возможные значения указаны в OperationState */
  state: OperationState
  /** Флаг возвращать ли комиссии, по умолчанию false */
  without_commissions: boolean
  /** Флаг получения ответа без массива сделок. */
  without_trades: boolean
  /** Флаг не показывать overnight операций. */
  without_overnights: boolean
}

/**
 * Список операций по счёту с пагинацией
 * @see https://tinkoff.github.io/investAPI/operations/#getoperationsbycursorresponse
 */
export interface GetOperationsByCursorResponse {
  /** Признак, есть ли следующий элемент */
  has_next: boolean
  /** Следующий курсор */
  next_cursor: string
  /** Список операций */
  items: OperationItem[]
}

/**
 * Данные об операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationitem
 */
export interface OperationItem {
  /** Курсор */
  cursor: string
  /** Номер счета клиента */
  broker_account_id: string
  /** Идентификатор операции, может меняться с течением времени */
  id: string
  /** Идентификатор родительской операции, может измениться, если изменился id родительской операции */
  parent_operation_id: string
  /** Название операции */
  name: string
  /**
   * Дата поручения.
   * @type `google.protobuf.Timestamp`
   */
  date: string
  /** Тип операции */
  type: OperationType
  /** Описание операции */
  description: string
  /** Статус поручения */
  state: OperationState
  /** Уникальный идентификатор инструмента */
  instrument_uid: string
  /** Figi */
  figi: string
  /** Тип инструмента */
  instrument_type: string
  /** Тип инструмента */
  instrument_kind: InstrumentType
  /** position_uid-идентификатора инструмента */
  position_uid: string
  /** Сумма операции */
  payment: MoneyValue
  /**
   * Цена операции за 1 инструмент.
   */
  price: MoneyValue
  /** Комиссия */
  commission: MoneyValue
  /** Доходность */
  yield: MoneyValue
  /** Относительная доходность */
  yield_relative: Quotation
  /** Накопленный купонный доход */
  accrued_int: MoneyValue
  /**
   * Количество единиц инструмента
   * @type `int64`
   */
  quantity: string
  /**
   * Неисполненный остаток по сделке
   * @type `int64`
   */
  quantity_rest: string
  /**
   * Исполненный остаток
   * @type `int64`
   */
  quantity_done: string
  /**
   * Дата и время снятия заявки.
   * @type `google.protobuf.Timestamp`
   */
  cancel_date_time: string
  /** Причина отмены операции */
  cancel_reason: string
  /** Массив сделок */
  trades_info: OperationItemTrades
  /** Идентификатор актива */
  asset_uid: string
}

/**
 * Массив с информацией о сделках
 * @see https://tinkoff.github.io/investAPI/operations/#operationitemtrades
 */
export interface OperationItemTrades {
  /** @todo Нет описания */
  trades: OperationItemTrade[]
}

/**
 * Сделка по операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationitemtrade
 */
export interface OperationItemTrade {
  /** Номер сделки */
  num: string
  /**
   * Дата сделки
   * @type `google.protobuf.Timestamp`
   */
  date: string
  /**
   * Количество в единицах
   * @type `int64`
   */
  quantity: string
  /**
   * Цена.
   */
  price: MoneyValue
  /** Доходность. */
  yield: MoneyValue
  /** Относительная доходность. */
  yield_relative: Quotation
}

/**
 * Данные о позиции портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#positiondata
 */
export interface PositionData {
  /** Идентификатор счёта */
  account_id: string
  /** Массив валютных позиций портфеля */
  money: PositionsMoney[]
  /** Список ценно-бумажных позиций портфеля */
  securities: PositionsSecurities[]
  /** Список фьючерсов портфеля */
  futures: PositionsFutures[]
  /** Список опционов портфеля */
  options: PositionsOptions[]
  /**
   * Дата и время операции в формате UTC
   * @type `google.protobuf.Timestamp`
   */
  date: string
}

/**
 * Валютная позиция портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#positionsmoney
 */
export interface PositionsMoney {
  /** Доступное количество валютный позиций */
  available_value: MoneyValue
  /** Заблокированное количество валютный позиций */
  blocked_value: MoneyValue
}

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
