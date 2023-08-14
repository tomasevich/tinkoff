import { Common } from './Common'
import { GetOrdersRequest, GetOrdersResponse, Orders } from './OrdersService'

/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 *
 * @see https://tinkoff.github.io/investAPI/sandbox/#getsandboxorders
 */
export class SandboxService extends Common implements Orders {
  public GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse> {
    return this.request('SandboxService', 'GetSandboxOrders', body)
  }
}
