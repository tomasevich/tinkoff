import { Common } from './Common'

/** Тип счёта */
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

/** Статус счёта */
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

/** Уровень доступа к счёту */
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

/** Информация о счёте */
export interface Account {
  /** Идентификатор счёта */
  id: string
  /**
   * Тип счёта
   * @default ACCOUNT_TYPE_UNSPECIFIED
   */
  type: AccountType
  /** Название счёта */
  name: string
  /**
   * Статус счёта
   * @default ACCOUNT_STATUS_UNSPECIFIED
   */
  status: AccountStatus
  /** Дата открытия счёта в часовом поясе UTC */
  openedDate: string
  /** Дата закрытия счёта в часовом поясе UTC */
  closedDate: string
  /**
   * Уровень доступа к счёту
   * @default ACCOUNT_ACCESS_LEVEL_UNSPECIFIED
   */
  accessLevel: AccessLevel
}

/** Запрос получения счетов пользователя */
export interface GetAccountsRequest {
  /**
   * @remarks Пустой запрос
   */
}

/** Список счетов пользователя */
export interface GetAccountsResponse {
  /** Массив счетов клиента */
  accounts: Account[]
}

/** Интерфейс сервиса Пользователей */
export interface Users {
  /**
   * Метод получения счетов в песочнице
   * @param {GetAccountsRequest} body Тело запроса
   * @returns Массив счетов клиента
   * @see https://tinkoff.github.io/investAPI/users/#getaccounts
   * @example
   * ```js
   * const usersService = new UsersService('<TOKEN>', false)
   * usersService.GetAccounts({})
   *   .then(response => response.json())
   *   .then(data => console.log(data))
   * ```
   */
  GetAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse>
}

/**
 * Сервис предназначен для получения:
 * 1. списка счетов пользователя;
 * 2. маржинальных показателей по счёту.
 * @see https://tinkoff.github.io/investAPI/users/#usersservice
 */
export class UsersService extends Common implements Users {
  public GetAccounts(body: GetAccountsRequest): Promise<GetAccountsResponse> {
    return this.request('UsersService', 'GetAccounts', body)
  }
}
