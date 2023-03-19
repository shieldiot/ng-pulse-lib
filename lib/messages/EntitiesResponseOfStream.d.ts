import { Stream } from '../entities/Stream';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfStream extends EntitiesResponse {
    list: Stream[];
}
