import { Device } from '../entities/Device';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfDevice extends EntitiesResponse {
    list: Device[];
}
