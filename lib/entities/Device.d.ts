import { BaseEntity } from '../entities/BaseEntity';
import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { DeviceStatusCode } from '../enums/DeviceStatusCode';
import { DeviceActionCode } from '../enums/DeviceActionCode';
export declare class Device extends BaseEntity {
    accountId: string;
    streamId: string;
    name: string;
    description: string;
    type: DeviceTypeCode;
    status: DeviceStatusCode;
    lastActivity: number;
    mac: string;
    ip: string;
    sid: string;
    eid: string;
    score: number;
    tags: string[];
    eventCount: number;
    actionApplied: DeviceActionCode;
    actionAppliedBy: string;
    actionAppliedOn: number;
}
