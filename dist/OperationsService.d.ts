import { Common, MoneyValue, Quotation } from './Common';
import { InstrumentType } from './InstrumentsService';
/**
 * Статус запрашиваемых операций
 * @see https://tinkoff.github.io/investAPI/operations/#operationstate
 */
export declare enum OperationState {
    /** Статус операции не определё */
    OPERATION_STATE_UNSPECIFIED = 0,
    /** Исполнена */
    OPERATION_STATE_EXECUTED = 1,
    /** Отменена */
    OPERATION_STATE_CANCELED = 2,
    /** Исполняется */
    OPERATION_STATE_PROGRESS = 3
}
/**
 * Тип операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationtype
 */
export declare enum OperationType {
    /** Тип операции не определён */
    OPERATION_TYPE_UNSPECIFIED = 0,
    /** Пополнение брокерского счёта */
    OPERATION_TYPE_INPUT = 1,
    /** Удержание НДФЛ по купонам */
    OPERATION_TYPE_BOND_TAX = 2,
    /** Вывод ЦБ */
    OPERATION_TYPE_OUTPUT_SECURITIES = 3,
    /** Доход по сделке РЕПО овернайт */
    OPERATION_TYPE_OVERNIGHT = 4,
    /** Удержание налога */
    OPERATION_TYPE_TAX = 5,
    /** Полное погашение облигаций */
    OPERATION_TYPE_BOND_REPAYMENT_FULL = 6,
    /** Продажа ЦБ с карты */
    OPERATION_TYPE_SELL_CARD = 7,
    /** Удержание налога по дивидендам */
    OPERATION_TYPE_DIVIDEND_TAX = 8,
    /** Вывод денежных средств */
    OPERATION_TYPE_OUTPUT = 9,
    /** Частичное погашение облигаций */
    OPERATION_TYPE_BOND_REPAYMENT = 10,
    /** Корректировка налога */
    OPERATION_TYPE_TAX_CORRECTION = 11,
    /** Удержание комиссии за обслуживание брокерского счёта */
    OPERATION_TYPE_SERVICE_FEE = 12,
    /** Удержание налога за материальную выгоду */
    OPERATION_TYPE_BENEFIT_TAX = 13,
    /** Удержание комиссии за непокрытую позицию */
    OPERATION_TYPE_MARGIN_FEE = 14,
    /** Покупка ЦБ */
    OPERATION_TYPE_BUY = 15,
    /** Покупка ЦБ с карты */
    OPERATION_TYPE_BUY_CARD = 16,
    /** Перевод ценных бумаг из другого депозитария */
    OPERATION_TYPE_INPUT_SECURITIES = 17,
    /** Продажа в результате Margin-call */
    OPERATION_TYPE_SELL_MARGIN = 18,
    /** Удержание комиссии за операцию */
    OPERATION_TYPE_BROKER_FEE = 19,
    /** Покупка в результате Margin-call */
    OPERATION_TYPE_BUY_MARGIN = 20,
    /** Выплата дивидендов */
    OPERATION_TYPE_DIVIDEND = 21,
    /** Продажа ЦБ */
    OPERATION_TYPE_SELL = 22,
    /** Выплата купонов */
    OPERATION_TYPE_COUPON = 23,
    /** Удержание комиссии SuccessFee */
    OPERATION_TYPE_SUCCESS_FEE = 24,
    /** Передача дивидендного дохода */
    OPERATION_TYPE_DIVIDEND_TRANSFER = 25,
    /** Зачисление вариационной маржи */
    OPERATION_TYPE_ACCRUING_VARMARGIN = 26,
    /** Списание вариационной маржи */
    OPERATION_TYPE_WRITING_OFF_VARMARGIN = 27,
    /** Покупка в рамках экспирации фьючерсного контракта */
    OPERATION_TYPE_DELIVERY_BUY = 28,
    /** Продажа в рамках экспирации фьючерсного контракта */
    OPERATION_TYPE_DELIVERY_SELL = 29,
    /** Комиссия за управление по счёту автоследования */
    OPERATION_TYPE_TRACK_MFEE = 30,
    /** Комиссия за результат по счёту автоследования */
    OPERATION_TYPE_TRACK_PFEE = 31,
    /** Удержание налога по ставке 15% */
    OPERATION_TYPE_TAX_PROGRESSIVE = 32,
    /** Удержание налога по купонам по ставке 15% */
    OPERATION_TYPE_BOND_TAX_PROGRESSIVE = 33,
    /** Удержание налога по дивидендам по ставке 15% */
    OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE = 34,
    /** Удержание налога за материальную выгоду по ставке 15% */
    OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE = 35,
    /** Корректировка налога по ставке 15% */
    OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE = 36,
    /** Удержание налога за возмещение по сделкам РЕПО по ставке 15% */
    OPERATION_TYPE_TAX_REPO_PROGRESSIVE = 37,
    /** Удержание налога за возмещение по сделкам РЕПО */
    OPERATION_TYPE_TAX_REPO = 38,
    /** Удержание налога по сделкам РЕПО */
    OPERATION_TYPE_TAX_REPO_HOLD = 39,
    /** Возврат налога по сделкам РЕПО */
    OPERATION_TYPE_TAX_REPO_REFUND = 40,
    /** Удержание налога по сделкам РЕПО по ставке 15% */
    OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE = 41,
    /** Возврат налога по сделкам РЕПО по ставке 15% */
    OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE = 42,
    /** Выплата дивидендов на карту */
    OPERATION_TYPE_DIV_EXT = 43,
    /** Корректировка налога по купонам */
    OPERATION_TYPE_TAX_CORRECTION_COUPON = 44,
    /** Комиссия за валютный остаток */
    OPERATION_TYPE_CASH_FEE = 45,
    /** Комиссия за вывод валюты с брокерского счета */
    OPERATION_TYPE_OUT_FEE = 46,
    /** Гербовый сбор */
    OPERATION_TYPE_OUT_STAMP_DUTY = 47,
    /** SWIFT-перевод */
    OPERATION_TYPE_OUTPUT_SWIFT = 48,
    /** SWIFT-перевод */
    OPERATION_TYPE_INPUT_SWIFT = 49,
    /** Перевод на карту */
    OPERATION_TYPE_OUTPUT_ACQUIRING = 50,
    /** Перевод с карты */
    OPERATION_TYPE_INPUT_ACQUIRING = 51,
    /** Комиссия за вывод средств */
    OPERATION_TYPE_OUTPUT_PENALTY = 52,
    /** Списание оплаты за сервис Советов */
    OPERATION_TYPE_ADVICE_FEE = 53,
    /** Перевод ценных бумаг с ИИС на Брокерский счет */
    OPERATION_TYPE_TRANS_IIS_BS = 54,
    /** Перевод ценных бумаг с одного брокерского счета на другой */
    OPERATION_TYPE_TRANS_BS_BS = 55,
    /** Вывод денежных средств со счета */
    OPERATION_TYPE_OUT_MULTI = 56,
    /** Пополнение денежных средств со счета */
    OPERATION_TYPE_INP_MULTI = 57,
    /** Размещение биржевого овернайта */
    OPERATION_TYPE_OVER_PLACEMENT = 58,
    /** Списание комиссии */
    OPERATION_TYPE_OVER_COM = 59,
    /** Доход от оверанайта */
    OPERATION_TYPE_OVER_INCOME = 60,
    /** Экспирация */
    OPERATION_TYPE_OPTION_EXPIRATION = 61
}
/**
 * Запрос валют
 * @see https://tinkoff.github.io/investAPI/operations/#positionsaccountsubscriptionstatus
 */
export declare enum PortfolioRequestCurrencyRequest {
    /** Рубли */
    RUB = 0,
    /** Доллары */
    USD = 1,
    /** Евро */
    EUR = 2
}
/**
 * Данные по операции
 * @see https://tinkoff.github.io/investAPI/operations/#operation
 */
export interface Operation {
    /** Идентификатор операции */
    id: string;
    /** Идентификатор родительской операции */
    parentOperationId: string;
    /** Валюта операции */
    currency: string;
    /** Сумма операции */
    payment: MoneyValue;
    /**
     * Цена операции за 1 инструмент
     * @description Для получения стоимости лота требуется умножить на лотность инструмента
     */
    price: MoneyValue;
    /** Статус операции */
    state: OperationState;
    /**
     * Количество единиц инструмента
     * @type `int64`
     */
    quantity: string;
    /**
     * Неисполненный остаток по сделке
     * @type `int64`
     */
    quantityRest: string;
    /** Figi-идентификатор инструмента, связанного с операцией */
    figi: string;
    /**
     * Тип инструмента. Возможные значения:
     * `bond` — облигация;
     * `share` — акция;
     * `currency` — валюта;
     * `etf` — фонд;
     * `futures` — фьючерс.
     */
    instrumentType: 'bond' | 'share' | 'currency' | 'etf' | 'futures';
    /**
     * Дата и время операции в формате часовом поясе UTC
     * @type `google.protobuf.Timestamp`
     */
    date: string;
    /** Текстовое описание типа операции */
    type: string;
    /** Тип операции */
    operationType: OperationType;
    /** Массив сделок */
    trades: OperationTrade[];
    /** Идентификатор актива */
    assetUid: string;
    /** positionUid-идентификатора инструмента */
    positionUid: string;
    /** Уникальный идентификатор инструмента */
    instrumentUid: string;
}
/**
 * Сделка по операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationtrade
 */
export interface OperationTrade {
    /** Идентификатор сделки */
    tradeId: string;
    /**
     * Дата и время сделки в часовом поясе UTC
     * @type `google.protobuf.Timestamp`
     */
    dateTime: string;
    /**
     * Количество инструментов
     * @type `int64`
     */
    quantity: string;
    /**
     * Цена за 1 инструмент
     * @description Для получения стоимости лота требуется умножить на лотность инструмента.
     */
    price: MoneyValue;
}
/**
 * Запрос получения списка операций по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#operationsrequest
 */
export interface OperationsRequest {
    /** Идентификатор счёта клиента */
    accountId: string;
    /**
     * Начало периода (по UTC).
     * @type `google.protobuf.Timestamp`
     */
    from: string;
    /**
     * Окончание периода (по UTC).
     * @type `google.protobuf.Timestamp`
     */
    to: string;
    /** Статус запрашиваемых операций */
    state: OperationState;
    /** Figi-идентификатор инструмента для фильтрации */
    figi: string;
}
/**
 * Список операций
 * @see https://tinkoff.github.io/investAPI/operations/#operationsresponse
 */
export interface OperationsResponse {
    /** Массив операций */
    operations: Operation[];
}
/**
 * Запрос получения текущего портфеля по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#portfoliorequest
 */
export interface PortfolioRequest {
    /** Идентификатор счёта пользователя */
    accountId: string;
    /** Валюта, в которой требуется рассчитать портфель */
    currency: PortfolioRequestCurrencyRequest;
}
/**
 * Текущий портфель по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#portfolioresponse
 */
export interface PortfolioResponse {
    /** Общая стоимость акций в портфеле */
    totalAmountShares: MoneyValue;
    /** Общая стоимость облигаций в портфеле */
    totalAmountBonds: MoneyValue;
    /** Общая стоимость фондов в портфеле */
    totalAmountEtf: MoneyValue;
    /** Общая стоимость валют в портфеле */
    totalAmountCurrencies: MoneyValue;
    /** Общая стоимость фьючерсов в портфеле */
    totalAmountFutures: MoneyValue;
    /** Текущая относительная доходность портфеля, в % */
    expectedYield: Quotation;
    /** Список позиций портфеля */
    positions: PortfolioPosition[];
    /** Идентификатор счёта пользователя */
    accountId: string;
    /** Общая стоимость опционов в портфеле */
    totalAmountOptions: MoneyValue;
    /** Общая стоимость структурных нот в портфеле */
    totalAmountSp: MoneyValue;
    /** Общая стоимость портфеля */
    totalAmountPortfolio: MoneyValue;
    /** Массив виртуальных позиций портфеля */
    virtualPositions: VirtualPortfolioPosition[];
}
/**
 * Позиции портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#portfolioposition
 */
export interface PortfolioPosition {
    /** Figi-идентификатора инструмента */
    figi: string;
    /** Тип инструмента */
    instrumentType: string;
    /** Количество инструмента в портфеле в штуках */
    quantity: Quotation;
    /**
     * Средневзвешенная цена позиции
     * @description Возможна задержка до секунды для пересчёта
     */
    averagePositionPrice: MoneyValue;
    /** Текущая рассчитанная доходность позиции */
    expectedYield: Quotation;
    /** Текущий НКД */
    currentNkd: MoneyValue;
    /**
     * Средняя цена позиции в пунктах (для фьючерсов)
     * Возможна задержка до секунды для пересчёта
     * @deprecated
     */
    averagePositionPricePt?: Quotation;
    /**
     * Текущая цена за 1 инструмент
     * @description Для получения стоимости лота требуется умножить на лотность инструмента
     */
    currentPrice: MoneyValue;
    /**
     * Средняя цена позиции по методу FIFO
     * @description Возможна задержка до секунды для пересчёта
     */
    averagePositionPriceFifo: MoneyValue;
    /**
     * Количество лотов в портфеле
     * @deprecated
     */
    quantityLots?: Quotation;
    /** Заблокировано на бирже */
    blocked: boolean;
    /** Количество бумаг, заблокированных выставленными заявками */
    blockedLots: Quotation;
    /** positionUid-идентификатора инструмент */
    positionUid: string;
    /** instrumentUid-идентификатора инструмент */
    instrumentUid: string;
    /** Вариационная маржа */
    varMargin: MoneyValue;
    /** Текущая рассчитанная доходность позиции */
    expectedYieldFifo: Quotation;
}
/**
 * Виртуальные позиции портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#virtualportfolioposition
 */
export interface VirtualPortfolioPosition {
    /** positionUid-идентификатора инструмент */
    positionUid: string;
    /** instrumentUid-идентификатора инструмент */
    instrumentUid: string;
    /** Figi-идентификатора инструмента */
    figi: string;
    /** Тип инструмента */
    instrumentType: string;
    /** Количество инструмента в портфеле в штуках */
    quantity: Quotation;
    /**
     * Средневзвешенная цена позиции
     * @description Возможна задержка до секунды для пересчёта
     */
    averagePositionPrice: MoneyValue;
    /** Текущая рассчитанная доходность позиции */
    expectedYield: Quotation;
    /** Текущая рассчитанная доходность позиции */
    expectedYieldFifo: Quotation;
    /**
     * Дата до которой нужно продать виртуальные бумаги, после этой даты виртуальная позиция "сгорит"
     * @type `google.protobuf.Timestamp`
     */
    expireDate: string;
    /**
     * Текущая цена за 1 инструмент
     * @description Для получения стоимости лота требуется умножить на лотность инструмента
     */
    currentPrice: MoneyValue;
    /**
     * Средняя цена позиции по методу FIFO
     * @description Возможна задержка до секунды для пересчёта
     */
    averagePositionPriceFifo: MoneyValue;
}
/**
 * Баланс позиции ценной бумаги
 * @see https://tinkoff.github.io/investAPI/operations/#positionssecurities
 */
export interface PositionsSecurities {
    /** Figi-идентификатор бумаги */
    figi: string;
    /**
     * Количество бумаг заблокированных выставленными заявками
     * @type `int64`
     */
    blocked: string;
    /**
     * Текущий незаблокированный баланс
     * @type `int64`
     */
    balance: string;
    /** Уникальный идентификатор позиции */
    positionUid: string;
    /** Уникальный идентификатор инструмента */
    instrumentUid: string;
    /** Заблокировано на бирже */
    exchangeBlocked: boolean;
    /** Тип инструмента */
    instrumentType: string;
}
/**
 * Баланс фьючерса
 * @see https://tinkoff.github.io/investAPI/operations/#positionsfutures
 */
export interface PositionsFutures {
    /** Figi-идентификатор фьючерса */
    figi: string;
    /**
     * Количество бумаг заблокированных выставленными заявками
     * @type `int64`
     */
    blocked: string;
    /**
     * Текущий незаблокированный баланс
     * @type `int64`
     */
    balance: string;
    /** Уникальный идентификатор позиции */
    positionUid: string;
    /** Уникальный идентификатор инструмента */
    instrumentUid: string;
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#positionsoptions
 */
export interface PositionsOptions {
    /** Уникальный идентификатор позиции опциона */
    positionUid: string;
    /** Уникальный идентификатор инструмента */
    instrumentUid: string;
    /**
     * Количество бумаг заблокированных выставленными заявками
     * @type `int64`
     */
    blocked: string;
    /**
     * Текущий незаблокированный баланс
     * @type `int64`
     */
    balance: string;
}
/**
 * Запрос позиций портфеля по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#positionsrequest
 */
export interface PositionsRequest {
    /** Идентификатор счёта пользователя */
    accountId: string;
}
/**
 * Список позиций по счёту
 * @see https://tinkoff.github.io/investAPI/operations/#positionsresponse
 */
export interface PositionsResponse {
    /** Массив валютных позиций портфеля */
    money: MoneyValue[];
    /** Массив заблокированных валютных позиций портфеля */
    blocked: MoneyValue[];
    /** Список ценно-бумажных позиций портфеля */
    securities: PositionsSecurities[];
    /** Признак идущей в данный момент выгрузки лимитов */
    limitsLoadingInProgress: boolean;
    /** Список фьючерсов портфеля */
    futures: PositionsFutures[];
    /** Список опционов портфеля */
    options: PositionsOptions[];
}
/**
 * Запрос доступного для вывода остатка
 * @see https://tinkoff.github.io/investAPI/operations/#withdrawlimitsrequest
 */
export interface WithdrawLimitsRequest {
    /** Идентификатор счёта пользователя */
    accountId: string;
}
/**
 * Доступный для вывода остаток
 * @see https://tinkoff.github.io/investAPI/operations/#withdrawlimitsresponse
 */
export interface WithdrawLimitsResponse {
    /** Массив валютных позиций портфеля */
    money: MoneyValue[];
    /** Массив заблокированных валютных позиций портфеля */
    blocked: MoneyValue[];
    /** Заблокировано под гарантийное обеспечение фьючерсов */
    blockedGuarantee: MoneyValue[];
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#generatebrokerreportrequest
 */
export interface GenerateBrokerReportRequest {
    /** Идентификатор счёта клиента */
    accountId: string;
    /**
     * Начало периода в часовом поясе UTC
     * @type `google.protobuf.Timestamp`
     */
    from: string;
    /**
     * Окончание периода в часовом поясе UTC
     * @type `google.protobuf.Timestamp`
     */
    to: string;
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#generatebrokerreportresponse
 */
export interface GenerateBrokerReportResponse {
    /** Идентификатор задачи формирования брокерского отчёта */
    taskId: string;
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#brokerreportrequest
 */
export interface BrokerReportRequest {
    /** @todo Нет описания */
    generateBrokerReportRequest: GenerateBrokerReportRequest;
    /** @todo Нет описания */
    getBrokerReportRequest: GetBrokerReportRequest;
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#brokerreportresponse
 */
export interface BrokerReportResponse {
    /** @todo Нет описания */
    generateBrokerReportResponse: GenerateBrokerReportResponse;
    /** @todo Нет описания */
    getBrokerReportResponse: GetBrokerReportResponse;
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#getbrokerreportrequest
 */
export interface GetBrokerReportRequest {
    /** Идентификатор задачи формирования брокерского отчёта */
    taskId: string;
    /**
     * Номер страницы отчета (начинается с 1), значение по умолчанию: 0
     * @type `int32`
     */
    page: number;
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#getbrokerreportresponse
 */
export interface GetBrokerReportResponse {
    /** @todo Нет описания */
    brokerReport: BrokerReport[];
    /**
     * Количество записей в отчете
     * @type `int32`
     */
    itemsCount: number;
    /**
     * Количество страниц с данными отчета (начинается с 0)
     * @type `int32`
     */
    pagesCount: number;
    /**
     * Текущая страница (начинается с 0)
     * @type `int32`
     */
    page: number;
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#brokerreport
 */
export interface BrokerReport {
    /** Номер сделки */
    tradeId: string;
    /** Номер поручения */
    orderId: string;
    /** Figi-идентификатор инструмента */
    figi: string;
    /** Признак исполнения */
    executeSign: string;
    /**
     * Дата и время заключения в часовом поясе UTC
     * @type `google.protobuf.Timestamp`
     */
    tradeDatetime: string;
    /** Торговая площадка */
    exchange: string;
    /** Режим торгов */
    classCode: string;
    /** Вид сделки */
    direction: string;
    /** Сокращённое наименование актива */
    name: string;
    /** Код актива */
    ticker: string;
    /**
     * Цена за единицу.
     */
    price: MoneyValue;
    /**
     * Количество
     * @type `int64`
     */
    quantity: string;
    /** Сумма (без НКД) */
    orderAmount: MoneyValue;
    /** НКД */
    aciValue: Quotation;
    /** Сумма сделки */
    totalOrderAmount: MoneyValue;
    /** Комиссия брокера */
    brokerCommission: MoneyValue;
    /** Комиссия биржи */
    exchangeCommission: MoneyValue;
    /** Комиссия клир. центра */
    exchangeClearingCommission: MoneyValue;
    /** Ставка РЕПО (%) */
    repoRate: Quotation;
    /** Контрагент/Брокер */
    party: string;
    /**
     * Дата расчётов в часовом поясе UTC
     * @type `google.protobuf.Timestamp`
     */
    clearValueDate: string;
    /**
     * Дата поставки в часовом поясе UTC
     * @type `google.protobuf.Timestamp`
     */
    secValueDate: string;
    /** Статус брокера */
    brokerStatus: string;
    /** Тип дог */
    separateAgreementType: string;
    /** Номер дог */
    separateAgreementNumber: string;
    /** Дата дог */
    separateAgreementDate: string;
    /** Тип расчёта по сделке */
    deliveryType: string;
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerrequest
 */
export interface GetDividendsForeignIssuerRequest {
    /** Объект запроса формирования отчёта */
    generateDivForeignIssuerReport: GenerateDividendsForeignIssuerReportRequest;
    /** Объект запроса сформированного отчёта */
    getDivForeignIssuerReport: GetDividendsForeignIssuerReportRequest;
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerresponse
 */
export interface GetDividendsForeignIssuerResponse {
    /** Объект результата задачи запуска формирования отчёта */
    generateDivForeignIssuerReportResponse: GenerateDividendsForeignIssuerReportResponse;
    /** Отчёт "Справка о доходах за пределами РФ" */
    divForeignIssuerReport: GetDividendsForeignIssuerReportResponse;
}
/**
 * Объект запроса формирования отчёта "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#generatedividendsforeignissuerreportrequest
 */
export interface GenerateDividendsForeignIssuerReportRequest {
    /** Идентификатор счёта клиента */
    accountId: string;
    /**
     * Начало периода (по UTC).
     * @type `google.protobuf.Timestamp`
     */
    from: string;
    /**
     * Окончание периода (по UTC).
     * @type `google.protobuf.Timestamp`
     */
    to: string;
}
/**
 * Объект запроса формирования отчёта "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerreportrequest
 */
export interface GetDividendsForeignIssuerReportRequest {
    /** Идентификатор задачи формирования отчёта */
    taskId: string;
    /**
     * Номер страницы отчета (начинается с 0), значение по умолчанию: 0
     * @type `int32`
     */
    page: number;
}
/**
 * Объект результата задачи запуска формирования отчёта "Справка о доходах за пределами РФ"
 * @see https://tinkoff.github.io/investAPI/operations/#generatedividendsforeignissuerreportresponse
 */
export interface GenerateDividendsForeignIssuerReportResponse {
    /** Идентификатор задачи формирования отчёта */
    taskId: string;
}
/**
 * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuerreportresponse
 */
export interface GetDividendsForeignIssuerReportResponse {
    /** @todo Нет описания */
    dividendsForeignIssuerReport: DividendsForeignIssuerReport[];
    /**
     * Количество записей в отчете
     * @type `int32`
     */
    itemsCount: number;
    /**
     * Количество страниц с данными отчета (начинается с 0)
     * @type `int32`
     */
    pagesCount: number;
    /**
     * Текущая страница (начинается с 0)
     * @type `int32`
     */
    page: number;
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
    recordDate: string;
    /**
     * Дата выплаты.
     * @type `google.protobuf.Timestamp`
     */
    paymentDate: string;
    /** Наименование ценной бумаги */
    securityName: string;
    /** ISIN-идентификатор ценной бумаги */
    isin: string;
    /**
     * Страна эмитента
     * @description Для депозитарных расписок указывается страна эмитента базового актива
     */
    issuerCountry: string;
    /**
     * Количество ценных бумаг
     * @type `int64`
     */
    quantity: string;
    /** Выплаты на одну бумаг */
    dividend: Quotation;
    /** Комиссия внешних платёжных агентов */
    externalCommission: Quotation;
    /** Сумма до удержания налога */
    dividendGross: Quotation;
    /** Сумма налога, удержанного агентом */
    tax: Quotation;
    /** Итоговая сумма выплаты */
    dividendAmount: Quotation;
    /** Валюта */
    currency: string;
}
/**
 * Запрос списка операций по счёту с пагинацией
 * @see https://tinkoff.github.io/investAPI/operations/#getoperationsbycursorrequest
 */
export interface GetOperationsByCursorRequest {
    /**
     * Идентификатор счёта клиента
     * @description Обязательный параметр для данного метода, остальные параметры опциональны
     */
    accountId: string;
    /** Идентификатор инструмента (Figi инструмента или uid инструмента) */
    instrumentId: string;
    /**
     * Начало периода (по UTC).
     * @type `google.protobuf.Timestamp`
     */
    from: string;
    /**
     * Окончание периода (по UTC).
     * @type `google.protobuf.Timestamp`
     */
    to: string;
    /** Идентификатор элемента, с которого начать формировать ответ */
    cursor: string;
    /**
     * Лимит количества операций
     * @description По умолчанию устанавливается значение 100, максимальное значение 1000
     * @type `int32`
     */
    limit: number;
    /**
     * Тип операции
     * @description Принимает значение из списка OperationType
     */
    operationTypes: OperationType[];
    /** Статус запрашиваемых операций, возможные значения указаны в OperationState */
    state: OperationState;
    /** Флаг возвращать ли комиссии, по умолчанию false */
    withoutCommissions: boolean;
    /** Флаг получения ответа без массива сделок */
    withoutTrades: boolean;
    /** Флаг не показывать overnight операций */
    withoutOvernights: boolean;
}
/**
 * Список операций по счёту с пагинацией
 * @see https://tinkoff.github.io/investAPI/operations/#getoperationsbycursorresponse
 */
export interface GetOperationsByCursorResponse {
    /** Признак, есть ли следующий элемент */
    hasNext: boolean;
    /** Следующий курсор */
    nextCursor: string;
    /** Список операций */
    items: OperationItem[];
}
/**
 * Данные об операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationitem
 */
export interface OperationItem {
    /** Курсор */
    cursor: string;
    /** Номер счета клиента */
    brokerAccountId: string;
    /** Идентификатор операции, может меняться с течением времени */
    id: string;
    /** Идентификатор родительской операции, может измениться, если изменился id родительской операции */
    parentOperationId: string;
    /** Название операции */
    name: string;
    /**
     * Дата поручения.
     * @type `google.protobuf.Timestamp`
     */
    date: string;
    /** Тип операции */
    type: OperationType;
    /** Описание операции */
    description: string;
    /** Статус поручения */
    state: OperationState;
    /** Уникальный идентификатор инструмента */
    instrumentUid: string;
    /** Figi */
    figi: string;
    /** Тип инструмента */
    instrumentType: string;
    /** Тип инструмента */
    instrumentKind: InstrumentType;
    /** positionUid-идентификатора инструмента */
    positionUid: string;
    /** Сумма операции */
    payment: MoneyValue;
    /**
     * Цена операции за 1 инструмент.
     */
    price: MoneyValue;
    /** Комиссия */
    commission: MoneyValue;
    /** Доходность */
    yield: MoneyValue;
    /** Относительная доходность */
    yieldRelative: Quotation;
    /** Накопленный купонный доход */
    accruedInt: MoneyValue;
    /**
     * Количество единиц инструмента
     * @type `int64`
     */
    quantity: string;
    /**
     * Неисполненный остаток по сделке
     * @type `int64`
     */
    quantityRest: string;
    /**
     * Исполненный остаток
     * @type `int64`
     */
    quantityDone: string;
    /**
     * Дата и время снятия заявки.
     * @type `google.protobuf.Timestamp`
     */
    cancelDateTime: string;
    /** Причина отмены операции */
    cancelReason: string;
    /** Массив сделок */
    tradesInfo: OperationItemTrades;
    /** Идентификатор актива */
    assetUid: string;
}
/**
 * Массив с информацией о сделках
 * @see https://tinkoff.github.io/investAPI/operations/#operationitemtrades
 */
export interface OperationItemTrades {
    /** @todo Нет описания */
    trades: OperationItemTrade[];
}
/**
 * Сделка по операции
 * @see https://tinkoff.github.io/investAPI/operations/#operationitemtrade
 */
export interface OperationItemTrade {
    /** Номер сделки */
    num: string;
    /**
     * Дата сделки
     * @type `google.protobuf.Timestamp`
     */
    date: string;
    /**
     * Количество в единицах
     * @type `int64`
     */
    quantity: string;
    /**
     * Цена.
     */
    price: MoneyValue;
    /** Доходность */
    yield: MoneyValue;
    /** Относительная доходность */
    yieldRelative: Quotation;
}
/**
 * Данные о позиции портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#positiondata
 */
export interface PositionData {
    /** Идентификатор счёта */
    accountId: string;
    /** Массив валютных позиций портфеля */
    money: PositionsMoney[];
    /** Список ценно-бумажных позиций портфеля */
    securities: PositionsSecurities[];
    /** Список фьючерсов портфеля */
    futures: PositionsFutures[];
    /** Список опционов портфеля */
    options: PositionsOptions[];
    /**
     * Дата и время операции в формате UTC
     * @type `google.protobuf.Timestamp`
     */
    date: string;
}
/**
 * Валютная позиция портфеля
 * @see https://tinkoff.github.io/investAPI/operations/#positionsmoney
 */
export interface PositionsMoney {
    /** Доступное количество валютный позиций */
    availableValue: MoneyValue;
    /** Заблокированное количество валютный позиций */
    blockedValue: MoneyValue;
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
export declare class OperationsService extends Common {
    /**
     * Метод получения списка операций по счёту
     * @description При работе с данным методом необходимо учитывать особенности взаимодействия с данным методом
     * @see https://tinkoff.github.io/investAPI/operations/#getoperations
     */
    GetOperations(body: OperationsRequest): Promise<OperationsResponse>;
    /**
     * Метод получения портфеля по счёту
     * @see https://tinkoff.github.io/investAPI/operations/#getportfolio
     */
    GetPortfolio(body: PortfolioRequest): Promise<PortfolioResponse>;
    /**
     * Метод получения списка позиций по счёту
     * @see https://tinkoff.github.io/investAPI/operations/#getpositions
     */
    GetPositions(body: PositionsRequest): Promise<PositionsResponse>;
    /**
     * Метод получения доступного остатка для вывода средств
     * @see https://tinkoff.github.io/investAPI/operations/#getwithdrawlimits
     */
    GetWithdrawLimits(body: WithdrawLimitsRequest): Promise<WithdrawLimitsResponse>;
    /**
     * Метод получения брокерского отчёта
     * @see https://tinkoff.github.io/investAPI/operations/#getbrokerreport
     */
    GetBrokerReport(body: BrokerReportRequest): Promise<BrokerReportResponse>;
    /**
     * Метод получения отчёта "Справка о доходах за пределами РФ"
     * @see https://tinkoff.github.io/investAPI/operations/#getdividendsforeignissuer
     */
    GetDividendsForeignIssuer(body: GetDividendsForeignIssuerRequest): Promise<GetDividendsForeignIssuerResponse>;
    /**
     * Метод получения списка операций по счёту с пагинацией
     * @description При работе с данным методом необходимо учитывать особенности взаимодействия с данным методом
     * @see https://tinkoff.github.io/investAPI/operations/#getoperationsbycursor
     */
    GetOperationsByCursor(body: GetOperationsByCursorRequest): Promise<GetOperationsByCursorResponse>;
}
