import { RestUtil } from '../../utils/rest-util';
import { PulseConfig } from '../../config';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import * as i0 from "@angular/core";
export declare class EventsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Get single event by id
     * @Return: EntityResponse<Event>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of events by query
     * @Return: EntitiesResponse<Event>
     */
    find(streamId?: string, deviceId?: string, from?: number, to?: number, type?: EventTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<any>;
    /**
     * Set event status
     * @Return: ActionResponse
     */
    applyAction(id?: string, status?: EventStatusCode): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EventsService>;
}
