import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
export declare class UsersServiceFindRequest {
    search: string;
    type: UserTypeCode[];
    status: UserStatusCode[];
    sort: string;
    page: number;
    size: number;
    constructor(search?: string, type?: UserTypeCode[], status?: UserStatusCode[], sort?: string, page?: number, size?: number);
}