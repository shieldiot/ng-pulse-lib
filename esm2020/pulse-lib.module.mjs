import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './lib/services/services.export';
import { RestUtil } from './utils/rest-util';
import { HttpClientModule } from '@angular/common/http';
import * as i0 from "@angular/core";
export class PulseLibModule {
    static forRoot(config) {
        return {
            ngModule: PulseLibModule,
            providers: [
                { provide: 'config', useValue: config },
                RestUtil,
                ...Services
            ]
        };
    }
}
PulseLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PulseLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PulseLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: PulseLibModule, imports: [CommonModule, HttpClientModule] });
PulseLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PulseLibModule, imports: [CommonModule, HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PulseLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVsc2UtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzL25nLXB1bHNlLWxpYi9zcmMvcHVsc2UtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFNeEQsTUFBTSxPQUFPLGNBQWM7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFtQjtRQUNoQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUN2QyxRQUFRO2dCQUNSLEdBQUcsUUFBUTthQUNaO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzJHQVZVLGNBQWM7NEdBQWQsY0FBYyxZQUZmLFlBQVksRUFBRSxnQkFBZ0I7NEdBRTdCLGNBQWMsWUFGZixZQUFZLEVBQUUsZ0JBQWdCOzJGQUU3QixjQUFjO2tCQUgxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztpQkFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9saWIvc2VydmljZXMvc2VydmljZXMuZXhwb3J0JztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFB1bHNlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBQdWxzZUxpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogUHVsc2VDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFB1bHNlTGliTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBQdWxzZUxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIFJlc3RVdGlsLFxuICAgICAgICAuLi5TZXJ2aWNlc1xuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==