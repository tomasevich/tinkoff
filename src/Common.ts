/**
 * Торговый статус
 * @see https://tinkoff.github.io/investAPI/common/#securitytradingstatus
 */
export enum SecurityTradingStatus {
  /** Торговый статус не определён */
  SECURITY_TRADING_STATUS_UNSPECIFIED,
  /** Недоступен для торгов */
  SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING,
  /** Период открытия торгов */
  SECURITY_TRADING_STATUS_OPENING_PERIOD,
  /** Период закрытия торгов */
  SECURITY_TRADING_STATUS_CLOSING_PERIOD,
  /** Перерыв в торговле */
  SECURITY_TRADING_STATUS_BREAK_IN_TRADING,
  /** Нормальная торговля */
  SECURITY_TRADING_STATUS_NORMAL_TRADING,
  /** Аукцион закрытия */
  SECURITY_TRADING_STATUS_CLOSING_AUCTION,
  /** Аукцион крупных пакетов */
  SECURITY_TRADING_STATUS_DARK_POOL_AUCTION,
  /** Дискретный аукцион */
  SECURITY_TRADING_STATUS_DISCRETE_AUCTION,
  /** Аукцион открытия */
  SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD,
  /** Период торгов по цене аукциона закрытия */
  SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE,
  /** Сессия назначена */
  SECURITY_TRADING_STATUS_SESSION_ASSIGNED,
  /** Сессия закрыта */
  SECURITY_TRADING_STATUS_SESSION_CLOSE,
  /** Сессия открыта */
  SECURITY_TRADING_STATUS_SESSION_OPEN,
  /** Доступна торговля в режиме внутренней ликвидности брокера */
  SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING,
  /** Перерыв торговли в режиме внутренней ликвидности брокера */
  SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING,
  /** Недоступна торговля в режиме внутренней ликвидности брокера */
  SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING
}

/**
 * Денежная сумма в определенной валюте
 * @see https://tinkoff.github.io/investAPI/common/#moneyvalue
 */
export interface MoneyValue {
  /** Строковый ISO-код валюты */
  currency: string
  /**
   * Целая часть суммы, может быть отрицательным числом
   * @type `int64`
   */
  units: string
  /**
   * Дробная часть суммы, может быть отрицательным числом
   * @type `int32`
   */
  nano: string
}

/**
 * Котировка - денежная сумма без указания валюты
 * @see https://tinkoff.github.io/investAPI/common/#quotation
 */
export interface Quotation {
  /**
   * Целая часть суммы, может быть отрицательным числом
   * @type `int64`
   */
  units: string
  /**
   * Дробная часть суммы, может быть отрицательным числом
   * @type `int32`
   */
  nano: string
}

/**
 * Общий класс
 * 1. Позволяет сделать `HTTP` запрос к серверу **Tinkoff Invest API**
 * 2. Конвертировать `MoneyValue` и `Quotation` в обе стороны
 */
export class Common {
  /**
   * Продуктивный сервер
   */
  private production = 'https://invest-public-api.tinkoff.ru'

  /**
   * Сервер песочницы
   */
  private development = 'https://sandbox-invest-public-api.tinkoff.ru'

  /**
   * Конструктор
   * ```js
   * import { SandboxService } from '@tomasevich/tinkoff'
   *
   * // Для работы с реальными данными
   * const realServer = new SandboxService('<REAL_TOKEN>', false)
   *
   * // Для работы с данными в тестовом режиме
   * const sandboxServer = new SandboxService('<SANDBOX_TOKEN>', true)
   * ```
   * @param token Токен приложения
   * @param isSandbox Флаг включения режима `Песочницы`
   */
  constructor(private token: string, private isSandbox: boolean) {}

  /**
   * Метод `HTTP` запроса к серверу **Tinkoff Invest API**
   * ```js
   * import { Common } from '@tomasevich/tinkoff'
   *
   * class Application extends Common {
   *  public SandboxService(body) {
   *    return this.request('SandboxService', 'GetSandboxOrders', body)
   *  }
   * }
   *
   * const app = new Application('<TOKEN>', true)
   * const { orders } = await app.SandboxService({
   *  accountId: '<ACCOUNT_ID>'
   * })
   *
   * console.log(orders)
   * ```
   * @param service Имя сервиса
   * @param method Имя метода
   * @param body Тело запроса
   */
  protected async request(
    service: string,
    method: string,
    body: any
  ): Promise<any> {
    const server = this.isSandbox ? this.development : this.production
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

    const res = await fetch(url, opt)
    return res.json()
  }

  /**
   * Статичный метод конвертирования денежной суммы в определенной валюте в строку
   * ```js
   * import { Common } from '@tomasevich/tinkoff'
   *
   * const moneyValue = { units: "100", nano: 500000000, currency: 'rub' }
   *
   * console.log(Common.MoneyValueToString(moneyValue)) // 100.0 rub
   * ```
   */
  public static MoneyValueToString(moneyValue: MoneyValue): string {
    return `${moneyValue.units}.${moneyValue.nano} ${moneyValue.currency}`
  }

  /**
   * Статичный метод конвертирования котировки в строку
   * ```js
   * import { Common } from '@tomasevich/tinkoff'
   *
   * const quotation = { units: "100", nano: 500000000 }
   *
   * console.log(Common.QuotationToString(quotation)) // 100.0
   * ```
   */
  public static QuotationToString(quotation: Quotation): string {
    return `${moneyValue.units}.${moneyValue.nano}`
  }

  /**
   * Статичный метод конвертирования строки в денежную сумму в определенной валюте
   * ```js
   * import { Common } from '@tomasevich/tinkoff'
   *
   * const moneyValue = '100.0 rub'
   *
   * console.log(Common.StringToMoneyValue(moneyValue)) // { units: '100', nano: 500000000, currency: 'rub' }
   * ```
   */
  public static StringToMoneyValue(moneyValue: string): MoneyValue {
    /** @todo написать логику */
    return { units: '100', nano: 500000000, currency: 'rub' }
  }

  /**
   * Статичный метод конвертирования строки в котировку
   * ```js
   * import { Common } from '@tomasevich/tinkoff'
   *
   * const quotation = '100.0'
   *
   * console.log(Common.StringToQuotation(quotation)) // { units: '100', nano: 500000000 }
   * ```
   */
  public static StringToQuotation(quotation: string): Quotation {
    /** @todo написать логику */
    return { units: '100', nano: 500000000 }
  }
}
