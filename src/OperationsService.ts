import { Common, MoneyValue } from './Common'

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
  // id	string	Идентификатор операции.
  // parent_operation_id	string	Идентификатор родительской операции.
  // currency	string	Валюта операции.
  // payment	MoneyValue	Сумма операции.
  // price	MoneyValue	Цена операции за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.
  // state	OperationState	Статус операции.
  // quantity	int64	Количество единиц инструмента.
  // quantity_rest	int64	Неисполненный остаток по сделке.
  // figi	string	Figi-идентификатор инструмента, связанного с операцией.
  // instrument_type	string	Тип инструмента. Возможные значения:
  // bond — облигация;
  // share — акция;
  // currency — валюта;
  // etf — фонд;
  // futures — фьючерс.
  // date	google.protobuf.Timestamp	Дата и время операции в формате часовом поясе UTC.
  // type	string	Текстовое описание типа операции.
  // operation_type	OperationType	Тип операции.
  // trades	Массив объектов OperationTrade	Массив сделок.
  // asset_uid	string	Идентификатор актива
  // position_uid	string	position_uid-идентификатора инструмента.
  // instrument_uid	string	Уникальный идентификатор инструмента.
}

/**
 * Сделка по операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationtrade
 */
export interface OperationTrade {
  // trade_id	string	Идентификатор сделки.
  // date_time	google.protobuf.Timestamp	Дата и время сделки в часовом поясе UTC.
  // quantity	int64	Количество инструментов.
  // price	MoneyValue	Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.
}

/**
 * Запрос получения списка операций по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#operationsrequest
 */
export interface OperationsRequest {
  // account_id	string	Идентификатор счёта клиента.
  // from	google.protobuf.Timestamp	Начало периода (по UTC).
  // to	google.protobuf.Timestamp	Окончание периода (по UTC).
  // state	OperationState	Статус запрашиваемых операций.
  // figi	string	Figi-идентификатор инструмента для фильтрации.
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
  // account_id	string	Идентификатор счёта пользователя.
  // currency	PortfolioRequest.CurrencyRequest	Валюта, в которой требуется рассчитать портфель
}

/**
 * Текущий портфель по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#portfolioresponse
 */
export interface PortfolioResponse {
  // total_amount_shares	MoneyValue	Общая стоимость акций в портфеле.
  // total_amount_bonds	MoneyValue	Общая стоимость облигаций в портфеле.
  // total_amount_etf	MoneyValue	Общая стоимость фондов в портфеле.
  // total_amount_currencies	MoneyValue	Общая стоимость валют в портфеле.
  // total_amount_futures	MoneyValue	Общая стоимость фьючерсов в портфеле.
  // expected_yield	Quotation	Текущая относительная доходность портфеля, в %.
  // positions	Массив объектов PortfolioPosition	Список позиций портфеля.
  // account_id	string	Идентификатор счёта пользователя.
  // total_amount_options	MoneyValue	Общая стоимость опционов в портфеле.
  // total_amount_sp	MoneyValue	Общая стоимость структурных нот в портфеле.
  // total_amount_portfolio	MoneyValue	Общая стоимость портфеля.
  // virtual_positions	Массив объектов VirtualPortfolioPosition	Массив виртуальных позиций портфеля.
}

/**
 * Позиции портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#portfolioposition
 */
export interface PortfolioPosition {
  // figi	string	Figi-идентификатора инструмента.
  // instrument_type	string	Тип инструмента.
  // quantity	Quotation	Количество инструмента в портфеле в штуках.
  // average_position_price	MoneyValue	Средневзвешенная цена позиции. Возможна задержка до секунды для пересчёта.
  // expected_yield	Quotation	Текущая рассчитанная доходность позиции.
  // current_nkd	MoneyValue	Текущий НКД.
  // average_position_price_pt	Quotation	Deprecated Средняя цена позиции в пунктах (для фьючерсов). Возможна задержка до секунды для пересчёта.
  // current_price	MoneyValue	Текущая цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.
  // average_position_price_fifo	MoneyValue	Средняя цена позиции по методу FIFO. Возможна задержка до секунды для пересчёта.
  // quantity_lots	Quotation	Deprecated Количество лотов в портфеле.
  // blocked	bool	Заблокировано на бирже.
  // blocked_lots	Quotation	Количество бумаг, заблокированных выставленными заявками.
  // position_uid	string	position_uid-идентификатора инструмента
  // instrument_uid	string	instrument_uid-идентификатора инструмента
  // var_margin	MoneyValue	Вариационная маржа
  // expected_yield_fifo	Quotation	Текущая рассчитанная доходность позиции.
}

/**
 * Виртуальные позиции портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#virtualportfolioposition
 */
export interface VirtualPortfolioPosition {
  // position_uid	string	position_uid-идентификатора инструмента
  // instrument_uid	string	instrument_uid-идентификатора инструмента
  // figi	string	Figi-идентификатора инструмента.
  // instrument_type	string	Тип инструмента.
  // quantity	Quotation	Количество инструмента в портфеле в штуках.
  // average_position_price	MoneyValue	Средневзвешенная цена позиции. Возможна задержка до секунды для пересчёта.
  // expected_yield	Quotation	Текущая рассчитанная доходность позиции.
  // expected_yield_fifo	Quotation	Текущая рассчитанная доходность позиции.
  // expire_date	google.protobuf.Timestamp	Дата до которой нужно продать виртуальные бумаги, после этой даты виртуальная позиция "сгорит"
  // current_price	MoneyValue	Текущая цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.
  // average_position_price_fifo	MoneyValue	Средняя цена позиции по методу FIFO. Возможна задержка до секунды для пересчёта.
}

/**
 * Баланс позиции ценной бумаги
 * @see https://tinkoff.github.io/investAPI/operations/#positionssecurities
 */
export interface PositionsSecurities {
  // figi	string	Figi-идентификатор бумаги.
  // blocked	int64	Количество бумаг заблокированных выставленными заявками.
  // balance	int64	Текущий незаблокированный баланс.
  // position_uid	string	Уникальный идентификатор позиции.
  // instrument_uid	string	Уникальный идентификатор инструмента.
  // exchange_blocked	bool	Заблокировано на бирже.
  // instrument_type	string	Тип инструмента.
}

/**
 * Баланс фьючерса
 * @see https://tinkoff.github.io/investAPI/operations/#positionsfutures
 */
export interface PositionsFutures {
  // figi	string	Figi-идентификатор фьючерса.
  // blocked	int64	Количество бумаг заблокированных выставленными заявками.
  // balance	int64	Текущий незаблокированный баланс.
  // position_uid	string	Уникальный идентификатор позиции.
  // instrument_uid	string	Уникальный идентификатор инструмента.
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#positionsoptions
 */
export interface PositionsOptions {
  // position_uid	string	Уникальный идентификатор позиции опциона.
  // instrument_uid	string	Уникальный идентификатор инструмента.
  // blocked	int64	Количество бумаг заблокированных выставленными заявками.
  // balance	int64	Текущий незаблокированный баланс.
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
  // money	Массив объектов MoneyValue	Массив валютных позиций портфеля.
  // blocked	Массив объектов MoneyValue	Массив заблокированных валютных позиций портфеля.
  // securities	Массив объектов PositionsSecurities	Список ценно-бумажных позиций портфеля.
  // limits_loading_in_progress	bool	Признак идущей в данный момент выгрузки лимитов.
  // futures	Массив объектов PositionsFutures	Список фьючерсов портфеля.
  // options	Массив объектов PositionsOptions	Список опционов портфеля.
}

/**
 * Запрос доступного для вывода остатка
 * @see https://tinkoff.github.io/investAPI/operations/#withdrawlimitsrequest
 */
export interface WithdrawLimitsRequest {
  // account_id	string	Идентификатор счёта пользователя.
}

/**
 * Доступный для вывода остаток
 * @see https://tinkoff.github.io/investAPI/operations/#withdrawlimitsresponse
 */
export interface WithdrawLimitsResponse {
  // money	Массив объектов MoneyValue	Массив валютных позиций портфеля.
  // blocked	Массив объектов MoneyValue	Массив заблокированных валютных позиций портфеля.
  // blocked_guarantee	Массив объектов MoneyValue	Заблокировано под гарантийное обеспечение фьючерсов.
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#generatebrokerreportrequest
 */
export interface GenerateBrokerReportRequest {
  // account_id	string	Идентификатор счёта клиента.
  // from	google.protobuf.Timestamp	Начало периода в часовом поясе UTC.
  // to	google.protobuf.Timestamp	Окончание периода в часовом поясе UTC.
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#generatebrokerreportresponse
 */
export interface GenerateBrokerReportResponse {
  // task_id	string	Идентификатор задачи формирования брокерского отчёта.
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#brokerreportrequest
 */
export interface BrokerReportRequest {
  // generate_broker_report_request	GenerateBrokerReportRequest
  // get_broker_report_request	GetBrokerReportRequest
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#brokerreportresponse
 */
export interface BrokerReportResponse {
  // generate_broker_report_response	GenerateBrokerReportResponse
  // get_broker_report_response	GetBrokerReportResponse
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#getbrokerreportrequest
 */
export interface GetBrokerReportRequest {
  // task_id	string	Идентификатор задачи формирования брокерского отчёта.
  // page	int32	Номер страницы отчета (начинается с 1), значение по умолчанию: 0.
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#getbrokerreportresponse
 */
export interface GetBrokerReportResponse {
  // broker_report	Массив объектов BrokerReport
  // itemsCount	int32	Количество записей в отчете.
  // pagesCount	int32	Количество страниц с данными отчета (начинается с 0).
  // page	int32	Текущая страница (начинается с 0).
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#brokerreport
 */
export interface BrokerReport {
  // trade_id	string	Номер сделки.
  // order_id	string	Номер поручения.
  // figi	string	Figi-идентификатор инструмента.
  // execute_sign	string	Признак исполнения.
  // trade_datetime	google.protobuf.Timestamp	Дата и время заключения в часовом поясе UTC.
  // exchange	string	Торговая площадка.
  // class_code	string	Режим торгов.
  // direction	string	Вид сделки.
  // name	string	Сокращённое наименование актива.
  // ticker	string	Код актива.
  // price	MoneyValue	Цена за единицу.
  // quantity	int64	Количество.
  // order_amount	MoneyValue	Сумма (без НКД).
  // aci_value	Quotation	НКД.
  // total_order_amount	MoneyValue	Сумма сделки.
  // broker_commission	MoneyValue	Комиссия брокера.
  // exchange_commission	MoneyValue	Комиссия биржи.
  // exchange_clearing_commission	MoneyValue	Комиссия клир. центра.
  // repo_rate	Quotation	Ставка РЕПО (%).
  // party	string	Контрагент/Брокер.
  // clear_value_date	google.protobuf.Timestamp	Дата расчётов в часовом поясе UTC.
  // sec_value_date	google.protobuf.Timestamp	Дата поставки в часовом поясе UTC.
  // broker_status	string	Статус брокера.
  // separate_agreement_type	string	Тип дог.
  // separate_agreement_number	string	Номер дог.
  // separate_agreement_date	string	Дата дог.
  // delivery_type	string	Тип расчёта по сделке.
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerrequest
 */
export interface GetDividendsForeignIssuerRequest {
  // generate_div_foreign_issuer_report	GenerateDividendsForeignIssuerReportRequest	Объект запроса формирования отчёта.
  // get_div_foreign_issuer_report	GetDividendsForeignIssuerReportRequest	Объект запроса сформированного отчёта.
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerresponse
 */
export interface GetDividendsForeignIssuerResponse {
  // generate_div_foreign_issuer_report_response	GenerateDividendsForeignIssuerReportResponse	Объект результата задачи запуска формирования отчёта.
  // div_foreign_issuer_report	GetDividendsForeignIssuerReportResponse	Отчёт "Справка о доходах за пределами РФ".
}

/**
 * Объект запроса формирования отчёта "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#generatedividendsforeignissuerreportrequest
 */
export interface GenerateDividendsForeignIssuerReportRequest {
  // account_id	string	Идентификатор счёта клиента.
  // from	google.protobuf.Timestamp	Начало периода (по UTC).
  // to	google.protobuf.Timestamp	Окончание периода (по UTC).
}

/**
 * Объект запроса формирования отчёта "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerreportrequest
 */
export interface GetDividendsForeignIssuerReportRequest {
  // task_id	string	Идентификатор задачи формирования отчёта.
  // page	int32	Номер страницы отчета (начинается с 0), значение по умолчанию: 0.
}

/**
 * Объект результата задачи запуска формирования отчёта "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#generatedividendsforeignissuerreportresponse
 */
export interface GenerateDividendsForeignIssuerReportResponse {
  // task_id	string	Идентификатор задачи формирования отчёта.
}

/**
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerreportresponse
 */
export interface GetDividendsForeignIssuerReportResponse {
  // dividends_foreign_issuer_report	Массив объектов DividendsForeignIssuerReport
  // itemsCount	int32	Количество записей в отчете.
  // pagesCount	int32	Количество страниц с данными отчета (начинается с 0).
  // page	int32	Текущая страница (начинается с 0).
}

/**
 * Отчёт "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#dividendsforeignissuerreport
 */
export interface DividendsForeignIssuerReport {
  // record_date	google.protobuf.Timestamp	Дата фиксации реестра.
  // payment_date	google.protobuf.Timestamp	Дата выплаты.
  // security_name	string	Наименование ценной бумаги.
  // isin	string	ISIN-идентификатор ценной бумаги.
  // issuer_country	string	Страна эмитента. Для депозитарных расписок указывается страна эмитента базового актива.
  // quantity	int64	Количество ценных бумаг.
  // dividend	Quotation	Выплаты на одну бумагу
  // external_commission	Quotation	Комиссия внешних платёжных агентов.
  // dividend_gross	Quotation	Сумма до удержания налога.
  // tax	Quotation	Сумма налога, удержанного агентом.
  // dividend_amount	Quotation	Итоговая сумма выплаты.
  // currency	string	Валюта.
}

/**
 * Запрос списка операций по счёту с пагинацией
 * @see https://tinkoff.github.io/investAPI/operations/#getoperationsbycursorrequest
 */
export interface GetOperationsByCursorRequest {
  // account_id	string	Идентификатор счёта клиента. Обязательный параметр для данного метода, остальные параметры опциональны.
  // instrument_id	string	Идентификатор инструмента (Figi инструмента или uid инструмента)
  // from	google.protobuf.Timestamp	Начало периода (по UTC).
  // to	google.protobuf.Timestamp	Окончание периода (по UTC).
  // cursor	string	Идентификатор элемента, с которого начать формировать ответ.
  // limit	int32	Лимит количества операций. По умолчанию устанавливается значение 100, максимальное значение 1000.
  // operation_types	Массив объектов OperationType	Тип операции. Принимает значение из списка OperationType.
  // state	OperationState	Статус запрашиваемых операций, возможные значения указаны в OperationState.
  // without_commissions	bool	Флаг возвращать ли комиссии, по умолчанию false
  // without_trades	bool	Флаг получения ответа без массива сделок.
  // without_overnights	bool	Флаг не показывать overnight операций.
}

/**
 * Список операций по счёту с пагинацией
 * @see https://tinkoff.github.io/investAPI/operations/#getoperationsbycursorresponse
 */
export interface GetOperationsByCursorResponse {
  // has_next	bool	Признак, есть ли следующий элемент.
  // next_cursor	string	Следующий курсор.
  // items	Массив объектов OperationItem	Список операций.
}

/**
 * Данные об операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationitem
 */
export interface OperationItem {
  // cursor	string	Курсор.
  // broker_account_id	string	Номер счета клиента.
  // id	string	Идентификатор операции, может меняться с течением времени.
  // parent_operation_id	string	Идентификатор родительской операции, может измениться, если изменился id родительской операции.
  // name	string	Название операции.
  // date	google.protobuf.Timestamp	Дата поручения.
  // type	OperationType	Тип операции.
  // description	string	Описание операции.
  // state	OperationState	Статус поручения.
  // instrument_uid	string	Уникальный идентификатор инструмента.
  // figi	string	Figi.
  // instrument_type	string	Тип инструмента.
  // instrument_kind	InstrumentType	Тип инструмента.
  // position_uid	string	position_uid-идентификатора инструмента.
  // payment	MoneyValue	Сумма операции.
  // price	MoneyValue	Цена операции за 1 инструмент.
  // commission	MoneyValue	Комиссия.
  // yield	MoneyValue	Доходность.
  // yield_relative	Quotation	Относительная доходность.
  // accrued_int	MoneyValue	Накопленный купонный доход.
  // quantity	int64	Количество единиц инструмента.
  // quantity_rest	int64	Неисполненный остаток по сделке.
  // quantity_done	int64	Исполненный остаток.
  // cancel_date_time	google.protobuf.Timestamp	Дата и время снятия заявки.
  // cancel_reason	string	Причина отмены операции.
  // trades_info	OperationItemTrades	Массив сделок.
  // asset_uid	string	Идентификатор актива
}

/**
 * Массив с информацией о сделках
 * @see https://tinkoff.github.io/investAPI/operations/#operationitemtrades
 */
export interface OperationItemTrades {
  // trades	Массив объектов OperationItemTrade
}

/**
 * Сделка по операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationitemtrade
 */
export interface OperationItemTrade {
  // num	string	Номер сделки
  // date	google.protobuf.Timestamp	Дата сделки
  // quantity	int64	Количество в единицах.
  // price	MoneyValue	Цена.
  // yield	MoneyValue	Доходность.
  // yield_relative	Quotation	Относительная доходность.
}

/**
 * Данные о позиции портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#positiondata
 */
export interface PositionData {
  // account_id	string	Идентификатор счёта.
  // money	Массив объектов PositionsMoney	Массив валютных позиций портфеля.
  // securities	Массив объектов PositionsSecurities	Список ценно-бумажных позиций портфеля.
  // futures	Массив объектов PositionsFutures	Список фьючерсов портфеля.
  // options	Массив объектов PositionsOptions	Список опционов портфеля.
  // date	google.protobuf.Timestamp	Дата и время операции в формате UTC.
}

/**
 * Валютная позиция портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#positionsmoney
 */
export interface PositionsMoney {
  // available_value	MoneyValue	Доступное количество валютный позиций.
  // blocked_value	MoneyValue	Заблокированное количество валютный позиций.
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
