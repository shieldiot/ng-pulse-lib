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
     * The response includes the newly refreshed token both in the HTTP header and in the message body as data
     * @Return: ActionResponse
     */
    setAccount(id?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserService>;
}
