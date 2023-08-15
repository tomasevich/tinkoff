import { Common } from './Common'

export interface TradingSchedulesRequest {}

export interface TradingSchedulesResponse {}

export interface InstrumentRequest {}

export interface BondResponse {}

export interface InstrumentsRequest {}

export interface BondsResponse {}

export interface GetBondCouponsRequest {}

export interface GetBondCouponsResponse {}

export interface CurrencyResponse {}

export interface CurrenciesResponse {}

export interface EtfResponse {}

export interface EtfsResponse {}

export interface FutureResponse {}

export interface FuturesResponse {}

export interface OptionResponse {}

export interface OptionsResponse {}

export interface FilterOptionsRequest {}

export interface ShareResponse {}

export interface SharesResponse {}

export interface GetAccruedInterestsRequest {}

export interface GetAccruedInterestsResponse {}

export interface GetFuturesMarginRequest {}

export interface GetFuturesMarginResponse {}

export interface InstrumentResponse {}

export interface GetDividendsRequest {}

export interface GetDividendsResponse {}

export interface AssetRequest {}

export interface AssetResponse {}

export interface AssetsRequest {}

export interface AssetsResponse {}

export interface GetFavoritesRequest {}

export interface GetFavoritesResponse {}

export interface EditFavoritesRequest {}

export interface EditFavoritesResponse {}

export interface GetCountriesRequest {}

export interface GetCountriesResponse {}

export interface FindInstrumentRequest {}

export interface FindInstrumentResponse {}

export interface GetBrandsRequest {}

export interface GetBrandsResponse {}

export interface GetBrandRequest {}

export interface Brand {}

export class InstrumentsService extends Common {
  TradingSchedules(
    body: TradingSchedulesRequest
  ): Promise<TradingSchedulesResponse> {
    return this.request('InstrumentsService', 'TradingSchedules', body)
  }

  BondBy(body: InstrumentRequest): Promise<BondResponse> {
    return this.request('InstrumentsService', 'BondBy', body)
  }

  Bonds(body: InstrumentsRequest): Promise<BondsResponse> {
    return this.request('InstrumentsService', 'Bonds', body)
  }

  GetBondCoupons(body: GetBondCouponsRequest): Promise<GetBondCouponsResponse> {
    return this.request('InstrumentsService', 'GetBondCoupons', body)
  }

  CurrencyBy(body: InstrumentRequest): Promise<CurrencyResponse> {
    return this.request('InstrumentsService', 'CurrencyBy', body)
  }

  Currencies(body: InstrumentsRequest): Promise<CurrenciesResponse> {
    return this.request('InstrumentsService', 'Currencies', body)
  }

  EtfBy(body: InstrumentRequest): Promise<EtfResponse> {
    return this.request('InstrumentsService', 'EtfBy', body)
  }

  Etfs(body: InstrumentsRequest): Promise<EtfsResponse> {
    return this.request('InstrumentsService', 'Etfs', body)
  }

  FutureBy(body: InstrumentRequest): Promise<FutureResponse> {
    return this.request('InstrumentsService', 'FutureBy', body)
  }

  Futures(body: InstrumentsRequest): Promise<FuturesResponse> {
    return this.request('InstrumentsService', 'Futures', body)
  }

  OptionBy(body: InstrumentRequest): Promise<OptionResponse> {
    return this.request('InstrumentsService', 'OptionBy', body)
  }

  Options(body: InstrumentsRequest): Promise<OptionsResponse> {
    return this.request('InstrumentsService', 'Options', body)
  }

  OptionsBy(body: FilterOptionsRequest): Promise<OptionsResponse> {
    return this.request('InstrumentsService', 'OptionsBy', body)
  }

  ShareBy(body: InstrumentRequest): Promise<ShareResponse> {
    return this.request('InstrumentsService', 'ShareBy', body)
  }

  Shares(body: InstrumentsRequest): Promise<SharesResponse> {
    return this.request('InstrumentsService', 'Shares', body)
  }

  GetAccruedInterests(
    body: GetAccruedInterestsRequest
  ): Promise<GetAccruedInterestsResponse> {
    return this.request('InstrumentsService', 'GetAccruedInterests', body)
  }

  GetFuturesMargin(
    body: GetFuturesMarginRequest
  ): Promise<GetFuturesMarginResponse> {
    return this.request('InstrumentsService', 'GetFuturesMargin', body)
  }

  GetInstrumentBy(body: InstrumentRequest): Promise<InstrumentResponse> {
    return this.request('InstrumentsService', 'GetInstrumentBy', body)
  }

  GetDividends(body: GetDividendsRequest): Promise<GetDividendsResponse> {
    return this.request('InstrumentsService', 'GetDividends', body)
  }

  GetAssetBy(body: AssetRequest): Promise<AssetResponse> {
    return this.request('InstrumentsService', 'GetAssetBy', body)
  }

  GetAssets(body: AssetsRequest): Promise<AssetsResponse> {
    return this.request('InstrumentsService', 'GetAssets', body)
  }

  GetFavorites(body: GetFavoritesRequest): Promise<GetFavoritesResponse> {
    return this.request('InstrumentsService', 'GetFavorites', body)
  }

  EditFavorites(body: EditFavoritesRequest): Promise<EditFavoritesResponse> {
    return this.request('InstrumentsService', 'EditFavorites', body)
  }

  GetCountries(body: GetCountriesRequest): Promise<GetCountriesResponse> {
    return this.request('InstrumentsService', 'GetCountries', body)
  }

  FindInstrument(body: FindInstrumentRequest): Promise<FindInstrumentResponse> {
    return this.request('InstrumentsService', 'FindInstrument', body)
  }

  GetBrands(body: GetBrandsRequest): Promise<GetBrandsResponse> {
    return this.request('InstrumentsService', 'GetBrands', body)
  }

  GetBrandBy(body: GetBrandRequest): Promise<Brand> {
    return this.request('InstrumentsService', 'GetBrandBy', body)
  }
}
