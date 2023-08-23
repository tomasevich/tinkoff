import { Common, MoneyValue, Quotation, SecurityTradingStatus } from './';
/** Тип инструмента */
export declare enum InstrumentType {
    /** Тип инструмента не определн */
    INSTRUMENT_TYPE_UNSPECIFIED = 0,
    /** Облигация */
    INSTRUMENT_TYPE_BOND = 1,
    /** Акция */
    INSTRUMENT_TYPE_SHARE = 2,
    /** Валюта */
    INSTRUMENT_TYPE_CURRENCY = 3,
    /** Инвестиционный фонд */
    INSTRUMENT_TYPE_ETF = 4,
    /** Фьючерс */
    INSTRUMENT_TYPE_FUTURES = 5,
    /** Структурная нота */
    INSTRUMENT_TYPE_SP = 6,
    /** Опцион */
    INSTRUMENT_TYPE_OPTION = 7,
    /** @todo Нет описания */
    INSTRUMENT_TYPE_CLEARING_CERTIFICATE = 8
}
/**
 * Тип купонов
 * @see https://tinkoff.github.io/investAPI/instruments/#coupontype
 */
export declare enum CouponType {
    /** Неопределенное значение */
    COUPON_TYPE_UNSPECIFIED = 0,
    /** Постоянный */
    COUPON_TYPE_CONSTANT = 1,
    /** Плавающий */
    COUPON_TYPE_FLOATING = 2,
    /** Дисконт */
    COUPON_TYPE_DISCOUNT = 3,
    /** Ипотечный */
    COUPON_TYPE_MORTGAGE = 4,
    /** Фиксированный */
    COUPON_TYPE_FIX = 5,
    /** Переменный */
    COUPON_TYPE_VARIABLE = 6,
    /** Прочее */
    COUPON_TYPE_OTHER = 7
}
/**
 * Тип опциона по направлению сделки
 * @see https://tinkoff.github.io/investAPI/instruments/#optiondirection
 */
export declare enum OptionDirection {
    /** Тип не определен */
    OPTION_DIRECTION_UNSPECIFIED = 0,
    /** Опцион на продажу */
    OPTION_DIRECTION_PUT = 1,
    /** Опцион на покупку */
    OPTION_DIRECTION_CALL = 2
}
/**
 * Тип расчетов по опциону
 * @see https://tinkoff.github.io/investAPI/instruments/#optionpaymenttype
 */
export declare enum OptionPaymentType {
    /** Тип не определен */
    OPTION_PAYMENT_TYPE_UNSPECIFIED = 0,
    /** Опционы с использованием премии в расчетах */
    OPTION_PAYMENT_TYPE_PREMIUM = 1,
    /** Маржируемые опционы */
    OPTION_PAYMENT_TYPE_MARGINAL = 2
}
/**
 * Тип опциона по стилю
 * @see https://tinkoff.github.io/investAPI/instruments/#optionstyle
 */
export declare enum OptionStyle {
    /** Тип не определен */
    OPTION_STYLE_UNSPECIFIED = 0,
    /** Американский опцион */
    OPTION_STYLE_AMERICAN = 1,
    /** Европейский опцион */
    OPTION_STYLE_EUROPEAN = 2
}
/**
 * Тип опциона по способу исполнения
 * @see https://tinkoff.github.io/investAPI/instruments/#optionsettlementtype
 */
export declare enum OptionSettlementType {
    /** Тип не определен */
    OPTION_EXECUTION_TYPE_UNSPECIFIED = 0,
    /** Поставочный тип опциона */
    OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY = 1,
    /** Расчетный тип опциона */
    OPTION_EXECUTION_TYPE_CASH_SETTLEMENT = 2
}
/**
 * Тип идентификатора инструмента
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentidtype
 */
export declare enum InstrumentIdType {
    /** Значение не определено */
    INSTRUMENT_ID_UNSPECIFIED = 0,
    /** Figi */
    INSTRUMENT_ID_TYPE_FIGI = 1,
    /** Ticker */
    INSTRUMENT_ID_TYPE_TICKER = 2,
    /** Уникальный идентификатор */
    INSTRUMENT_ID_TYPE_UID = 3,
    /** Идентификатор позиции */
    INSTRUMENT_ID_TYPE_POSITION_UID = 4
}
/**
 * Статус запрашиваемых инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentstatus
 */
export declare enum InstrumentStatus {
    /** Значение не определено */
    INSTRUMENT_STATUS_UNSPECIFIED = 0,
    /**
     * Базовый список инструментов (по умолчанию)
     * @description Инструменты доступные для торговли через TINKOFF INVEST API. Cейчас списки бумаг, доступных из api и других интерфейсах совпадают (за исключением внебиржевых бумаг), но в будущем возможны ситуации, когда списки инструментов будут отличатьс
     */
    INSTRUMENT_STATUS_BASE = 1,
    /** Список всех инструментов */
    INSTRUMENT_STATUS_ALL = 2
}
/**
 * Тип акций
 * @see https://tinkoff.github.io/investAPI/instruments/#sharetype
 */
export declare enum ShareType {
    /** Значение не определено */
    SHARE_TYPE_UNSPECIFIED = 0,
    /** Обыкновенная */
    SHARE_TYPE_COMMON = 1,
    /** Привилегированная */
    SHARE_TYPE_PREFERRED = 2,
    /** Американские депозитарные расписки */
    SHARE_TYPE_ADR = 3,
    /** Глобальные депозитарные расписки */
    SHARE_TYPE_GDR = 4,
    /** Товарищество с ограниченной ответственностью */
    SHARE_TYPE_MLP = 5,
    /** Акции из реестра Нью-Йорка */
    SHARE_TYPE_NY_REG_SHRS = 6,
    /** Закрытый инвестиционный фонд */
    SHARE_TYPE_CLOSED_END_FUND = 7,
    /** Траст недвижимости */
    SHARE_TYPE_REIT = 8
}
/**
 * Тип актива
 * @see https://tinkoff.github.io/investAPI/instruments/#assettype
 */
export declare enum AssetType {
    /** Тип не определён */
    ASSET_TYPE_UNSPECIFIED = 0,
    /** Валюта */
    ASSET_TYPE_CURRENCY = 1,
    /** Товар */
    ASSET_TYPE_COMMODITY = 2,
    /** Индекс */
    ASSET_TYPE_INDEX = 3,
    /** Ценная бумага */
    ASSET_TYPE_SECURITY = 4
}
/**
 * Тип структурной ноты
 * @see https://tinkoff.github.io/investAPI/instruments/#structuredproducttype
 */
export declare enum StructuredProductType {
    /** Тип не определён */
    SP_TYPE_UNSPECIFIED = 0,
    /** Поставочный */
    SP_TYPE_DELIVERABLE = 1,
    /** Беспоставочный */
    SP_TYPE_NON_DELIVERABLE = 2
}
/**
 * Тип действия со списком избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesactiontype
 */
export declare enum EditFavoritesActionType {
    /** Тип не определён */
    EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED = 0,
    /** Добавить в список */
    EDIT_FAVORITES_ACTION_TYPE_ADD = 1,
    /** Удалить из списка */
    EDIT_FAVORITES_ACTION_TYPE_DEL = 2
}
/**
 * Реальная площадка исполнения расчётов
 * @see https://tinkoff.github.io/investAPI/instruments/#realexchange
 */
export declare enum RealExchange {
    /** Тип не определён */
    REAL_EXCHANGE_UNSPECIFIED = 0,
    /** Московская биржа */
    REAL_EXCHANGE_MOEX = 1,
    /** Санкт-Петербургская биржа */
    REAL_EXCHANGE_RTS = 2,
    /** Внебиржевой инструмент */
    REAL_EXCHANGE_OTC = 3
}
/**
 * Уровень риска облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#risklevel
 */
export declare enum RiskLevel {
    /** Высокий уровень риска */
    RISK_LEVEL_HIGH = 0,
    /** Средний уровень риска */
    RISK_LEVEL_MODERATE = 1,
    /** Низкий уровень риска */
    RISK_LEVEL_LOW = 2
}
/**
 * Данные по торговой площадке
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedule
 */
export interface TradingSchedule {
    /** Наименование торговой площадки */
    exchange: string;
    /** Массив с торговыми и неторговыми днями */
    days: TradingDay[];
}
/**
 * Информация о времени торгов
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingday
 */
export interface TradingDay {
    /**
     * Дата
     * @remarks `google.protobuf.Timestamp`
     */
    date: string;
    /** Признак торгового дня на бирже */
    isTradingDay: boolean;
    /**
     * Время начала торгов по часовому поясу UTC
     * @remarks `google.protobuf.Timestamp`
     */
    startTime?: string;
    /**
     * Время окончания торгов по часовому поясу UTC
     * @remarks `google.protobuf.Timestamp`
     */
    endTime?: string;
    /**
     * Время начала аукциона открытия в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    openingAuctionStartTime?: string;
    /**
     * Время окончания аукциона закрытия в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    closingAuctionEndTime?: string;
    /**
     * Время начала аукциона открытия вечерней сессии в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    eveningOpeningAuctionStartTime?: string;
    /**
     * Время начала вечерней сессии в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    eveningStartTime?: string;
    /**
     * Время окончания вечерней сессии в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    eveningEndTime?: string;
    /**
     * Время начала основного клиринга в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    clearingStartTime?: string;
    /**
     * Время окончания основного клиринга в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    clearingEndTime?: string;
    /**
     * Время начала премаркета в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    premarketStartTime?: string;
    /**
     * Время окончания премаркета в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    premarketEndTime?: string;
    /**
     * Время начала аукциона закрытия в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    closingAuctionStartTime?: string;
    /**
     * Время окончания аукциона открытия в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    openingAuctionEndTime?: string;
}
/**
 * Объект передачи информации о купоне облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#coupon
 */
export interface Coupon {
    /** Figi-идентификатор инструмента */
    figi: string;
    /**
     * Дата выплаты купона
     * @remarks `google.protobuf.Timestamp`
     */
    couponDate: string;
    /**
     * Номер купона
     * @remarks `int64`
     */
    couponNumber: string;
    /** Выплата на одну облигацию */
    payOneBond: MoneyValue;
    /** Тип купона */
    couponType: CouponType;
    /**
     * Начало купонного периода
     * @remarks `google.protobuf.Timestamp`
     */
    couponStartDate: string;
    /**
     * Окончание купонного периода
     * @remarks `google.protobuf.Timestamp`
     */
    couponEndDate: string;
    /**
     * Купонный период в днях
     * @remarks `int32`
     */
    couponPeriod: number;
    /**
     * Дата фиксации реестра для выплаты купона
     * @remarks `google.protobuf.Timestamp`
     */
    fixDate?: string;
}
/**
 * Опцион
 * @see https://tinkoff.github.io/investAPI/instruments/#option
 */
export interface Option {
    /** Уникальный идентификатор инструмента */
    uid: string;
    /** Уникальный идентификатор позиции */
    positionUid: string;
    /** Тикер инструмента */
    ticker: string;
    /** Класс-код */
    classCode: string;
    /** Уникальный идентификатор позиции основного инструмента */
    basicAssetPositionUid: string;
    /** Текущий режим торгов инструмента */
    tradingStatus: SecurityTradingStatus;
    /**
     * Реальная площадка исполнения расчётов (биржа)
     * @description Допустимые значения: [REAL_EXCHANGE_MOEX, REAL_EXCHANGE_RTS]
     */
    realExchange: RealExchange;
    /** Направление опциона */
    direction: OptionDirection;
    /** Тип расчетов по опциону */
    paymentType: OptionPaymentType;
    /** Стиль опциона */
    style: OptionStyle;
    /** Способ исполнения опциона */
    settlementType: OptionSettlementType;
    /** Название инструмента */
    name: string;
    /** Валюта */
    currency: string;
    /** Валюта, в которой оценивается контракт */
    settlementCurrency: string;
    /** Тип актива */
    assetType: string;
    /** Основной актив */
    basicAsset: string;
    /** Tорговая площадка (секция биржи) */
    exchange: string;
    /** Код страны рисков */
    countryOfRisk: string;
    /** Наименование страны рисков */
    countryOfRiskName: string;
    /** Сектор экономики */
    sector: string;
    /**
     * Количество бумаг в лоте
     * @remarks `int32`
     */
    lot: number;
    /** Размер основного актива */
    basicAssetSize: Quotation;
    /**
     * Коэффициент ставки риска длинной позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    klong: Quotation;
    /**
     * Коэффициент ставки риска короткой позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    kshort: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг */
    dlong: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт */
    dshort: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг */
    dlongMin: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт */
    dshortMin: Quotation;
    /** Минимальный шаг цены */
    minPriceIncrement: Quotation;
    /** Цена страйка */
    strikePrice: MoneyValue;
    /**
     * Дата истечения срока в формате UTC
     * @remarks `google.protobuf.Timestamp`
     */
    expirationDate: string;
    /**
     * Дата начала обращения контракта в формате UTC
     * @remarks `google.protobuf.Timestamp`
     */
    firstTradeDate: string;
    /**
     * Дата исполнения в формате UTC
     * @remarks `google.protobuf.Timestamp`
     */
    lastTradeDate: string;
    /**
     * Дата первой минутной свечи в формате UTC
     * @remarks `google.protobuf.Timestamp`
     */
    first1minCandleDate: string;
    /**
     * Дата первой дневной свечи в формате UTC
     * @remarks `google.protobuf.Timestamp`
     */
    first1dayCandleDate: string;
    /** Признак доступности для операций шорт */
    shortEnabledFlag: boolean;
    /** Возможность покупки/продажи на ИИС */
    forIisFlag: boolean;
    /** Признак внебиржевой ценной бумаги */
    otcFlag: boolean;
    /** Признак доступности для покупки */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи */
    sellAvailableFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
    /** Параметр указывает на возможность торговать инструментом через API */
    apiTradeAvailableFlag: boolean;
}
/**
 * Объект передачи информации об облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#bond
 */
export interface Bond {
    /** Figi-идентификатор инструмента */
    figi: string;
    /** Тикер инструмента */
    ticker: string;
    /** Класс-код (секция торгов) */
    classCode: string;
    /** Isin-идентификатор инструмента */
    isin: string;
    /**
     * Лотность инструмента
     * @description Возможно совершение операций только на количества ценной бумаги, кратные параметру lot
     * @remarks `int32`
     */
    lot: number;
    /** Валюта расчётов */
    currency: string;
    /**
     * Коэффициент ставки риска длинной позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    klong?: Quotation;
    /**
     * Коэффициент ставки риска короткой позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    kshort?: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг */
    dlong?: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт */
    dshort?: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг */
    dlongMin?: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт */
    dshortMin?: Quotation;
    /** Признак доступности для операций в шорт */
    shortEnabledFlag: boolean;
    /** Название инструмента */
    name: string;
    /** Tорговая площадка (секция биржи) */
    exchange: string;
    /**
     * Количество выплат по купонам в год
     * @remarks `int32`
     */
    couponQuantityPerYear: number;
    /**
     * Дата погашения облигации в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    maturityDate: string;
    /** Номинал облигации */
    nominal: MoneyValue;
    /** Первоначальный номинал облигации */
    initialNominal: MoneyValue;
    /**
     * Дата выпуска облигации в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    stateRegDate?: string;
    /**
     * Дата размещения в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    placementDate: string;
    /** Цена размещения */
    placementPrice: MoneyValue;
    /** Значение НКД (накопленного купонного дохода) на дату */
    aciValue: MoneyValue;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRiskName: string;
    /** Сектор экономики */
    sector: string;
    /**
     * Форма выпуска. Возможные значения:
     * `documentary` — документарная;
     * `nonDocumentary` — бездокументарная.
     */
    issueKind: 'documentary' | 'nonDocumentary';
    /**
     * Размер выпуска
     * @remarks `int64`
     */
    issueSize: string;
    /**
     * Плановый размер выпуска
     * @remarks `int64`
     */
    issueSizePlan: string;
    /** Текущий режим торгов инструмента */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги */
    otcFlag: boolean;
    /** Признак доступности для покупки */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи */
    sellAvailableFlag: boolean;
    /** Признак облигации с плавающим купоном */
    floatingCouponFlag: boolean;
    /** Признак бессрочной облигации */
    perpetualFlag: boolean;
    /** Признак облигации с амортизацией долга */
    amortizationFlag: boolean;
    /** Шаг цены */
    minPriceIncrement?: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента */
    uid: string;
    /** Реальная площадка исполнения расчётов. (биржа) */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента */
    positionUid: string;
    /** Признак доступности для ИИС */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
    /** Признак субординированной облигации */
    subordinatedFlag: boolean;
    /** Флаг достаточной ликвидности */
    liquidityFlag: boolean;
    /**
     * Дата первой минутной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1minCandleDate?: string;
    /**
     * Дата первой дневной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1dayCandleDate?: string;
    /** Уровень риска */
    riskLevel: RiskLevel;
}
/**
 * Объект передачи информации о валюте
 * @see https://tinkoff.github.io/investAPI/instruments/#currency
 */
export interface Currency {
    /** Figi-идентификатор инструмента */
    figi: string;
    /** Тикер инструмента */
    ticker: string;
    /** Класс-код (секция торгов) */
    classCode: string;
    /** Isin-идентификатор инструмента */
    isin: string;
    /**
     * Лотность инструмента
     * @description Возможно совершение операций только на количества ценной бумаги, кратные параметру lot
     * @remarks `int32`
     */
    lot: number;
    /** Валюта расчётов */
    currency: string;
    /**
     * Коэффициент ставки риска длинной позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    klong: Quotation;
    /**
     * Коэффициент ставки риска короткой позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    kshort: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг */
    dlong: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт */
    dshort: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг */
    dlongMin: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт */
    dshortMin: Quotation;
    /** Признак доступности для операций в шорт */
    shortEnabledFlag: boolean;
    /** Название инструмента */
    name: string;
    /** Tорговая площадка (секция биржи) */
    exchange: string;
    /** Номинал */
    nominal: MoneyValue;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRiskName: string;
    /** Текущий режим торгов инструмента */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги */
    otcFlag: boolean;
    /** Признак доступности для покупки */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи */
    sellAvailableFlag: boolean;
    /** Строковый ISO-код валюты */
    isoCurrencyName: string;
    /** Шаг цены */
    minPriceIncrement: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента */
    uid: string;
    /** Реальная площадка исполнения расчётов (биржа) */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента */
    positionUid: string;
    /** Признак доступности для ИИС */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
    /**
     * Дата первой минутной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1minCandleDate: string;
    /**
     * Дата первой дневной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1dayCandleDate: string;
}
/**
 * Объект передачи информации об инвестиционном фонде
 * @see https://tinkoff.github.io/investAPI/instruments/#etf
 */
export interface Etf {
    /** Figi-идентификатор инструмента */
    figi: string;
    /** Тикер инструмента */
    ticker: string;
    /** Класс-код (секция торгов) */
    classCode: string;
    /** Isin-идентификатор инструмента */
    isin: string;
    /**
     * Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot
     * @remarks `int32`
     */
    lot: number;
    /** Валюта расчётов */
    currency: string;
    /**
     * Коэффициент ставки риска длинной позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    klong: Quotation;
    /**
     * Коэффициент ставки риска короткой позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    kshort: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг */
    dlong: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт */
    dshort: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг */
    dlongMin: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт */
    dshortMin: Quotation;
    /** Признак доступности для операций в шорт */
    shortEnabledFlag: boolean;
    /** Название инструмента */
    name: string;
    /** Tорговая площадка (секция биржи) */
    exchange: string;
    /** Размер фиксированной комиссии фонда */
    fixedCommission: Quotation;
    /**
     * Возможные значения:
     * `equity` — акции;
     * `fixedIncome` — облигации;
     * `mixedAllocation` — смешанный;
     * `moneyMarket` — денежный рынок;
     * `realEstate` — недвижимость;
     * `commodity` — товары;
     * `specialty` — специальный;
     * `privateEquity` — private equity;
     * `alternativeInvestment` — альтернативные инвестиции.
     */
    focusType: 'equity' | 'fixedIncome' | 'mixedAllocation' | 'moneyMarket' | 'realEstate' | 'commodity' | 'specialty' | 'privateEquity' | 'alternativeInvestment';
    /**
     * Дата выпуска в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    releasedDate: string;
    /** Количество акций фонда в обращении */
    numShares: Quotation;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRiskName: string;
    /** Сектор экономики */
    sector: string;
    /** Частота ребалансировки */
    rebalancingFreq: string;
    /** Текущий режим торгов инструмента */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги */
    otcFlag: boolean;
    /** Признак доступности для покупки */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи */
    sellAvailableFlag: boolean;
    /** Шаг цены */
    minPriceIncrement: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента */
    uid: string;
    /** Реальная площадка исполнения расчётов (биржа) */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента */
    positionUid: string;
    /** Признак доступности для ИИС */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
    /** Флаг достаточной ликвидности */
    liquidityFlag: boolean;
    /**
     * Дата первой минутной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1minCandleDate: string;
    /**
     * Дата первой дневной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1dayCandleDate: string;
}
/**
 * Объект передачи информации о фьючерсе
 * @see https://tinkoff.github.io/investAPI/instruments/#future
 */
export interface Future {
    /** Figi-идентификатор инструмента */
    figi: string;
    /** Тикер инструмента */
    ticker: string;
    /** Класс-код (секция торгов) */
    classCode: string;
    /**
     * Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot
     * @remarks `int32`
     */
    lot: number;
    /** Валюта расчётов */
    currency: string;
    /**
     * Коэффициент ставки риска длинной позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    klong: Quotation;
    /**
     * Коэффициент ставки риска короткой позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    kshort: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг */
    dlong: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт */
    dshort: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг */
    dlongMin: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт */
    dshortMin: Quotation;
    /** Признак доступности для операций шорт */
    shortEnabledFlag: boolean;
    /** Название инструмента */
    name: string;
    /** Tорговая площадка (секция биржи) */
    exchange: string;
    /**
     * Дата начала обращения контракта в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    firstTradeDate: string;
    /**
     * Дата в часовом поясе UTC, до которой возможно проведение операций с фьючерсом.
     * @remarks `google.protobuf.Timestamp`
     */
    lastTradeDate: string;
    /**
     * Тип фьючерса. Возможные значения:
     * `physicalDelivery` — физические поставки;
     * `cashSettlement` — денежный эквивалент.
     */
    futuresType: 'physicalDelivery' | 'cashSettlement';
    /**
     * Тип актива. Возможные значения:
     * `commodity` — товар;
     * `currency` — валюта;
     * `security` — ценная бумага;
     * `index` — индекс.
     */
    assetType: 'commodity' | 'currency' | 'security' | 'index';
    /** Основной актив */
    basicAsset: string;
    /** Размер основного актива */
    basicAssetSize: Quotation;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRiskName: string;
    /** Сектор экономики */
    sector: string;
    /**
     * Дата истечения срока в часов поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    expirationDate: string;
    /** Текущий режим торгов инструмента */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги */
    otcFlag: boolean;
    /** Признак доступности для покупки */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи */
    sellAvailableFlag: boolean;
    /** Шаг цены */
    minPriceIncrement: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента */
    uid: string;
    /** Реальная площадка исполнения расчётов (биржа) */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента */
    positionUid: string;
    /** Уникальный идентификатор позиции основного инструмента */
    basicAssetPositionUid: string;
    /** Признак доступности для ИИС */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
    /**
     * Дата первой минутной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1minCandleDate: string;
    /**
     * Дата первой дневной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1dayCandleDate: string;
}
/**
 * Объект передачи информации об акции
 * @see https://tinkoff.github.io/investAPI/instruments/#share
 */
export interface Share {
    /** Figi-идентификатор инструмента */
    figi: string;
    /** Тикер инструмента */
    ticker: string;
    /** Класс-код (секция торгов) */
    classCode: string;
    /** Isin-идентификатор инструмента */
    isin: string;
    /**
     * Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру lot
     * @remarks `int32`
     */
    lot: number;
    /** Валюта расчётов */
    currency: string;
    /**
     * Коэффициент ставки риска длинной позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    klong: Quotation;
    /**
     * Коэффициент ставки риска короткой позиции по клиенту
     * @description 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР)
     */
    kshort: Quotation;
    /** Ставка риска начальной маржи для КСУР лонг */
    dlong: Quotation;
    /** Ставка риска начальной маржи для КСУР шорт */
    dshort: Quotation;
    /** Ставка риска начальной маржи для КПУР лонг */
    dlongMin: Quotation;
    /** Ставка риска начальной маржи для КПУР шорт */
    dshortMin: Quotation;
    /** Признак доступности для операций в шорт */
    shortEnabledFlag: boolean;
    /** Название инструмента */
    name: string;
    /** Tорговая площадка (секция биржи) */
    exchange: string;
    /**
     * Дата IPO акции в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    ipoDate: string;
    /**
     * Размер выпуска
     * @remarks `int64`
     */
    issueSize: string;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRiskName: string;
    /** Сектор экономики */
    sector: string;
    /**
     * Плановый размер выпуска
     * @remarks `int64`
     */
    issueSizePlan: string;
    /** Номинал */
    nominal: MoneyValue;
    /** Текущий режим торгов инструмента */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги */
    otcFlag: boolean;
    /** Признак доступности для покупки */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи */
    sellAvailableFlag: boolean;
    /** Признак наличия дивидендной доходности */
    divYieldFlag: boolean;
    /** Тип акции */
    shareType: ShareType;
    /** Шаг цены */
    minPriceIncrement: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента */
    uid: string;
    /** Реальная площадка исполнения расчётов (биржа) */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента */
    positionUid: string;
    /** Признак доступности для ИИС */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
    /** Флаг достаточной ликвидности */
    liquidityFlag: boolean;
    /**
     * Дата первой минутной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1minCandleDate: string;
    /**
     * Дата первой дневной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1dayCandleDate: string;
}
/**
 * Бренд
 * @see https://tinkoff.github.io/investAPI/instruments/#brand
 */
export interface Brand {
    /** uid идентификатор бренда */
    uid: string;
    /** Наименование бренда */
    name: string;
    /** Описание */
    description: string;
    /** Информация о бренде */
    info: string;
    /** Компания */
    company: string;
    /** Сектор */
    sector: string;
    /** Код страны риска */
    countryOfRisk: string;
    /** Наименование страны риска */
    countryOfRiskName: string;
}
/**
 * Операция начисления купонов
 * @see https://tinkoff.github.io/investAPI/instruments/#accruedinterest
 */
export interface AccruedInterest {
    /**
     * Дата и время выплаты в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    date: string;
    /** Величина выплаты */
    value: Quotation;
    /** Величина выплаты в процентах от номинала */
    valuePercent: Quotation;
    /** Номинал облигации */
    nominal: Quotation;
}
/**
 * Объект передачи основной информации об инструменте
 * @see https://tinkoff.github.io/investAPI/instruments/#instrument
 */
export interface Instrument {
    /** Название инструмента */
    name: string;
    /** Tорговая площадка (секция биржи) */
    exchange: string;
    /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRisk: string;
    /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес */
    countryOfRiskName: string;
    /** Тип инструмента */
    instrumentType: string;
    /** Текущий режим торгов инструмента */
    tradingStatus: SecurityTradingStatus;
    /** Признак внебиржевой ценной бумаги */
    otcFlag: boolean;
    /** Признак доступности для покупки */
    buyAvailableFlag: boolean;
    /** Признак доступности для продажи */
    sellAvailableFlag: boolean;
    /** Шаг цены */
    minPriceIncrement: Quotation;
    /** Параметр указывает на возможность торговать инструментом через API */
    apiTradeAvailableFlag: boolean;
    /** Уникальный идентификатор инструмента */
    uid: string;
    /** Реальная площадка исполнения расчётов (биржа) */
    realExchange: RealExchange;
    /** Уникальный идентификатор позиции инструмента */
    positionUid: string;
    /** Признак доступности для ИИС */
    forIisFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
    /** Тип инструмента */
    instrumentKind: InstrumentType;
    /**
     * Дата первой минутной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1minCandleDate: string;
    /**
     * Дата первой дневной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1dayCandleDate: string;
}
/**
 * Информация о выплате
 * @see https://tinkoff.github.io/investAPI/instruments/#dividend
 */
export interface Dividend {
    /** Величина дивиденда на 1 ценную бумагу (включая валюту) */
    dividendNet: MoneyValue;
    /**
     * Дата фактических выплат в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    paymentDate: string;
    /**
     * Дата объявления дивидендов в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    declaredDate: string;
    /**
     * Последний день (включительно) покупки для получения выплаты в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    lastBuyDate: string;
    /** Тип выплаты. Возможные значения: Regular Cash – регулярные выплаты, Cancelled – выплата отменена, Daily Accrual – ежедневное начисление, Return of Capital – возврат капитала, прочие типы выплат */
    dividendType: string;
    /**
     * Дата фиксации реестра в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    recordDate: string;
    /** Регулярность выплаты. Возможные значения: Annual – ежегодная, Semi-Anl – каждые полгода, прочие типы выплат */
    regularity: string;
    /** Цена закрытия инструмента на момент exDividendDate */
    closePrice: MoneyValue;
    /** Величина доходности */
    yieldValue: Quotation;
    /**
     * Дата и время создания записи в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    createdAt: string;
}
/**
 * @see https://tinkoff.github.io/investAPI/instruments/#assetfull
 */
export interface AssetFull {
    /** Уникальный идентификатор актива */
    uid: string;
    /** Тип актива */
    type: AssetType;
    /** Наименование актива */
    name: string;
    /** Короткое наименование актива */
    nameBrief: string;
    /** Описание актива */
    description: string;
    /**
     * Дата и время удаления актива.
     * @remarks `google.protobuf.Timestamp`
     */
    deletedAt: string;
    /** Тестирование клиентов */
    requiredTests: string[];
    /** Валюта. Обязательно и заполняется только для type = "ASSET_TYPE_CURRENCY" */
    currency: AssetCurrency;
    /** Ценная бумага. Обязательно и заполняется только для type = "ASSET_TYPE_SECURITY" */
    security: AssetSecurity;
    /** Номер государственной регистрации */
    gosRegCode: string;
    /** Код CFI */
    cfi: string;
    /** Код НРД инструмента */
    codeNsd: string;
    /** Статус актива */
    status: string;
    /** Бренд */
    brand: Brand;
    /**
     * Дата и время последнего обновления записи.
     * @remarks `google.protobuf.Timestamp`
     */
    updatedAt: string;
    /** Код типа ц.б. по классификации Банка России */
    brCode: string;
    /** Наименование кода типа ц.б. по классификации Банка России */
    brCodeName: string;
    /** Массив идентификаторов инструментов */
    instruments: AssetInstrument[];
}
/**
 * Информация об активе
 * @see https://tinkoff.github.io/investAPI/instruments/#asset
 */
export interface Asset {
    /** Уникальный идентификатор актива */
    uid: string;
    /** Тип актива */
    type: AssetType;
    /** Наименование актива */
    name: string;
    /** Массив идентификаторов инструментов */
    instruments: AssetInstrument[];
}
/**
 * Валюта
 * @see https://tinkoff.github.io/investAPI/instruments/#assetcurrency
 */
export interface AssetCurrency {
    /** ISO-код валюты */
    baseCurrency: string;
}
/**
 * Ценная бумага
 * @see https://tinkoff.github.io/investAPI/instruments/#assetsecurity
 */
export interface AssetSecurity {
    /** ISIN-идентификатор ценной бумаги */
    isin: string;
    /** Тип ценной бумаги */
    type: string;
    /** Тип инструмента */
    instrumentKind: InstrumentType;
    /**
     * Акция
     * @description Заполняется только для акций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = share)
     */
    share: AssetShare;
    /**
     * Облигация
     * @description Заполняется только для облигаций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = bond)
     */
    bond: AssetBond;
    /**
     * Структурная нота
     * @description Заполняется только для структурных продуктов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = sp)
     */
    sp: AssetStructuredProduct;
    /**
     * Фонд
     * @description Заполняется только для фондов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = etf)
     */
    etf: AssetEtf;
    /**
     * Клиринговый сертификат участия
     * @description Заполняется только для клиринговых сертификатов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = clearingCertificate)
     */
    clearingCertificate: AssetClearingCertificate;
}
/**
 * Акция
 * @see https://tinkoff.github.io/investAPI/instruments/#assetshare
 */
export interface AssetShare {
    /** Тип акции */
    type: ShareType;
    /** Объем выпуска (шт.) */
    issueSize: Quotation;
    /** Номинал */
    nominal: Quotation;
    /** Валюта номинала */
    nominalCurrency: string;
    /** Индекс (Bloomberg) */
    primaryIndex: string;
    /** Ставка дивиденда (для привилегированных акций) */
    dividendRate: Quotation;
    /** Тип привилегированных акций */
    preferredShareType: string;
    /**
     * Дата IPO.
     * @remarks `google.protobuf.Timestamp`
     */
    ipoDate: string;
    /**
     * Дата регистрации.
     * @remarks `google.protobuf.Timestamp`
     */
    registryDate: string;
    /** Признак наличия дивидендной доходности */
    divYieldFlag: boolean;
    /** Форма выпуска ФИ */
    issueKind: string;
    /**
     * Дата размещения акции
     * @remarks `google.protobuf.Timestamp`
     */
    placementDate: string;
    /** ISIN базового актива */
    represIsin: string;
    /** Объявленное количество шт */
    issueSizePlan: Quotation;
    /** Количество акций в свободном обращении */
    totalFloat: Quotation;
}
/**
 * Облигация
 * @see https://tinkoff.github.io/investAPI/instruments/#assetbond
 */
export interface AssetBond {
    /** Текущий номинал */
    currentNominal: Quotation;
    /** Наименование заемщика */
    borrowName: string;
    /** Объем эмиссии облигации (стоимость) */
    issueSize: Quotation;
    /** Номинал облигации */
    nominal: Quotation;
    /** Валюта номинала */
    nominalCurrency: string;
    /** Форма выпуска облигации */
    issueKind: string;
    /** Форма дохода облигации */
    interestKind: string;
    /**
     * Количество выплат в год
     * @remarks `int32`
     */
    couponQuantityPerYear: number;
    /** Признак облигации с индексируемым номиналом */
    indexedNominalFlag: boolean;
    /** Признак субординированной облигации */
    subordinatedFlag: boolean;
    /** Признак обеспеченной облигации */
    collateralFlag: boolean;
    /** Признак показывает, что купоны облигации не облагаются налогом (для mass market) */
    taxFreeFlag: boolean;
    /** Признак облигации с амортизацией долга */
    amortizationFlag: boolean;
    /** Признак облигации с плавающим купоном */
    floatingCouponFlag: boolean;
    /** Признак бессрочной облигации */
    perpetualFlag: boolean;
    /**
     * Дата погашения облигации
     * @remarks `google.protobuf.Timestamp`
     */
    maturityDate: string;
    /** Описание и условия получения дополнительного дохода */
    returnCondition: string;
    /**
     * Дата выпуска облигации
     * @remarks `google.protobuf.Timestamp`
     */
    stateRegDate: string;
    /**
     * Дата размещения облигации
     * @remarks `google.protobuf.Timestamp`
     */
    placementDate: string;
    /** Цена размещения облигации */
    placementPrice: Quotation;
    /** Объявленное количество шт */
    issueSizePlan: Quotation;
}
/**
 * Структурная нота
 * @see https://tinkoff.github.io/investAPI/instruments/#assetstructuredproduct
 */
export interface AssetStructuredProduct {
    /** Наименование заемщика */
    borrowName: string;
    /** Номинал */
    nominal: Quotation;
    /** Валюта номинала */
    nominalCurrency: string;
    /** Тип структурной ноты */
    type: StructuredProductType;
    /** Стратегия портфеля */
    logicPortfolio: string;
    /** Тип базового актива */
    assetType: AssetType;
    /** Вид базового актива в зависимости от типа базового актива */
    basicAsset: string;
    /** Барьер сохранности (в процентах) */
    safetyBarrier: Quotation;
    /**
     * Дата погашения.
     * @remarks `google.protobuf.Timestamp`
     */
    maturityDate: string;
    /** Объявленное количество шт */
    issueSizePlan: Quotation;
    /** Объем размещения */
    issueSize: Quotation;
    /**
     * Дата размещения ноты
     * @remarks `google.protobuf.Timestamp`
     */
    placementDate: string;
    /** Форма выпуска */
    issueKind: string;
}
/**
 * Фонд
 * @see https://tinkoff.github.io/investAPI/instruments/#assetetf
 */
export interface AssetEtf {
    /** Суммарные расходы фонда (в %) */
    totalExpense: Quotation;
    /** Барьерная ставка доходности после которой фонд имеет право на perfomance fee (в процентах) */
    hurdleRate: Quotation;
    /** Комиссия за успешные результаты фонда (в процентах) */
    performanceFee: Quotation;
    /** Фиксированная комиссия за управление (в процентах) */
    fixedCommission: Quotation;
    /** Тип распределения доходов от выплат по бумагам */
    paymentType: string;
    /** Признак необходимости выхода фонда в плюс для получения комиссии */
    watermarkFlag: boolean;
    /** Премия (надбавка к цене) при покупке доли в фонде (в процентах) */
    buyPremium: Quotation;
    /** Ставка дисконта (вычет из цены) при продаже доли в фонде (в процентах) */
    sellDiscount: Quotation;
    /** Признак ребалансируемости портфеля фонда */
    rebalancingFlag: boolean;
    /** Периодичность ребалансировки */
    rebalancingFreq: string;
    /** Тип управления */
    managementType: string;
    /** Индекс, который реплицирует (старается копировать) фонд */
    primaryIndex: string;
    /** База ETF */
    focusType: string;
    /** Признак использования заемных активов (плечо) */
    leveragedFlag: boolean;
    /** Количество акций в обращении */
    numShare: Quotation;
    /** Признак обязательства по отчетности перед регулятором */
    ucitsFlag: boolean;
    /**
     * Дата выпуска
     * @remarks `google.protobuf.Timestamp`
     */
    releasedDate: string;
    /** Описание фонда */
    description: string;
    /** Описание индекса, за которым следует фонд */
    primaryIndexDescription: string;
    /** Основные компании, в которые вкладывается фонд */
    primaryIndexCompany: string;
    /** Срок восстановления индекса (после просадки) */
    indexRecoveryPeriod: Quotation;
    /** IVAV-код */
    inavCode: string;
    /** Признак наличия дивидендной доходности */
    divYieldFlag: boolean;
    /** Комиссия на покрытие расходов фонда (в процентах) */
    expenseCommission: Quotation;
    /** Ошибка следования за индексом (в процентах) */
    primaryIndexTrackingError: Quotation;
    /** Плановая ребалансировка портфеля */
    rebalancingPlan: string;
    /** Ставки налогообложения дивидендов и купонов */
    taxRate: string;
    /**
     * Даты ребалансировок
     * @remarks `google.protobuf.Timestamp`
     */
    rebalancingDates: string[];
    /** Форма выпуска */
    issueKind: string;
    /** Номинал */
    nominal: Quotation;
    /** Валюта номинала */
    nominalCurrency: string;
}
/**
 * Клиринговый сертификат участия
 * @see https://tinkoff.github.io/investAPI/instruments/#assetclearingcertificate
 */
export interface AssetClearingCertificate {
    /** Номинал */
    nominal: Quotation;
    /** Валюта номинала */
    nominalCurrency: string;
}
/**
 * Идентификаторы инструмента
 * @see https://tinkoff.github.io/investAPI/instruments/#assetinstrument
 */
export interface AssetInstrument {
    /** uid идентификатор инструмента */
    uid: string;
    /** figi идентификатор инструмента */
    figi: string;
    /** Тип инструмента */
    instrumentType: string;
    /** Тикер инструмента */
    ticker: string;
    /** Класс-код (секция торгов) */
    classCode: string;
    /** Массив связанных инструментов */
    links: InstrumentLink[];
    /** Тип инструмента */
    instrumentKind: InstrumentType;
    /** id позиции */
    positionUid: string;
}
/**
 * Связь с другим инструментом
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentlink
 */
export interface InstrumentLink {
    /** Тип связи */
    type: string;
    /** uid идентификатор связанного инструмента */
    instrumentUid: string;
}
/**
 * Массив избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#favoriteinstrument
 */
export interface FavoriteInstrument {
    /** Figi-идентификатор инструмента */
    figi: string;
    /** Тикер инструмента */
    ticker: string;
    /** Класс-код инструмента */
    classCode: string;
    /** Isin-идентификатор инструмента */
    isin: string;
    /** Тип инструмента */
    instrumentType: string;
    /** Признак внебиржевой ценной бумаги */
    otcFlag: boolean;
    /** Параметр указывает на возможность торговать инструментом через API */
    apiTradeAvailableFlag: boolean;
    /** Тип инструмента */
    instrumentKind: InstrumentType;
}
/**
 * Массив инструментов для редактирования списка избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesrequestinstrument
 */
export interface EditFavoritesRequestInstrument {
    /** Figi-идентификатор инструмента */
    figi: string;
}
/**
 * Краткая информация об инструменте
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentshort
 */
export interface InstrumentShort {
    /** Isin инструмента */
    isin: string;
    /** Figi инструмента */
    figi: string;
    /** Ticker инструмента */
    ticker: string;
    /** ClassCode инструмента */
    classCode: string;
    /** Тип инструмента */
    instrumentType: string;
    /** Название инструмента */
    name: string;
    /** Уникальный идентификатор инструмента */
    uid: string;
    /** Уникальный идентификатор позиции инструмента */
    positionUid: string;
    /** Тип инструмента */
    instrumentKind: InstrumentType;
    /** Параметр указывает на возможность торговать инструментом через API */
    apiTradeAvailableFlag: boolean;
    /** Признак доступности для ИИС */
    forIisFlag: boolean;
    /**
     * Дата первой минутной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1minCandleDate: string;
    /**
     * Дата первой дневной свечи.
     * @remarks `google.protobuf.Timestamp`
     */
    first1dayCandleDate: string;
    /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов */
    forQualInvestorFlag: boolean;
    /** Флаг отображающий доступность торговли инструментом по выходным */
    weekendFlag: boolean;
    /** Флаг заблокированного ТКС */
    blockedTcaFlag: boolean;
}
/**
 * Запрос расписания торгов
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedulesrequest
 */
export interface TradingSchedulesRequest {
    /**
     * Начало периода по часовому поясу UTC
     * @remarks `google.protobuf.Timestamp`
     */
    from: string;
    /**
     * Окончание периода по часовому поясу UTC
     * @remarks `google.protobuf.Timestamp`
     */
    to: string;
    /**
     * Наименование биржи или расчетного календаря
     * @description Если не передаётся, возвращается информация по всем доступным торговым площадкам
     */
    exchange?: string;
}
/**
 * Список торговых площадок
 * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedulesresponse
 */
export interface TradingSchedulesResponse {
    /** Список торговых площадок и режимов торгов */
    exchanges: TradingSchedule[];
}
/**
 * Запрос получения инструмента по идентификатору
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentrequest
 */
export interface InstrumentRequest {
    /**
     * Тип идентификатора инструмента
     * @description Возможные значения: `figi`, `ticker` и т.д.
     */
    idType: InstrumentIdType;
    /** Идентификатор classCode. Обязателен при idType = ticker */
    classCode: string;
    /** Идентификатор запрашиваемого инструмента */
    id: string;
}
/**
 * Данные по инструменту
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentresponse
 */
export interface InstrumentResponse {
    /** Основная информация об инструменте */
    instrument: Instrument;
}
/**
 * Информация об облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#bondresponse
 */
export interface BondResponse {
    /** Информация об облигации */
    instrument: Bond;
}
/**
 * Запрос получения инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentsrequest
 */
export interface InstrumentsRequest {
    /**
     * Статус запрашиваемых инструментов
     * @description Возможные значения: InstrumentStatus
     */
    instrumentStatus: InstrumentStatus;
}
/**
 * Параметры фильтрации опционов
 * @see https://tinkoff.github.io/investAPI/instruments/#filteroptionsrequest
 */
export interface FilterOptionsRequest {
    /**
     * Идентификатор базового актива опциона
     * @description Обязательный параметр
     */
    basicAssetUid: string;
    /** Идентификатор позиции базового актива опциона */
    basicAssetPositionUid?: string;
}
/**
 * Список облигаций
 * @see https://tinkoff.github.io/investAPI/instruments/#bondsresponse
 */
export interface BondsResponse {
    /** Массив облигаций */
    instruments: Bond[];
}
/**
 * Запрос купонов по облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getbondcouponsrequest
 */
export interface GetBondCouponsRequest {
    /** Figi-идентификатор инструмента */
    figi: string;
    /**
     * Начало запрашиваемого периода в часовом поясе UTC Фильтрация по couponDate (дата выплаты купона)
     * @remarks `google.protobuf.Timestamp`
     */
    from: string;
    /**
     * Окончание запрашиваемого периода в часовом поясе UTC Фильтрация по couponDate (дата выплаты купона)
     * @remarks `google.protobuf.Timestamp`
     */
    to: string;
}
/**
 * Купоны по облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getbondcouponsresponse
 */
export interface GetBondCouponsResponse {
    /** Список событий */
    events: Coupon[];
}
/**
 * Данные по валюте
 * @see https://tinkoff.github.io/investAPI/instruments/#currencyresponse
 */
export interface CurrencyResponse {
    /** Информация о валюте */
    instrument: Currency;
}
/**
 * Данные по валютам
 * @see https://tinkoff.github.io/investAPI/instruments/#currenciesresponse
 */
export interface CurrenciesResponse {
    /** Массив валют */
    instruments: Currency[];
}
/**
 * Данные по фонду
 * @see https://tinkoff.github.io/investAPI/instruments/#etfresponse
 */
export interface EtfResponse {
    /** Информация о фонде */
    instrument: Etf;
}
/**
 * Данные по фондам
 * @see https://tinkoff.github.io/investAPI/instruments/#etfsresponse
 */
export interface EtfsResponse {
    /** Массив фондов */
    instruments: Etf[];
}
/**
 * Данные по фьючерсу
 * @see https://tinkoff.github.io/investAPI/instruments/#futureresponse
 */
export interface FutureResponse {
    /** Информация о фьючерсу */
    instrument: Future;
}
/**
 * Данные по фьючерсам
 * @see https://tinkoff.github.io/investAPI/instruments/#futuresresponse
 */
export interface FuturesResponse {
    /** Массив фьючерсов */
    instruments: Future[];
}
/**
 * Данные по опциону
 * @see https://tinkoff.github.io/investAPI/instruments/#optionresponse
 */
export interface OptionResponse {
    /** Информация по опциону */
    instrument: Option;
}
/**
 * Данные по опционам
 * @see https://tinkoff.github.io/investAPI/instruments/#optionsresponse
 */
export interface OptionsResponse {
    /** Массив данных по опциону */
    instruments: Option[];
}
/**
 * Данные по акции
 * @see https://tinkoff.github.io/investAPI/instruments/#shareresponse
 */
export interface ShareResponse {
    /** Информация об акции */
    instrument: Share;
}
/**
 * Данные по акциям
 * @see https://tinkoff.github.io/investAPI/instruments/#sharesresponse
 */
export interface SharesResponse {
    /** Массив акций */
    instruments: Share[];
}
/**
 * Запрос НКД по облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getaccruedinterestsrequest
 */
export interface GetAccruedInterestsRequest {
    /** Figi-идентификатор инструмента */
    figi: string;
    /**
     * Начало запрашиваемого периода в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    from: string;
    /**
     * Окончание запрашиваемого периода в часовом поясе UTC
     * @remarks `google.protobuf.Timestamp`
     */
    to: string;
}
/**
 * НКД облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#getaccruedinterestsresponse
 */
export interface GetAccruedInterestsResponse {
    /** Массив операций начисления купонов */
    accruedInterests: AccruedInterest[];
}
/**
 * Запрос информации о фьючерсе
 * @see https://tinkoff.github.io/investAPI/instruments/#getfuturesmarginrequest
 */
export interface GetFuturesMarginRequest {
    /** Идентификатор инструмента */
    figi: string;
}
/**
 * Данные по фьючерсу
 * @see https://tinkoff.github.io/investAPI/instruments/#getfuturesmarginresponse
 */
export interface GetFuturesMarginResponse {
    /** Гарантийное обеспечение при покупке */
    initialMarginOnBuy: MoneyValue;
    /** Гарантийное обеспечение при продаже */
    initialMarginOnSell: MoneyValue;
    /** Шаг цены */
    minPriceIncrement: Quotation;
    /** Стоимость шага цены */
    minPriceIncrementAmount: Quotation;
}
/**
 * Запрос дивидендов
 * @see https://tinkoff.github.io/investAPI/instruments/#getdividendsrequest
 */
export interface GetDividendsRequest {
    /** Figi-идентификатор инструмента */
    figi: string;
    /**
     * Начало запрашиваемого периода в часовом поясе UTC Фильтрация происходит по параметру recordDate (дата фиксации реестра).
     * @remarks `google.protobuf.Timestamp`
     */
    from: string;
    /**
     * Окончание запрашиваемого периода в часовом поясе UTC Фильтрация происходит по параметру recordDate (дата фиксации реестра).
     * @remarks `google.protobuf.Timestamp`
     */
    to: string;
}
/**
 * Дивиденды
 * @see https://tinkoff.github.io/investAPI/instruments/#getdividendsresponse
 */
export interface GetDividendsResponse {
    /** Список дивидентов */
    dividends: Dividend[];
}
/**
 * Запрос актива по идентификатору
 * @see https://tinkoff.github.io/investAPI/instruments/#assetrequest
 */
export interface AssetRequest {
    /** uid-идентификатор актива */
    id: string;
}
/**
 * Данные по активу
 * @see https://tinkoff.github.io/investAPI/instruments/#assetresponse
 */
export interface AssetResponse {
    /** Актив */
    asset: AssetFull;
}
/**
 * Запрос списка активов
 * @see https://tinkoff.github.io/investAPI/instruments/#assetsrequest
 */
export interface AssetsRequest {
    /** Тип инструмента */
    instrumentType: InstrumentType;
}
/**
 * Список активов
 * @see https://tinkoff.github.io/investAPI/instruments/#assetsresponse
 */
export interface AssetsResponse {
    /** Активы */
    assets: Asset[];
}
/**
 * Запрос списка избранных инструментов, входные параметры не требуются
 * @see https://tinkoff.github.io/investAPI/instruments/#getfavoritesrequest
 */
export interface GetFavoritesRequest {
}
/**
 * В ответ передаётся список избранных инструментов в качестве массива
 * @see https://tinkoff.github.io/investAPI/instruments/#getfavoritesresponse
 */
export interface GetFavoritesResponse {
    /** Массив инструментов */
    favoriteInstruments: FavoriteInstrument[];
}
/**
 * Запрос редактирования списка избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesrequest
 */
export interface EditFavoritesRequest {
    /** Массив инструментов */
    instruments: EditFavoritesRequestInstrument[];
    /** Тип действия со списком */
    actionType: EditFavoritesActionType;
}
/**
 * Результат редактирования списка избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesresponse
 */
export interface EditFavoritesResponse {
    /** Массив инструментов */
    favoriteInstruments: FavoriteInstrument[];
}
/**
 * Запрос справочника стран
 * @see https://tinkoff.github.io/investAPI/instruments/#getcountriesrequest
 */
export interface GetCountriesRequest {
}
/**
 * Справочник стран
 * @see https://tinkoff.github.io/investAPI/instruments/#getcountriesresponse
 */
export interface GetCountriesResponse {
    /** Массив стран */
    countries: CountryResponse[];
}
/**
 * Данные о стране
 * @see https://tinkoff.github.io/investAPI/instruments/#countryresponse
 */
export interface CountryResponse {
    /** Двухбуквенный код страны */
    alfaTwo: string;
    /** Трёхбуквенный код страны */
    alfaThree: string;
    /** Наименование страны */
    name: string;
    /** Краткое наименование страны */
    nameBrief: string;
}
/**
 * Запрос на поиск инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#findinstrumentrequest
 */
export interface FindInstrumentRequest {
    /** Строка поиска */
    query: string;
    /** Фильтр по типу инструмента */
    instrumentKind: InstrumentType;
    /** Фильтр для отображения только торговых инструментов */
    apiTradeAvailableFlag: boolean;
}
/**
 * Результат поиска инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#findinstrumentresponse
 */
export interface FindInstrumentResponse {
    /** Массив инструментов, удовлетворяющих условиям поиска */
    instruments: InstrumentShort[];
}
/**
 * Запрос списка брендов
 * @see https://tinkoff.github.io/investAPI/instruments/#getbrandsrequest
 */
export interface GetBrandsRequest {
}
/**
 * Список брендов
 * @see https://tinkoff.github.io/investAPI/instruments/#getbrandsresponse
 */
export interface GetBrandsResponse {
    /** Массив брендов */
    brands: Brand[];
}
/**
 * Запрос бренда
 * @see https://tinkoff.github.io/investAPI/instruments/#getbrandrequest
 */
export interface GetBrandRequest {
    /** Uid-идентификатор бренда */
    id: string;
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
export declare class InstrumentsService extends Common {
    /**
     * Метод получения расписания торгов торговых площадок
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { exchanges } = await instrumentsService.TradingSchedules({
     *  from: '2023-07-12T00:00:00:000Z',
     *  to: '2023-07-13T23:59:59:999Z',
     *  exchange: 'MOEX_MORNING'
     * })
     *
     * console.log(exchanges)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedules
     */
    TradingSchedules(body: TradingSchedulesRequest): Promise<TradingSchedulesResponse>;
    /**
     * Метод получения облигации по её идентификатору
     * ```js
     * import { InstrumentsService, InstrumentIdType } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instrument } = await instrumentsService.BondBy({
     *  idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
     *  classCode: 'TQCB',
     *  id: 'RU000A105WZ4'
     * })
     *
     * console.log(instrument)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#bondby
     */
    BondBy(body: InstrumentRequest): Promise<BondResponse>;
    /**
     * Метод получения списка облигаций
     * ```js
     * import { InstrumentsService, InstrumentStatus } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instruments } = await instrumentsService.Bonds({
     *  instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
     * })
     *
     * console.log(instruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#bonds
     */
    Bonds(body: InstrumentsRequest): Promise<BondsResponse>;
    /**
     * Метод получения графика выплат купонов по облигации
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { events } = await instrumentsService.GetBondCoupons({
     *  figi: 'TCS00A105WZ4',
     *  from: '2023-07-12T00:00:00:000Z',
     *  to: '2023-07-13T23:59:59:999Z'
     * })
     *
     * console.log(events)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#getbondcoupons
     */
    GetBondCoupons(body: GetBondCouponsRequest): Promise<GetBondCouponsResponse>;
    /**
     * Метод получения валюты по её идентификатору
     * ```js
     * import { InstrumentsService, InstrumentIdType } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instrument } = await instrumentsService.CurrencyBy({
     *  idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
     *  classCode: 'CETS',
     *  id: 'AMDRUB_TOM'
     * })
     *
     * console.log(instrument)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#currencyby
     */
    CurrencyBy(body: InstrumentRequest): Promise<CurrencyResponse>;
    /**
     * Метод получения списка валют
     * ```js
     * import { InstrumentsService, InstrumentStatus } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instruments } = await instrumentsService.Currencies({
     *  instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
     * })
     *
     * console.log(instruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#currencies
     */
    Currencies(body: InstrumentsRequest): Promise<CurrenciesResponse>;
    /**
     * Метод получения инвестиционного фонда по его идентификатору
     * ```js
     * import { InstrumentsService, InstrumentIdType } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instrument } = await instrumentsService.EtfBy({
     *  idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
     *  classCode: 'SPBXM',
     *  id: 'DRIV'
     * })
     *
     * console.log(instrument)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#etfby
     */
    EtfBy(body: InstrumentRequest): Promise<EtfResponse>;
    /**
     * Метод получения списка инвестиционных фондов
     * ```js
     * import { InstrumentsService, InstrumentStatus } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instruments } = await instrumentsService.Etfs({
     *  instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
     * })
     *
     * console.log(instruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#etfs
     */
    Etfs(body: InstrumentsRequest): Promise<EtfsResponse>;
    /**
     * Метод получения фьючерса по его идентификатору
     * ```js
     * import { InstrumentsService, InstrumentIdType } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instrument } = await instrumentsService.FutureBy({
     *  idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
     *  classCode: 'SPBFUT',
     *  id: 'GKZ3'
     * })
     *
     * console.log(instrument)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#futureby
     */
    FutureBy(body: InstrumentRequest): Promise<FutureResponse>;
    /**
     * Метод получения списка фьючерсов
     * ```js
     * import { InstrumentsService, InstrumentStatus } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instruments } = await instrumentsService.Futures({
     *  instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
     * })
     *
     * console.log(instruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#futures
     */
    Futures(body: InstrumentsRequest): Promise<FuturesResponse>;
    /**
     * Метод получения опциона по его идентификатору
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instrument } = await instrumentsService.OptionBy({
     *  idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
     *  classCode: 'SPBFUT',
     *  id: 'GKZ3'
     * })
     *
     * console.log(instrument)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#optionby
     */
    OptionBy(body: InstrumentRequest): Promise<OptionResponse>;
    /**
     * Метод получения списка опционов
     * ```js
     * import { InstrumentsService, InstrumentStatus } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instruments } = await instrumentsService.Options({
     *  instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
     * })
     *
     * console.log(instruments)
     * ```
     * @description В документации указано как `Deprecated`, хотя метод работает
     * @see https://tinkoff.github.io/investAPI/instruments/#options
     */
    Options(body: InstrumentsRequest): Promise<OptionsResponse>;
    /**
     * Метод получения списка опционов
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instruments } = await instrumentsService.OptionsBy({
     *  basicAssetUid: 'b6a73950-20a8-46c7-8b49-9dfbc14fe0ba',
     *  basicAssetPositionUid: ''
     * })
     *
     * console.log(instruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#optionsby
     */
    OptionsBy(body: FilterOptionsRequest): Promise<OptionsResponse>;
    /**
     * Метод получения акции по её идентификатору
     * ```js
     * import { InstrumentsService, InstrumentIdType } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instruments } = await instrumentsService.ShareBy({
     *  idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
     *  classCode: 'SPBXM',
     *  id: 'APA'
     * })
     *
     * console.log(instruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#shareby
     */
    ShareBy(body: InstrumentRequest): Promise<ShareResponse>;
    /**
     * Метод получения списка акций
     * ```js
     * import { InstrumentsService, InstrumentStatus } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instruments } = await instrumentsService.Shares({
     *  instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
     * })
     *
     * console.log(instruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#shares
     */
    Shares(body: InstrumentsRequest): Promise<SharesResponse>;
    /**
     * Метод получения накопленного купонного дохода по облигации
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { accruedInterests } = await instrumentsService.GetAccruedInterests({
     *  figi: 'TCS00A105WZ4',
     *  from: '2023-07-12T00:00:00:000Z',
     *  to: '2023-07-13T23:59:59:999Z'
     * })
     *
     * console.log(accruedInterests)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#getaccruedinterests
     */
    GetAccruedInterests(body: GetAccruedInterestsRequest): Promise<GetAccruedInterestsResponse>;
    /**
     * Метод получения размера гарантийного обеспечения по фьючерсам
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const futuresMargin = await instrumentsService.GetFuturesMargin({
     *  figi: 'FUTGMKN12230'
     * })
     *
     * console.log(futuresMargin)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#getfuturesmargin
     */
    GetFuturesMargin(body: GetFuturesMarginRequest): Promise<GetFuturesMarginResponse>;
    /**
     * Метод получения основной информации об инструменте
     * ```js
     * import { InstrumentsService, InstrumentIdType } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instruments } = await instrumentsService.GetInstrumentBy({
     *  idType: InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER,
     *  classCode: 'SPBXM',
     *  id: 'APA'
     * })
     *
     * console.log(instruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#getinstrumentby
     */
    GetInstrumentBy(body: InstrumentRequest): Promise<InstrumentResponse>;
    /**
     * Метод для получения событий выплаты дивидендов по инструменту
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { dividends } = await instrumentsService.GetDividends({
     *  figi: 'BBG00YTS96G2',
     *  from: '2023-07-12T00:00:00:000Z',
     *  to: '2023-07-13T23:59:59:999Z'
     * })
     *
     * console.log(dividends)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#getdividends
     */
    GetDividends(body: GetDividendsRequest): Promise<GetDividendsResponse>;
    /**
     * Метод получения актива по его идентификатору
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const asset = await instrumentsService.GetAssetBy({
     *  id: 'b6a73950-20a8-46c7-8b49-9dfbc14fe0ba'
     * })
     *
     * console.log(asset)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#getassetby
     */
    GetAssetBy(body: AssetRequest): Promise<AssetResponse>;
    /**
     * Метод получения списка активов
     * ```js
     * import { InstrumentsService, InstrumentType } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { assets } = await instrumentsService.GetAssets({
     *  instrumentType: InstrumentType.INSTRUMENT_TYPE_BOND
     * })
     *
     * console.log(assets)
     * ```
     * @description Метод работает для всех инструментов, за исключением срочных - опционов и фьючерсов
     * @see https://tinkoff.github.io/investAPI/instruments/#getassets
     */
    GetAssets(body: AssetsRequest): Promise<AssetsResponse>;
    /**
     * Метод получения списка избранных инструментов
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { favoriteInstruments } = await instrumentsService.GetFavorites({})
     *
     * console.log(favoriteInstruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#getfavorites
     */
    GetFavorites(body: GetFavoritesRequest): Promise<GetFavoritesResponse>;
    /**
     * Метод редактирования списка избранных инструментов
     * ```js
     * import { InstrumentsService, EditFavoritesActionType } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { favoriteInstruments } = await instrumentsService.EditFavorites({
     *  instruments: [{ figi: 'BBG00YTS96G2' }],
     *  actionType: EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_ADD
     * })
     *
     * console.log(favoriteInstruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#editfavorites
     */
    EditFavorites(body: EditFavoritesRequest): Promise<EditFavoritesResponse>;
    /**
     * Метод получения списка стран
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { countries } = await instrumentsService.GetCountries({})
     *
     * console.log(countries)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#getcountries
     */
    GetCountries(body: GetCountriesRequest): Promise<GetCountriesResponse>;
    /**
     * Метод поиска инструмента
     * ```js
     * import { InstrumentsService, InstrumentType } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { instruments } = await instrumentsService.FindInstrument({
     *  query: 'Tinkoff',
     *  instrumentKind: InstrumentType.INSTRUMENT_TYPE_SHARE,
     *  apiTradeAvailableFlag: true
     * })
     *
     * console.log(instruments)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#findinstrument
     */
    FindInstrument(body: FindInstrumentRequest): Promise<FindInstrumentResponse>;
    /**
     * Метод получения списка брендов
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const { brands } = await instrumentsService.GetBrands({})
     *
     * console.log(brands)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#getbrands
     */
    GetBrands(body: GetBrandsRequest): Promise<GetBrandsResponse>;
    /**
     * Метод получения бренда по его идентификатору
     * ```js
     * import { InstrumentsService } from '@tomasevich/tinkoff'
     *
     * const instrumentsService = new InstrumentsService('<TOKEN>', true)
     * const brand = await instrumentsService.GetBrandBy({
     *  id: '8c478c0a-c4e3-412c-ab4d-a2df4648d97f'
     * })
     *
     * console.log(brand)
     * ```
     * @see https://tinkoff.github.io/investAPI/instruments/#getbrandby
     */
    GetBrandBy(body: GetBrandRequest): Promise<Brand>;
}
