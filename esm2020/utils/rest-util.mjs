import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http'; // replaces previous Http service
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, X-API-KEY, X-ACCESS-TOKEN, X-TIMEZONE, accept, origin, Cache-Control, X-Requested-With, Authorization, Content-Disposition, Content-Filename',
        'Access-Control-Exposed-Headers': 'X-API-KEY, X-ACCESS-TOKEN, X-TIMEZONE, Content-Disposition, Content-Filename',
    })
};
// Utility class for all REST services with common functions
export class RestUtil {
    // Constructor with injected authentication service
    constructor(http) {
        this.http = http;
    }
    // Upload is HTTP POST action but the body is File object
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
    // Download is HTTP GET action but the content is blob
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
    // HTTP GET action
    get(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .get(resourceUrl, httpOptions)
            .pipe(
        //map((res: any) => this.processResponse(res)),
        catchError(this.handleError));
    }
    // HTTP POST action
    post(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .post(resourceUrl, body, httpOptions)
            .pipe(
        //map((res: any) => this.processResponse(res)),
        catchError(this.handleError));
    }
    // HTTP PUT action
    put(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .put(resourceUrl, body, httpOptions)
            .pipe(
        //map((res: Observable<T>) => this.processResponse(res)),
        catchError(this.handleError));
    }
    // HTTP DELETE action
    delete(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .delete(resourceUrl, httpOptions)
            .pipe(
        //map((res: any) => this.processResponse(res)),
        catchError(this.handleError));
    }
    // Construct URL with parameters
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
    // Process the response, if code is not 0, throw an error
    processResponse(response) {
        // If response code is not 0, throw an error
        if (response.code !== 0) {
            throw { code: response.code, message: response.error };
        }
    }
    // Handle error
    handleError(error) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}
RestUtil.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
RestUtil.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcHVsc2UtbGliL3NyYy91dGlscy9yZXN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsV0FBVyxFQUFFLFdBQVcsRUFBbUMsTUFBTSxzQkFBc0IsQ0FBQyxDQUFFLGlDQUFpQztBQUNoSixPQUFPLEVBQU8sVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBRTlDLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztRQUN2QixjQUFjLEVBQUcsa0JBQWtCO1FBQ25DLGVBQWUsRUFBRSxvQkFBb0I7UUFDckMsNkJBQTZCLEVBQUUsR0FBRztRQUNsQyw4QkFBOEIsRUFBRSwyTUFBMk07UUFDM08sZ0NBQWdDLEVBQUUsOEVBQThFO0tBQ2pILENBQUM7Q0FDSCxDQUFDO0FBR0YsNERBQTREO0FBRTVELE1BQU0sT0FBTyxRQUFRO0lBRW5CLG1EQUFtRDtJQUNuRCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6Qyx5REFBeUQ7SUFDekQsTUFBTSxDQUFDLElBQVUsRUFBRSxHQUFXLEVBQUUsR0FBRyxNQUFnQjtRQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBRWxELE1BQU0sUUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFDMUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QyxNQUFNLEdBQUcsR0FBRyxJQUFJLFdB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LFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4RDtJQUNILENBQUM7SUFFRCxlQUFlO0lBQ1AsV0FBVyxDQUFDLEtBQXdCO1FBQzFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsa0VBQWtFO1lBQ2xFLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDTCxzREFBc0Q7WUFDdEQsNkRBQTZEO1lBQzdELE9BQU8sQ0FBQyxLQUFLLENBQ1QseUJBQXlCLEtBQUssQ0FBQyxNQUFNLGNBQWMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkU7UUFDRCx5REFBeUQ7UUFDekQsT0FBTyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7O3FHQTdIVSxRQUFRO3lHQUFSLFFBQVE7MkZBQVIsUUFBUTtrQkFEcEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCwgSHR0cFJlc3BvbnNlLCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJzsgIC8vIHJlcGxhY2VzIHByZXZpb3VzIEh0dHAgc2VydmljZVxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZSwgbm8tc3RvcmUnLFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiAnQ29udGVudC1UeXBlLCBDb250ZW50LUxlbmd0aCwgQWNjZXB0LUVuY29kaW5nLCBYLUNTUkYtVG9rZW4sIFgtQVBJLUtFWSwgWC1BQ0NFU1MtVE9LRU4sIFgtVElNRVpPTkUsIGFjY2VwdCwgb3JpZ2luLCBDYWNoZS1Db250cm9sLCBYLVJlcXVlc3RlZC1XaXRoLCBBdXRob3JpemF0aW9uLCBDb250ZW50LURpc3Bvc2l0aW9uLCBDb250ZW50LUZpbGVuYW1lJyxcbiAgICAnQWNjZXNzLUNvbnRyb2wtRXhwb3NlZC1IZWFkZXJzJzogJ1gtQVBJLUtFWSwgWC1BQ0NFU1MtVE9LRU4sIFgtVElNRVpPTkUsIENvbnRlbnQtRGlzcG9zaXRpb24sIENvbnRlbnQtRmlsZW5hbWUnLFxuICB9KVxufTtcblxuXG4vLyBVdGlsaXR5IGNsYXNzIGZvciBhbGwgUkVTVCBzZXJ2aWNlcyB3aXRoIGNvbW1vbiBmdW5jdGlvbnNcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXN0VXRpbCB7XG5cbiAgLy8gQ29uc3RydWN0b3Igd2l0aCBpbmplY3RlZCBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgLy8gVXBsb2FkIGlzIEhUVFAgUE9TVCBhY3Rpb24gYnV0IHRoZSBib2R5IGlzIEZpbGUgb2JqZWN0XG4gIHVwbG9hZChmaWxlOiBGaWxlLCB1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuXG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZUtleScsIGZpbGUsIGZpbGUubmFtZSk7XG5cbiAgICBjb25zdCByZXEgPSBuZXcgSHR0cFJlcXVlc3QoJ1BPU1QnLCByZXNvdXJjZVVybCwgZm9ybURhdGEsIHtcbiAgICAgIHJlcG9ydFByb2dyZXNzOiBmYWxzZSxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChyZXEpO1xuICB9XG5cbiAgLy8gRG93bmxvYWQgaXMgSFRUUCBHRVQgYWN0aW9uIGJ1dCB0aGUgY29udGVudCBpcyBibG9iXG4gIGRvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcblxuICAgIGxldCBkb3dubG9hZExpbmsgPSBmaWxlTmFtZVxuXG4gICAgLy8gZXh0cmFjdCBmaWxlIG5hbWVcbiAgICBwYXJhbXMuZm9yRWFjaChwID0+IHtcbiAgICAgIGxldCBhcnIgPSBwLnNwbGl0KCc9Jyk7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKGFyclswXS50b0xvd2VyQ2FzZSgpID09PSAnZmlsZW5hbWUnKSB7XG4gICAgICAgICAgZG93bmxvYWRMaW5rID0gYXJyWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIC8vIFNldCBjb250ZW50IHR5cGUgZm9yOiBqc29uIC8gY3N2IC8geG1sIC8gcGRmXG4gICAgbGV0IGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgIGlmIChkb3dubG9hZExpbmsudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnY3N2JykpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gJ3RleHQvY3N2JztcbiAgICB9IGVsc2UgaWYgKGRvd25sb2FkTGluay50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCd4bWwnKSkge1xuICAgICAgY29udGVudFR5cGUgPSAndGV4dC94bWwnO1xuICAgIH0gZWxzZSBpZiAoZG93bmxvYWRMaW5rLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ3BkZicpKSB7XG4gICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9wZGYnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHJlc291cmNlVXJsLCB7XG4gICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgb2JzZXJ2ZTogJ2V2ZW50cycsXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogY29udGVudFR5cGUgfSlcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEhUVFAgR0VUIGFjdGlvblxuICBnZXQ8VD4odXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldDxUPihyZXNvdXJjZVVybCwgaHR0cE9wdGlvbnMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgLy9tYXAoKHJlczogYW55KSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXMpKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvciksXG4gICAgICAgICk7XG4gIH1cblxuICAvLyBIVFRQIFBPU1QgYWN0aW9uXG4gIHBvc3Q8VD4odXJsOiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxUPj4ge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAucG9zdDxIdHRwUmVzcG9uc2U8VD4+KHJlc291cmNlVXJsLCBib2R5LCBodHRwT3B0aW9ucylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAvL21hcCgocmVzOiBhbnkpID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgICApO1xuICB9XG5cbiAgLy8gSFRUUCBQVVQgYWN0aW9uXG4gIHB1dDxUPih1cmw6IHN0cmluZywgYm9keT86IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFQ+PiB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5wdXQ8SHR0cFJlc3BvbnNlPFQ+PihyZXNvdXJjZVVybCwgYm9keSwgaHR0cE9wdGlvbnMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgICAgLy9tYXAoKHJlczogT2JzZXJ2YWJsZTxUPikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICAgICk7XG4gIH1cblxuICAvLyBIVFRQIERFTEVURSBhY3Rpb25cbiAgZGVsZXRlPFQ+KHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8VD4+IHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmRlbGV0ZTxIdHRwUmVzcG9uc2U8VD4+KHJlc291cmNlVXJsLCBodHRwT3B0aW9ucylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAvL21hcCgocmVzOiBhbnkpID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgICApO1xuICB9XG5cbiAgLy8gQ29uc3RydWN0IFVSTCB3aXRoIHBhcmFtZXRlcnNcbiAgcHJpdmF0ZSBidWlsZFVybCh1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiAocGFyYW1zID09PSBudWxsKSA/IHVybCA6IChwYXJhbXMubGVuZ3RoID09PSAwKSA/IHVybCA6IGAke3VybH0ke3BhcmFtcyAmJiBwYXJhbXMubGVuZ3RoID4gMCA/ICc/JytwYXJhbXMuam9pbignJicpIDogJyd9YDtcbiAgfVxuXG4gIC8vIFByb2Nlc3MgdGhlIHJlc3BvbnNlLCBpZiBjb2RlIGlzIG5vdCAwLCB0aHJvdyBhbiBlcnJvclxuICBwcml2YXRlIHByb2Nlc3NSZXNwb25zZShyZXNwb25zZTogYW55KSB7XG4gICAgLy8gSWYgcmVzcG9uc2UgY29kZSBpcyBub3QgMCwgdGhyb3cgYW4gZXJyb3JcbiAgICBpZiAocmVzcG9uc2UuY29kZSAhPT0gMCkge1xuICAgICAgdGhyb3cgeyBjb2RlOiByZXNwb25zZS5jb2RlLCBtZXNzYWdlOiByZXNwb25zZS5lcnJvciB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBlcnJvclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDApIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IuZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cbiAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZy5cbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYEJhY2tlbmQgcmV0dXJuZWQgY29kZSAke2Vycm9yLnN0YXR1c30sIGJvZHkgd2FzOiBgLCBlcnJvci5lcnJvcik7XG4gICAgfVxuICAgIC8vIFJldHVybiBhbiBvYnNlcnZhYmxlIHdpdGggYSB1c2VyLWZhY2luZyBlcnJvciBtZXNzYWdlLlxuICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IG5ldyBFcnJvcignU29tZXRoaW5nIGJhZCBoYXBwZW5lZDsgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKSk7XG4gIH1cblxufVxuIl19