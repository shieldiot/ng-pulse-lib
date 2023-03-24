import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Event } from '../entities/Event';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventWithDevice } from '../entities/EventWithDevice';
import { IntDistribution } from '../entities/IntDistribution';
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
    find(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Event>>;
    /**
     * Find top 10 events by their severity filter by query
     */
    getTop(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<EventWithDevice>>;
    /**
     * Find events distribution by type filtered by query
     */
    countByType(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find events distribution by status filtered by query
     */
    countByStatus(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find events distribution by severity filtered by query
     */
    countBySeverity(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find events distribution by rule filtered by query
     */
    countByRule(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Find events distribution by category filtered by query
     */
    countByCategory(streamId?: string, deviceId?: string, search?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntityResponse<IntDistribution>>;
    /**
     * Set event status
     */
    applyAction(id?: string, status?: EventStatusCode): import("rxjs").Observable<ActionResponse>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EventsService>;
}
