import { Member } from '../entities/Member';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfMember extends EntitiesResponse {
    list: Member[];
}
