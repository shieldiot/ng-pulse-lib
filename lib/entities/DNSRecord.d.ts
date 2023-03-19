import { BaseEntity } from '../entities/BaseEntity';
export declare class DNSRecord extends BaseEntity {
    source: string;
    deviceId: string;
    accountId: string;
    streamId: string;
    startTime: number;
    endTime: number;
    sourceIP: string;
    fqdn: string;
    records: string[];
}
