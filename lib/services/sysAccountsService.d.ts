import { RestUtil } from '../../utils/rest-util';
import { PulseConfig } from '../../config';
import { Account } from '../entities/Account';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import * as i0 from "@angular/core";
export declare class SysAccountsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new account
     * @Return: EntityResponse<Account>
     */
    create(body?: Account): import("rxjs").Observable<any>;
    /**
     * Update existing account in the system
     * @Return: EntityResponse<Account>
     */
    update(body?: Account): import("rxjs").Observable<any>;
    /**
     * Delete account from the system and all its related content
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of accounts by query
     * @Return: EntitiesResponse<Account>
     */
    find(search?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysAccountsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysAccountsService>;
}
