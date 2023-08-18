"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentsService = exports.RiskLevel = exports.RealExchange = exports.EditFavoritesActionType = exports.StructuredProductType = exports.AssetType = exports.ShareType = exports.InstrumentStatus = exports.InstrumentIdType = exports.OptionSettlementType = exports.OptionStyle = exports.OptionPaymentType = exports.OptionDirection = exports.CouponType = exports.InstrumentType = void 0;
const Common_1 = require("./Common");
/**
 * Тип инструмента
 */
var InstrumentType;
(function (InstrumentType) {
    /** @todo Нет описания */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_UNSPECIFIED"] = 0] = "INSTRUMENT_TYPE_UNSPECIFIED";
    /** @todo Нет описания */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_BOND"] = 1] = "INSTRUMENT_TYPE_BOND";
    /** Акция */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_SHARE"] = 2] = "INSTRUMENT_TYPE_SHARE";
    /** Валюта */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_CURRENCY"] = 3] = "INSTRUMENT_TYPE_CURRENCY";
    /** @todo Нет описания */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_ETF"] = 4] = "INSTRUMENT_TYPE_ETF";
    /** Фьючерс */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_FUTURES"] = 5] = "INSTRUMENT_TYPE_FUTURES";
    /** @todo Нет описания */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_SP"] = 6] = "INSTRUMENT_TYPE_SP";
    /** Опцион */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_OPTION"] = 7] = "INSTRUMENT_TYPE_OPTION";
    /** @todo Нет описания */
    InstrumentType[InstrumentType["INSTRUMENT_TYPE_CLEARING_CERTIFICATE"] = 8] = "INSTRUMENT_TYPE_CLEARING_CERTIFICATE";
})(InstrumentType || (exports.InstrumentType = InstrumentType = {}));
/**
 * Тип купонов
 * @see https://tinkoff.github.io/investAPI/instruments/#coupontype
 */
var CouponType;
(function (CouponType) {
    /** Неопределенное значение */
    CouponType[CouponType["COUPON_TYPE_UNSPECIFIED"] = 0] = "COUPON_TYPE_UNSPECIFIED";
    /** Постоянный */
    CouponType[CouponType["COUPON_TYPE_CONSTANT"] = 1] = "COUPON_TYPE_CONSTANT";
    /** Плавающий */
    CouponType[CouponType["COUPON_TYPE_FLOATING"] = 2] = "COUPON_TYPE_FLOATING";
    /** Дисконт */
    CouponType[CouponType["COUPON_TYPE_DISCOUNT"] = 3] = "COUPON_TYPE_DISCOUNT";
    /** Ипотечный */
    CouponType[CouponType["COUPON_TYPE_MORTGAGE"] = 4] = "COUPON_TYPE_MORTGAGE";
    /** Фиксированный */
    CouponType[CouponType["COUPON_TYPE_FIX"] = 5] = "COUPON_TYPE_FIX";
    /** Переменный */
    CouponType[CouponType["COUPON_TYPE_VARIABLE"] = 6] = "COUPON_TYPE_VARIABLE";
    /** Прочее */
    CouponType[CouponType["COUPON_TYPE_OTHER"] = 7] = "COUPON_TYPE_OTHER";
})(CouponType || (exports.CouponType = CouponType = {}));
/**
 * Тип опциона по направлению сделки
 * @see https://tinkoff.github.io/investAPI/instruments/#optiondirection
 */
var OptionDirection;
(function (OptionDirection) {
    /** Тип не определен */
    OptionDirection[OptionDirection["OPTION_DIRECTION_UNSPECIFIED"] = 0] = "OPTION_DIRECTION_UNSPECIFIED";
    /** Опцион на продажу */
    OptionDirection[OptionDirection["OPTION_DIRECTION_PUT"] = 1] = "OPTION_DIRECTION_PUT";
    /** Опцион на покупку */
    OptionDirection[OptionDirection["OPTION_DIRECTION_CALL"] = 2] = "OPTION_DIRECTION_CALL";
})(OptionDirection || (exports.OptionDirection = OptionDirection = {}));
/**
 * Тип расчетов по опциону
 * @see https://tinkoff.github.io/investAPI/instruments/#optionpaymenttype
 */
var OptionPaymentType;
(function (OptionPaymentType) {
    /** Тип не определен */
    OptionPaymentType[OptionPaymentType["OPTION_PAYMENT_TYPE_UNSPECIFIED"] = 0] = "OPTION_PAYMENT_TYPE_UNSPECIFIED";
    /** Опционы с использованием премии в расчетах */
    OptionPaymentType[OptionPaymentType["OPTION_PAYMENT_TYPE_PREMIUM"] = 1] = "OPTION_PAYMENT_TYPE_PREMIUM";
    /** Маржируемые опционы */
    OptionPaymentType[OptionPaymentType["OPTION_PAYMENT_TYPE_MARGINAL"] = 2] = "OPTION_PAYMENT_TYPE_MARGINAL";
})(OptionPaymentType || (exports.OptionPaymentType = OptionPaymentType = {}));
/**
 * Тип опциона по стилю
 * @see https://tinkoff.github.io/investAPI/instruments/#optionstyle
 */
var OptionStyle;
(function (OptionStyle) {
    /** Тип не определен */
    OptionStyle[OptionStyle["OPTION_STYLE_UNSPECIFIED"] = 0] = "OPTION_STYLE_UNSPECIFIED";
    /** Американский опцион */
    OptionStyle[OptionStyle["OPTION_STYLE_AMERICAN"] = 1] = "OPTION_STYLE_AMERICAN";
    /** Европейский опцион */
    OptionStyle[OptionStyle["OPTION_STYLE_EUROPEAN"] = 2] = "OPTION_STYLE_EUROPEAN";
})(OptionStyle || (exports.OptionStyle = OptionStyle = {}));
/**
 * Тип опциона по способу исполнения
 * @see https://tinkoff.github.io/investAPI/instruments/#optionsettlementtype
 */
var OptionSettlementType;
(function (OptionSettlementType) {
    /** Тип не определен */
    OptionSettlementType[OptionSettlementType["OPTION_EXECUTION_TYPE_UNSPECIFIED"] = 0] = "OPTION_EXECUTION_TYPE_UNSPECIFIED";
    /** Поставочный тип опциона */
    OptionSettlementType[OptionSettlementType["OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY"] = 1] = "OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY";
    /** Расчетный тип опциона */
    OptionSettlementType[OptionSettlementType["OPTION_EXECUTION_TYPE_CASH_SETTLEMENT"] = 2] = "OPTION_EXECUTION_TYPE_CASH_SETTLEMENT";
})(OptionSettlementType || (exports.OptionSettlementType = OptionSettlementType = {}));
/**
 * Тип идентификатора инструмента
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentidtype
 */
var InstrumentIdType;
(function (InstrumentIdType) {
    /** Значение не определено */
    InstrumentIdType[InstrumentIdType["INSTRUMENT_ID_UNSPECIFIED"] = 0] = "INSTRUMENT_ID_UNSPECIFIED";
    /** Figi */
    InstrumentIdType[InstrumentIdType["INSTRUMENT_ID_TYPE_FIGI"] = 1] = "INSTRUMENT_ID_TYPE_FIGI";
    /** Ticker */
    InstrumentIdType[InstrumentIdType["INSTRUMENT_ID_TYPE_TICKER"] = 2] = "INSTRUMENT_ID_TYPE_TICKER";
    /** Уникальный идентификатор */
    InstrumentIdType[InstrumentIdType["INSTRUMENT_ID_TYPE_UID"] = 3] = "INSTRUMENT_ID_TYPE_UID";
    /** Идентификатор позиции */
    InstrumentIdType[InstrumentIdType["INSTRUMENT_ID_TYPE_POSITION_UID"] = 4] = "INSTRUMENT_ID_TYPE_POSITION_UID";
})(InstrumentIdType || (exports.InstrumentIdType = InstrumentIdType = {}));
/**
 * Статус запрашиваемых инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentstatus
 */
var InstrumentStatus;
(function (InstrumentStatus) {
    /** Значение не определено */
    InstrumentStatus[InstrumentStatus["INSTRUMENT_STATUS_UNSPECIFIED"] = 0] = "INSTRUMENT_STATUS_UNSPECIFIED";
    /**
     * Базовый список инструментов (по умолчанию)
     * @description Инструменты доступные для торговли через TINKOFF INVEST API. Cейчас списки бумаг, доступных из api и других интерфейсах совпадают (за исключением внебиржевых бумаг), но в будущем возможны ситуации, когда списки инструментов будут отличатьс
     */
    InstrumentStatus[InstrumentStatus["INSTRUMENT_STATUS_BASE"] = 1] = "INSTRUMENT_STATUS_BASE";
    /** Список всех инструментов */
    InstrumentStatus[InstrumentStatus["INSTRUMENT_STATUS_ALL"] = 2] = "INSTRUMENT_STATUS_ALL";
})(InstrumentStatus || (exports.InstrumentStatus = InstrumentStatus = {}));
/**
 * Тип акций
 * @see https://tinkoff.github.io/investAPI/instruments/#sharetype
 */
var ShareType;
(function (ShareType) {
    /** Значение не определено */
    ShareType[ShareType["SHARE_TYPE_UNSPECIFIED"] = 0] = "SHARE_TYPE_UNSPECIFIED";
    /** Обыкновенная */
    ShareType[ShareType["SHARE_TYPE_COMMON"] = 1] = "SHARE_TYPE_COMMON";
    /** Привилегированная */
    ShareType[ShareType["SHARE_TYPE_PREFERRED"] = 2] = "SHARE_TYPE_PREFERRED";
    /** Американские депозитарные расписки */
    ShareType[ShareType["SHARE_TYPE_ADR"] = 3] = "SHARE_TYPE_ADR";
    /** Глобальные депозитарные расписки */
    ShareType[ShareType["SHARE_TYPE_GDR"] = 4] = "SHARE_TYPE_GDR";
    /** Товарищество с ограниченной ответственностью */
    ShareType[ShareType["SHARE_TYPE_MLP"] = 5] = "SHARE_TYPE_MLP";
    /** Акции из реестра Нью-Йорка */
    ShareType[ShareType["SHARE_TYPE_NY_REG_SHRS"] = 6] = "SHARE_TYPE_NY_REG_SHRS";
    /** Закрытый инвестиционный фонд */
    ShareType[ShareType["SHARE_TYPE_CLOSED_END_FUND"] = 7] = "SHARE_TYPE_CLOSED_END_FUND";
    /** Траст недвижимости */
    ShareType[ShareType["SHARE_TYPE_REIT"] = 8] = "SHARE_TYPE_REIT";
})(ShareType || (exports.ShareType = ShareType = {}));
/**
 * Тип актива
 * @see https://tinkoff.github.io/investAPI/instruments/#assettype
 */
var AssetType;
(function (AssetType) {
    /** Тип не определён */
    AssetType[AssetType["ASSET_TYPE_UNSPECIFIED"] = 0] = "ASSET_TYPE_UNSPECIFIED";
    /** Валюта */
    AssetType[AssetType["ASSET_TYPE_CURRENCY"] = 1] = "ASSET_TYPE_CURRENCY";
    /** Товар */
    AssetType[AssetType["ASSET_TYPE_COMMODITY"] = 2] = "ASSET_TYPE_COMMODITY";
    /** Индекс */
    AssetType[AssetType["ASSET_TYPE_INDEX"] = 3] = "ASSET_TYPE_INDEX";
    /** Ценная бумага */
    AssetType[AssetType["ASSET_TYPE_SECURITY"] = 4] = "ASSET_TYPE_SECURITY";
})(AssetType || (exports.AssetType = AssetType = {}));
/**
 * Тип структурной ноты
 * @see https://tinkoff.github.io/investAPI/instruments/#structuredproducttype
 */
var StructuredProductType;
(function (StructuredProductType) {
    /** Тип не определён */
    StructuredProductType[StructuredProductType["SP_TYPE_UNSPECIFIED"] = 0] = "SP_TYPE_UNSPECIFIED";
    /** Поставочный */
    StructuredProductType[StructuredProductType["SP_TYPE_DELIVERABLE"] = 1] = "SP_TYPE_DELIVERABLE";
    /** Беспоставочный */
    StructuredProductType[StructuredProductType["SP_TYPE_NON_DELIVERABLE"] = 2] = "SP_TYPE_NON_DELIVERABLE";
})(StructuredProductType || (exports.StructuredProductType = StructuredProductType = {}));
/**
 * Тип действия со списком избранных инструментов
 * @see https://tinkoff.github.io/investAPI/instruments/#editfavoritesactiontype
 */
var EditFavoritesActionType;
(function (EditFavoritesActionType) {
    /** Тип не определён */
    EditFavoritesActionType[EditFavoritesActionType["EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED"] = 0] = "EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED";
    /** Добавить в список */
    EditFavoritesActionType[EditFavoritesActionType["EDIT_FAVORITES_ACTION_TYPE_ADD"] = 1] = "EDIT_FAVORITES_ACTION_TYPE_ADD";
    /** Удалить из списка */
    EditFavoritesActionType[EditFavoritesActionType["EDIT_FAVORITES_ACTION_TYPE_DEL"] = 2] = "EDIT_FAVORITES_ACTION_TYPE_DEL";
})(EditFavoritesActionType || (exports.EditFavoritesActionType = EditFavoritesActionType = {}));
/**
 * Реальная площадка исполнения расчётов
 * @see https://tinkoff.github.io/investAPI/instruments/#realexchange
 */
var RealExchange;
(function (RealExchange) {
    /** Тип не определён */
    RealExchange[RealExchange["REAL_EXCHANGE_UNSPECIFIED"] = 0] = "REAL_EXCHANGE_UNSPECIFIED";
    /** Московская биржа */
    RealExchange[RealExchange["REAL_EXCHANGE_MOEX"] = 1] = "REAL_EXCHANGE_MOEX";
    /** Санкт-Петербургская биржа */
    RealExchange[RealExchange["REAL_EXCHANGE_RTS"] = 2] = "REAL_EXCHANGE_RTS";
    /** Внебиржевой инструмент */
    RealExchange[RealExchange["REAL_EXCHANGE_OTC"] = 3] = "REAL_EXCHANGE_OTC";
})(RealExchange || (exports.RealExchange = RealExchange = {}));
/**
 * Уровень риска облигации
 * @see https://tinkoff.github.io/investAPI/instruments/#risklevel
 */
var RiskLevel;
(function (RiskLevel) {
    /** Высокий уровень риска */
    RiskLevel[RiskLevel["RISK_LEVEL_HIGH"] = 0] = "RISK_LEVEL_HIGH";
    /** Средний уровень риска */
    RiskLevel[RiskLevel["RISK_LEVEL_MODERATE"] = 1] = "RISK_LEVEL_MODERATE";
    /** Низкий уровень риска */
    RiskLevel[RiskLevel["RISK_LEVEL_LOW"] = 2] = "RISK_LEVEL_LOW";
})(RiskLevel || (exports.RiskLevel = RiskLevel = {}));
/**
 * Сервис предназначен для получения:
 * 1. информации об инструментах;
 * 2. расписания торговых сессий;
 * 3. календаря выплат купонов по облигациям;
 * 4. размера гарантийного обеспечения по фьючерсам;
 * 5. дивидендов по ценной бумаге.
 * @see https://tinkoff.github.io/investAPI/instruments/#instrumentsservice
 */
class InstrumentsService extends Common_1.Common {
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
    TradingSchedules(body) {
        return this.request('InstrumentsService', 'TradingSchedules', body);
    }
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
    BondBy(body) {
        return this.request('InstrumentsService', 'BondBy', body);
    }
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
    Bonds(body) {
        return this.request('InstrumentsService', 'Bonds', body);
    }
    /**
     * Метод получения графика выплат купонов по облигации
     * @see https://tinkoff.github.io/investAPI/instruments/#getbondcoupons
     */
    GetBondCoupons(body) {
        return this.request('InstrumentsService', 'GetBondCoupons', body);
    }
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
    CurrencyBy(body) {
        return this.request('InstrumentsService', 'CurrencyBy', body);
    }
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
    Currencies(body) {
        return this.request('InstrumentsService', 'Currencies', body);
    }
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
    EtfBy(body) {
        return this.request('InstrumentsService', 'EtfBy', body);
    }
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
    Etfs(body) {
        return this.request('InstrumentsService', 'Etfs', body);
    }
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
    FutureBy(body) {
        return this.request('InstrumentsService', 'FutureBy', body);
    }
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
    Futures(body) {
        return this.request('InstrumentsService', 'Futures', body);
    }
    /**
     * Метод получения опциона по его идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#optionby
     */
    OptionBy(body) {
        return this.request('InstrumentsService', 'OptionBy', body);
    }
    /**
     * Метод получения списка опционов
     * @description В документации указано как `Deprecated`, хотя метод работает
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
     * @see https://tinkoff.github.io/investAPI/instruments/#options
     */
    Options(body) {
        return this.request('InstrumentsService', 'Options', body);
    }
    /**
     * Метод получения списка опционов
     * @see https://tinkoff.github.io/investAPI/instruments/#optionsby
     */
    OptionsBy(body) {
        return this.request('InstrumentsService', 'OptionsBy', body);
    }
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
    ShareBy(body) {
        return this.request('InstrumentsService', 'ShareBy', body);
    }
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
    Shares(body) {
        return this.request('InstrumentsService', 'Shares', body);
    }
    /**
     * Метод получения накопленного купонного дохода по облигации
     * @see https://tinkoff.github.io/investAPI/instruments/#getaccruedinterests
     */
    GetAccruedInterests(body) {
        return this.request('InstrumentsService', 'GetAccruedInterests', body);
    }
    /**
     * Метод получения размера гарантийного обеспечения по фьючерсам
     * @see https://tinkoff.github.io/investAPI/instruments/#getfuturesmargin
     */
    GetFuturesMargin(body) {
        return this.request('InstrumentsService', 'GetFuturesMargin', body);
    }
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
    GetInstrumentBy(body) {
        return this.request('InstrumentsService', 'GetInstrumentBy', body);
    }
    /**
     * Метод для получения событий выплаты дивидендов по инструменту
     * @see https://tinkoff.github.io/investAPI/instruments/#getdividends
     */
    GetDividends(body) {
        return this.request('InstrumentsService', 'GetDividends', body);
    }
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
    GetAssetBy(body) {
        return this.request('InstrumentsService', 'GetAssetBy', body);
    }
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
    GetAssets(body) {
        return this.request('InstrumentsService', 'GetAssets', body);
    }
    /**
     * Метод получения списка избранных инструментов
     * @see https://tinkoff.github.io/investAPI/instruments/#getfavorites
     */
    GetFavorites(body) {
        return this.request('InstrumentsService', 'GetFavorites', body);
    }
    /**
     * Метод редактирования списка избранных инструментов
     * @see https://tinkoff.github.io/investAPI/instruments/#editfavorites
     */
    EditFavorites(body) {
        return this.request('InstrumentsService', 'EditFavorites', body);
    }
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
    GetCountries(body) {
        return this.request('InstrumentsService', 'GetCountries', body);
    }
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
    FindInstrument(body) {
        return this.request('InstrumentsService', 'FindInstrument', body);
    }
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
    GetBrands(body) {
        return this.request('InstrumentsService', 'GetBrands', body);
    }
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
    GetBrandBy(body) {
        return this.request('InstrumentsService', 'GetBrandBy', body);
    }
}
exports.InstrumentsService = InstrumentsService;
