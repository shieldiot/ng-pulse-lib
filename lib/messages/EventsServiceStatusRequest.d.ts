import { EventStatusCode } from '../enums/EventStatusCode';
export declare class EventsServiceStatusRequest {
    id: string;
    status: EventStatusCode;
    constructor(id?: string, status?: EventStatusCode);
}
