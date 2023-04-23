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
        // Set content type for: json / csv / xml / pdf /xslx
        let contentType = this.getMimeType(downloadLink);
        return this.http.get(resourceUrl, {
            responseType: 'blob',
            reportProgress: true,
            observe: 'events',
            headers: new HttpHeaders({ 'Content-Type': contentType })
        });
    }
    // Download2 is an alternative option to download
    download2(fileName, url, ...params) {
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
        let contentType = this.getMimeType(fileName);
        const link = document.createElement('a');
        link.href = this.buildUrl(url, ...params);
        link.download = downloadLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
    // Return MIME type based on file extension
    getMimeType(fileName) {
        // Set content type for: json / csv / xml / pdf /xslx
        let contentType = 'application/json';
        if (fileName.toLowerCase().endsWith('csv')) {
            contentType = 'text/csv';
        }
        else if (fileName.toLowerCase().endsWith('xml')) {
            contentType = 'text/xml';
        }
        else if (fileName.toLowerCase().endsWith('pdf')) {
            contentType = 'application/pdf';
        }
        else if (fileName.toLowerCase().endsWith('xlsx')) {
            contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        }
        return contentType;
    }
}
RestUtil.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
RestUtil.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcHVsc2UtbGliL3NyYy91dGlscy9yZXN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFHNUUsTUFBTSxXQUFXLEdBQUc7SUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO1FBQ3ZCLGNBQWMsRUFBRyxrQkFBa0I7UUFDbkMsZUFBZSxFQUFFLG9CQUFvQjtRQUNyQyw2QkFBNkIsRUFBRSxHQUFHO1FBQ2xDLDhCQUE4QixFQUFFLDJNQUEyTTtRQUMzTyxnQ0FBZ0MsRUFBRSw4RUFBOEU7S0FDakgsQ0FBQztDQUNILENBQUM7QUFHRiw0REFBNEQ7QUFFNUQsTUFBTSxPQUFPLFFBQVE7SUFFbkIsbURBQW1EO0lBQ25ELFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXpDLHlEQUF5RDtJQUN6RCxNQUFNLENBQUMsSUFBVSxFQUFFLEdBQVcsRUFBRSxHQUFHLE1BQWdCO1FBRWpELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFbEQsTUFBTSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMxQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVDLE1BQU0sR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFO1lBQ3pELGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztR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MkM7SUFDbkMsV0FBVyxDQUFDLFFBQWdCO1FBQ2xDLHFEQUFxRDtRQUNyRCxJQUFJLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztTQUMxQjthQUFNLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqRCxXQUFXLEdBQUcsVUFBVSxDQUFDO1NBQzFCO2FBQU0sSUFBSSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pELFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztTQUNqQzthQUFNLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsRCxXQUFXLEdBQUcsbUVBQW1FLENBQUE7U0FDbEY7UUFDRCxPQUFPLFdBQVcsQ0FBQTtJQUNwQixDQUFDOztxR0FwSFUsUUFBUTt5R0FBUixRQUFROzJGQUFSLFFBQVE7a0JBRHBCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IGh0dHBPcHRpb25zID0ge1xuICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlLCBuby1zdG9yZScsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6ICdDb250ZW50LVR5cGUsIENvbnRlbnQtTGVuZ3RoLCBBY2NlcHQtRW5jb2RpbmcsIFgtQ1NSRi1Ub2tlbiwgWC1BUEktS0VZLCBYLUFDQ0VTUy1UT0tFTiwgWC1USU1FWk9ORSwgYWNjZXB0LCBvcmlnaW4sIENhY2hlLUNvbnRyb2wsIFgtUmVxdWVzdGVkLVdpdGgsIEF1dGhvcml6YXRpb24sIENvbnRlbnQtRGlzcG9zaXRpb24sIENvbnRlbnQtRmlsZW5hbWUnLFxuICAgICdBY2Nlc3MtQ29udHJvbC1FeHBvc2VkLUhlYWRlcnMnOiAnWC1BUEktS0VZLCBYLUFDQ0VTUy1UT0tFTiwgWC1USU1FWk9ORSwgQ29udGVudC1EaXNwb3NpdGlvbiwgQ29udGVudC1GaWxlbmFtZScsXG4gIH0pXG59O1xuXG5cbi8vIFV0aWxpdHkgY2xhc3MgZm9yIGFsbCBSRVNUIHNlcnZpY2VzIHdpdGggY29tbW9uIGZ1bmN0aW9uc1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc3RVdGlsIHtcblxuICAvLyBDb25zdHJ1Y3RvciB3aXRoIGluamVjdGVkIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAvLyBVcGxvYWQgaXMgSFRUUCBQT1NUIGFjdGlvbiBidXQgdGhlIGJvZHkgaXMgRmlsZSBvYmplY3RcbiAgdXBsb2FkKGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG5cbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuXG4gICAgY29uc3QgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlS2V5JywgZmlsZSwgZmlsZS5uYW1lKTtcblxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIHJlc291cmNlVXJsLCBmb3JtRGF0YSwge1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSk7XG4gIH1cblxuICAvLyBEb3dubG9hZCBpcyBIVFRQIEdFVCBhY3Rpb24gYnV0IHRoZSBjb250ZW50IGlzIGJsb2JcbiAgZG93bmxvYWQoZmlsZU5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuXG4gICAgbGV0IGRvd25sb2FkTGluayA9IGZpbGVOYW1lXG5cbiAgICAvLyBleHRyYWN0IGZpbGUgbmFtZVxuICAgIHBhcmFtcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgbGV0IGFyciA9IHAuc3BsaXQoJz0nKTtcbiAgICAgIGlmIChhcnIubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoYXJyWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdmaWxlbmFtZScpIHtcbiAgICAgICAgICBkb3dubG9hZExpbmsgPSBhcnJbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNldCBjb250ZW50IHR5cGUgZm9yOiBqc29uIC8gY3N2IC8geG1sIC8gcGRmIC94c2x4XG4gICAgbGV0IGNvbnRlbnRUeXBlID0gdGhpcy5nZXRNaW1lVHlwZShkb3dubG9hZExpbmspO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocmVzb3VyY2VVcmwsIHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXG4gICAgICBvYnNlcnZlOiAnZXZlbnRzJyxcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiBjb250ZW50VHlwZSB9KVxuICAgIH0pO1xuICB9XG5cbiAgLy8gRG93bmxvYWQyIGlzIGFuIGFsdGVybmF0aXZlIG9wdGlvbiB0byBkb3dubG9hZFxuICBkb3dubG9hZDIoZmlsZU5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcblxuICAgIGxldCBkb3dubG9hZExpbmsgPSBmaWxlTmFtZVxuXG4gICAgLy8gZXh0cmFjdCBmaWxlIG5hbWVcbiAgICBwYXJhbXMuZm9yRWFjaChwID0+IHtcbiAgICAgIGxldCBhcnIgPSBwLnNwbGl0KCc9Jyk7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKGFyclswXS50b0xvd2VyQ2FzZSgpID09PSAnZmlsZW5hbWUnKSB7XG4gICAgICAgICAgZG93bmxvYWRMaW5rID0gYXJyWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgY29udGVudFR5cGUgPSB0aGlzLmdldE1pbWVUeXBlKGZpbGVOYW1lKTtcblxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgbGluay5kb3dubG9hZCA9IGRvd25sb2FkTGluaztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGxpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuXG4gIH1cblxuICAvLyBIVFRQIEdFVCBhY3Rpb25cbiAgZ2V0PFQ+KHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPihyZXNvdXJjZVVybCwgaHR0cE9wdGlvbnMpXG4gIH1cblxuICAvLyBIVFRQIFBPU1QgYWN0aW9uXG4gIHBvc3Q8VD4odXJsOiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPihyZXNvdXJjZVVybCwgYm9keSwgaHR0cE9wdGlvbnMpXG4gIH1cblxuICAvLyBIVFRQIFBVVCBhY3Rpb25cbiAgcHV0PFQ+KHVybDogc3RyaW5nLCBib2R5Pzogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxUPihyZXNvdXJjZVVybCwgYm9keSwgaHR0cE9wdGlvbnMpXG4gIH1cblxuICAvLyBIVFRQIERFTEVURSBhY3Rpb25cbiAgZGVsZXRlPFQ+KHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxUPihyZXNvdXJjZVVybCwgaHR0cE9wdGlvbnMpXG4gIH1cblxuICAvLyBDb25zdHJ1Y3QgVVJMIHdpdGggcGFyYW1ldGVyc1xuICBwcml2YXRlIGJ1aWxkVXJsKHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIChwYXJhbXMgPT09IG51bGwpID8gdXJsIDogKHBhcmFtcy5sZW5ndGggPT09IDApID8gdXJsIDogYCR7dXJsfSR7cGFyYW1zICYmIHBhcmFtcy5sZW5ndGggPiAwID8gJz8nK3BhcmFtcy5qb2luKCcmJykgOiAnJ31gO1xuICB9XG5cbiAgLy8gUmV0dXJuIE1JTUUgdHlwZSBiYXNlZCBvbiBmaWxlIGV4dGVuc2lvblxuICBwcml2YXRlIGdldE1pbWVUeXBlKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIFNldCBjb250ZW50IHR5cGUgZm9yOiBqc29uIC8gY3N2IC8geG1sIC8gcGRmIC94c2x4XG4gICAgbGV0IGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgIGlmIChmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCdjc3YnKSkge1xuICAgICAgY29udGVudFR5cGUgPSAndGV4dC9jc3YnO1xuICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgneG1sJykpIHtcbiAgICAgIGNvbnRlbnRUeXBlID0gJ3RleHQveG1sJztcbiAgICB9IGVsc2UgaWYgKGZpbGVOYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ3BkZicpKSB7XG4gICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9wZGYnO1xuICAgIH0gZWxzZSBpZiAoZmlsZU5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgneGxzeCcpKSB7XG4gICAgICBjb250ZW50VHlwZSA9IFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXRcIlxuICAgIH1cbiAgICByZXR1cm4gY29udGVudFR5cGVcbiAgfVxufVxuIl19