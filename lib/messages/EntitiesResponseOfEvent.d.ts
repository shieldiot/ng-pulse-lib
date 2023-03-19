import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Event } from '../entities/Event';
export declare class EntitiesResponseOfEvent extends EntitiesResponse {
    list: Event[];
}
