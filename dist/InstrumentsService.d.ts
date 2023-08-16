import { Common } from './Common';
export declare enum InstrumentType {
    INSTRUMENT_TYPE_UNSPECIFIED = 0,
    INSTRUMENT_TYPE_BOND = 1,
    INSTRUMENT_TYPE_SHARE = 2,
    INSTRUMENT_TYPE_CURRENCY = 3,
    INSTRUMENT_TYPE_ETF = 4,
    INSTRUMENT_TYPE_FUTURES = 5,
    INSTRUMENT_TYPE_SP = 6,
    INSTRUMENT_TYPE_OPTION = 7,
    INSTRUMENT_TYPE_CLEARING_CERTIFICATE = 8
}
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
export declare class InstrumentsService extends Common {
    TradingSchedules(body: TradingSchedulesRequest): Promise<TradingSchedulesResponse>;
    BondBy(body: InstrumentRequest): Promise<BondResponse>;
    Bonds(body: InstrumentsRequest): Promise<BondsResponse>;
    GetBondCoupons(body: GetBondCouponsRequest): Promise<GetBondCouponsResponse>;
    CurrencyBy(body: InstrumentRequest): Promise<CurrencyResponse>;
    Currencies(body: InstrumentsRequest): Promise<CurrenciesResponse>;
    EtfBy(body: InstrumentRequest): Promise<EtfResponse>;
    Etfs(body: InstrumentsRequest): Promise<EtfsResponse>;
    FutureBy(body: InstrumentRequest): Promise<FutureResponse>;
    Futures(body: InstrumentsRequest): Promise<FuturesResponse>;
    OptionBy(body: InstrumentRequest): Promise<OptionResponse>;
    Options(body: InstrumentsRequest): Promise<OptionsResponse>;
    OptionsBy(body: FilterOptionsRequest): Promise<OptionsResponse>;
    ShareBy(body: InstrumentRequest): Promise<ShareResponse>;
    Shares(body: InstrumentsRequest): Promise<SharesResponse>;
    GetAccruedInterests(body: GetAccruedInterestsRequest): Promise<GetAccruedInterestsResponse>;
    GetFuturesMargin(body: GetFuturesMarginRequest): Promise<GetFuturesMarginResponse>;
    GetInstrumentBy(body: InstrumentRequest): Promise<InstrumentResponse>;
    GetDividends(body: GetDividendsRequest): Promise<GetDividendsResponse>;
    GetAssetBy(body: AssetRequest): Promise<AssetResponse>;
    GetAssets(body: AssetsRequest): Promise<AssetsResponse>;
    GetFavorites(body: GetFavoritesRequest): Promise<GetFavoritesResponse>;
    EditFavorites(body: EditFavoritesRequest): Promise<EditFavoritesResponse>;
    GetCountries(body: GetCountriesRequest): Promise<GetCountriesResponse>;
    FindInstrument(body: FindInstrumentRequest): Promise<FindInstrumentResponse>;
    GetBrands(body: GetBrandsRequest): Promise<GetBrandsResponse>;
    GetBrandBy(body: GetBrandRequest): Promise<Brand>;
}
