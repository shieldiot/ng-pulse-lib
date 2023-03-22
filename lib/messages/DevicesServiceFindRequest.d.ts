import { DeviceStatusCode } from '../enums/DeviceStatusCode';
import { DeviceTypeCode } from '../enums/DeviceTypeCode';
export declare class DevicesServiceFindRequest {
    streamId: string;
    search: string;
    type: DeviceTypeCode[];
    status: DeviceStatusCode[];
    sort: string;
    page: number;
    size: number;
    constructor(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], sort?: string, page?: number, size?: number);
}
