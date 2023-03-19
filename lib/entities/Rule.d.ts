import { BaseEntity } from '../entities/BaseEntity';
export declare class Rule extends BaseEntity {
    name: string;
    description: string;
    context: string;
    conditions: string[];
}
