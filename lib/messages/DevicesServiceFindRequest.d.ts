import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { DeviceStatusCode } from '../enums/DeviceStatusCode';
export declare class DevicesServiceFindRequest {
    accountId: string;
    streamId: string;
    search: string;
    type: DeviceTypeCode[];
    status: DeviceStatusCode[];
    sort: string;
    page: number;
    size: number;
    constructor(accountId?: string, streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], sort?: string, page?: number, size?: number);
}
