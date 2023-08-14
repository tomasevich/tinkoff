/**
 * Список Сервисов
 */
export type Service =
  | 'InstrumentsService'
  | 'MarketDataService'
  | 'OperationsService'
  | 'OrdersService'
  | 'SandboxService'
  | 'StopOrdersService'
  | 'UsersService'

/**
 * Список методов
 */
export type Method =
  | 'GetOrders'
  | 'GetSandboxOrders'
  | 'OpenSandboxAccount'
  | 'CloseSandboxAccount'
  | 'GetSandboxAccounts'
  | 'PostSandboxOrder'

/**
 * Статус безопасной торговли
 */
export enum SecurityTradingStatus {
  /**
   * Торговый статус не определён
   */
  SECURITY_TRADING_STATUS_UNSPECIFIED,

  /**
   * Недоступен для торгов
   */
  SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING,

  /**
   * Период открытия торгов
   */
  SECURITY_TRADING_STATUS_OPENING_PERIOD,

  /**
   * Период закрытия торгов
   */
  SECURITY_TRADING_STATUS_CLOSING_PERIOD,

  /**
   * Перерыв в торговле
   */
  SECURITY_TRADING_STATUS_BREAK_IN_TRADING,

  /**
   * Нормальная торговля
   */
  SECURITY_TRADING_STATUS_NORMAL_TRADING,

  /**
   * Аукцион закрытия
   */
  SECURITY_TRADING_STATUS_CLOSING_AUCTION,

  /**
   * Аукцион крупных пакетов
   */
  SECURITY_TRADING_STATUS_DARK_POOL_AUCTION,

  /**
   * Дискретный аукцион
   */
  SECURITY_TRADING_STATUS_DISCRETE_AUCTION,

  /**
   * Аукцион открытия
   */
  SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD,

  /**
   * Период торгов по цене аукциона закрытия
   */
  SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE,

  /**
   * Сессия назначена
   */
  SECURITY_TRADING_STATUS_SESSION_ASSIGNED,

  /**
   * Сессия закрыта
   */
  SECURITY_TRADING_STATUS_SESSION_CLOSE,

  /**
   * Сессия открыта
   */
  SECURITY_TRADING_STATUS_SESSION_OPEN,

  /**
   * Доступна торговля в режиме внутренней ликвидности брокера
   */
  SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING,

  /**
   * Перерыв торговли в режиме внутренней ликвидности брокера
   */
  SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING,

  /**
   * Недоступна торговля в режиме внутренней ликвидности брокера
   */
  SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING
}

/**
 * Денежная сумма в определенной валюте
 *
 * @see https://tinkoff.github.io/investAPI/common/#moneyvalue
 */
export interface MoneyValue {
  /**
   * Строковый ISO-код валюты
   */
  currency: string

  /**
   * Целая часть суммы, может быть отрицательным числом
   *
   * @remarks Число в формате `int64`
   */
  units: string

  /**
   * Дробная часть суммы, может быть отрицательным числом
   *
   * @remarks Число в формате `int32`
   */
  nano: number
}

/**
 * Котировка - денежная сумма без указания валюты
 */
export interface Quotation {
  /**
   * Целая часть суммы, может быть отрицательным числом
   *
   * @remarks Число в формате `int64`
   */
  units: string

  /**
   * Дробная часть суммы, может быть отрицательным числом
   *
   * @remarks Число в формате `int32`
   */
  nano: number
}

/**
 * Общий класс для взаимодействия с сервисами Tinkoff Invest API
 */
export class Common {
  /**
   * Публичный адрес работы с Биржей
   */
  private public = 'https://invest-public-api.tinkoff.ru'

  /**
   * Адрес для работы в Песочнице
   */
  private sandbox = 'https://sandbox-invest-public-api.tinkoff.ru'

  /**
   * Конструктор
   *
   * @param {string} token Токен приложения
   * @param {boolean} isSandbox Флаг включения режима "Песочницы"
   */
  constructor(private token: string, private isSandbox: boolean) {}

  /**
   * Метод HTTPs запроса к Tinkoff Invest API
   *
   * @param {Service} service Имя сервиса
   * @param {Method} method Метод сервиса
   * @param {any} body Тело запроса
   *
   * @returns {Promise<any>}
   */
  protected request(service: Service, method: Method, body: any): Promise<any> {
    const server = this.isSandbox ? this.sandbox : this.public
    const contract = '/rest/tinkoff.public.invest.api.contract.v1.'

    const url = server + contract + service + '/' + method
    const opt = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`
      },
      body: JSON.stringify(body)
    }

    return fetch(url, opt)
  }
}
