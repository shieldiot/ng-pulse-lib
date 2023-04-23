import { EventCategoryCode } from '../enums/EventCategoryCode';
import { BaseEntity } from '../entities/BaseEntity';
import { EventTypeCode } from '../enums/EventTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { Indicator } from '../common/Indicator';
import { RuleTypeCode } from '../enums/RuleTypeCode';
export declare class Event extends BaseEntity {
    accountId: string;
    streamId: string;
    deviceId: string;
    startTime: number;
    endTime: number;
    type: EventTypeCode;
    severity: SeverityTypeCode;
    score: number;
    status: EventStatusCode;
    indicators: Indicator[];
    ruleType: RuleTypeCode;
    ruleId: string;
    description: string;
    tags: string[];
    category: EventCategoryCode;
    recommendedAction: string;
}
