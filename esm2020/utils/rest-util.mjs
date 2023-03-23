import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
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
        return this.http.get(resourceUrl, httpOptions);
    }
    // HTTP POST action
    post(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.post(resourceUrl, body, httpOptions);
    }
    // HTTP PUT action
    put(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.put(resourceUrl, body, httpOptions);
    }
    // HTTP DELETE action
    delete(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http.delete(resourceUrl, httpOptions);
    }
    // Construct URL with parameters
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
}
RestUtil.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
RestUtil.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcHVsc2UtbGliL3NyYy91dGlscy9yZXN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFHNUUsTUFBTSxXQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO1FBQ3ZCLGNBQWMsRUFBRyxrQkFBa0I7UUFDbkMsZUFBZSxFQUFFLG9CQUFvQjtRQUNyQyw2QkFBNkIsRUFBRSxHQUFHO1FBQ2xDLDhCQUE4QixFQUFFLDJNQUEyTTtRQUMzTyxnQ0FBZ0MsRUFBRSw4RUFBOEU7S0FDakgsQ0FBQztDQUNILENBQUM7QUFHRiw0REFBNEQ7QUFFNUQsTUFBTSxPQUFPLFFBQVE7SUFFbkIsbURBQW1EO0lBQ25ELFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXpDLHlEQUF5RDtJQUN6RCxNQUFNLENBQUMsSUFBVSxFQUFFLEdBQVcsRUFBRSxHQUFHLE1BQWdCO1FBRWpELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFbEQsTUFBTSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVDLE1BQU0sR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO1lBQ3pELGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztR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SUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFFRCxnQ0FBZ0M7SUFDeEIsUUFBUSxDQUFDLEdBQVcsRUFBRSxHQUFHLE1BQWdCO1FBQy9DLE9BQU8sQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3BJLENBQUM7O3FHQWxGVSxRQUFRO3lHQUFSLFFBQVE7MkZBQVIsUUFBUTtrQkFEcEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUsIG5vLXN0b3JlJyxcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJ0NvbnRlbnQtVHlwZSwgQ29udGVudC1MZW5ndGgsIEFjY2VwdC1FbmNvZGluZywgWC1DU1JGLVRva2VuLCBYLUFQSS1LRVksIFgtQUNDRVNTLVRPS0VOLCBYLVRJTUVaT05FLCBhY2NlcHQsIG9yaWdpbiwgQ2FjaGUtQ29udHJvbCwgWC1SZXF1ZXN0ZWQtV2l0aCwgQXV0aG9yaXphdGlvbiwgQ29udGVudC1EaXNwb3NpdGlvbiwgQ29udGVudC1GaWxlbmFtZScsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUV4cG9zZWQtSGVhZGVycyc6ICdYLUFQSS1LRVksIFgtQUNDRVNTLVRPS0VOLCBYLVRJTUVaT05FLCBDb250ZW50LURpc3Bvc2l0aW9uLCBDb250ZW50LUZpbGVuYW1lJyxcbiAgfSlcbn07XG5cblxuLy8gVXRpbGl0eSBjbGFzcyBmb3IgYWxsIFJFU1Qgc2VydmljZXMgd2l0aCBjb21tb24gZnVuY3Rpb25zXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzdFV0aWwge1xuXG4gIC8vIENvbnN0cnVjdG9yIHdpdGggaW5qZWN0ZWQgYXV0aGVudGljYXRpb24gc2VydmljZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIC8vIFVwbG9hZCBpcyBIVFRQIFBPU1QgYWN0aW9uIGJ1dCB0aGUgYm9keSBpcyBGaWxlIG9iamVjdFxuICB1cGxvYWQoZmlsZTogRmlsZSwgdXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcblxuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG5cbiAgICBjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVLZXknLCBmaWxlLCBmaWxlLm5hbWUpO1xuXG4gICAgY29uc3QgcmVxID0gbmV3IEh0dHBSZXF1ZXN0KCdQT1NUJywgcmVzb3VyY2VVcmwsIGZvcm1EYXRhLCB7XG4gICAgICByZXBvcnRQcm9ncmVzczogZmFsc2UsXG4gICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxKTtcbiAgfVxuXG4gIC8vIERvd25sb2FkIGlzIEhUVFAgR0VUIGFjdGlvbiBidXQgdGhlIGNvbnRlbnQgaXMgYmxvYlxuICBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG5cbiAgICBsZXQgZG93bmxvYWRMaW5rID0gZmlsZU5hbWVcblxuICAgIC8vIGV4dHJhY3QgZmlsZSBuYW1lXG4gICAgcGFyYW1zLmZvckVhY2gocCA9PiB7XG4gICAgICBsZXQgYXJyID0gcC5zcGxpdCgnPScpO1xuICAgICAgaWYgKGFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmIChhcnJbMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2ZpbGVuYW1lJykge1xuICAgICAgICAgIGRvd25sb2FkTGluayA9IGFyclsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvLyBTZXQgY29udGVudCB0eXBlIGZvcjoganNvbiAvIGNzdiAvIHhtbCAvIHBkZlxuICAgIGxldCBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICBpZiAoZG93bmxvYWRMaW5rLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ2NzdicpKSB7XG4gICAgICBjb250ZW50VHlwZSA9ICd0ZXh0L2Nzdic7XG4gICAgfSBlbHNlIGlmIChkb3dubG9hZExpbmsudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgneG1sJykpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gJ3RleHQveG1sJztcbiAgICB9IGVsc2UgaWYgKGRvd25sb2FkTGluay50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCdwZGYnKSkge1xuICAgICAgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vcGRmJztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChyZXNvdXJjZVVybCwge1xuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYicsXG4gICAgICByZXBvcnRQcm9ncmVzczogdHJ1ZSxcbiAgICAgIG9ic2VydmU6ICdldmVudHMnLFxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6IGNvbnRlbnRUeXBlIH0pXG4gICAgfSk7XG4gIH1cblxuICAvLyBIVFRQIEdFVCBhY3Rpb25cbiAgZ2V0PFQ+KHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPihyZXNvdXJjZVVybCwgaHR0cE9wdGlvbnMpXG4gIH1cblxuICAvLyBIVFRQIFBPU1QgYWN0aW9uXG4gIHBvc3Q8VD4odXJsOiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPihyZXNvdXJjZVVybCwgYm9keSwgaHR0cE9wdGlvbnMpXG4gIH1cblxuICAvLyBIVFRQIFBVVCBhY3Rpb25cbiAgcHV0PFQ+KHVybDogc3RyaW5nLCBib2R5Pzogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxUPihyZXNvdXJjZVVybCwgYm9keSwgaHR0cE9wdGlvbnMpXG4gIH1cblxuICAvLyBIVFRQIERFTEVURSBhY3Rpb25cbiAgZGVsZXRlPFQ+KHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxUPihyZXNvdXJjZVVybCwgaHR0cE9wdGlvbnMpXG4gIH1cblxuICAvLyBDb25zdHJ1Y3QgVVJMIHdpdGggcGFyYW1ldGVyc1xuICBwcml2YXRlIGJ1aWxkVXJsKHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIChwYXJhbXMgPT09IG51bGwpID8gdXJsIDogKHBhcmFtcy5sZW5ndGggPT09IDApID8gdXJsIDogYCR7dXJsfSR7cGFyYW1zICYmIHBhcmFtcy5sZW5ndGggPiAwID8gJz8nK3BhcmFtcy5qb2luKCcmJykgOiAnJ31gO1xuICB9XG59XG4iXX0=