import { DeviceActionCode } from '../enums/DeviceActionCode';
export declare class DevicesServiceActionRequest {
    id: string;
    action: DeviceActionCode;
    constructor(id?: string, action?: DeviceActionCode);
}
