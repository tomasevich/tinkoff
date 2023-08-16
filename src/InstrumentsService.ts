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
