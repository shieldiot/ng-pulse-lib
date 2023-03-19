import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class EventsServiceFindRequest {
    accountId: string;
    streamId: string;
    deviceId: string;
    from: number;
    to: number;
    type: EventTypeCode[];
    severity: SeverityTypeCode[];
    sort: string;
    page: number;
    size: number;
    constructor(accountId?: string, streamId?: string, deviceId?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, size?: number);
}
