import { BaseEntity } from '../entities/BaseEntity';
export declare class Calendar extends BaseEntity {
    accountId: string;
    streamId: string;
    checkpoint: number;
    label: string;
    totalFiles: number;
    totalPackets: number;
}
