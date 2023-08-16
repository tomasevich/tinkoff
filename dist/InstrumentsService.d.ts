import { Common } from './Common';
export interface TradingSchedulesRequest {
}
export interface TradingSchedulesResponse {
}
export interface InstrumentRequest {
}
export interface BondResponse {
}
export interface InstrumentsRequest {
}
export interface BondsResponse {
}
export interface GetBondCouponsRequest {
}
export interface GetBondCouponsResponse {
}
export interface CurrencyResponse {
}
export interface CurrenciesResponse {
}
export interface EtfResponse {
}
export interface EtfsResponse {
}
export interface FutureResponse {
}
export interface FuturesResponse {
}
export interface OptionResponse {
}
export interface OptionsResponse {
}
export interface FilterOptionsRequest {
}
export interface ShareResponse {
}
export interface SharesResponse {
}
export interface GetAccruedInterestsRequest {
}
export interface GetAccruedInterestsResponse {
}
export interface GetFuturesMarginRequest {
}
export interface GetFuturesMarginResponse {
}
export interface InstrumentResponse {
}
export interface GetDividendsRequest {
}
export interface GetDividendsResponse {
}
export interface AssetRequest {
}
export interface AssetResponse {
}
export interface AssetsRequest {
}
export interface AssetsResponse {
}
export interface GetFavoritesRequest {
}
export interface GetFavoritesResponse {
}
export interface EditFavoritesRequest {
}
export interface EditFavoritesResponse {
}
export interface GetCountriesRequest {
}
export interface GetCountriesResponse {
}
export interface FindInstrumentRequest {
}
export interface FindInstrumentResponse {
}
export interface GetBrandsRequest {
}
export interface GetBrandsResponse {
}
export interface GetBrandRequest {
}
export interface Brand {
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
     * @see https://tinkoff.github.io/investAPI/instruments/#tradingschedules
     */
    TradingSchedules(body: TradingSchedulesRequest): Promise<TradingSchedulesResponse>;
    /**
     * Метод получения облигации по её идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#bondby
     */
    BondBy(body: InstrumentRequest): Promise<BondResponse>;
    /**
     * Метод получения списка облигаций
     * @see https://tinkoff.github.io/investAPI/instruments/#bonds
     */
    Bonds(body: InstrumentsRequest): Promise<BondsResponse>;
    /**
     * Метод получения графика выплат купонов по облигации
     * @see https://tinkoff.github.io/investAPI/instruments/#getbondcoupons
     */
    GetBondCoupons(body: GetBondCouponsRequest): Promise<GetBondCouponsResponse>;
    /**
     * Метод получения валюты по её идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#currencyby
     */
    CurrencyBy(body: InstrumentRequest): Promise<CurrencyResponse>;
    /**
     * Метод получения списка валют
     * @see https://tinkoff.github.io/investAPI/instruments/#currencies
     */
    Currencies(body: InstrumentsRequest): Promise<CurrenciesResponse>;
    /**
     * Метод получения инвестиционного фонда по его идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#etfby
     */
    EtfBy(body: InstrumentRequest): Promise<EtfResponse>;
    /**
     * Метод получения списка инвестиционных фондов
     * @see https://tinkoff.github.io/investAPI/instruments/#etfs
     */
    Etfs(body: InstrumentsRequest): Promise<EtfsResponse>;
    /**
     * Метод получения фьючерса по его идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#futureby
     */
    FutureBy(body: InstrumentRequest): Promise<FutureResponse>;
    /**
     * Метод получения списка фьючерсов
     * @see https://tinkoff.github.io/investAPI/instruments/#futures
     */
    Futures(body: InstrumentsRequest): Promise<FuturesResponse>;
    /**
     * Метод получения опциона по его идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#optionby
     */
    OptionBy(body: InstrumentRequest): Promise<OptionResponse>;
    /**
     * Метод получения списка опционов
     * @deprecated Deprecated
     * @see https://tinkoff.github.io/investAPI/instruments/#options
     */
    Options(body: InstrumentsRequest): Promise<OptionsResponse>;
    /**
     * Метод получения списка опционов
     * @see https://tinkoff.github.io/investAPI/instruments/#optionsby
     */
    OptionsBy(body: FilterOptionsRequest): Promise<OptionsResponse>;
    /**
     * Метод получения акции по её идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#shareby
     */
    ShareBy(body: InstrumentRequest): Promise<ShareResponse>;
    /**
     * Метод получения списка акций
     * @see https://tinkoff.github.io/investAPI/instruments/#shares
     */
    Shares(body: InstrumentsRequest): Promise<SharesResponse>;
    /**
     * Метод получения накопленного купонного дохода по облигации
     * @see https://tinkoff.github.io/investAPI/instruments/#getaccruedinterests
     */
    GetAccruedInterests(body: GetAccruedInterestsRequest): Promise<GetAccruedInterestsResponse>;
    /**
     * Метод получения размера гарантийного обеспечения по фьючерсам
     * @see https://tinkoff.github.io/investAPI/instruments/#getfuturesmargin
     */
    GetFuturesMargin(body: GetFuturesMarginRequest): Promise<GetFuturesMarginResponse>;
    /**
     * Метод получения основной информации об инструменте
     * @see https://tinkoff.github.io/investAPI/instruments/#getinstrumentby
     */
    GetInstrumentBy(body: InstrumentRequest): Promise<InstrumentResponse>;
    /**
     * Метод для получения событий выплаты дивидендов по инструменту
     * @see https://tinkoff.github.io/investAPI/instruments/#getdividends
     */
    GetDividends(body: GetDividendsRequest): Promise<GetDividendsResponse>;
    /**
     * Метод получения актива по его идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#getassetby
     */
    GetAssetBy(body: AssetRequest): Promise<AssetResponse>;
    /**
     * Метод получения списка активов
     * @description Метод работает для всех инструментов, за исключением срочных - опционов и фьючерсов
     * @see https://tinkoff.github.io/investAPI/instruments/#getassets
     */
    GetAssets(body: AssetsRequest): Promise<AssetsResponse>;
    /**
     * Метод получения списка избранных инструментов
     * @see https://tinkoff.github.io/investAPI/instruments/#getfavorites
     */
    GetFavorites(body: GetFavoritesRequest): Promise<GetFavoritesResponse>;
    /**
     * Метод редактирования списка избранных инструментов
     * @see https://tinkoff.github.io/investAPI/instruments/#editfavorites
     */
    EditFavorites(body: EditFavoritesRequest): Promise<EditFavoritesResponse>;
    /**
     * Метод получения списка стран
     * @see https://tinkoff.github.io/investAPI/instruments/#getcountries
     */
    GetCountries(body: GetCountriesRequest): Promise<GetCountriesResponse>;
    /**
     * Метод поиска инструмента
     * @see https://tinkoff.github.io/investAPI/instruments/#findinstrument
     */
    FindInstrument(body: FindInstrumentRequest): Promise<FindInstrumentResponse>;
    /**
     * Метод получения списка брендов
     * @see https://tinkoff.github.io/investAPI/instruments/#getbrands
     */
    GetBrands(body: GetBrandsRequest): Promise<GetBrandsResponse>;
    /**
     * Метод получения бренда по его идентификатору
     * @see https://tinkoff.github.io/investAPI/instruments/#getbrandby
     */
    GetBrandBy(body: GetBrandRequest): Promise<Brand>;
}
