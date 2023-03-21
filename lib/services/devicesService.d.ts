import { RestUtil } from '../../utils/rest-util';
import { PulseConfig } from '../../config';
import { DeviceTypeCode } from '../enums/DeviceTypeCode';
import { DeviceStatusCode } from '../enums/DeviceStatusCode';
import { DeviceActionCode } from '../enums/DeviceActionCode';
import { Device } from '../entities/Device';
import * as i0 from "@angular/core";
export declare class DevicesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: PulseConfig, rest: RestUtil);
    /**
     * Create new device
     * @Return: EntityResponse<Device>
     */
    create(): import("rxjs").Observable<any>;
    /**
     * Update existing device in the system
     * @Return: EntityResponse<Device>
     */
    update(body?: Device): import("rxjs").Observable<any>;
    /**
     * Delete device from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single device by id
     * @Return: EntityResponse<Device>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find list of devices by query
     * @Return: EntitiesResponse<Device>
     */
    find(accountId?: string, streamId?: string, search?: string, type?: DeviceTypeCode[], status?: DeviceStatusCode[], sort?: string, page?: number, size?: number): import("rxjs").Observable<any>;
    /**
     * Add tag to a device
     * @Return: EntityResponse<Device>
     */
    addTag(id?: string, tag?: string): import("rxjs").Observable<any>;
    /**
     * Delete a tag from the device
     * @Return: EntityResponse<Device>
     */
    deleteTag(id?: string, tag?: string): import("rxjs").Observable<any>;
    /**
     * Apply action on a device
     * @Return: ActionResponse
     */
    applyAction(id?: string, action?: DeviceActionCode): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DevicesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DevicesService>;
}
