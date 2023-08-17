import { Common } from './Common'

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
 * Данные по торговой площадке
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedule
 */
export interface TradingSchedule {
  // exchange	string	Наименование торговой площадки.
  // days	Массив объектов TradingDay	Массив с торговыми и неторговыми днями.
}

/**
 * Информация о времени торгов
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingday
 */
export interface TradingDay {
  // date	google.protobuf.Timestamp	Дата.
  // is_trading_day	bool	Признак торгового дня на бирже.
  // start_time	google.protobuf.Timestamp	Время начала торгов по часовому поясу UTC.
  // end_time	google.protobuf.Timestamp	Время окончания торгов по часовому поясу UTC.
  // opening_auction_start_time	google.protobuf.Timestamp	Время начала аукциона открытия в часовом поясе UTC.
  // closing_auction_end_time	google.protobuf.Timestamp	Время окончания аукциона закрытия в часовом поясе UTC.
  // evening_opening_auction_start_time	google.protobuf.Timestamp	Время начала аукциона открытия вечерней сессии в часовом поясе UTC.
  // evening_start_time	google.protobuf.Timestamp	Время начала вечерней сессии в часовом поясе UTC.
  // evening_end_time	google.protobuf.Timestamp	Время окончания вечерней сессии в часовом поясе UTC.
  // clearing_start_time	google.protobuf.Timestamp	Время начала основного клиринга в часовом поясе UTC.
  // clearing_end_time	google.protobuf.Timestamp	Время окончания основного клиринга в часовом поясе UTC.
  // premarket_start_time	google.protobuf.Timestamp	Время начала премаркета в часовом поясе UTC.
  // premarket_end_time	google.protobuf.Timestamp	Время окончания премаркета в часовом поясе UTC.
  // closing_auction_start_time	google.protobuf.Timestamp	Время начала аукциона закрытия в часовом поясе UTC.
  // opening_auction_end_time	google.protobuf.Timestamp	Время окончания аукциона открытия в часовом поясе UTC.
}

/**
 * Объект передачи информации о купоне облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#coupon
 */
export interface Coupon {
  // figi	string	Figi-идентификатор инструмента.
  // coupon_date	google.protobuf.Timestamp	Дата выплаты купона.
  // coupon_number	int64	Номер купона.
  // fix_date	google.protobuf.Timestamp	(Опционально) Дата фиксации реестра для выплаты купона.
  // pay_one_bond	MoneyValue	Выплата на одну облигацию.
  // coupon_type	CouponType	Тип купона.
  // coupon_start_date	google.protobuf.Timestamp	Начало купонного периода.
  // coupon_end_date	google.protobuf.Timestamp	Окончание купонного периода.
  // coupon_period	int32	Купонный период в днях.
}

/**
 * Опцион
 * @see https://tinkoff.github.io/investAPI/instruments/#option
 */
export interface Option {
  // uid	string	Уникальный идентификатор инструмента.
  // position_uid	string	Уникальный идентификатор позиции.
  // ticker	string	Тикер инструмента.
  // class_code	string	Класс-код.
  // basic_asset_position_uid	string	Уникальный идентификатор позиции основного инструмента.
  // trading_status	SecurityTradingStatus	Текущий режим торгов инструмента.
  // real_exchange	RealExchange	Реальная площадка исполнения расчётов (биржа). Допустимые значения: [REAL_EXCHANGE_MOEX, REAL_EXCHANGE_RTS]
  // direction	OptionDirection	Направление опциона.
  // payment_type	OptionPaymentType	Тип расчетов по опциону.
  // style	OptionStyle	Стиль опциона.
  // settlement_type	OptionSettlementType	Способ исполнения опциона.
  // name	string	Название инструмента.
  // currency	string	Валюта.
  // settlement_currency	string	Валюта, в которой оценивается контракт.
  // asset_type	string	Тип актива.
  // basic_asset	string	Основной актив.
  // exchange	string	Tорговая площадка (секция биржи).
  // country_of_risk	string	Код страны рисков.
  // country_of_risk_name	string	Наименование страны рисков.
  // sector	string	Сектор экономики.
  // lot	int32	Количество бумаг в лоте.
  // basic_asset_size	Quotation	Размер основного актива.
  // klong	Quotation	Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // kshort	Quotation	Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // dlong	Quotation	Ставка риска начальной маржи для КСУР лонг. Подробнее: ставка риска в лонг
  // dshort	Quotation	Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт
  // dlong_min	Quotation	Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг
  // dshort_min	Quotation	Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт
  // min_price_increment	Quotation	Минимальный шаг цены.
  // strike_price	MoneyValue	Цена страйка.
  // expiration_date	google.protobuf.Timestamp	Дата истечения срока в формате UTC.
  // first_trade_date	google.protobuf.Timestamp	Дата начала обращения контракта в формате UTC.
  // last_trade_date	google.protobuf.Timestamp	Дата исполнения в формате UTC.
  // first_1min_candle_date	google.protobuf.Timestamp	Дата первой минутной свечи в формате UTC.
  // first_1day_candle_date	google.protobuf.Timestamp	Дата первой дневной свечи в формате UTC.
  // short_enabled_flag	bool	Признак доступности для операций шорт.
  // for_iis_flag	bool	Возможность покупки/продажи на ИИС.
  // otc_flag	bool	Признак внебиржевой ценной бумаги.
  // buy_available_flag	bool	Признак доступности для покупки.
  // sell_available_flag	bool	Признак доступности для продажи.
  // for_qual_investor_flag	bool	Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов.
  // weekend_flag	bool	Флаг отображающий доступность торговли инструментом по выходным.
  // blocked_tca_flag	bool	Флаг заблокированного ТКС.
  // api_trade_available_flag	bool	Параметр указывает на возможность торговать инструментом через API.
}

/**
 * Объект передачи информации об облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#bond
 */
export interface Bond {
  // figi	string	Figi-идентификатор инструмента.
  // ticker	string	Тикер инструмента.
  // class_code	string	Класс-код (секция торгов).
  // isin	string	Isin-идентификатор инструмента.
  // lot	int32	Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot. Подробнее: лот
  // currency	string	Валюта расчётов.
  // klong	Quotation	Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // kshort	Quotation	Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // dlong	Quotation	Ставка риска начальной маржи для КСУР лонг. Подробнее: ставка риска в лонг
  // dshort	Quotation	Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт
  // dlong_min	Quotation	Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг
  // dshort_min	Quotation	Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт
  // short_enabled_flag	bool	Признак доступности для операций в шорт.
  // name	string	Название инструмента.
  // exchange	string	Tорговая площадка (секция биржи).
  // coupon_quantity_per_year	int32	Количество выплат по купонам в год.
  // maturity_date	google.protobuf.Timestamp	Дата погашения облигации в часовом поясе UTC.
  // nominal	MoneyValue	Номинал облигации.
  // initial_nominal	MoneyValue	Первоначальный номинал облигации.
  // state_reg_date	google.protobuf.Timestamp	Дата выпуска облигации в часовом поясе UTC.
  // placement_date	google.protobuf.Timestamp	Дата размещения в часовом поясе UTC.
  // placement_price	MoneyValue	Цена размещения.
  // aci_value	MoneyValue	Значение НКД (накопленного купонного дохода) на дату.
  // country_of_risk	string	Код страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // country_of_risk_name	string	Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // sector	string	Сектор экономики.
  // issue_kind	string	Форма выпуска. Возможные значения:
  // documentary — документарная;
  // non_documentary — бездокументарная.
  // issue_size	int64	Размер выпуска.
  // issue_size_plan	int64	Плановый размер выпуска.
  // trading_status	SecurityTradingStatus	Текущий режим торгов инструмента.
  // otc_flag	bool	Признак внебиржевой ценной бумаги.
  // buy_available_flag	bool	Признак доступности для покупки.
  // sell_available_flag	bool	Признак доступности для продажи.
  // floating_coupon_flag	bool	Признак облигации с плавающим купоном.
  // perpetual_flag	bool	Признак бессрочной облигации.
  // amortization_flag	bool	Признак облигации с амортизацией долга.
  // min_price_increment	Quotation	Шаг цены.
  // api_trade_available_flag	bool	Параметр указывает на возможность торговать инструментом через API.
  // uid	string	Уникальный идентификатор инструмента.
  // real_exchange	RealExchange	Реальная площадка исполнения расчётов. (биржа)
  // position_uid	string	Уникальный идентификатор позиции инструмента.
  // for_iis_flag	bool	Признак доступности для ИИС.
  // for_qual_investor_flag	bool	Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов.
  // weekend_flag	bool	Флаг отображающий доступность торговли инструментом по выходным
  // blocked_tca_flag	bool	Флаг заблокированного ТКС
  // subordinated_flag	bool	Признак субординированной облигации.
  // liquidity_flag	bool	Флаг достаточной ликвидности
  // first_1min_candle_date	google.protobuf.Timestamp	Дата первой минутной свечи.
  // first_1day_candle_date	google.protobuf.Timestamp	Дата первой дневной свечи.
  // risk_level	RiskLevel	Уровень риска.
}

/**
 * Объект передачи информации о валюте
 * @see https://tinkoff.github.io/investAPI/instruments/#currency
 */
export interface Currency {
  // figi	string	Figi-идентификатор инструмента.
  // ticker	string	Тикер инструмента.
  // class_code	string	Класс-код (секция торгов).
  // isin	string	Isin-идентификатор инструмента.
  // lot	int32	Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot. Подробнее: лот
  // currency	string	Валюта расчётов.
  // klong	Quotation	Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // kshort	Quotation	Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // dlong	Quotation	Ставка риска начальной маржи для КСУР лонг.Подробнее: ставка риска в лонг
  // dshort	Quotation	Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт
  // dlong_min	Quotation	Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг
  // dshort_min	Quotation	Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт
  // short_enabled_flag	bool	Признак доступности для операций в шорт.
  // name	string	Название инструмента.
  // exchange	string	Tорговая площадка (секция биржи)
  // nominal	MoneyValue	Номинал.
  // country_of_risk	string	Код страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // country_of_risk_name	string	Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // trading_status	SecurityTradingStatus	Текущий режим торгов инструмента.
  // otc_flag	bool	Признак внебиржевой ценной бумаги.
  // buy_available_flag	bool	Признак доступности для покупки.
  // sell_available_flag	bool	Признак доступности для продажи.
  // iso_currency_name	string	Строковый ISO-код валюты.
  // min_price_increment	Quotation	Шаг цены.
  // api_trade_available_flag	bool	Параметр указывает на возможность торговать инструментом через API.
  // uid	string	Уникальный идентификатор инструмента.
  // real_exchange	RealExchange	Реальная площадка исполнения расчётов (биржа).
  // position_uid	string	Уникальный идентификатор позиции инструмента.
  // for_iis_flag	bool	Признак доступности для ИИС.
  // for_qual_investor_flag	bool	Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов.
  // weekend_flag	bool	Флаг отображающий доступность торговли инструментом по выходным.
  // blocked_tca_flag	bool	Флаг заблокированного ТКС.
  // first_1min_candle_date	google.protobuf.Timestamp	Дата первой минутной свечи.
  // first_1day_candle_date	google.protobuf.Timestamp	Дата первой дневной свечи.
}

/**
 * Объект передачи информации об инвестиционном фонде
 * @see https://tinkoff.github.io/investAPI/instruments/#etf
 */
export interface Etf {
  // figi	string	Figi-идентификатор инструмента.
  // ticker	string	Тикер инструмента.
  // class_code	string	Класс-код (секция торгов).
  // isin	string	Isin-идентификатор инструмента.
  // lot	int32	Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot. Подробнее: лот
  // currency	string	Валюта расчётов.
  // klong	Quotation	Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // kshort	Quotation	Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // dlong	Quotation	Ставка риска начальной маржи для КСУР лонг.Подробнее: ставка риска в лонг
  // dshort	Quotation	Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт
  // dlong_min	Quotation	Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг
  // dshort_min	Quotation	Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт
  // short_enabled_flag	bool	Признак доступности для операций в шорт.
  // name	string	Название инструмента.
  // exchange	string	Tорговая площадка (секция биржи).
  // fixed_commission	Quotation	Размер фиксированной комиссии фонда.
  // focus_type	string	Возможные значения:
  // equity — акции;
  // fixed_income — облигации;
  // mixed_allocation — смешанный;
  // money_market — денежный рынок;
  // real_estate — недвижимость;
  // commodity — товары;
  // specialty — специальный;
  // private_equity — private equity;
  // alternative_investment — альтернативные инвестиции.
  // released_date	google.protobuf.Timestamp	Дата выпуска в часовом поясе UTC.
  // num_shares	Quotation	Количество акций фонда в обращении.
  // country_of_risk	string	Код страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // country_of_risk_name	string	Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // sector	string	Сектор экономики.
  // rebalancing_freq	string	Частота ребалансировки.
  // trading_status	SecurityTradingStatus	Текущий режим торгов инструмента.
  // otc_flag	bool	Признак внебиржевой ценной бумаги.
  // buy_available_flag	bool	Признак доступности для покупки.
  // sell_available_flag	bool	Признак доступности для продажи.
  // min_price_increment	Quotation	Шаг цены.
  // api_trade_available_flag	bool	Параметр указывает на возможность торговать инструментом через API.
  // uid	string	Уникальный идентификатор инструмента.
  // real_exchange	RealExchange	Реальная площадка исполнения расчётов (биржа).
  // position_uid	string	Уникальный идентификатор позиции инструмента.
  // for_iis_flag	bool	Признак доступности для ИИС.
  // for_qual_investor_flag	bool	Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов.
  // weekend_flag	bool	Флаг отображающий доступность торговли инструментом по выходным.
  // blocked_tca_flag	bool	Флаг заблокированного ТКС.
  // liquidity_flag	bool	Флаг достаточной ликвидности
  // first_1min_candle_date	google.protobuf.Timestamp	Дата первой минутной свечи.
  // first_1day_candle_date	google.protobuf.Timestamp	Дата первой дневной свечи.
}

/**
 * Объект передачи информации о фьючерсе
 * @see https://tinkoff.github.io/investAPI/instruments/#future
 */
export interface Future {
  // figi	string	Figi-идентификатор инструмента.
  // ticker	string	Тикер инструмента.
  // class_code	string	Класс-код (секция торгов).
  // lot	int32	Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot. Подробнее: лот
  // currency	string	Валюта расчётов.
  // klong	Quotation	Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // kshort	Quotation	Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // dlong	Quotation	Ставка риска начальной маржи для КСУР лонг.Подробнее: ставка риска в лонг
  // dshort	Quotation	Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт
  // dlong_min	Quotation	Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг
  // dshort_min	Quotation	Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт
  // short_enabled_flag	bool	Признак доступности для операций шорт.
  // name	string	Название инструмента.
  // exchange	string	Tорговая площадка (секция биржи).
  // first_trade_date	google.protobuf.Timestamp	Дата начала обращения контракта в часовом поясе UTC.
  // last_trade_date	google.protobuf.Timestamp	Дата в часовом поясе UTC, до которой возможно проведение операций с фьючерсом.
  // futures_type	string	Тип фьючерса. Возможные значения:
  // physical_delivery — физические поставки;
  // cash_settlement — денежный эквивалент.
  // asset_type	string	Тип актива. Возможные значения:
  // commodity — товар;
  // currency — валюта;
  // security — ценная бумага;
  // index — индекс.
  // basic_asset	string	Основной актив.
  // basic_asset_size	Quotation	Размер основного актива.
  // country_of_risk	string	Код страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // country_of_risk_name	string	Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // sector	string	Сектор экономики.
  // expiration_date	google.protobuf.Timestamp	Дата истечения срока в часов поясе UTC.
  // trading_status	SecurityTradingStatus	Текущий режим торгов инструмента.
  // otc_flag	bool	Признак внебиржевой ценной бумаги.
  // buy_available_flag	bool	Признак доступности для покупки.
  // sell_available_flag	bool	Признак доступности для продажи.
  // min_price_increment	Quotation	Шаг цены.
  // api_trade_available_flag	bool	Параметр указывает на возможность торговать инструментом через API.
  // uid	string	Уникальный идентификатор инструмента.
  // real_exchange	RealExchange	Реальная площадка исполнения расчётов (биржа).
  // position_uid	string	Уникальный идентификатор позиции инструмента.
  // basic_asset_position_uid	string	Уникальный идентификатор позиции основного инструмента.
  // for_iis_flag	bool	Признак доступности для ИИС.
  // for_qual_investor_flag	bool	Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов.
  // weekend_flag	bool	Флаг отображающий доступность торговли инструментом по выходным.
  // blocked_tca_flag	bool	Флаг заблокированного ТКС.
  // first_1min_candle_date	google.protobuf.Timestamp	Дата первой минутной свечи.
  // first_1day_candle_date	google.protobuf.Timestamp	Дата первой дневной свечи.
}

/**
 * Объект передачи информации об акции
 * @see https://tinkoff.github.io/investAPI/instruments/#share
 */
export interface Share {
  // figi	string	Figi-идентификатор инструмента.
  // ticker	string	Тикер инструмента.
  // class_code	string	Класс-код (секция торгов).
  // isin	string	Isin-идентификатор инструмента.
  // lot	int32	Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot. Подробнее: лот
  // currency	string	Валюта расчётов.
  // klong	Quotation	Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // kshort	Quotation	Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
  // dlong	Quotation	Ставка риска начальной маржи для КСУР лонг.Подробнее: ставка риска в лонг
  // dshort	Quotation	Ставка риска начальной маржи для КСУР шорт. Подробнее: ставка риска в шорт
  // dlong_min	Quotation	Ставка риска начальной маржи для КПУР лонг. Подробнее: ставка риска в лонг
  // dshort_min	Quotation	Ставка риска начальной маржи для КПУР шорт. Подробнее: ставка риска в шорт
  // short_enabled_flag	bool	Признак доступности для операций в шорт.
  // name	string	Название инструмента.
  // exchange	string	Tорговая площадка (секция биржи).
  // ipo_date	google.protobuf.Timestamp	Дата IPO акции в часовом поясе UTC.
  // issue_size	int64	Размер выпуска.
  // country_of_risk	string	Код страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // country_of_risk_name	string	Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // sector	string	Сектор экономики.
  // issue_size_plan	int64	Плановый размер выпуска.
  // nominal	MoneyValue	Номинал.
  // trading_status	SecurityTradingStatus	Текущий режим торгов инструмента.
  // otc_flag	bool	Признак внебиржевой ценной бумаги.
  // buy_available_flag	bool	Признак доступности для покупки.
  // sell_available_flag	bool	Признак доступности для продажи.
  // div_yield_flag	bool	Признак наличия дивидендной доходности.
  // share_type	ShareType	Тип акции. Возможные значения: ShareType
  // min_price_increment	Quotation	Шаг цены.
  // api_trade_available_flag	bool	Параметр указывает на возможность торговать инструментом через API.
  // uid	string	Уникальный идентификатор инструмента.
  // real_exchange	RealExchange	Реальная площадка исполнения расчётов (биржа).
  // position_uid	string	Уникальный идентификатор позиции инструмента.
  // for_iis_flag	bool	Признак доступности для ИИС.
  // for_qual_investor_flag	bool	Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов.
  // weekend_flag	bool	Флаг отображающий доступность торговли инструментом по выходным
  // blocked_tca_flag	bool	Флаг заблокированного ТКС
  // liquidity_flag	bool	Флаг достаточной ликвидности
  // first_1min_candle_date	google.protobuf.Timestamp	Дата первой минутной свечи.
  // first_1day_candle_date	google.protobuf.Timestamp	Дата первой дневной свечи.
}

/**
 * Бренд
 * @see https://tinkoff.github.io/investAPI/instruments/#brand
 */
export interface Brand {
  // uid	string	uid идентификатор бренда.
  // name	string	Наименование бренда.
  // description	string	Описание.
  // info	string	Информация о бренде.
  // company	string	Компания.
  // sector	string	Сектор.
  // country_of_risk	string	Код страны риска.
  // country_of_risk_name	string	Наименование страны риска.
}

/**
 * Операция начисления купонов
 * @see https://tinkoff.github.io/investAPI/instruments/#accruedinterest
 */
export interface AccruedInterest {
  // date	google.protobuf.Timestamp	Дата и время выплаты в часовом поясе UTC.
  // value	Quotation	Величина выплаты.
  // value_percent	Quotation	Величина выплаты в процентах от номинала.
  // nominal	Quotation	Номинал облигации.
}

/**
 * Объект передачи основной информации об инструменте
 * @see https://tinkoff.github.io/investAPI/instruments/#instrument
 */
export interface Instrument {
  // name	string	Название инструмента.
  // exchange	string	Tорговая площадка (секция биржи).
  // country_of_risk	string	Код страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // country_of_risk_name	string	Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес.
  // instrument_type	string	Тип инструмента.
  // trading_status	SecurityTradingStatus	Текущий режим торгов инструмента.
  // otc_flag	bool	Признак внебиржевой ценной бумаги.
  // buy_available_flag	bool	Признак доступности для покупки.
  // sell_available_flag	bool	Признак доступности для продажи.
  // min_price_increment	Quotation	Шаг цены.
  // api_trade_available_flag	bool	Параметр указывает на возможность торговать инструментом через API.
  // uid	string	Уникальный идентификатор инструмента.
  // real_exchange	RealExchange	Реальная площадка исполнения расчётов (биржа).
  // position_uid	string	Уникальный идентификатор позиции инструмента.
  // for_iis_flag	bool	Признак доступности для ИИС.
  // for_qual_investor_flag	bool	Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов.
  // weekend_flag	bool	Флаг отображающий доступность торговли инструментом по выходным
  // blocked_tca_flag	bool	Флаг заблокированного ТКС
  // instrument_kind	InstrumentType	Тип инструмента.
  // first_1min_candle_date	google.protobuf.Timestamp	Дата первой минутной свечи.
  // first_1day_candle_date	google.protobuf.Timestamp	Дата первой дневной свечи.
}

/**
 * Информация о выплате
 * @see https://tinkoff.github.io/investAPI/instruments/#dividend
 */
export interface Dividend {
  // dividend_net	MoneyValue	Величина дивиденда на 1 ценную бумагу (включая валюту).
  // payment_date	google.protobuf.Timestamp	Дата фактических выплат в часовом поясе UTC.
  // declared_date	google.protobuf.Timestamp	Дата объявления дивидендов в часовом поясе UTC.
  // last_buy_date	google.protobuf.Timestamp	Последний день (включительно) покупки для получения выплаты в часовом поясе UTC.
  // dividend_type	string	Тип выплаты. Возможные значения: Regular Cash – регулярные выплаты, Cancelled – выплата отменена, Daily Accrual – ежедневное начисление, Return of Capital – возврат капитала, прочие типы выплат.
  // record_date	google.protobuf.Timestamp	Дата фиксации реестра в часовом поясе UTC.
  // regularity	string	Регулярность выплаты. Возможные значения: Annual – ежегодная, Semi-Anl – каждые полгода, прочие типы выплат.
  // close_price	MoneyValue	Цена закрытия инструмента на момент ex_dividend_date.
  // yield_value	Quotation	Величина доходности.
  // created_at	google.protobuf.Timestamp	Дата и время создания записи в часовом поясе UTC.
}

/**
 * @see https://tinkoff.github.io/investAPI/instruments/#assetfull
 */
export interface AssetFull {
  // uid	string	Уникальный идентификатор актива.
  // type	AssetType	Тип актива.
  // name	string	Наименование актива.
  // name_brief	string	Короткое наименование актива.
  // description	string	Описание актива.
  // deleted_at	google.protobuf.Timestamp	Дата и время удаления актива.
  // required_tests	Массив объектов string	Тестирование клиентов.
  // currency	AssetCurrency	Валюта. Обязательно и заполняется только для type = "ASSET_TYPE_CURRENCY".
  // security	AssetSecurity	Ценная бумага. Обязательно и заполняется только для type = "ASSET_TYPE_SECURITY".
  // gos_reg_code	string	Номер государственной регистрации.
  // cfi	string	Код CFI.
  // code_nsd	string	Код НРД инструмента.
  // status	string	Статус актива.
  // brand	Brand	Бренд.
  // updated_at	google.protobuf.Timestamp	Дата и время последнего обновления записи.
  // br_code	string	Код типа ц.б. по классификации Банка России.
  // br_code_name	string	Наименование кода типа ц.б. по классификации Банка России.
  // instruments	Массив объектов AssetInstrument	Массив идентификаторов инструментов.
}

/**
 * Информация об активе
 * @see https://tinkoff.github.io/investAPI/instruments/#asset
 */
export interface Asset {
  // uid	string	Уникальный идентификатор актива.
  // type	AssetType	Тип актива.
  // name	string	Наименование актива.
  // instruments	Массив объектов AssetInstrument	Массив идентификаторов инструментов.
}

/**
 * Валюта
 * @see https://tinkoff.github.io/investAPI/instruments/#assetcurrency
 */
export interface AssetCurrency {
  // base_currency	string	ISO-код валюты.
}

/**
 * Ценная бумага
 * @see https://tinkoff.github.io/investAPI/instruments/#assetsecurity
 */
export interface AssetSecurity {
  // isin	string	ISIN-идентификатор ценной бумаги.
  // type	string	Тип ценной бумаги.
  // instrument_kind	InstrumentType	Тип инструмента.
  // share	AssetShare	Акция. Заполняется только для акций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = share).
  // bond	AssetBond	Облигация. Заполняется только для облигаций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = bond).
  // sp	AssetStructuredProduct	Структурная нота. Заполняется только для структурных продуктов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = sp).
  // etf	AssetEtf	Фонд. Заполняется только для фондов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = etf).
  // clearing_certificate	AssetClearingCertificate	Клиринговый сертификат участия. Заполняется только для клиринговых сертификатов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = clearing_certificate).
}

/**
 * Акция
 * @see https://tinkoff.github.io/investAPI/instruments/#assetshare
 */
export interface AssetShare {
  // type	ShareType	Тип акции.
  // issue_size	Quotation	Объем выпуска (шт.).
  // nominal	Quotation	Номинал.
  // nominal_currency	string	Валюта номинала.
  // primary_index	string	Индекс (Bloomberg).
  // dividend_rate	Quotation	Ставка дивиденда (для привилегированных акций).
  // preferred_share_type	string	Тип привилегированных акций.
  // ipo_date	google.protobuf.Timestamp	Дата IPO.
  // registry_date	google.protobuf.Timestamp	Дата регистрации.
  // div_yield_flag	bool	Признак наличия дивидендной доходности.
  // issue_kind	string	Форма выпуска ФИ.
  // placement_date	google.protobuf.Timestamp	Дата размещения акции.
  // repres_isin	string	ISIN базового актива.
  // issue_size_plan	Quotation	Объявленное количество шт.
  // total_float	Quotation	Количество акций в свободном обращении.
}

/**
 * Облигация
 * @see https://tinkoff.github.io/investAPI/instruments/#assetbond
 */
export interface AssetBond {
  // current_nominal	Quotation	Текущий номинал.
  // borrow_name	string	Наименование заемщика.
  // issue_size	Quotation	Объем эмиссии облигации (стоимость).
  // nominal	Quotation	Номинал облигации.
  // nominal_currency	string	Валюта номинала.
  // issue_kind	string	Форма выпуска облигации.
  // interest_kind	string	Форма дохода облигации.
  // coupon_quantity_per_year	int32	Количество выплат в год.
  // indexed_nominal_flag	bool	Признак облигации с индексируемым номиналом.
  // subordinated_flag	bool	Признак субординированной облигации.
  // collateral_flag	bool	Признак обеспеченной облигации.
  // tax_free_flag	bool	Признак показывает, что купоны облигации не облагаются налогом (для mass market).
  // amortization_flag	bool	Признак облигации с амортизацией долга.
  // floating_coupon_flag	bool	Признак облигации с плавающим купоном.
  // perpetual_flag	bool	Признак бессрочной облигации.
  // maturity_date	google.protobuf.Timestamp	Дата погашения облигации.
  // return_condition	string	Описание и условия получения дополнительного дохода.
  // state_reg_date	google.protobuf.Timestamp	Дата выпуска облигации.
  // placement_date	google.protobuf.Timestamp	Дата размещения облигации.
  // placement_price	Quotation	Цена размещения облигации.
  // issue_size_plan	Quotation	Объявленное количество шт.
}

/**
 * Структурная нота
 * @see https://tinkoff.github.io/investAPI/instruments/#assetstructuredproduct
 */
export interface AssetStructuredProduct {
  // borrow_name	string	Наименование заемщика.
  // nominal	Quotation	Номинал.
  // nominal_currency	string	Валюта номинала.
  // type	StructuredProductType	Тип структурной ноты.
  // logic_portfolio	string	Стратегия портфеля.
  // asset_type	AssetType	Тип базового актива.
  // basic_asset	string	Вид базового актива в зависимости от типа базового актива.
  // safety_barrier	Quotation	Барьер сохранности (в процентах).
  // maturity_date	google.protobuf.Timestamp	Дата погашения.
  // issue_size_plan	Quotation	Объявленное количество шт.
  // issue_size	Quotation	Объем размещения.
  // placement_date	google.protobuf.Timestamp	Дата размещения ноты.
  // issue_kind	string	Форма выпуска.
}

/**
 * Фонд
 * @see https://tinkoff.github.io/investAPI/instruments/#assetetf
 */
export interface AssetEtf {
  // total_expense	Quotation	Суммарные расходы фонда (в %).
  // hurdle_rate	Quotation	Барьерная ставка доходности после которой фонд имеет право на perfomance fee (в процентах).
  // performance_fee	Quotation	Комиссия за успешные результаты фонда (в процентах).
  // fixed_commission	Quotation	Фиксированная комиссия за управление (в процентах).
  // payment_type	string	Тип распределения доходов от выплат по бумагам.
  // watermark_flag	bool	Признак необходимости выхода фонда в плюс для получения комиссии.
  // buy_premium	Quotation	Премия (надбавка к цене) при покупке доли в фонде (в процентах).
  // sell_discount	Quotation	Ставка дисконта (вычет из цены) при продаже доли в фонде (в процентах).
  // rebalancing_flag	bool	Признак ребалансируемости портфеля фонда.
  // rebalancing_freq	string	Периодичность ребалансировки.
  // management_type	string	Тип управления.
  // primary_index	string	Индекс, который реплицирует (старается копировать) фонд.
  // focus_type	string	База ETF.
  // leveraged_flag	bool	Признак использования заемных активов (плечо).
  // num_share	Quotation	Количество акций в обращении.
  // ucits_flag	bool	Признак обязательства по отчетности перед регулятором.
  // released_date	google.protobuf.Timestamp	Дата выпуска.
  // description	string	Описание фонда.
  // primary_index_description	string	Описание индекса, за которым следует фонд.
  // primary_index_company	string	Основные компании, в которые вкладывается фонд.
  // index_recovery_period	Quotation	Срок восстановления индекса (после просадки).
  // inav_code	string	IVAV-код.
  // div_yield_flag	bool	Признак наличия дивидендной доходности.
  // expense_commission	Quotation	Комиссия на покрытие расходов фонда (в процентах).
  // primary_index_tracking_error	Quotation	Ошибка следования за индексом (в процентах).
  // rebalancing_plan	string	Плановая ребалансировка портфеля.
  // tax_rate	string	Ставки налогообложения дивидендов и купонов.
  // rebalancing_dates	Массив объектов google.protobuf.Timestamp	Даты ребалансировок.
  // issue_kind	string	Форма выпуска.
  // nominal	Quotation	Номинал.
  // nominal_currency	string	Валюта номинала.
}

/**
 * Клиринговый сертификат участия
 * @see https://tinkoff.github.io/investAPI/instruments/#assetclearingcertificate
 */
export interface AssetClearingCertificate {
  // nominal	Quotation	Номинал.
  // nominal_currency	string	Валюта номинала.
}

/**
 * Идентификаторы инструмента
 * @see https://tinkoff.github.io/investAPI/instruments/#assetinstrument
 */
export interface AssetInstrument {
  // uid	string	uid идентификатор инструмента.
  // figi	string	figi идентификатор инструмента.
  // instrument_type	string	Тип инструмента.
  // ticker	string	Тикер инструмента.
  // class_code	string	Класс-код (секция торгов).
  // links	Массив объектов InstrumentLink	Массив связанных инструментов.
  // instrument_kind	InstrumentType	Тип инструмента.
  // position_uid	string	id позиции.
}

/**
 * Связь с другим инструментом
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentlink
 */
export interface InstrumentLink {
  // type	string	Тип связи.
  // instrument_uid	string	uid идентификатор связанного инструмента.
}

/**
 * Массив избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#favoriteinstrument
 */
export interface FavoriteInstrument {
  // figi	string	Figi-идентификатор инструмента.
  // ticker	string	Тикер инструмента.
  // class_code	string	Класс-код инструмента.
  // isin	string	Isin-идентификатор инструмента.
  // instrument_type	string	Тип инструмента.
  // otc_flag	bool	Признак внебиржевой ценной бумаги.
  // api_trade_available_flag	bool	Параметр указывает на возможность торговать инструментом через API.
  // instrument_kind	InstrumentType	Тип инструмента.
}

/**
 * Массив инструментов для редактирования списка избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesrequestinstrument
 */
export interface EditFavoritesRequestInstrument {
  // figi	string	Figi-идентификатор инструмента.
}

/**
 * Краткая информация об инструменте
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentshort
 */
export interface InstrumentShort {
  // isin	string	Isin инструмента.
  // figi	string	Figi инструмента.
  // ticker	string	Ticker инструмента.
  // class_code	string	ClassCode инструмента.
  // instrument_type	string	Тип инструмента.
  // name	string	Название инструмента.
  // uid	string	Уникальный идентификатор инструмента.
  // position_uid	string	Уникальный идентификатор позиции инструмента.
  // instrument_kind	InstrumentType	Тип инструмента.
  // api_trade_available_flag	bool	Параметр указывает на возможность торговать инструментом через API.
  // for_iis_flag	bool	Признак доступности для ИИС.
  // first_1min_candle_date	google.protobuf.Timestamp	Дата первой минутной свечи.
  // first_1day_candle_date	google.protobuf.Timestamp	Дата первой дневной свечи.
  // for_qual_investor_flag	bool	Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов.
  // weekend_flag	bool	Флаг отображающий доступность торговли инструментом по выходным
  // blocked_tca_flag	bool	Флаг заблокированного ТКС
}

/**
 * Запрос расписания торгов
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedulesrequest
 */
export interface TradingSchedulesRequest {
  // exchange	string	Наименование биржи или расчетного календаря.
  // Если не передаётся, возвращается информация по всем доступным торговым площадкам.
  // from	google.protobuf.Timestamp	Начало периода по часовому поясу UTC.
  // to	google.protobuf.Timestamp	Окончание периода по часовому поясу UTC.
}

/**
 * Список торговых площадок
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedulesresponse
 */
export interface TradingSchedulesResponse {
  // exchanges	Массив объектов TradingSchedule	Список торговых площадок и режимов торгов.
}

/**
 * Запрос получения инструмента по идентификатору
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentrequest
 */
export interface InstrumentRequest {
  // id_type	InstrumentIdType	Тип идентификатора инструмента. Возможные значения: figi, ticker. Подробнее об идентификации инструментов: Идентификация инструментов
  // class_code	string	Идентификатор class_code. Обязателен при id_type = ticker.
  // id	string	Идентификатор запрашиваемого инструмента.
}

/**
 * Данные по инструменту
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentresponse
 */
export interface InstrumentResponse {
  // instrument	Instrument	Основная информация об инструменте.
}

/**
 * Информация об облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#bondresponse
 */
export interface BondResponse {
  // instrument	Bond	Информация об облигации.
}

/**
 * Запрос получения инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentsrequest
 */
export interface InstrumentsRequest {
  // instrument_status	InstrumentStatus	Статус запрашиваемых инструментов. Возможные значения: InstrumentStatus
}

/**
 * Параметры фильтрации опционов
 * @see https://tinkoff.github.io/investAPI/instruments/#filteroptionsrequest
 */
export interface FilterOptionsRequest {
  // basic_asset_uid	string	Идентификатор базового актива опциона. Обязательный параметр.
  // basic_asset_position_uid	string	Идентификатор позиции базового актива опциона
}

/**
 * Список облигаций
 * @see https://tinkoff.github.io/investAPI/instruments/#bondsresponse
 */
export interface BondsResponse {
  // instruments	Массив объектов Bond	Массив облигаций.
}

/**
 * Запрос купонов по облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getbondcouponsrequest
 */
export interface GetBondCouponsRequest {
  // figi	string	Figi-идентификатор инструмента.
  // from	google.protobuf.Timestamp	Начало запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона)
  // to	google.protobuf.Timestamp	Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона)
}

/**
 * Купоны по облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getbondcouponsresponse
 */
export interface GetBondCouponsResponse {
  // events	Массив объектов Coupon
}

/**
 * Данные по валюте
 * @see https://tinkoff.github.io/investAPI/instruments/#currencyresponse
 */
export interface CurrencyResponse {
  // instrument	Currency	Информация о валюте.
}

/**
 * Данные по валютам
 * @see https://tinkoff.github.io/investAPI/instruments/#currenciesresponse
 */
export interface CurrenciesResponse {
  // instruments	Массив объектов Currency	Массив валют.
}

/**
 * Данные по фонду
 * @see https://tinkoff.github.io/investAPI/instruments/#etfresponse
 */
export interface EtfResponse {
  // instrument	Etf	Информация о фонде.
}

/**
 * Данные по фондам
 * @see https://tinkoff.github.io/investAPI/instruments/#etfsresponse
 */
export interface EtfsResponse {
  // instruments	Массив объектов Etf	Массив фондов.
}

/**
 * Данные по фьючерсу
 * @see https://tinkoff.github.io/investAPI/instruments/#futureresponse
 */
export interface FutureResponse {
  // instrument	Future	Информация о фьючерсу.
}

/**
 * Данные по фьючерсам
 * @see https://tinkoff.github.io/investAPI/instruments/#futuresresponse
 */
export interface FuturesResponse {
  // instruments	Массив объектов Future	Массив фьючерсов.
}

/**
 * Данные по опциону
 * @see https://tinkoff.github.io/investAPI/instruments/#optionresponse
 */
export interface OptionResponse {
  // instrument	Option	Информация по опциону.
}

/**
 * Данные по опционам
 * @see https://tinkoff.github.io/investAPI/instruments/#optionsresponse
 */
export interface OptionsResponse {
  // instruments	Массив объектов Option	Массив данных по опциону.
}

/**
 * Данные по акции
 * @see https://tinkoff.github.io/investAPI/instruments/#shareresponse
 */
export interface ShareResponse {
  // instrument	Share	Информация об акции.
}

/**
 * Данные по акциям
 * @see https://tinkoff.github.io/investAPI/instruments/#sharesresponse
 */
export interface SharesResponse {
  // instruments	Массив объектов Share	Массив акций.
}

/**
 * Запрос НКД по облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getaccruedinterestsrequest
 */
export interface GetAccruedInterestsRequest {
  // figi	string	Figi-идентификатор инструмента.
  // from	google.protobuf.Timestamp	Начало запрашиваемого периода в часовом поясе UTC.
  // to	google.protobuf.Timestamp	Окончание запрашиваемого периода в часовом поясе UTC.
}

/**
 * НКД облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getaccruedinterestsresponse
 */
export interface GetAccruedInterestsResponse {
  // accrued_interests	Массив объектов AccruedInterest	Массив операций начисления купонов.
}

/**
 * Запрос информации о фьючерсе
 * @see https://tinkoff.github.io/investAPI/instruments/#getfuturesmarginrequest
 */
export interface GetFuturesMarginRequest {
  // figi	string	Идентификатор инструмента.
}

/**
 * Данные по фьючерсу
 * @see https://tinkoff.github.io/investAPI/instruments/#getfuturesmarginresponse
 */
export interface GetFuturesMarginResponse {
  // initial_margin_on_buy	MoneyValue	Гарантийное обеспечение при покупке.
  // initial_margin_on_sell	MoneyValue	Гарантийное обеспечение при продаже.
  // min_price_increment	Quotation	Шаг цены.
  // min_price_increment_amount	Quotation	Стоимость шага цены.
}

/**
 * Запрос дивидендов
 * @see https://tinkoff.github.io/investAPI/instruments/#getdividendsrequest
 */
export interface GetDividendsRequest {
  // figi	string	Figi-идентификатор инструмента.
  // from	google.protobuf.Timestamp	Начало запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру record_date (дата фиксации реестра).
  // to	google.protobuf.Timestamp	Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру record_date (дата фиксации реестра).
}

/**
 * Дивиденды
 * @see https://tinkoff.github.io/investAPI/instruments/#getdividendsresponse
 */
export interface GetDividendsResponse {
  // dividends	Массив объектов Dividend
}

/**
 * Запрос актива по идентификатору
 * @see https://tinkoff.github.io/investAPI/instruments/#assetrequest
 */
export interface AssetRequest {
  // id	string	uid-идентификатор актива.
}

/**
 * Данные по активу
 * @see https://tinkoff.github.io/investAPI/instruments/#assetresponse
 */
export interface AssetResponse {
  // asset	AssetFull	Актив.
}

/**
 * Запрос списка активов
 * @see https://tinkoff.github.io/investAPI/instruments/#assetsrequest
 */
export interface AssetsRequest {
  // instrument_type	InstrumentType
}

/**
 * Список активов
 * @see https://tinkoff.github.io/investAPI/instruments/#assetsresponse
 */
export interface AssetsResponse {
  // assets	Массив объектов Asset	Активы.
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
  // favorite_instruments	Массив объектов FavoriteInstrument	Массив инструментов
}

/**
 * Запрос редактирования списка избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesrequest
 */
export interface EditFavoritesRequest {
  // instruments	Массив объектов EditFavoritesRequestInstrument	Массив инструментов.
  // action_type	EditFavoritesActionType	Тип действия со списком.
}

/**
 * Результат редактирования списка избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesresponse
 */
export interface EditFavoritesResponse {
  // favorite_instruments	Массив объектов FavoriteInstrument	Массив инструментов
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
  // countries	Массив объектов CountryResponse	Массив стран.
}

/**
 * Данные о стране
 * @see https://tinkoff.github.io/investAPI/instruments/#countryresponse
 */
export interface CountryResponse {
  // alfa_two	string	Двухбуквенный код страны.
  // alfa_three	string	Трёхбуквенный код страны.
  // name	string	Наименование страны.
  // name_brief	string	Краткое наименование страны.
}

/**
 * Запрос на поиск инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#findinstrumentrequest
 */
export interface FindInstrumentRequest {
  // query	string	Строка поиска.
  // instrument_kind	InstrumentType	Фильтр по типу инструмента.
  // api_trade_available_flag	bool	Фильтр для отображения только торговых инструментов.
}

/**
 * Результат поиска инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#findinstrumentresponse
 */
export interface FindInstrumentResponse {
  // instruments	Массив объектов InstrumentShort	Массив инструментов, удовлетворяющих условиям поиска.
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
  // id	string	Uid-идентификатор бренда.
}

/**
 * Список брендов
 * @see https://tinkoff.github.io/investAPI/instruments/#getbrandsresponse
 */
export interface GetBrandRequest {
  // brands	Массив объектов Brand	Массив брендов.
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
