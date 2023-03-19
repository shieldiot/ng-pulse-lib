import { RestUtil } from '../../utils/rest-util';
import { PulseConfig } from '../../config';
import { Member } from '../entities/Member';
import * as i0 from "@angular/core";
export declare class SysMembersService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new member
     * @Return: EntityResponse<Member>
     */
    create(body?: Member): import("rxjs").Observable<any>;
    /**
     * Update existing member in the system
     * @Return: EntityResponse<Member>
     */
    update(body?: Member): import("rxjs").Observable<any>;
    /**
     * Delete member from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single member by id
     * @Return: EntityResponse<Member>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of members by query
     * @Return: EntitiesResponse<Member>
     */
    find(): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysMembersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysMembersService>;
}
