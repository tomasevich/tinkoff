"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentsService = void 0;
const Common_1 = require("./Common");
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
     * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedules
     */
    TradingSchedules(body) {
        return this.request('InstrumentsService', 'TradingSchedules', body);
    }
    /**
     * Метод получения облигации по её идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#bondby
     */
    BondBy(body) {
        return this.request('InstrumentsService', 'BondBy', body);
    }
    /**
     * Метод получения списка облигаций
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
     * @see https://tinkoff.github.io/investAPI/instruments/#currencyby
     */
    CurrencyBy(body) {
        return this.request('InstrumentsService', 'CurrencyBy', body);
    }
    /**
     * Метод получения списка валют
     * @see https://tinkoff.github.io/investAPI/instruments/#currencies
     */
    Currencies(body) {
        return this.request('InstrumentsService', 'Currencies', body);
    }
    /**
     * Метод получения инвестиционного фонда по его идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#etfby
     */
    EtfBy(body) {
        return this.request('InstrumentsService', 'EtfBy', body);
    }
    /**
     * Метод получения списка инвестиционных фондов
     * @see https://tinkoff.github.io/investAPI/instruments/#etfs
     */
    Etfs(body) {
        return this.request('InstrumentsService', 'Etfs', body);
    }
    /**
     * Метод получения фьючерса по его идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#futureby
     */
    FutureBy(body) {
        return this.request('InstrumentsService', 'FutureBy', body);
    }
    /**
     * Метод получения списка фьючерсов
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
     * @deprecated Deprecated
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
     * @see https://tinkoff.github.io/investAPI/instruments/#shareby
     */
    ShareBy(body) {
        return this.request('InstrumentsService', 'ShareBy', body);
    }
    /**
     * Метод получения списка акций
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
     * @see https://tinkoff.github.io/investAPI/instruments/#getassetby
     */
    GetAssetBy(body) {
        return this.request('InstrumentsService', 'GetAssetBy', body);
    }
    /**
     * Метод получения списка активов
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
     * @see https://tinkoff.github.io/investAPI/instruments/#getcountries
     */
    GetCountries(body) {
        return this.request('InstrumentsService', 'GetCountries', body);
    }
    /**
     * Метод поиска инструмента
     * @see https://tinkoff.github.io/investAPI/instruments/#findinstrument
     */
    FindInstrument(body) {
        return this.request('InstrumentsService', 'FindInstrument', body);
    }
    /**
     * Метод получения списка брендов
     * @see https://tinkoff.github.io/investAPI/instruments/#getbrands
     */
    GetBrands(body) {
        return this.request('InstrumentsService', 'GetBrands', body);
    }
    /**
     * Метод получения бренда по его идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#getbrandby
     */
    GetBrandBy(body) {
        return this.request('InstrumentsService', 'GetBrandBy', body);
    }
}
exports.InstrumentsService = InstrumentsService;
