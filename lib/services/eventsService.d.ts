import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Event } from '../entities/Event';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import * as i0 from "@angular/core";
export declare class EventsService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Get single event by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Event>>;
    /**
     * Find list of events by query
     */
    find(streamId?: string, deviceId?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Event>>;
    /**
     * Set event status
     */
    applyAction(id?: string, status?: EventStatusCode): import("rxjs").Observable<ActionResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EventsService>;
}
