import { RestUtil } from '../../utils/rest-util';
import { PulseConfig } from '../../config';
import { UserMemberships } from '../entities/UserMemberships';
import { User } from '../entities/User';
import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
import * as i0 from "@angular/core";
export declare class SysUsersService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new user
     * @Return: EntityResponse<User>
     */
    create(body?: User): import("rxjs").Observable<any>;
    /**
     * Update existing user in the system
     * @Return: EntityResponse<User>
     */
    update(body?: User): import("rxjs").Observable<any>;
    /**
     * Delete a user from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single user by id
     * @Return: EntityResponse<User>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of users by query
     * @Return: EntitiesResponse<User>
     */
    find(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<any>;
    /**
     * Create new user with all its accounts memberships
     * @Return: EntityResponse<UserMemberships>
     */
    createMembership(body?: UserMemberships): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SysUsersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SysUsersService>;
}
