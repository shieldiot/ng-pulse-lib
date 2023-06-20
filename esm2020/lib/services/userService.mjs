import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../utils";
import * as i2 from "../../config";
// List of user related actions 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
export class UserService {
    // Class constructor
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/user';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Authorize user, verify user exists in the system (user was already authenticated by OAuth provider)
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     */
    authorize(body) {
        return this.rest.post(`${this.baseUrl}/authorize`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * The response includes the account details and the newly refreshed token in the HTTP header X-ACCESS-TOKEN
     */
    setAccount(id) {
        return this.rest.post(`${this.baseUrl}/set-account/${id}`, '');
    }
    /**
     * Get the user's current account details
     */
    getAccount() {
        return this.rest.get(`${this.baseUrl}/get-account`);
    }
    /**
     * Get the user's current account features (aggregated list of all features in all the account's features groups)
     */
    getAccountFeatures() {
        return this.rest.get(`${this.baseUrl}/get-account-features`);
    }
    /**
     * Get all the user memberships (all accounts that the current user has access to)
     */
    getMemberships() {
        return this.rest.get(`${this.baseUrl}/memberships`);
    }
}
UserService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UserService, deps: [{ token: 'config' }, { token: i1.RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
UserService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UserService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UserService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: i1.RestUtil }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wdWxzZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy91c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVduRCxnQ0FBZ0M7QUFDaEMsMEVBQTBFO0FBQzFFLDBFQUEwRTtBQUUxRSxNQUFNLE9BQU8sV0FBVztJQUt0QixvQkFBb0I7SUFDcEIsWUFBc0MsTUFBbUIsRUFBVSxJQUFjO1FBQTNDLFdBQU0sR0FBTixNQUFNLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBSmpGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxPQUFPLENBQUM7UUFJeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCxTQUFTLENBQUMsSUFBa0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxZQUFZLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLEVBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBMEIsR0FBRyxJQUFJLENBQUMsT0FBTyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTBCLEdBQUcsSUFBSSxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLEdBQUcsSUFBSSxDQUFDLE9BQU8sdUJBQXVCLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0MsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLENBQUMsQ0FBQztJQUN2RixDQUFDOzt3R0E5Q1UsV0FBVyxrQkFNRixRQUFROzRHQU5qQixXQUFXOzJGQUFYLFdBQVc7a0JBRHZCLFVBQVU7OzBCQU9JLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwsIEVudGl0eVJlc3BvbnNlLCBFbnRpdGllc1Jlc3BvbnNlLCBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFB1bHNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgTG9naW5QYXJhbXMgfSBmcm9tICcuLi9jb21tb24vTG9naW5QYXJhbXMnO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gJy4uL2VudGl0aWVzL0FjY291bnQnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJy4uL2VudGl0aWVzL0ZlYXR1cmUnO1xuaW1wb3J0IHsgVXNlck1lbWJlcnNoaXBzIH0gZnJvbSAnLi4vZW50aXRpZXMvVXNlck1lbWJlcnNoaXBzJztcblxuXG5cbi8vIExpc3Qgb2YgdXNlciByZWxhdGVkIGFjdGlvbnMgXG4vLyBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKGNvbnNvbGUpIFxuLy8gQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy91c2VyJztcblxuICAvLyBDbGFzcyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogUHVsc2VDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBdXRob3JpemUgdXNlciwgdmVyaWZ5IHVzZXIgZXhpc3RzIGluIHRoZSBzeXN0ZW0gKHVzZXIgd2FzIGFscmVhZHkgYXV0aGVudGljYXRlZCBieSBPQXV0aCBwcm92aWRlcilcbiAgICogVGhlIHJlc3BvbnNlIGluY2x1ZGVzIGFjY2VzcyB0b2tlbiB2YWxpZCBmb3IgMjAgbWludXRlcy4gVGhlIGNsaWVudCBzaWRlIHNob3VsZCByZW5ldyB0aGUgdG9rZW4gYmVmb3JlIGV4cGlyYXRpb24gdXNpbmcgcmVmcmVzaC10b2tlbiBtZXRob2RcbiAgICovXG4gIGF1dGhvcml6ZShib2R5PzogTG9naW5QYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3Q8QWN0aW9uUmVzcG9uc2U+KGAke3RoaXMuYmFzZVVybH0vYXV0aG9yaXplYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRva2VuIChzZXQgbmV3IGV4cGlyYXRpb24gdGltZSkgYW5kIGFzc29jaWF0ZSB3aXRoIG5ldyBhY2NvdW50IGlmIHJlcXVpcmVkXG4gICAqIFRoZSByZXNwb25zZSBpbmNsdWRlcyB0aGUgYWNjb3VudCBkZXRhaWxzIGFuZCB0aGUgbmV3bHkgcmVmcmVzaGVkIHRva2VuIGluIHRoZSBIVFRQIGhlYWRlciBYLUFDQ0VTUy1UT0tFTlxuICAgKi9cbiAgc2V0QWNjb3VudChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdDxFbnRpdHlSZXNwb25zZTxBY2NvdW50Pj4oYCR7dGhpcy5iYXNlVXJsfS9zZXQtYWNjb3VudC8ke2lkfWAsICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIncyBjdXJyZW50IGFjY291bnQgZGV0YWlsc1xuICAgKi9cbiAgZ2V0QWNjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldDxFbnRpdHlSZXNwb25zZTxBY2NvdW50Pj4oYCR7dGhpcy5iYXNlVXJsfS9nZXQtYWNjb3VudGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdXNlcidzIGN1cnJlbnQgYWNjb3VudCBmZWF0dXJlcyAoYWdncmVnYXRlZCBsaXN0IG9mIGFsbCBmZWF0dXJlcyBpbiBhbGwgdGhlIGFjY291bnQncyBmZWF0dXJlcyBncm91cHMpXG4gICAqL1xuICBnZXRBY2NvdW50RmVhdHVyZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQ8RW50aXRpZXNSZXNwb25zZTxGZWF0dXJlPj4oYCR7dGhpcy5iYXNlVXJsfS9nZXQtYWNjb3VudC1mZWF0dXJlc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIHVzZXIgbWVtYmVyc2hpcHMgKGFsbCBhY2NvdW50cyB0aGF0IHRoZSBjdXJyZW50IHVzZXIgaGFzIGFjY2VzcyB0bylcbiAgICovXG4gIGdldE1lbWJlcnNoaXBzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0PEVudGl0eVJlc3BvbnNlPFVzZXJNZW1iZXJzaGlwcz4+KGAke3RoaXMuYmFzZVVybH0vbWVtYmVyc2hpcHNgKTtcbiAgfVxuXG59XG4iXX0=