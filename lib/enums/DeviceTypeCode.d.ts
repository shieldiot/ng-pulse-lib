export declare enum DeviceTypeCode {
    UNDEFINED = 0,
    CONTROLLER = 1,
    METER = 2,
    SENSOR = 3,
    CAMERA = 4,
    POS = 5,
    PUMP = 6,
    CHARGING_STATION = 7,
    LIGHTNING = 8,
    TEMPERATURE_SENSOR = 9,
    AIR_QUALITY_SENSOR = 10,
    VALVE = 11,
    GATEWAY = 12
}
export declare function GetDeviceTypeCodes(): Map<DeviceTypeCode, string>;
