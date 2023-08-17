import { Common, MoneyValue, Quotation, SecurityTradingStatus } from './Common'

/**
 * Тип инструмента
 */
export enum InstrumentType {
  /** @todo Нет описания */
  INSTRUMENT_TYPE_UNSPECIFIED,
  /** @todo Нет описания */
  INSTRUMENT_TYPE_BOND,
  /** @todo Нет описания */
  INSTRUMENT_TYPE_SHARE,
  /** @todo Нет описания */
  INSTRUMENT_TYPE_CURRENCY,
  /** @todo Нет описания */
  INSTRUMENT_TYPE_ETF,
  /** @todo Нет описания */
  INSTRUMENT_TYPE_FUTURES,
  /** @todo Нет описания */
  INSTRUMENT_TYPE_SP,
  /** @todo Нет описания */
  INSTRUMENT_TYPE_OPTION,
  /** @todo Нет описания */
  INSTRUMENT_TYPE_CLEARING_CERTIFICATE
}

/**
 * Тип купонов
 * @see https://tinkoff.github.io/investAPI/instruments/#coupontype
 */
export enum CouponType {
  /** Неопределенное значение */
  COUPON_TYPE_UNSPECIFIED,
  /** Постоянный */
  COUPON_TYPE_CONSTANT,
  /** Плавающий */
  COUPON_TYPE_FLOATING,
  /** Дисконт */
  COUPON_TYPE_DISCOUNT,
  /** Ипотечный */
  COUPON_TYPE_MORTGAGE,
  /** Фиксированный */
  COUPON_TYPE_FIX,
  /** Переменный */
  COUPON_TYPE_VARIABLE,
  /** Прочее */
  COUPON_TYPE_OTHER
}

/**
 * Тип опциона по направлению сделки
 * @see https://tinkoff.github.io/investAPI/instruments/#optiondirection
 */
export enum OptionDirection {
  /** Тип не определен */
  OPTION_DIRECTION_UNSPECIFIED,
  /** Опцион на продажу */
  OPTION_DIRECTION_PUT,
  /** Опцион на покупку */
  OPTION_DIRECTION_CALL
}

/**
 * Тип расчетов по опциону
 * @see https://tinkoff.github.io/investAPI/instruments/#optionpaymenttype
 */
export enum OptionPaymentType {
  /** Тип не определен */
  OPTION_PAYMENT_TYPE_UNSPECIFIED,
  /** Опционы с использованием премии в расчетах */
  OPTION_PAYMENT_TYPE_PREMIUM,
  /** Маржируемые опционы */
  OPTION_PAYMENT_TYPE_MARGINAL
}

/**
 * Тип опциона по стилю
 * @see https://tinkoff.github.io/investAPI/instruments/#optionstyle
 */
export enum OptionStyle {
  /** Тип не определен */
  OPTION_STYLE_UNSPECIFIED,
  /** Американский опцион */
  OPTION_STYLE_AMERICAN,
  /** Европейский опцион */
  OPTION_STYLE_EUROPEAN
}

/**
 * Тип опциона по способу исполнения
 * @see https://tinkoff.github.io/investAPI/instruments/#optionsettlementtype
 */
export enum OptionSettlementType {
  /** Тип не определен */
  OPTION_EXECUTION_TYPE_UNSPECIFIED,
  /** Поставочный тип опциона */
  OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY,
  /** Расчетный тип опциона */
  OPTION_EXECUTION_TYPE_CASH_SETTLEMENT
}

/**
 * Тип идентификатора инструмента. Подробнее об идентификации инструментов: Идентификация инструменто
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentidtype
 */
export enum InstrumentIdType {
  /** Значение не определено */
  INSTRUMENT_ID_UNSPECIFIED,
  /** Figi */
  INSTRUMENT_ID_TYPE_FIGI,
  /** Ticker */
  INSTRUMENT_ID_TYPE_TICKER,
  /** Уникальный идентификатор */
  INSTRUMENT_ID_TYPE_UID,
  /** Идентификатор позиции */
  INSTRUMENT_ID_TYPE_POSITION_UID
}

/**
 * Статус запрашиваемых инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentstatus
 */
export enum InstrumentStatus {
  /** Значение не определено */
  INSTRUMENT_STATUS_UNSPECIFIED,
  /** Базовый список инструментов (по умолчанию). Инструменты доступные для торговли через TINKOFF INVEST API. Cейчас списки бумаг, доступных из api и других интерфейсах совпадают (за исключением внебиржевых бумаг), но в будущем возможны ситуации, когда списки инструментов будут отличатьс */
  INSTRUMENT_STATUS_BASE,
  /** Список всех инструментов */
  INSTRUMENT_STATUS_ALL
}

/**
 * Тип акций
 * @see https://tinkoff.github.io/investAPI/instruments/#sharetype
 */
export enum ShareType {
  /** Значение не определено. */
  SHARE_TYPE_UNSPECIFIED,
  /** Обыкновенная */
  SHARE_TYPE_COMMON,
  /** Привилегированная */
  SHARE_TYPE_PREFERRED,
  /** Американские депозитарные расписки */
  SHARE_TYPE_ADR,
  /** Глобальные депозитарные расписки */
  SHARE_TYPE_GDR,
  /** Товарищество с ограниченной ответственностью */
  SHARE_TYPE_MLP,
  /** Акции из реестра Нью-Йорка */
  SHARE_TYPE_NY_REG_SHRS,
  /** Закрытый инвестиционный фонд */
  SHARE_TYPE_CLOSED_END_FUND,
  /** Траст недвижимости */
  SHARE_TYPE_REIT
}

/**
 * Тип актива
 * @see https://tinkoff.github.io/investAPI/instruments/#assettype
 */
export enum AssetType {
  /** Тип не определён. */
  ASSET_TYPE_UNSPECIFIED,
  /** Валюта. */
  ASSET_TYPE_CURRENCY,
  /** Товар. */
  ASSET_TYPE_COMMODITY,
  /** Индекс. */
  ASSET_TYPE_INDEX,
  /** Ценная бумага. */
  ASSET_TYPE_SECURITY
}

/**
 * Тип структурной ноты
 * @see https://tinkoff.github.io/investAPI/instruments/#structuredproducttype
 */
export enum StructuredProductType {
  /** Тип не определён. */
  SP_TYPE_UNSPECIFIED,
  /** Поставочный. */
  SP_TYPE_DELIVERABLE,
  /** Беспоставочный. */
  SP_TYPE_NON_DELIVERABLE
}

/**
 * Тип действия со списком избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesactiontype
 */
export enum EditFavoritesActionType {
  /** Тип не определён */
  EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED,
  /** Добавить в список */
  EDIT_FAVORITES_ACTION_TYPE_ADD,
  /** Удалить из списка */
  EDIT_FAVORITES_ACTION_TYPE_DEL
}

/**
 * Реальная площадка исполнения расчётов
 * @see https://tinkoff.github.io/investAPI/instruments/#realexchange
 */
export enum RealExchange {
  /** Тип не определён. */
  REAL_EXCHANGE_UNSPECIFIED,
  /** Московская биржа. */
  REAL_EXCHANGE_MOEX,
  /** Санкт-Петербургская биржа. */
  REAL_EXCHANGE_RTS,
  /** Внебиржевой инструмент. */
  REAL_EXCHANGE_OTC
}

/**
 * Уровень риска облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#risklevel
 */
export enum RiskLevel {
  /** Высокий уровень риска */
  RISK_LEVEL_HIGH,
  /** Средний уровень риска */
  RISK_LEVEL_MODERATE,
  /** Низкий уровень риска */
  RISK_LEVEL_LOW
}

/**
 * Данные по торговой площадке
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedule
 */
export interface TradingSchedule {
  /** Наименование торговой площадки. */
  exchange: string
  /** Массив с торговыми и неторговыми днями. */
  days: TradingDay[]
}

/**
 * Информация о времени торгов
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingday
 */
export interface TradingDay {
  /**
   * Дата.
   * @type `google.protobuf.Timestamp`
   */
  date: string
  /** Признак торгового дня на бирже. */
  is_trading_day: boolean
  /**
   * Время начала торгов по часовому поясу UTC.
   * @type `google.protobuf.Timestamp`
   */
  start_time: string
  /**
   * Время окончания торгов по часовому поясу UTC.
   * @type `google.protobuf.Timestamp`
   */
  end_time: string
  /**
   * Время начала аукциона открытия в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  opening_auction_start_time: string
  /**
   * Время окончания аукциона закрытия в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  closing_auction_end_time: string
  /**
   * Время начала аукциона открытия вечерней сессии в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  evening_opening_auction_start_time: string
  /**
   * Время начала вечерней сессии в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  evening_start_time: string
  /**
   * Время окончания вечерней сессии в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  evening_end_time: string
  /**
   * Время начала основного клиринга в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  clearing_start_time: string
  /**
   * Время окончания основного клиринга в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  clearing_end_time: string
  /**
   * Время начала премаркета в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  premarket_start_time: string
  /**
   * Время окончания премаркета в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  premarket_end_time: string
  /**
   * Время начала аукциона закрытия в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  closing_auction_start_time: string
  /**
   * Время окончания аукциона открытия в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  opening_auction_end_time: string
}

/**
 * Объект передачи информации о купоне облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#coupon
 */
export interface Coupon {
  /** Figi-идентификатор инструмента. */
  figi: string
  /**
   * Дата выплаты купона.
   * @type `google.protobuf.Timestamp`
   */
  coupon_date: string
  /**
   * Номер купона.
   * @type `int64`
   */
  coupon_number: string
  /**
   * (Опционально) Дата фиксации реестра для выплаты купона.
   * @type `google.protobuf.Timestamp`
   */
  fix_date: string
  /** Выплата на одну облигацию. */
  pay_one_bond: MoneyValue
  /** Тип купона. */
  coupon_type: CouponType
  /**
   * Начало купонного периода.
   * @type `google.protobuf.Timestamp`
   */
  coupon_start_date: string
  /**
   * Окончание купонного периода.
   * @type `google.protobuf.Timestamp`
   */
  coupon_end_date: string
  /**
   * Купонный период в днях.
   * @type `int32`
   */
  coupon_period: number
}

/**
 * Опцион
 * @see https://tinkoff.github.io/investAPI/instruments/#option
 */
export interface Option {
  /** Уникальный идентификатор инструмента. */
  uid: string
  /** Уникальный идентификатор позиции. */
  position_uid: string
  /** Тикер инструмента. */
  ticker: string
  /** Класс-код. */
  class_code: string
  /** Уникальный идентификатор позиции основного инструмента. */
  basic_asset_position_uid: string
  /** Текущий режим торгов инструмента. */
  trading_status: SecurityTradingStatus
  /** Реальная площадка исполнения расчётов (биржа). Допустимые значения: [REAL_EXCHANGE_MOEX, REAL_EXCHANGE_RTS] */
  real_exchange: RealExchange
  /** Направление опциона. */
  direction: OptionDirection
  /** Тип расчетов по опциону. */
  payment_type: OptionPaymentType
  /** Стиль опциона. */
  style: OptionStyle
  /** Способ исполнения опциона. */
  settlement_type: OptionSettlementType
  /** Название инструмента. */
  name: string
  /** Валюта. */
  currency: string
  /** Валюта, в которой оценивается контракт. */
  settlement_currency: string
  /** Тип актива. */
  asset_type: string
  /** Основной актив. */
  basic_asset: string
  /** Tорговая площадка (секция биржи). */
  exchange: string
  /** Код страны рисков. */
  country_of_risk: string
  /** Наименование страны рисков. */
  country_of_risk_name: string
  /** Сектор экономики. */
  sector: string
  /**
   * Количество бумаг в лоте.
   * @type `int32`
   */
  lot: number
  /** Размер основного актива. */
  basic_asset_size: Quotation
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong: Quotation
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort: Quotation
  /** Ставка риска начальной маржи для КСУР лонг. Подробнее: ставка риска в лонг */
  dlong: Quotation
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт */
  dshort: Quotation
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг */
  dlong_min: Quotation
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт */
  dshort_min: Quotation
  /** Минимальный шаг цены. */
  min_price_increment: Quotation
  /** Цена страйка. */
  strike_price: MoneyValue
  /**
   * Дата истечения срока в формате UTC.
   * @type `google.protobuf.Timestamp`
   */
  expiration_date: string
  /**
   * Дата начала обращения контракта в формате UTC.
   * @type `google.protobuf.Timestamp`
   */
  first_trade_date: string
  /**
   * Дата исполнения в формате UTC.
   * @type `google.protobuf.Timestamp`
   */
  last_trade_date: string
  /**
   * Дата первой минутной свечи в формате UTC.
   * @type `google.protobuf.Timestamp`
   */
  first_1min_candle_date: string
  /**
   * Дата первой дневной свечи в формате UTC.
   * @type `google.protobuf.Timestamp`
   */
  first_1day_candle_date: string
  /** Признак доступности для операций шорт. */
  short_enabled_flag: boolean
  /** Возможность покупки/продажи на ИИС. */
  for_iis_flag: boolean
  /** Признак внебиржевой ценной бумаги. */
  otc_flag: boolean
  /** Признак доступности для покупки. */
  buy_available_flag: boolean
  /** Признак доступности для продажи. */
  sell_available_flag: boolean
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  for_qual_investor_flag: boolean
  /** Флаг отображающий доступность торговли инструментом по выходным. */
  weekend_flag: boolean
  /** Флаг заблокированного ТКС. */
  blocked_tca_flag: boolean
  /** Параметр указывает на возможность торговать инструментом через API. */
  api_trade_available_flag: boolean
}

/**
 * Объект передачи информации об облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#bond
 */
export interface Bond {
  /** Figi-идентификатор инструмента. */
  figi: string
  /** Тикер инструмента. */
  ticker: string
  /** Класс-код (секция торгов). */
  class_code: string
  /** Isin-идентификатор инструмента. */
  isin: string
  /**
   * Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot. Подробнее: лот
   * @type `int32`
   */
  lot: number
  /** Валюта расчётов. */
  currency: string
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong: Quotation
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort: Quotation
  /** Ставка риска начальной маржи для КСУР лонг. Подробнее: ставка риска в лонг */
  dlong: Quotation
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт */
  dshort: Quotation
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг */
  dlong_min: Quotation
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт */
  dshort_min: Quotation
  /** Признак доступности для операций в шорт. */
  short_enabled_flag: boolean
  /** Название инструмента. */
  name: string
  /** Tорговая площадка (секция биржи). */
  exchange: string
  /**
   * Количество выплат по купонам в год.
   * @type `int32`
   */
  coupon_quantity_per_year: number
  /**
   * Дата погашения облигации в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  maturity_date: string
  /** Номинал облигации. */
  nominal: MoneyValue
  /** Первоначальный номинал облигации. */
  initial_nominal: MoneyValue
  /**
   * Дата выпуска облигации в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  state_reg_date: string
  /**
   * Дата размещения в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  placement_date: string
  /** Цена размещения. */
  placement_price: MoneyValue
  /** Значение НКД (накопленного купонного дохода) на дату. */
  aci_value: MoneyValue
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk: string
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk_name: string
  /** Сектор экономики. */
  sector: string
  /**
   * Форма выпуска. Возможные значения:
   * documentary — документарная;
   * non_documentary — бездокументарная.
   */
  issue_kind: string
  /**
   * Размер выпуска.
   * @type `int64`
   */
  issue_size: string
  /**
   * Плановый размер выпуска.
   * @type `int64`
   */
  issue_size_plan: string
  /** Текущий режим торгов инструмента. */
  trading_status: SecurityTradingStatus
  /** Признак внебиржевой ценной бумаги. */
  otc_flag: boolean
  /** Признак доступности для покупки. */
  buy_available_flag: boolean
  /** Признак доступности для продажи. */
  sell_available_flag: boolean
  /** Признак облигации с плавающим купоном. */
  floating_coupon_flag: boolean
  /** Признак бессрочной облигации. */
  perpetual_flag: boolean
  /** Признак облигации с амортизацией долга. */
  amortization_flag: boolean
  /** Шаг цены. */
  min_price_increment: Quotation
  /** Параметр указывает на возможность торговать инструментом через API. */
  api_trade_available_flag: boolean
  /** Уникальный идентификатор инструмента. */
  uid: string
  /** Реальная площадка исполнения расчётов. (биржа) */
  real_exchange: RealExchange
  /** Уникальный идентификатор позиции инструмента. */
  position_uid: string
  /** Признак доступности для ИИС. */
  for_iis_flag: boolean
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  for_qual_investor_flag: boolean
  /** Флаг отображающий доступность торговли инструментом по выходным */
  weekend_flag: boolean
  /** Флаг заблокированного ТКС */
  blocked_tca_flag: boolean
  /** Признак субординированной облигации. */
  subordinated_flag: boolean
  /** Флаг достаточной ликвидности */
  liquidity_flag: boolean
  /**
   * Дата первой минутной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1min_candle_date: string
  /**
   * Дата первой дневной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1day_candle_date: string
  /** Уровень риска. */
  risk_level: RiskLevel
}

/**
 * Объект передачи информации о валюте
 * @see https://tinkoff.github.io/investAPI/instruments/#currency
 */
export interface Currency {
  /** Figi-идентификатор инструмента. */
  figi: string
  /** Тикер инструмента. */
  ticker: string
  /** Класс-код (секция торгов). */
  class_code: string
  /** Isin-идентификатор инструмента. */
  isin: string
  /**
   * Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot. Подробнее: лот
   * @type `int32`
   */
  lot: number
  /** Валюта расчётов. */
  currency: string
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong: Quotation
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort: Quotation
  /** Ставка риска начальной маржи для КСУР лонг.Подробнее: ставка риска в лонг */
  dlong: Quotation
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт */
  dshort: Quotation
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг */
  dlong_min: Quotation
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт */
  dshort_min: Quotation
  /** Признак доступности для операций в шорт. */
  short_enabled_flag: boolean
  /** Название инструмента. */
  name: string
  /** Tорговая площадка (секция биржи) */
  exchange: string
  /** Номинал. */
  nominal: MoneyValue
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk: string
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk_name: string
  /** Текущий режим торгов инструмента. */
  trading_status: SecurityTradingStatus
  /** Признак внебиржевой ценной бумаги. */
  otc_flag: boolean
  /** Признак доступности для покупки. */
  buy_available_flag: boolean
  /** Признак доступности для продажи. */
  sell_available_flag: boolean
  /** Строковый ISO-код валюты. */
  iso_currency_name: string
  /** Шаг цены. */
  min_price_increment: Quotation
  /** Параметр указывает на возможность торговать инструментом через API. */
  api_trade_available_flag: boolean
  /** Уникальный идентификатор инструмента. */
  uid: string
  /** Реальная площадка исполнения расчётов (биржа). */
  real_exchange: RealExchange
  /** Уникальный идентификатор позиции инструмента. */
  position_uid: string
  /** Признак доступности для ИИС. */
  for_iis_flag: boolean
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  for_qual_investor_flag: boolean
  /** Флаг отображающий доступность торговли инструментом по выходным. */
  weekend_flag: boolean
  /** Флаг заблокированного ТКС. */
  blocked_tca_flag: boolean
  /**
   * Дата первой минутной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1min_candle_date: string
  /**
   * Дата первой дневной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1day_candle_date: string
}

/**
 * Объект передачи информации об инвестиционном фонде
 * @see https://tinkoff.github.io/investAPI/instruments/#etf
 */
export interface Etf {
  /** Figi-идентификатор инструмента. */
  figi: string
  /** Тикер инструмента. */
  ticker: string
  /** Класс-код (секция торгов). */
  class_code: string
  /** Isin-идентификатор инструмента. */
  isin: string
  /**
   * Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot. Подробнее: лот
   * @type `int32`
   */
  lot: number
  /** Валюта расчётов. */
  currency: string
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong: Quotation
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort: Quotation
  /** Ставка риска начальной маржи для КСУР лонг.Подробнее: ставка риска в лонг */
  dlong: Quotation
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт */
  dshort: Quotation
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг */
  dlong_min: Quotation
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт */
  dshort_min: Quotation
  /** Признак доступности для операций в шорт. */
  short_enabled_flag: boolean
  /** Название инструмента. */
  name: string
  /** Tорговая площадка (секция биржи). */
  exchange: string
  /** Размер фиксированной комиссии фонда. */
  fixed_commission: Quotation
  /**
   * Возможные значения:
   * equity — акции;
   * fixed_income — облигации;
   * mixed_allocation — смешанный;
   * money_market — денежный рынок;
   * real_estate — недвижимость;
   * commodity — товары;
   * specialty — специальный;
   * private_equity — private equity;
   * alternative_investment — альтернативные инвестиции.
   */
  focus_type: string
  /**
   * Дата выпуска в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  released_date: string
  /** Количество акций фонда в обращении. */
  num_shares: Quotation
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk: string
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk_name: string
  /** Сектор экономики. */
  sector: string
  /** Частота ребалансировки. */
  rebalancing_freq: string
  /** Текущий режим торгов инструмента. */
  trading_status: SecurityTradingStatus
  /** Признак внебиржевой ценной бумаги. */
  otc_flag: boolean
  /** Признак доступности для покупки. */
  buy_available_flag: boolean
  /** Признак доступности для продажи. */
  sell_available_flag: boolean
  /** Шаг цены. */
  min_price_increment: Quotation
  /** Параметр указывает на возможность торговать инструментом через API. */
  api_trade_available_flag: boolean
  /** Уникальный идентификатор инструмента. */
  uid: string
  /** Реальная площадка исполнения расчётов (биржа). */
  real_exchange: RealExchange
  /** Уникальный идентификатор позиции инструмента. */
  position_uid: string
  /** Признак доступности для ИИС. */
  for_iis_flag: boolean
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  for_qual_investor_flag: boolean
  /** Флаг отображающий доступность торговли инструментом по выходным. */
  weekend_flag: boolean
  /** Флаг заблокированного ТКС. */
  blocked_tca_flag: boolean
  /** Флаг достаточной ликвидности */
  liquidity_flag: boolean
  /**
   * Дата первой минутной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1min_candle_date: string
  /**
   * Дата первой дневной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1day_candle_date: string
}

/**
 * Объект передачи информации о фьючерсе
 * @see https://tinkoff.github.io/investAPI/instruments/#future
 */
export interface Future {
  /** Figi-идентификатор инструмента. */
  figi: string
  /** Тикер инструмента. */
  ticker: string
  /** Класс-код (секция торгов). */
  class_code: string
  /**
   * Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot. Подробнее: лот
   * @type `int32`
   */
  lot: number
  /** Валюта расчётов. */
  currency: string
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong: Quotation
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort: Quotation
  /** Ставка риска начальной маржи для КСУР лонг.Подробнее: ставка риска в лонг */
  dlong: Quotation
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт */
  dshort: Quotation
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг */
  dlong_min: Quotation
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт */
  dshort_min: Quotation
  /** Признак доступности для операций шорт. */
  short_enabled_flag: boolean
  /** Название инструмента. */
  name: string
  /** Tорговая площадка (секция биржи). */
  exchange: string
  /**
   * Дата начала обращения контракта в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  first_trade_date: string
  /**
   * Дата в часовом поясе UTC, до которой возможно проведение операций с фьючерсом.
   * @type `google.protobuf.Timestamp`
   */
  last_trade_date: string
  /**
   * Тип фьючерса. Возможные значения:
   * physical_delivery — физические поставки;
   * cash_settlement — денежный эквивалент.
   */
  futures_type: string
  /**
   * Тип актива. Возможные значения:
   * commodity — товар;
   * currency — валюта;
   * security — ценная бумага;
   * index — индекс.
   */
  asset_type: string
  /** Основной актив. */
  basic_asset: string
  /** Размер основного актива. */
  basic_asset_size: Quotation
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk: string
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk_name: string
  /** Сектор экономики. */
  sector: string
  /**
   * Дата истечения срока в часов поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  expiration_date: string
  /** Текущий режим торгов инструмента. */
  trading_status: SecurityTradingStatus
  /** Признак внебиржевой ценной бумаги. */
  otc_flag: boolean
  /** Признак доступности для покупки. */
  buy_available_flag: boolean
  /** Признак доступности для продажи. */
  sell_available_flag: boolean
  /** Шаг цены. */
  min_price_increment: Quotation
  /** Параметр указывает на возможность торговать инструментом через API. */
  api_trade_available_flag: boolean
  /** Уникальный идентификатор инструмента. */
  uid: string
  /** Реальная площадка исполнения расчётов (биржа). */
  real_exchange: RealExchange
  /** Уникальный идентификатор позиции инструмента. */
  position_uid: string
  /** Уникальный идентификатор позиции основного инструмента. */
  basic_asset_position_uid: string
  /** Признак доступности для ИИС. */
  for_iis_flag: boolean
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  for_qual_investor_flag: boolean
  /** Флаг отображающий доступность торговли инструментом по выходным. */
  weekend_flag: boolean
  /** Флаг заблокированного ТКС. */
  blocked_tca_flag: boolean
  /**
   * Дата первой минутной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1min_candle_date: string
  /**
   * Дата первой дневной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1day_candle_date: string
}

/**
 * Объект передачи информации об акции
 * @see https://tinkoff.github.io/investAPI/instruments/#share
 */
export interface Share {
  /** Figi-идентификатор инструмента. */
  figi: string
  /** Тикер инструмента. */
  ticker: string
  /** Класс-код (секция торгов). */
  class_code: string
  /** Isin-идентификатор инструмента. */
  isin: string
  /**
   * Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot. Подробнее: лот
   * @type `int32`
   */
  lot: number
  /** Валюта расчётов. */
  currency: string
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong: Quotation
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort: Quotation
  /** Ставка риска начальной маржи для КСУР лонг.Подробнее: ставка риска в лонг */
  dlong: Quotation
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт */
  dshort: Quotation
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг */
  dlong_min: Quotation
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт */
  dshort_min: Quotation
  /** Признак доступности для операций в шорт. */
  short_enabled_flag: boolean
  /** Название инструмента. */
  name: string
  /** Tорговая площадка (секция биржи). */
  exchange: string
  /**
   * Дата IPO акции в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  ipo_date: string
  /**
   * Размер выпуска.
   * @type `int64`
   */
  issue_size: string
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk: string
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk_name: string
  /** Сектор экономики. */
  sector: string
  /**
   * Плановый размер выпуска.
   * @type `int64`
   */
  issue_size_plan: string
  /** Номинал. */
  nominal: MoneyValue
  /** Текущий режим торгов инструмента. */
  trading_status: SecurityTradingStatus
  /** Признак внебиржевой ценной бумаги. */
  otc_flag: boolean
  /** Признак доступности для покупки. */
  buy_available_flag: boolean
  /** Признак доступности для продажи. */
  sell_available_flag: boolean
  /** Признак наличия дивидендной доходности. */
  div_yield_flag: boolean
  /** Тип акции. Возможные значения: ShareType */
  share_type: ShareType
  /** Шаг цены. */
  min_price_increment: Quotation
  /** Параметр указывает на возможность торговать инструментом через API. */
  api_trade_available_flag: boolean
  /** Уникальный идентификатор инструмента. */
  uid: string
  /** Реальная площадка исполнения расчётов (биржа). */
  real_exchange: RealExchange
  /** Уникальный идентификатор позиции инструмента. */
  position_uid: string
  /** Признак доступности для ИИС. */
  for_iis_flag: boolean
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  for_qual_investor_flag: boolean
  /** Флаг отображающий доступность торговли инструментом по выходным */
  weekend_flag: boolean
  /** Флаг заблокированного ТКС */
  blocked_tca_flag: boolean
  /** Флаг достаточной ликвидности */
  liquidity_flag: boolean
  /**
   * Дата первой минутной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1min_candle_date: string
  /**
   * Дата первой дневной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1day_candle_date: string
}

/**
 * Бренд
 * @see https://tinkoff.github.io/investAPI/instruments/#brand
 */
export interface Brand {
  /** uid идентификатор бренда. */
  uid: string
  /** Наименование бренда. */
  name: string
  /** Описание. */
  description: string
  /** Информация о бренде. */
  info: string
  /** Компания. */
  company: string
  /** Сектор. */
  sector: string
  /** Код страны риска. */
  country_of_risk: string
  /** Наименование страны риска. */
  country_of_risk_name: string
}

/**
 * Операция начисления купонов
 * @see https://tinkoff.github.io/investAPI/instruments/#accruedinterest
 */
export interface AccruedInterest {
  /**
   * Дата и время выплаты в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  date: string
  /** Величина выплаты. */
  value: Quotation
  /** Величина выплаты в процентах от номинала. */
  value_percent: Quotation
  /** Номинал облигации. */
  nominal: Quotation
}

/**
 * Объект передачи основной информации об инструменте
 * @see https://tinkoff.github.io/investAPI/instruments/#instrument
 */
export interface Instrument {
  /** Название инструмента. */
  name: string
  /** Tорговая площадка (секция биржи). */
  exchange: string
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk: string
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  country_of_risk_name: string
  /** Тип инструмента. */
  instrument_type: string
  /** Текущий режим торгов инструмента. */
  trading_status: SecurityTradingStatus
  /** Признак внебиржевой ценной бумаги. */
  otc_flag: boolean
  /** Признак доступности для покупки. */
  buy_available_flag: boolean
  /** Признак доступности для продажи. */
  sell_available_flag: boolean
  /** Шаг цены. */
  min_price_increment: Quotation
  /** Параметр указывает на возможность торговать инструментом через API. */
  api_trade_available_flag: boolean
  /** Уникальный идентификатор инструмента. */
  uid: string
  /** Реальная площадка исполнения расчётов (биржа). */
  real_exchange: RealExchange
  /** Уникальный идентификатор позиции инструмента. */
  position_uid: string
  /** Признак доступности для ИИС. */
  for_iis_flag: boolean
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  for_qual_investor_flag: boolean
  /** Флаг отображающий доступность торговли инструментом по выходным */
  weekend_flag: boolean
  /** Флаг заблокированного ТКС */
  blocked_tca_flag: boolean
  /** Тип инструмента. */
  instrument_kind: InstrumentType
  /**
   * Дата первой минутной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1min_candle_date: string
  /**
   * Дата первой дневной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1day_candle_date: string
}

/**
 * Информация о выплате
 * @see https://tinkoff.github.io/investAPI/instruments/#dividend
 */
export interface Dividend {
  /** Величина дивиденда на 1 ценную бумагу (включая валюту). */
  dividend_net: MoneyValue
  /**
   * Дата фактических выплат в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  payment_date: string
  /**
   * Дата объявления дивидендов в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  declared_date: string
  /**
   * Последний день (включительно) покупки для получения выплаты в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  last_buy_date: string
  /** Тип выплаты. Возможные значения: Regular Cash – регулярные выплаты, Cancelled – выплата отменена, Daily Accrual – ежедневное начисление, Return of Capital – возврат капитала, прочие типы выплат. */
  dividend_type: string
  /**
   * Дата фиксации реестра в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  record_date: string
  /** Регулярность выплаты. Возможные значения: Annual – ежегодная, Semi-Anl – каждые полгода, прочие типы выплат. */
  regularity: string
  /** Цена закрытия инструмента на момент ex_dividend_date. */
  close_price: MoneyValue
  /** Величина доходности. */
  yield_value: Quotation
  /**
   * Дата и время создания записи в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  created_at: string
}

/**
 * @see https://tinkoff.github.io/investAPI/instruments/#assetfull
 */
export interface AssetFull {
  /** Уникальный идентификатор актива. */
  uid: string
  /** Тип актива. */
  type: AssetType
  /** Наименование актива. */
  name: string
  /** Короткое наименование актива. */
  name_brief: string
  /** Описание актива. */
  description: string
  /**
   * Дата и время удаления актива.
   * @type `google.protobuf.Timestamp`
   */
  deleted_at: string
  /** Тестирование клиентов. */
  required_tests: string[]
  /** Валюта. Обязательно и заполняется только для type = "ASSET_TYPE_CURRENCY". */
  currency: AssetCurrency
  /** Ценная бумага. Обязательно и заполняется только для type = "ASSET_TYPE_SECURITY". */
  security: AssetSecurity
  /** Номер государственной регистрации. */
  gos_reg_code: string
  /** Код CFI. */
  cfi: string
  /** Код НРД инструмента. */
  code_nsd: string
  /** Статус актива. */
  status: string
  /** Бренд. */
  brand: Brand
  /**
   * Дата и время последнего обновления записи.
   * @type `google.protobuf.Timestamp`
   */
  updated_at: string
  /** Код типа ц.б. по классификации Банка России. */
  br_code: string
  /** Наименование кода типа ц.б. по классификации Банка России. */
  br_code_name: string
  /** Массив идентификаторов инструментов. */
  instruments: AssetInstrument[]
}

/**
 * Информация об активе
 * @see https://tinkoff.github.io/investAPI/instruments/#asset
 */
export interface Asset {
  /** Уникальный идентификатор актива. */
  uid: string
  /** Тип актива. */
  type: AssetType
  /** Наименование актива. */
  name: string
  /** Массив идентификаторов инструментов. */
  instruments: AssetInstrument[]
}

/**
 * Валюта
 * @see https://tinkoff.github.io/investAPI/instruments/#assetcurrency
 */
export interface AssetCurrency {
  /** ISO-код валюты. */
  base_currency: string
}

/**
 * Ценная бумага
 * @see https://tinkoff.github.io/investAPI/instruments/#assetsecurity
 */
export interface AssetSecurity {
  /** ISIN-идентификатор ценной бумаги. */
  isin: string
  /** Тип ценной бумаги. */
  type: string
  /** Тип инструмента. */
  instrument_kind: InstrumentType
  /** Акция. Заполняется только для акций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = share). */
  share: AssetShare
  /** Облигация. Заполняется только для облигаций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = bond). */
  bond: AssetBond
  /** Структурная нота. Заполняется только для структурных продуктов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = sp). */
  sp: AssetStructuredProduct
  /** Фонд. Заполняется только для фондов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = etf). */
  etf: AssetEtf
  /** Клиринговый сертификат участия. Заполняется только для клиринговых сертификатов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = clearing_certificate). */
  clearing_certificate: AssetClearingCertificate
}

/**
 * Акция
 * @see https://tinkoff.github.io/investAPI/instruments/#assetshare
 */
export interface AssetShare {
  /** Тип акции. */
  type: ShareType
  /** Объем выпуска (шт.). */
  issue_size: Quotation
  /** Номинал. */
  nominal: Quotation
  /** Валюта номинала. */
  nominal_currency: string
  /** Индекс (Bloomberg). */
  primary_index: string
  /** Ставка дивиденда (для привилегированных акций). */
  dividend_rate: Quotation
  /** Тип привилегированных акций. */
  preferred_share_type: string
  /**
   * Дата IPO.
   * @type `google.protobuf.Timestamp`
   */
  ipo_date: string
  /**
   * Дата регистрации.
   * @type `google.protobuf.Timestamp`
   */
  registry_date: string
  /** Признак наличия дивидендной доходности. */
  div_yield_flag: boolean
  /** Форма выпуска ФИ. */
  issue_kind: string
  /**
   * Дата размещения акции.
   * @type `google.protobuf.Timestamp`
   */
  placement_date: string
  /** ISIN базового актива. */
  repres_isin: string
  /** Объявленное количество шт. */
  issue_size_plan: Quotation
  /** Количество акций в свободном обращении. */
  total_float: Quotation
}

/**
 * Облигация
 * @see https://tinkoff.github.io/investAPI/instruments/#assetbond
 */
export interface AssetBond {
  /** Текущий номинал. */
  current_nominal: Quotation
  /** Наименование заемщика. */
  borrow_name: string
  /** Объем эмиссии облигации (стоимость). */
  issue_size: Quotation
  /** Номинал облигации. */
  nominal: Quotation
  /** Валюта номинала. */
  nominal_currency: string
  /** Форма выпуска облигации. */
  issue_kind: string
  /** Форма дохода облигации. */
  interest_kind: string
  /**
   * Количество выплат в год.
   * @type `int32`
   */
  coupon_quantity_per_year: number
  /** Признак облигации с индексируемым номиналом. */
  indexed_nominal_flag: boolean
  /** Признак субординированной облигации. */
  subordinated_flag: boolean
  /** Признак обеспеченной облигации. */
  collateral_flag: boolean
  /** Признак показывает, что купоны облигации не облагаются налогом (для mass market). */
  tax_free_flag: boolean
  /** Признак облигации с амортизацией долга. */
  amortization_flag: boolean
  /** Признак облигации с плавающим купоном. */
  floating_coupon_flag: boolean
  /** Признак бессрочной облигации. */
  perpetual_flag: boolean
  /**
   * Дата погашения облигации.
   * @type `google.protobuf.Timestamp`
   */
  maturity_date: string
  /** Описание и условия получения дополнительного дохода. */
  return_condition: string
  /**
   * Дата выпуска облигации.
   * @type `google.protobuf.Timestamp`
   */
  state_reg_date: string
  /**
   * Дата размещения облигации.
   * @type `google.protobuf.Timestamp`
   */
  placement_date: string
  /** Цена размещения облигации. */
  placement_price: Quotation
  /** Объявленное количество шт. */
  issue_size_plan: Quotation
}

/**
 * Структурная нота
 * @see https://tinkoff.github.io/investAPI/instruments/#assetstructuredproduct
 */
export interface AssetStructuredProduct {
  /** Наименование заемщика. */
  borrow_name: string
  /** Номинал. */
  nominal: Quotation
  /** Валюта номинала. */
  nominal_currency: string
  /** Тип структурной ноты. */
  type: StructuredProductType
  /** Стратегия портфеля. */
  logic_portfolio: string
  /** Тип базового актива. */
  asset_type: AssetType
  /** Вид базового актива в зависимости от типа базового актива. */
  basic_asset: string
  /** Барьер сохранности (в процентах). */
  safety_barrier: Quotation
  /**
   * Дата погашения.
   * @type `google.protobuf.Timestamp`
   */
  maturity_date: string
  /** Объявленное количество шт. */
  issue_size_plan: Quotation
  /** Объем размещения. */
  issue_size: Quotation
  /**
   * Дата размещения ноты.
   * @type `google.protobuf.Timestamp`
   */
  placement_date: string
  /** Форма выпуска. */
  issue_kind: string
}

/**
 * Фонд
 * @see https://tinkoff.github.io/investAPI/instruments/#assetetf
 */
export interface AssetEtf {
  /** Суммарные расходы фонда (в %). */
  total_expense: Quotation
  /** Барьерная ставка доходности после которой фонд имеет право на perfomance fee (в процентах). */
  hurdle_rate: Quotation
  /** Комиссия за успешные результаты фонда (в процентах). */
  performance_fee: Quotation
  /** Фиксированная комиссия за управление (в процентах). */
  fixed_commission: Quotation
  /** Тип распределения доходов от выплат по бумагам. */
  payment_type: string
  /** Признак необходимости выхода фонда в плюс для получения комиссии. */
  watermark_flag: boolean
  /** Премия (надбавка к цене) при покупке доли в фонде (в процентах). */
  buy_premium: Quotation
  /** Ставка дисконта (вычет из цены) при продаже доли в фонде (в процентах). */
  sell_discount: Quotation
  /** Признак ребалансируемости портфеля фонда. */
  rebalancing_flag: boolean
  /** Периодичность ребалансировки. */
  rebalancing_freq: string
  /** Тип управления. */
  management_type: string
  /** Индекс, который реплицирует (старается копировать) фонд. */
  primary_index: string
  /** База ETF. */
  focus_type: string
  /** Признак использования заемных активов (плечо). */
  leveraged_flag: boolean
  /** Количество акций в обращении. */
  num_share: Quotation
  /** Признак обязательства по отчетности перед регулятором. */
  ucits_flag: boolean
  /**
   * Дата выпуска.
   * @type `google.protobuf.Timestamp`
   */
  released_date: string
  /** Описание фонда. */
  description: string
  /** Описание индекса, за которым следует фонд. */
  primary_index_description: string
  /** Основные компании, в которые вкладывается фонд. */
  primary_index_company: string
  /** Срок восстановления индекса (после просадки). */
  index_recovery_period: Quotation
  /** IVAV-код. */
  inav_code: string
  /** Признак наличия дивидендной доходности. */
  div_yield_flag: boolean
  /** Комиссия на покрытие расходов фонда (в процентах). */
  expense_commission: Quotation
  /** Ошибка следования за индексом (в процентах). */
  primary_index_tracking_error: Quotation
  /** Плановая ребалансировка портфеля. */
  rebalancing_plan: string
  /** Ставки налогообложения дивидендов и купонов. */
  tax_rate: string
  /**
   * Даты ребалансировок.
   * @type `google.protobuf.Timestamp`
   */
  rebalancing_dates: string[]
  /** Форма выпуска. */
  issue_kind: string
  /** Номинал. */
  nominal: Quotation
  /** Валюта номинала. */
  nominal_currency: string
}

/**
 * Клиринговый сертификат участия
 * @see https://tinkoff.github.io/investAPI/instruments/#assetclearingcertificate
 */
export interface AssetClearingCertificate {
  /** Номинал. */
  nominal: Quotation
  /** Валюта номинала. */
  nominal_currency: string
}

/**
 * Идентификаторы инструмента
 * @see https://tinkoff.github.io/investAPI/instruments/#assetinstrument
 */
export interface AssetInstrument {
  /** uid идентификатор инструмента. */
  uid: string
  /** figi идентификатор инструмента. */
  figi: string
  /** Тип инструмента. */
  instrument_type: string
  /** Тикер инструмента. */
  ticker: string
  /** Класс-код (секция торгов). */
  class_code: string
  /** Массив связанных инструментов. */
  links: InstrumentLink[]
  /** Тип инструмента. */
  instrument_kind: InstrumentType
  /** id позиции. */
  position_uid: string
}

/**
 * Связь с другим инструментом
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentlink
 */
export interface InstrumentLink {
  /** Тип связи. */
  type: string
  /** uid идентификатор связанного инструмента. */
  instrument_uid: string
}

/**
 * Массив избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#favoriteinstrument
 */
export interface FavoriteInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string
  /** Тикер инструмента. */
  ticker: string
  /** Класс-код инструмента. */
  class_code: string
  /** Isin-идентификатор инструмента. */
  isin: string
  /** Тип инструмента. */
  instrument_type: string
  /** Признак внебиржевой ценной бумаги. */
  otc_flag: boolean
  /** Параметр указывает на возможность торговать инструментом через API. */
  api_trade_available_flag: boolean
  /** Тип инструмента. */
  instrument_kind: InstrumentType
}

/**
 * Массив инструментов для редактирования списка избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesrequestinstrument
 */
export interface EditFavoritesRequestInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string
}

/**
 * Краткая информация об инструменте
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentshort
 */
export interface InstrumentShort {
  /** Isin инструмента. */
  isin: string
  /** Figi инструмента. */
  figi: string
  /** Ticker инструмента. */
  ticker: string
  /** ClassCode инструмента. */
  class_code: string
  /** Тип инструмента. */
  instrument_type: string
  /** Название инструмента. */
  name: string
  /** Уникальный идентификатор инструмента. */
  uid: string
  /** Уникальный идентификатор позиции инструмента. */
  position_uid: string
  /** Тип инструмента. */
  instrument_kind: InstrumentType
  /** Параметр указывает на возможность торговать инструментом через API. */
  api_trade_available_flag: boolean
  /** Признак доступности для ИИС. */
  for_iis_flag: boolean
  /**
   * Дата первой минутной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1min_candle_date: string
  /**
   * Дата первой дневной свечи.
   * @type `google.protobuf.Timestamp`
   */
  first_1day_candle_date: string
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  for_qual_investor_flag: boolean
  /** Флаг отображающий доступность торговли инструментом по выходным */
  weekend_flag: boolean
  /** Флаг заблокированного ТКС */
  blocked_tca_flag: boolean
}

/**
 * Запрос расписания торгов
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedulesrequest
 */
export interface TradingSchedulesRequest {
  /**
   * Наименование биржи или расчетного календаря
   * @description Если не передаётся, возвращается информация по всем доступным торговым площадкам.
   */
  exchange: string
  /**
   * Начало периода по часовому поясу UTC.
   * @type `google.protobuf.Timestamp`
   */
  from: string
  /**
   * Окончание периода по часовому поясу UTC.
   * @type `google.protobuf.Timestamp`
   */
  to: string
}

/**
 * Список торговых площадок
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedulesresponse
 */
export interface TradingSchedulesResponse {
  /** Список торговых площадок и режимов торгов. */
  exchanges: TradingSchedule[]
}

/**
 * Запрос получения инструмента по идентификатору
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentrequest
 */
export interface InstrumentRequest {
  /** Тип идентификатора инструмента. Возможные значения: figi, ticker. Подробнее об идентификации инструментов: Идентификация инструментов */
  id_type: InstrumentIdType
  /** Идентификатор class_code. Обязателен при id_type = ticker. */
  class_code: string
  /** Идентификатор запрашиваемого инструмента. */
  id: string
}

/**
 * Данные по инструменту
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentresponse
 */
export interface InstrumentResponse {
  /** Основная информация об инструменте. */
  instrument: Instrument
}

/**
 * Информация об облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#bondresponse
 */
export interface BondResponse {
  /** Информация об облигации. */
  instrument: Bond
}

/**
 * Запрос получения инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentsrequest
 */
export interface InstrumentsRequest {
  /** Статус запрашиваемых инструментов. Возможные значения: InstrumentStatus */
  instrument_status: InstrumentStatus
}

/**
 * Параметры фильтрации опционов
 * @see https://tinkoff.github.io/investAPI/instruments/#filteroptionsrequest
 */
export interface FilterOptionsRequest {
  /** Идентификатор базового актива опциона. Обязательный параметр. */
  basic_asset_uid: string
  /** Идентификатор позиции базового актива опциона */
  basic_asset_position_uid: string
}

/**
 * Список облигаций
 * @see https://tinkoff.github.io/investAPI/instruments/#bondsresponse
 */
export interface BondsResponse {
  /** Массив облигаций. */
  instruments: Bond[]
}

/**
 * Запрос купонов по облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getbondcouponsrequest
 */
export interface GetBondCouponsRequest {
  /** Figi-идентификатор инструмента. */
  figi: string
  /**
   * Начало запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона)
   * @type `google.protobuf.Timestamp`
   */
  from: string
  /**
   * Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона)
   * @type `google.protobuf.Timestamp`
   */
  to: string
}

/**
 * Купоны по облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getbondcouponsresponse
 */
export interface GetBondCouponsResponse {
  /** @todo Нет описания */
  events: Coupon[]
}

/**
 * Данные по валюте
 * @see https://tinkoff.github.io/investAPI/instruments/#currencyresponse
 */
export interface CurrencyResponse {
  /** Информация о валюте. */
  instrument: Currency
}

/**
 * Данные по валютам
 * @see https://tinkoff.github.io/investAPI/instruments/#currenciesresponse
 */
export interface CurrenciesResponse {
  /** Массив валют. */
  instruments: Currency[]
}

/**
 * Данные по фонду
 * @see https://tinkoff.github.io/investAPI/instruments/#etfresponse
 */
export interface EtfResponse {
  /** Информация о фонде. */
  instrument: Etf
}

/**
 * Данные по фондам
 * @see https://tinkoff.github.io/investAPI/instruments/#etfsresponse
 */
export interface EtfsResponse {
  /** Массив фондов. */
  instruments: Etf[]
}

/**
 * Данные по фьючерсу
 * @see https://tinkoff.github.io/investAPI/instruments/#futureresponse
 */
export interface FutureResponse {
  /** Информация о фьючерсу. */
  instrument: Future
}

/**
 * Данные по фьючерсам
 * @see https://tinkoff.github.io/investAPI/instruments/#futuresresponse
 */
export interface FuturesResponse {
  /** Массив фьючерсов. */
  instruments: Future[]
}

/**
 * Данные по опциону
 * @see https://tinkoff.github.io/investAPI/instruments/#optionresponse
 */
export interface OptionResponse {
  /** Информация по опциону. */
  instrument: Option
}

/**
 * Данные по опционам
 * @see https://tinkoff.github.io/investAPI/instruments/#optionsresponse
 */
export interface OptionsResponse {
  /** Массив данных по опциону. */
  instruments: Option[]
}

/**
 * Данные по акции
 * @see https://tinkoff.github.io/investAPI/instruments/#shareresponse
 */
export interface ShareResponse {
  /** Информация об акции. */
  instrument: Share
}

/**
 * Данные по акциям
 * @see https://tinkoff.github.io/investAPI/instruments/#sharesresponse
 */
export interface SharesResponse {
  /** Массив акций. */
  instruments: Share[]
}

/**
 * Запрос НКД по облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getaccruedinterestsrequest
 */
export interface GetAccruedInterestsRequest {
  /** Figi-идентификатор инструмента. */
  figi: string
  /**
   * Начало запрашиваемого периода в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  from: string
  /**
   * Окончание запрашиваемого периода в часовом поясе UTC.
   * @type `google.protobuf.Timestamp`
   */
  to: string
}

/**
 * НКД облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getaccruedinterestsresponse
 */
export interface GetAccruedInterestsResponse {
  /** Массив операций начисления купонов. */
  accrued_interests: AccruedInterest[]
}

/**
 * Запрос информации о фьючерсе
 * @see https://tinkoff.github.io/investAPI/instruments/#getfuturesmarginrequest
 */
export interface GetFuturesMarginRequest {
  /** Идентификатор инструмента. */
  figi: string
}

/**
 * Данные по фьючерсу
 * @see https://tinkoff.github.io/investAPI/instruments/#getfuturesmarginresponse
 */
export interface GetFuturesMarginResponse {
  /** Гарантийное обеспечение при покупке. */
  initial_margin_on_buy: MoneyValue
  /** Гарантийное обеспечение при продаже. */
  initial_margin_on_sell: MoneyValue
  /** Шаг цены. */
  min_price_increment: Quotation
  /** Стоимость шага цены. */
  min_price_increment_amount: Quotation
}

/**
 * Запрос дивидендов
 * @see https://tinkoff.github.io/investAPI/instruments/#getdividendsrequest
 */
export interface GetDividendsRequest {
  /** Figi-идентификатор инструмента. */
  figi: string
  /**
   * Начало запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру record_date (дата фиксации реестра).
   * @type `google.protobuf.Timestamp`
   */
  from: string
  /**
   * Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру record_date (дата фиксации реестра).
   * @type `google.protobuf.Timestamp`
   */
  to: string
}

/**
 * Дивиденды
 * @see https://tinkoff.github.io/investAPI/instruments/#getdividendsresponse
 */
export interface GetDividendsResponse {
  /** @todo Нет описания */
  dividends: Dividend[]
}

/**
 * Запрос актива по идентификатору
 * @see https://tinkoff.github.io/investAPI/instruments/#assetrequest
 */
export interface AssetRequest {
  /** uid-идентификатор актива. */
  id: string
}

/**
 * Данные по активу
 * @see https://tinkoff.github.io/investAPI/instruments/#assetresponse
 */
export interface AssetResponse {
  /** Актив. */
  asset: AssetFull
}

/**
 * Запрос списка активов
 * @see https://tinkoff.github.io/investAPI/instruments/#assetsrequest
 */
export interface AssetsRequest {
  /** @todo Нет описания */
  instrument_type: InstrumentType
}

/**
 * Список активов
 * @see https://tinkoff.github.io/investAPI/instruments/#assetsresponse
 */
export interface AssetsResponse {
  /** Активы. */
  assets: Asset[]
}

/**
 * Запрос списка избранных инструментов, входные параметры не требуются
 * @see https://tinkoff.github.io/investAPI/instruments/#getfavoritesrequest
 */
export interface GetFavoritesRequest {}

/**
 * В ответ передаётся список избранных инструментов в качестве массива
 * @see https://tinkoff.github.io/investAPI/instruments/#getfavoritesresponse
 */
export interface GetFavoritesResponse {
  /** Массив инструментов */
  favorite_instruments: FavoriteInstrument[]
}

/**
 * Запрос редактирования списка избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesrequest
 */
export interface EditFavoritesRequest {
  /** Массив инструментов. */
  instruments: EditFavoritesRequestInstrument[]
  /** Тип действия со списком. */
  action_type: EditFavoritesActionType
}

/**
 * Результат редактирования списка избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesresponse
 */
export interface EditFavoritesResponse {
  /** Массив инструментов */
  favorite_instruments: FavoriteInstrument[]
}

/**
 * Запрос справочника стран
 * @see https://tinkoff.github.io/investAPI/instruments/#getcountriesrequest
 */
export interface GetCountriesRequest {}

/**
 * Справочник стран
 * @see https://tinkoff.github.io/investAPI/instruments/#getcountriesresponse
 */
export interface GetCountriesResponse {
  /** Массив стран. */
  countries: CountryResponse[]
}

/**
 * Данные о стране
 * @see https://tinkoff.github.io/investAPI/instruments/#countryresponse
 */
export interface CountryResponse {
  /** Двухбуквенный код страны. */
  alfa_two: string
  /** Трёхбуквенный код страны. */
  alfa_three: string
  /** Наименование страны. */
  name: string
  /** Краткое наименование страны. */
  name_brief: string
}

/**
 * Запрос на поиск инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#findinstrumentrequest
 */
export interface FindInstrumentRequest {
  /** Строка поиска. */
  query: string
  /** Фильтр по типу инструмента. */
  instrument_kind: InstrumentType
  /** Фильтр для отображения только торговых инструментов. */
  api_trade_available_flag: boolean
}

/**
 * Результат поиска инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#findinstrumentresponse
 */
export interface FindInstrumentResponse {
  /** Массив инструментов, удовлетворяющих условиям поиска. */
  instruments: InstrumentShort[]
}

/**
 * Запрос списка брендов
 * @see https://tinkoff.github.io/investAPI/instruments/#getbrandsrequest
 */
export interface GetBrandsRequest {}

/**
 * Запрос бренда
 * @see https://tinkoff.github.io/investAPI/instruments/#getbrandrequest
 */
export interface GetBrandsResponse {
  /** Uid-идентификатор бренда. */
  id: string
}

/**
 * Список брендов
 * @see https://tinkoff.github.io/investAPI/instruments/#getbrandsresponse
 */
export interface GetBrandRequest {
  /** Массив брендов. */
  brands: Brand[]
}

/**
 * Сервис предназначен для получения:
 * 1. информации об инструментах;
 * 2. расписания торговых сессий;
 * 3. календаря выплат купонов по облигациям;
 * 4. размера гарантийного обеспечения по фьючерсам;
 * 5. дивидендов по ценной бумаге.
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentsservice
 */
export class InstrumentsService extends Common {
  /**
   * Метод получения расписания торгов торговых площадок
   * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedules
   */
  public TradingSchedules(
    body: TradingSchedulesRequest
  ): Promise<TradingSchedulesResponse> {
    return this.request('InstrumentsService', 'TradingSchedules', body)
  }

  /**
   * Метод получения облигации по её идентификатору
   * @see https://tinkoff.github.io/investAPI/instruments/#bondby
   */
  public BondBy(body: InstrumentRequest): Promise<BondResponse> {
    return this.request('InstrumentsService', 'BondBy', body)
  }

  /**
   * Метод получения списка облигаций
   * @see https://tinkoff.github.io/investAPI/instruments/#bonds
   */
  public Bonds(body: InstrumentsRequest): Promise<BondsResponse> {
    return this.request('InstrumentsService', 'Bonds', body)
  }

  /**
   * Метод получения графика выплат купонов по облигации
   * @see https://tinkoff.github.io/investAPI/instruments/#getbondcoupons
   */
  public GetBondCoupons(
    body: GetBondCouponsRequest
  ): Promise<GetBondCouponsResponse> {
    return this.request('InstrumentsService', 'GetBondCoupons', body)
  }

  /**
   * Метод получения валюты по её идентификатору
   * @see https://tinkoff.github.io/investAPI/instruments/#currencyby
   */
  public CurrencyBy(body: InstrumentRequest): Promise<CurrencyResponse> {
    return this.request('InstrumentsService', 'CurrencyBy', body)
  }

  /**
   * Метод получения списка валют
   * @see https://tinkoff.github.io/investAPI/instruments/#currencies
   */
  public Currencies(body: InstrumentsRequest): Promise<CurrenciesResponse> {
    return this.request('InstrumentsService', 'Currencies', body)
  }

  /**
   * Метод получения инвестиционного фонда по его идентификатору
   * @see https://tinkoff.github.io/investAPI/instruments/#etfby
   */
  public EtfBy(body: InstrumentRequest): Promise<EtfResponse> {
    return this.request('InstrumentsService', 'EtfBy', body)
  }

  /**
   * Метод получения списка инвестиционных фондов
   * @see https://tinkoff.github.io/investAPI/instruments/#etfs
   */
  public Etfs(body: InstrumentsRequest): Promise<EtfsResponse> {
    return this.request('InstrumentsService', 'Etfs', body)
  }

  /**
   * Метод получения фьючерса по его идентификатору
   * @see https://tinkoff.github.io/investAPI/instruments/#futureby
   */
  public FutureBy(body: InstrumentRequest): Promise<FutureResponse> {
    return this.request('InstrumentsService', 'FutureBy', body)
  }

  /**
   * Метод получения списка фьючерсов
   * @see https://tinkoff.github.io/investAPI/instruments/#futures
   */
  public Futures(body: InstrumentsRequest): Promise<FuturesResponse> {
    return this.request('InstrumentsService', 'Futures', body)
  }

  /**
   * Метод получения опциона по его идентификатору
   * @see https://tinkoff.github.io/investAPI/instruments/#optionby
   */
  public OptionBy(body: InstrumentRequest): Promise<OptionResponse> {
    return this.request('InstrumentsService', 'OptionBy', body)
  }

  /**
   * Метод получения списка опционов
   * @deprecated Deprecated
   * @see https://tinkoff.github.io/investAPI/instruments/#options
   */
  public Options(body: InstrumentsRequest): Promise<OptionsResponse> {
    return this.request('InstrumentsService', 'Options', body)
  }

  /**
   * Метод получения списка опционов
   * @see https://tinkoff.github.io/investAPI/instruments/#optionsby
   */
  public OptionsBy(body: FilterOptionsRequest): Promise<OptionsResponse> {
    return this.request('InstrumentsService', 'OptionsBy', body)
  }

  /**
   * Метод получения акции по её идентификатору
   * @see https://tinkoff.github.io/investAPI/instruments/#shareby
   */
  public ShareBy(body: InstrumentRequest): Promise<ShareResponse> {
    return this.request('InstrumentsService', 'ShareBy', body)
  }

  /**
   * Метод получения списка акций
   * @see https://tinkoff.github.io/investAPI/instruments/#shares
   */
  public Shares(body: InstrumentsRequest): Promise<SharesResponse> {
    return this.request('InstrumentsService', 'Shares', body)
  }

  /**
   * Метод получения накопленного купонного дохода по облигации
   * @see https://tinkoff.github.io/investAPI/instruments/#getaccruedinterests
   */
  public GetAccruedInterests(
    body: GetAccruedInterestsRequest
  ): Promise<GetAccruedInterestsResponse> {
    return this.request('InstrumentsService', 'GetAccruedInterests', body)
  }

  /**
   * Метод получения размера гарантийного обеспечения по фьючерсам
   * @see https://tinkoff.github.io/investAPI/instruments/#getfuturesmargin
   */
  public GetFuturesMargin(
    body: GetFuturesMarginRequest
  ): Promise<GetFuturesMarginResponse> {
    return this.request('InstrumentsService', 'GetFuturesMargin', body)
  }

  /**
   * Метод получения основной информации об инструменте
   * @see https://tinkoff.github.io/investAPI/instruments/#getinstrumentby
   */
  public GetInstrumentBy(body: InstrumentRequest): Promise<InstrumentResponse> {
    return this.request('InstrumentsService', 'GetInstrumentBy', body)
  }

  /**
   * Метод для получения событий выплаты дивидендов по инструменту
   * @see https://tinkoff.github.io/investAPI/instruments/#getdividends
   */
  public GetDividends(
    body: GetDividendsRequest
  ): Promise<GetDividendsResponse> {
    return this.request('InstrumentsService', 'GetDividends', body)
  }

  /**
   * Метод получения актива по его идентификатору
   * @see https://tinkoff.github.io/investAPI/instruments/#getassetby
   */
  public GetAssetBy(body: AssetRequest): Promise<AssetResponse> {
    return this.request('InstrumentsService', 'GetAssetBy', body)
  }

  /**
   * Метод получения списка активов
   * @description Метод работает для всех инструментов, за исключением срочных - опционов и фьючерсов
   * @see https://tinkoff.github.io/investAPI/instruments/#getassets
   */
  public GetAssets(body: AssetsRequest): Promise<AssetsResponse> {
    return this.request('InstrumentsService', 'GetAssets', body)
  }

  /**
   * Метод получения списка избранных инструментов
   * @see https://tinkoff.github.io/investAPI/instruments/#getfavorites
   */
  public GetFavorites(
    body: GetFavoritesRequest
  ): Promise<GetFavoritesResponse> {
    return this.request('InstrumentsService', 'GetFavorites', body)
  }

  /**
   * Метод редактирования списка избранных инструментов
   * @see https://tinkoff.github.io/investAPI/instruments/#editfavorites
   */
  public EditFavorites(
    body: EditFavoritesRequest
  ): Promise<EditFavoritesResponse> {
    return this.request('InstrumentsService', 'EditFavorites', body)
  }

  /**
   * Метод получения списка стран
   * @see https://tinkoff.github.io/investAPI/instruments/#getcountries
   */
  public GetCountries(
    body: GetCountriesRequest
  ): Promise<GetCountriesResponse> {
    return this.request('InstrumentsService', 'GetCountries', body)
  }

  /**
   * Метод поиска инструмента
   * @see https://tinkoff.github.io/investAPI/instruments/#findinstrument
   */
  public FindInstrument(
    body: FindInstrumentRequest
  ): Promise<FindInstrumentResponse> {
    return this.request('InstrumentsService', 'FindInstrument', body)
  }

  /**
   * Метод получения списка брендов
   * @see https://tinkoff.github.io/investAPI/instruments/#getbrands
   */
  public GetBrands(body: GetBrandsRequest): Promise<GetBrandsResponse> {
    return this.request('InstrumentsService', 'GetBrands', body)
  }

  /**
   * Метод получения бренда по его идентификатору
   * @see https://tinkoff.github.io/investAPI/instruments/#getbrandby
   */
  public GetBrandBy(body: GetBrandRequest): Promise<Brand> {
    return this.request('InstrumentsService', 'GetBrandBy', body)
  }
}
