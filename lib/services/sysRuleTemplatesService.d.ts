import { RestUtil } from '../../utils/rest-util';
import { PulseConfig } from '../../config';
import { Rule } from '../entities/Rule';
import * as i0 from "@angular/core";
export declare class SysRuleTemplatesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new rule template
     * @Return: EntityResponse<RuleTemplate>
     */
    create(body?: Rule): import("rxjs").Observable<any>;
    /**
     * Update existing rule template
     * @Return: EntityResponse<RuleTemplate>
     */
    update(body?: Rule): import("rxjs").Observable<any>;
    /**
     * Delete a rule template from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single rule template by id
     * @Return: EntityResponse<RuleTemplate>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of rule templates by query
     * @Return: EntitiesResponse<RuleTemplate>
     */
    find(search?: string, sort?: string, page?: number, size?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysRuleTemplatesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysRuleTemplatesService>;
}
