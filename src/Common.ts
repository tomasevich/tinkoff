export enum SecurityTradingStatus {
  SECURITY_TRADING_STATUS_UNSPECIFIED,
  SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING,
  SECURITY_TRADING_STATUS_OPENING_PERIOD,
  SECURITY_TRADING_STATUS_CLOSING_PERIOD,
  SECURITY_TRADING_STATUS_BREAK_IN_TRADING,
  SECURITY_TRADING_STATUS_NORMAL_TRADING,
  SECURITY_TRADING_STATUS_CLOSING_AUCTION,
  SECURITY_TRADING_STATUS_DARK_POOL_AUCTION,
  SECURITY_TRADING_STATUS_DISCRETE_AUCTION,
  SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD,
  SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE,
  SECURITY_TRADING_STATUS_SESSION_ASSIGNED,
  SECURITY_TRADING_STATUS_SESSION_CLOSE,
  SECURITY_TRADING_STATUS_SESSION_OPEN,
  SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING,
  SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING,
  SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING
}

export interface MoneyValue {
  currency: string
  units: string
  nano: number
}

export interface Quotation {
  units: string
  nano: number
}

export class Common {
  private production = 'https://invest-public-api.tinkoff.ru'
  private development = 'https://sandbox-invest-public-api.tinkoff.ru'

  constructor(private token: string, private isSandbox: boolean) {}

  protected request(service: string, method: string, body: any): Promise<any> {
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

    return fetch(url, opt)
  }
}
