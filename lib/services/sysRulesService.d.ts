import { RestUtil } from '../../utils/rest-util';
import { PulseConfig } from '../../config';
import { Rule } from '../entities/Rule';
import * as i0 from "@angular/core";
export declare class SysRulesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new rule
     * @Return: EntityResponse<Rule>
     */
    create(body?: Rule): import("rxjs").Observable<any>;
    /**
     * Update existing rule in the system
     * @Return: EntityResponse<Rule>
     */
    update(body?: Rule): import("rxjs").Observable<any>;
    /**
     * Delete a rule from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single rule by id
     * @Return: EntityResponse<Rule>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of rules by query
     * @Return: EntitiesResponse<Rule>
     */
    find(accountId?: string, streamId?: string, search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysRulesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysRulesService>;
}
