import { User } from '../entities/User';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfUser extends EntitiesResponse {
    list: User[];
}
