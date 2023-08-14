import { Core } from '../Core';
import { GetOrdersRequest, GetOrdersResponse, Orders } from './Orders';
/**
 * Сервис для работы с песочницей TINKOFF INVEST API
 */
export declare class SandboxService extends Core implements Orders {
    GetOrders(body: GetOrdersRequest): Promise<GetOrdersResponse>;
}
