import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { DeviceStatusCode } from '../enums/DeviceStatusCode';
import { Event } from '../entities/Event';
import { DeviceActionCode } from '../enums/DeviceActionCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class DeviceWithEvents extends BaseEntity {
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
    events: Event[];
    recommendedAction: string;
    actionApplied: DeviceActionCode;
    actionAppliedBy: string;
    actionAppliedOn: number;
}
