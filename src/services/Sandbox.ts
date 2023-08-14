import { Core } from '../Core'
import { GetOrdersRequest, GetOrdersResponse, Orders } from './Orders'

/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 *
 * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
 */
export class SandboxService extends Core implements Orders {
  public GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse> {
    return this.request('SandboxService', 'GetSandboxOrders', body)
  }
}
