import { RestUtil } from '../../utils/rest-util';
import { PulseConfig } from '../../config';
import { Stream } from '../entities/Stream';
import * as i0 from "@angular/core";
export declare class SysStreamsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new stream
     * @Return: EntityResponse<Stream>
     */
    create(body?: Stream): import("rxjs").Observable<any>;
    /**
     * Update existing stream in the system
     * @Return: EntityResponse<Stream>
     */
    update(body?: Stream): import("rxjs").Observable<any>;
    /**
     * Delete a stream from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single stream by id
     * @Return: EntityResponse<Stream>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of streams by query
     * @Return: EntitiesResponse<Stream>
     */
    find(accountId?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysStreamsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysStreamsService>;
}
