import { RestUtil } from '../../utils/rest-util';
import { PulseConfig } from '../../config';
import { LoginParams } from '../common/LoginParams';
import * as i0 from "@angular/core";
export declare class UserService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Authorize user, verify user exists in the system (user was already authenticated by OAuth provider)
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: ActionResponse
     */
    authorize(body?: LoginParams): import("rxjs").Observable<any>;
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * The response includes the account details and the newly refreshed token in the HTTP header X-ACCESS-TOKEN
     * @Return: EntityResponse<Account>
     */
    setAccount(id?: string): import("rxjs").Observable<any>;
    /**
     * Get the user's current account details
     * @Return: EntityResponse<Account>
     */
    getAccount(): import("rxjs").Observable<any>;
    /**
     * Get all the user memberships (all accounts that the current user has access to)
     * @Return: EntityResponse<UserMemberships>
     */
    getMemberships(): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}
