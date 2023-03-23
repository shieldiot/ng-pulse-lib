import { RestUtil, EntityResponse, EntitiesResponse, ActionResponse } from '../../utils';
import { PulseConfig } from '../../config';
import { Device } from '../entities/Device';
import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { DeviceStatusCode } from '../enums/DeviceStatusCode';
import { DeviceActionCode } from '../enums/DeviceActionCode';
import * as i0 from "@angular/core";
export declare class DevicesService {
    private config;
    private rest;
    private baseUrl;
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new device
     */
    create(): import("rxjs").Observable<import("@angular/common/http").HttpResponse<EntityResponse<Device>>>;
    /**
     * Update existing device in the system
     */
    update(body?: Device): import("rxjs").Observable<import("@angular/common/http").HttpResponse<EntityResponse<Device>>>;
    /**
     * Delete device from the system
     */
    delete(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpResponse<ActionResponse>>;
    /**
     * Get single device by id
     */
    get(id?: string): import("rxjs").Observable<EntityResponse<Device>>;
    /**
     * Find list of devices by query
     */
    find(streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<EntitiesResponse<Device>>;
    /**
     * Add tag to a device
     */
    addTag(id?: string, tag?: string): import("rxjs").Observable<import("@angular/common/http").HttpResponse<EntityResponse<Device>>>;
    /**
     * Delete a tag from the device
     */
    deleteTag(id?: string, tag?: string): import("rxjs").Observable<import("@angular/common/http").HttpResponse<EntityResponse<Device>>>;
    /**
     * Apply action on a device
     */
    applyAction(id?: string, action?: DeviceActionCode): import("rxjs").Observable<import("@angular/common/http").HttpResponse<ActionResponse>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DevicesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DevicesService>;
}
