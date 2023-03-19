import { BaseEntity } from '../entities/BaseEntity';
export declare class SessionRecord extends BaseEntity {
    source: string;
    sessionId: string;
    accountId: string;
    streamId: string;
    deviceId: string;
    startTime: number;
    endTime: number;
    sourceIP: string;
    sourcePort: number;
    destinationIP: string;
    destinationPort: number;
    protocol: string;
    packetsIn: number;
    packetsOut: number;
    bytesIn: number;
    bytesOut: number;
    labels: string[];
}
