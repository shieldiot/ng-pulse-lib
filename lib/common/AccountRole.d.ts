import { MemberRoleCode } from '../enums/MemberRoleCode';
export declare class AccountRole {
    accountId: string;
    role: MemberRoleCode;
    constructor(accountId?: string, role?: MemberRoleCode);
}
