import { AccountStatusCode } from '../enums/AccountStatusCode';
import { AccountTypeCode } from '../enums/AccountTypeCode';
export declare class AccountsServiceFindRequest {
    search: string;
    type: AccountTypeCode[];
    status: AccountStatusCode[];
    sort: string;
    page: number;
    size: number;
    constructor(search?: string, type?: AccountTypeCode[], status?: AccountStatusCode[], sort?: string, page?: number, size?: number);
}