import { Common, MoneyValue, Quotation } from './Common'

/**
 * Тип счёта
 * @see https://tinkoff.github.io/investAPI/users/#accounttype
 */
export enum AccountType {
  /** Тип аккаунта не определён */
  ACCOUNT_TYPE_UNSPECIFIED,
  /** Брокерский счёт Тинькофф */
  ACCOUNT_TYPE_TINKOFF,
  /** ИИС счёт */
  ACCOUNT_TYPE_TINKOFF_IIS,
  /** Инвесткопилка */
  ACCOUNT_TYPE_INVEST_BOX
}

/**
 * Статус счёта
 * @see https://tinkoff.github.io/investAPI/users/#accountstatus
 */
export enum AccountStatus {
  /** Статус счёта не определён */
  ACCOUNT_STATUS_UNSPECIFIED,
  /** Новый, в процессе открытия */
  ACCOUNT_STATUS_NEW,
  /** Открытый и активный счёт */
  ACCOUNT_STATUS_OPEN,
  /** Закрытый счёт */
  ACCOUNT_STATUS_CLOSED
}

/**
 * Уровень доступа к счёту
 * @see https://tinkoff.github.io/investAPI/users/#accesslevel
 */
export enum AccessLevel {
  /** Уровень доступа не определён */
  ACCOUNT_ACCESS_LEVEL_UNSPECIFIED,
  /** Полный доступ к счёту */
  ACCOUNT_ACCESS_LEVEL_FULL_ACCESS,
  /** Доступ с уровнем прав "только чтение" */
  ACCOUNT_ACCESS_LEVEL_READ_ONLY,
  /** Доступ отсутствует */
  ACCOUNT_ACCESS_LEVEL_NO_ACCESS
}

/**
 * Информация о счёте
 * @see https://tinkoff.github.io/investAPI/users/#account
 */
export interface Account {
  /** Идентификатор счёта */
  id: string
  /** Тип счёта */
  type: AccountType
  /** Название счёта */
  name: string
  /** Статус счёта */
  status: AccountStatus
  /**
   * Дата открытия счёта в часовом поясе UTC
   * @remarks `google.protobuf.Timestamp`
   */
  openedDate: string
  /** Уровень доступа к текущему счёту (определяется токеном) */
  accessLevel: AccessLevel
  /**
   * Дата закрытия счёта в часовом поясе UTC
   * @remarks `google.protobuf.Timestamp`
   */
  closedDate?: string
}

/**
 * Запрос получения счетов пользователя
 * @see https://tinkoff.github.io/investAPI/users/#getaccountsrequest
 */
export interface GetAccountsRequest {}

/**
 * Список счетов пользователя
 * @see https://tinkoff.github.io/investAPI/users/#getaccountsresponse
 */
export interface GetAccountsResponse {
  /** Массив счетов клиента */
  accounts: Account[]
}

/**
 * Запрос маржинальных показателей по счёту
 * @see https://tinkoff.github.io/investAPI/users/#getmarginattributesrequest
 */
export interface GetMarginAttributesRequest {
  /** Идентификатор счёта пользователя */
  accountId: string
}

/**
 * Маржинальные показатели по счёту
 * @see https://tinkoff.github.io/investAPI/users/#getmarginattributesresponse
 */
export interface GetMarginAttributesResponse {
  /** Ликвидная стоимость портфеля */
  liquidPortfolio: MoneyValue
  /** Начальная маржа — начальное обеспечение для совершения новой сделки */
  startingMargin: MoneyValue
  /** Минимальная маржа — это минимальное обеспечение для поддержания позиции, которую вы уже открыли */
  minimalMargin: MoneyValue
  /**
   * Уровень достаточности средств
   * @description Соотношение стоимости ликвидного портфеля к начальной марже
   */
  fundsSufficiencyLevel: Quotation
  /**
   * Объем недостающих средств
   * @description Разница между стартовой маржой и ликвидной стоимости портфеля
   */
  amountOfMissingFunds: MoneyValue
  /**
   * Скорректированная маржа
   * @description Начальная маржа, в которой плановые позиции рассчитываются с учётом активных заявок на покупку позиций лонг или продажу позиций шорт
   */
  correctedMargin: MoneyValue
}

/**
 * Лимит unary-методов
 * @see https://tinkoff.github.io/investAPI/users/#unarylimit
 */
export interface UnaryLimit {
  /**
   * Количество unary-запросов в минуту
   * @remarks `int32`
   */
  limitPerMinute: number
  /** Названия методов */
  methods: string[]
}

/**
 * Лимит stream-соединений
 * @see https://tinkoff.github.io/investAPI/users/#streamlimit
 */
export interface StreamLimit {
  /**
   * Максимальное количество stream-соединений
   * @remarks `int32`
   */
  limit: number
  /** Названия stream-методов */
  streams: string[]
  /**
   * Текущее количество открытых stream-соединений
   * @remarks `int32`
   */
  open: number
}

/**
 * Запрос текущих лимитов пользователя
 * @see https://tinkoff.github.io/investAPI/users/#getusertariffrequest
 */
export interface GetUserTariffRequest {}

/**
 * Текущие лимиты пользователя
 * @see https://tinkoff.github.io/investAPI/users/#getusertariffresponse
 */
export interface GetUserTariffResponse {
  /** Массив лимитов пользователя по unary-запросам */
  unaryLimits: UnaryLimit[]
  /** Массив лимитов пользователей для stream-соединений */
  streamLimits: StreamLimit[]
}

/**
 * Запрос информации о пользователе
 * @see https://tinkoff.github.io/investAPI/users/#getinforequest
 */
export interface GetInfoRequest {}

/**
 * Информация о пользователе
 * @see https://tinkoff.github.io/investAPI/users/#getinforesponse
 */
export interface GetInfoResponse {
  /** Признак премиум клиента */
  premStatus: boolean
  /** Признак квалифицированного инвестора */
  qualStatus: boolean
  /** Набор требующих тестирования инструментов и возможностей, с которыми может работать пользователь */
  qualifiedForWorkWith: string[]
  /** Наименование тарифа пользователя */
  tariff: string
}

/**
 * Сервис предназначен для получения:
 * 1. списка счетов пользователя;
 * 2. маржинальных показателей по счёту.
 * @see https://tinkoff.github.io/investAPI/users/#usersservice
 */
export class UsersService extends Common {
  /**
   * Метод получения счетов пользователя
   * ```js
   * import { UsersService } from '@tomasevich/tinkoff'
   *
   * const usersService = new UsersService('TOKEN', false)
   * const { accounts } = await usersService.GetAccounts({})
   *
   * console.log(accounts)
   * ```
   * @see https://tinkoff.github.io/investAPI/users/#getaccounts
   */
  public GetAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse> {
    return this.request('UsersService', 'GetAccounts', body)
  }

  /**
   * Расчёт маржинальных показателей по счёту
   * ```js
   * import { UsersService } from '@tomasevich/tinkoff'
   *
   * const usersService = new UsersService('TOKEN', false)
   * const marginAttributes = await usersService.GetMarginAttributes({ accountId: 'ACCOUNT_ID' })
   *
   * console.log(marginAttributes)
   * ```
   * @see https://tinkoff.github.io/investAPI/users/#getmarginattributes
   */
  public GetMarginAttributes(
    body: GetMarginAttributesRequest
  ): Promise<GetMarginAttributesResponse> {
    return this.request('UsersService', 'GetMarginAttributes', body)
  }

  /**
   * Запрос тарифа пользователя
   * ```js
   * import { UsersService } from '@tomasevich/tinkoff'
   *
   * const usersService = new UsersService('TOKEN', false)
   * const userTariff = await usersService.GetUserTariff({})
   *
   * console.log(userTariff)
   * ```
   * @see https://tinkoff.github.io/investAPI/users/#getusertariff
   */
  public GetUserTariff(
    body: GetUserTariffRequest
  ): Promise<GetUserTariffResponse> {
    return this.request('UsersService', 'GetUserTariff', body)
  }

  /**
   * Метод получения информации о пользователе
   * ```js
   * import { UsersService } from '@tomasevich/tinkoff'
   *
   * const usersService = new UsersService('TOKEN', false)
   * const info = await usersService.GetInfo({})
   *
   * console.log(info)
   * ```
   * @see https://tinkoff.github.io/investAPI/users/#getinfo
   */
  public GetInfo(body: GetInfoRequest): Promise<GetInfoResponse> {
    return this.request('UsersService', 'GetInfo', body)
  }
}
