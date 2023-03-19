import { MemberRoleCode } from '../enums/MemberRoleCode';
export declare class MembersServiceFindRequest {
    accountId: string;
    userId: string;
    role: MemberRoleCode[];
    sort: string;
    page: number;
    size: number;
    constructor(accountId?: string, userId?: string, role?: MemberRoleCode[], sort?: string, page?: number, size?: number);
}
