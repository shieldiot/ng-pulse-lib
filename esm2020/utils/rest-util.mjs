import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http'; // replaces previous Http service
import { map, catchError } from 'rxjs/operators';
import * as LocalStorageUtil from './localStorage-util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const headers = new HttpHeaders();
headers.set('Content-Type', 'application/json');
headers.set('Cache-Control', 'no-cache, no-store');
/**
 * Utility class for all REST services with common functions
 */
export class RestUtil {
    // Set headers
    // private headers = new HttpHeaders().set('Content-Type', 'application/json');
    /**
     * Constructor with injected authentication service
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * Upload is HTTP POST action but the body is File object
     */
    upload(file, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        const formData = new FormData();
        formData.append('fileKey', file, file.name);
        const req = new HttpRequest('POST', resourceUrl, formData, {
            reportProgress: false,
            responseType: 'json',
        });
        return this.http.request(req);
    }
    /**
     * Download is HTTP GET action but the content is blob
     */
    download(fileName, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        let downloadLink = fileName;
        // extract file name
        params.forEach(p => {
            let arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'filename') {
                    downloadLink = arr[1];
                }
            }
        });
        // Set content type for: json / csv / xml / pdf
        let contentType = 'application/json';
        if (downloadLink.toLowerCase().endsWith('csv')) {
            contentType = 'text/csv';
        }
        else if (downloadLink.toLowerCase().endsWith('xml')) {
            contentType = 'text/xml';
        }
        else if (downloadLink.toLowerCase().endsWith('pdf')) {
            contentType = 'application/pdf';
        }
        return this.http.get(resourceUrl, {
            responseType: 'blob',
            reportProgress: true,
            observe: 'events',
            headers: new HttpHeaders({ 'Content-Type': contentType })
        });
    }
    /**
     * HTTP GET action
     */
    get(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .get(resourceUrl, { headers: headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP POST action
     */
    post(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .post(resourceUrl, body, { headers: headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP PUT action
     */
    put(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .put(resourceUrl, body, { headers: headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP DELETE action
     */
    delete(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .delete(resourceUrl, { headers: headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * Construct URL with parameters
     */
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
    /**
     * Process the response, extract and refresh access token and return the body
     */
    processResponse(response) {
        if (response.status === 401) {
            LocalStorageUtil.removeToken();
            headers.set('X-ACCESS-TOKEN', '');
            throw new Error('Access denied, reset token: ' + response.status);
        }
        else if (response.status > 400) {
            throw new Error('HTTP status error: ' + response.status);
        }
        // Get access token from header and update authentication service
        const accessToken = response.headers.get('X-ACCESS-TOKEN');
        if ((accessToken !== null) && (accessToken.length > 0)) {
            LocalStorageUtil.setToken(accessToken);
            headers.set('X-ACCESS-TOKEN', accessToken);
        }
        if (response.body && response.body.code && response.body.code !== 0) {
            throw { code: response.body.code, message: response.body.error };
        }
        return response.body;
    }
    /**
     * Error handling
     */
    handleError(error) {
        if (error.code) {
            return Promise.reject(error);
        }
        return Promise.reject(error.message || error);
    }
}
RestUtil.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
RestUtil.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
/**
 * Set API Key in the global headers object
 * @param apiKey The API Key string
 */
export function SetApiKey(apiKey) {
    headers.set('X-API-KEY', apiKey);
}
/**
 * Set Access Token in the global headers object
 * @param token The Token string
 */
export function SetToken(token) {
    headers.set('X-ACCESS-TOKEN', token);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcHVsc2UtbGliL3NyYy91dGlscy9yZXN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsV0FBVyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQyxDQUFFLGlDQUFpQztBQUM3SCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXhELE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUE7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFBO0FBRWxEOztHQUVHO0FBRUgsTUFBTSxPQUFPLFFBQVE7SUFFbkIsY0FBYztJQUNkLCtFQUErRTtJQUUvRTs7T0FFRztJQUNILFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXpDOztPQUVHO0lBQ0gsTUFBTSxDQUFDLElBQVUsRUFBRSxHQUFXLEVBQUUsR0FBRyxNQUFnQjtRQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRWxELE1BQU0sUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFDMUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QyxNQUFNLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUs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LFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNuRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xFO1FBRUQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNLLFdBQVcsQ0FBQyxLQUFVO1FBQzVCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7O3FHQS9KVSxRQUFRO3lHQUFSLFFBQVE7MkZBQVIsUUFBUTtrQkFEcEIsVUFBVTs7QUFtS1g7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxNQUFjO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWE7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7ICAvLyByZXBsYWNlcyBwcmV2aW91cyBIdHRwIHNlcnZpY2VcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIExvY2FsU3RvcmFnZVV0aWwgZnJvbSAnLi9sb2NhbFN0b3JhZ2UtdXRpbCc7XG5cbmNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcbmhlYWRlcnMuc2V0KCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlLCBuby1zdG9yZScpXG5cbi8qKlxuICogVXRpbGl0eSBjbGFzcyBmb3IgYWxsIFJFU1Qgc2VydmljZXMgd2l0aCBjb21tb24gZnVuY3Rpb25zXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXN0VXRpbCB7XG5cbiAgLy8gU2V0IGhlYWRlcnNcbiAgLy8gcHJpdmF0ZSBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciB3aXRoIGluamVjdGVkIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgLyoqXG4gICAqIFVwbG9hZCBpcyBIVFRQIFBPU1QgYWN0aW9uIGJ1dCB0aGUgYm9keSBpcyBGaWxlIG9iamVjdFxuICAgKi9cbiAgdXBsb2FkKGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG5cbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuXG4gICAgY29uc3QgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlS2V5JywgZmlsZSwgZmlsZS5uYW1lKTtcblxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIHJlc291cmNlVXJsLCBmb3JtRGF0YSwge1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSk7XG4gIH1cblxuICAvKipcbiAgICogRG93bmxvYWQgaXMgSFRUUCBHRVQgYWN0aW9uIGJ1dCB0aGUgY29udGVudCBpcyBibG9iXG4gICAqL1xuICBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG5cbiAgICBsZXQgZG93bmxvYWRMaW5rID0gZmlsZU5hbWVcblxuICAgIC8vIGV4dHJhY3QgZmlsZSBuYW1lXG4gICAgcGFyYW1zLmZvckVhY2gocCA9PiB7XG4gICAgICBsZXQgYXJyID0gcC5zcGxpdCgnPScpO1xuICAgICAgaWYgKGFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmIChhcnJbMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2ZpbGVuYW1lJykge1xuICAgICAgICAgIGRvd25sb2FkTGluayA9IGFyclsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvLyBTZXQgY29udGVudCB0eXBlIGZvcjoganNvbiAvIGNzdiAvIHhtbCAvIHBkZlxuICAgIGxldCBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICBpZiAoZG93bmxvYWRMaW5rLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ2NzdicpKSB7XG4gICAgICBjb250ZW50VHlwZSA9ICd0ZXh0L2Nzdic7XG4gICAgfSBlbHNlIGlmIChkb3dubG9hZExpbmsudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgneG1sJykpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gJ3RleHQveG1sJztcbiAgICB9IGVsc2UgaWYgKGRvd25sb2FkTGluay50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCdwZGYnKSkge1xuICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vcGRmJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChyZXNvdXJjZVVybCwge1xuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcbiAgICAgIG9ic2VydmU6ICdldmVudHMnLFxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlIH0pXG4gICAgfSk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBIVFRQIEdFVCBhY3Rpb25cbiAgICovXG4gIGdldCh1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChyZXNvdXJjZVVybCwgeyBoZWFkZXJzOiBoZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSxcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSFRUUCBQT1NUIGFjdGlvblxuICAgKi9cbiAgcG9zdCh1cmw6IHN0cmluZywgYm9keT86IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QocmVzb3VyY2VVcmwsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSFRUUCBQVVQgYWN0aW9uXG4gICAqL1xuICBwdXQodXJsOiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQocmVzb3VyY2VVcmwsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSFRUUCBERUxFVEUgYWN0aW9uXG4gICAqL1xuICBkZWxldGUodXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGUocmVzb3VyY2VVcmwsIHsgaGVhZGVyczogaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IFVSTCB3aXRoIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgYnVpbGRVcmwodXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gKHBhcmFtcyA9PT0gbnVsbCkgPyB1cmwgOiAocGFyYW1zLmxlbmd0aCA9PT0gMCkgPyB1cmwgOiBgJHt1cmx9JHtwYXJhbXMgJiYgcGFyYW1zLmxlbmd0aCA+IDAgPyAnPycrcGFyYW1zLmpvaW4oJyYnKSA6ICcnfWA7XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyB0aGUgcmVzcG9uc2UsIGV4dHJhY3QgYW5kIHJlZnJlc2ggYWNjZXNzIHRva2VuIGFuZCByZXR1cm4gdGhlIGJvZHlcbiAgICovXG4gIHByaXZhdGUgcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55Pikge1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICBMb2NhbFN0b3JhZ2VVdGlsLnJlbW92ZVRva2VuKCk7XG4gICAgICBoZWFkZXJzLnNldCgnWC1BQ0NFU1MtVE9LRU4nLCAnJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjY2VzcyBkZW5pZWQsIHJlc2V0IHRva2VuOiAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIVFRQIHN0YXR1cyBlcnJvcjogJyArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGFjY2VzcyB0b2tlbiBmcm9tIGhlYWRlciBhbmQgdXBkYXRlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLUFDQ0VTUy1UT0tFTicpO1xuXG4gICAgaWYgKChhY2Nlc3NUb2tlbiAhPT0gbnVsbCkgJiYgKGFjY2Vzc1Rva2VuLmxlbmd0aCA+IDApKSB7XG4gICAgICBMb2NhbFN0b3JhZ2VVdGlsLnNldFRva2VuKGFjY2Vzc1Rva2VuKTtcbiAgICAgIGhlYWRlcnMuc2V0KCdYLUFDQ0VTUy1UT0tFTicsIGFjY2Vzc1Rva2VuKVxuICAgIH0gXG4gICAgXG4gICAgaWYgKHJlc3BvbnNlLmJvZHkgJiYgcmVzcG9uc2UuYm9keS5jb2RlICYmIHJlc3BvbnNlLmJvZHkuY29kZSAhPT0gMCkge1xuICAgICAgdGhyb3cgeyBjb2RlOiByZXNwb25zZS5ib2R5LmNvZGUsIG1lc3NhZ2U6IHJlc3BvbnNlLmJvZHkuZXJyb3IgfTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlc3BvbnNlLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxpbmdcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGVycm9yLmNvZGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgfVxufVxuXG4vKipcbiAqIFNldCBBUEkgS2V5IGluIHRoZSBnbG9iYWwgaGVhZGVycyBvYmplY3RcbiAqIEBwYXJhbSBhcGlLZXkgVGhlIEFQSSBLZXkgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTZXRBcGlLZXkoYXBpS2V5OiBzdHJpbmcpIHtcbiAgaGVhZGVycy5zZXQoJ1gtQVBJLUtFWScsIGFwaUtleSk7XG59XG5cbi8qKlxuICogU2V0IEFjY2VzcyBUb2tlbiBpbiB0aGUgZ2xvYmFsIGhlYWRlcnMgb2JqZWN0XG4gKiBAcGFyYW0gdG9rZW4gVGhlIFRva2VuIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gU2V0VG9rZW4odG9rZW46IHN0cmluZykge1xuICBoZWFkZXJzLnNldCgnWC1BQ0NFU1MtVE9LRU4nLCB0b2tlbik7XG59Il19