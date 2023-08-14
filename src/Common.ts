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
export type Method = 'GetOrders' | 'GetSandboxOrders'

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
