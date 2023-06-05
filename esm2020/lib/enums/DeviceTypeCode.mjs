// Device type code
export var DeviceTypeCode;
(function (DeviceTypeCode) {
    // Undefined [0] 
    DeviceTypeCode[DeviceTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Other (Unknown Device) [1] 
    DeviceTypeCode[DeviceTypeCode["OTHER"] = 1] = "OTHER";
    // Industrial Controller [2] 
    DeviceTypeCode[DeviceTypeCode["CONTROLLER"] = 2] = "CONTROLLER";
    // General smart meter [3] 
    DeviceTypeCode[DeviceTypeCode["METER"] = 3] = "METER";
    // General sensor [4] 
    DeviceTypeCode[DeviceTypeCode["SENSOR"] = 4] = "SENSOR";
    // General camera [5] 
    DeviceTypeCode[DeviceTypeCode["CAMERA"] = 5] = "CAMERA";
    // Point of sale [6] 
    DeviceTypeCode[DeviceTypeCode["POS"] = 6] = "POS";
    // Pump [7] 
    DeviceTypeCode[DeviceTypeCode["PUMP"] = 7] = "PUMP";
    // EV charging station [8] 
    DeviceTypeCode[DeviceTypeCode["CHARGING_STATION"] = 8] = "CHARGING_STATION";
    // Smart lightning [9] 
    DeviceTypeCode[DeviceTypeCode["LIGHTNING"] = 9] = "LIGHTNING";
    // Temperature sensor [10] 
    DeviceTypeCode[DeviceTypeCode["TEMPERATURE_SENSOR"] = 10] = "TEMPERATURE_SENSOR";
    // Air Quality sensor [11] 
    DeviceTypeCode[DeviceTypeCode["AIR_QUALITY_SENSOR"] = 11] = "AIR_QUALITY_SENSOR";
    // Valve [12] 
    DeviceTypeCode[DeviceTypeCode["VALVE"] = 12] = "VALVE";
    // Gateway [13] 
    DeviceTypeCode[DeviceTypeCode["GATEWAY"] = 13] = "GATEWAY";
    // ATM [14] 
    DeviceTypeCode[DeviceTypeCode["ATM"] = 14] = "ATM";
})(DeviceTypeCode || (DeviceTypeCode = {}));
// Return list of DeviceTypeCode values and their display names
export function GetDeviceTypeCodes() {
    let result = new Map();
    result.set(DeviceTypeCode.UNDEFINED, 'Undefined');
    result.set(DeviceTypeCode.OTHER, 'Other');
    result.set(DeviceTypeCode.CONTROLLER, 'Controller');
    result.set(DeviceTypeCode.METER, 'Meter');
    result.set(DeviceTypeCode.SENSOR, 'Sensor');
    result.set(DeviceTypeCode.CAMERA, 'Camera');
    result.set(DeviceTypeCode.POS, 'Pos');
    result.set(DeviceTypeCode.PUMP, 'Pump');
    result.set(DeviceTypeCode.CHARGING_STATION, 'Charging Station');
    result.set(DeviceTypeCode.LIGHTNING, 'Lightning');
    result.set(DeviceTypeCode.TEMPERATURE_SENSOR, 'Temperature Sensor');
    result.set(DeviceTypeCode.AIR_QUALITY_SENSOR, 'Air Quality Sensor');
    result.set(DeviceTypeCode.VALVE, 'Valve');
    result.set(DeviceTypeCode.GATEWAY, 'Gateway');
    result.set(DeviceTypeCode.ATM, 'Atm');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlVHlwZUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wdWxzZS1saWIvc3JjL2xpYi9lbnVtcy9EZXZpY2VUeXBlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxtQkFBbUI7QUFDbkIsTUFBTSxDQUFOLElBQVksY0ErQ1g7QUEvQ0QsV0FBWSxjQUFjO0lBRXRCLGlCQUFpQjtJQUNqQiw2REFBYSxDQUFBO0lBRWIsOEJBQThCO0lBQzlCLHFEQUFTLENBQUE7SUFFVCw2QkFBNkI7SUFDN0IsK0RBQWMsQ0FBQTtJQUVkLDJCQUEyQjtJQUMzQixxREFBUyxDQUFBO0lBRVQsc0JBQXNCO0lBQ3RCLHVEQUFVLENBQUE7SUFFVixzQkFBc0I7SUFDdEIsdURBQVUsQ0FBQTtJQUVWLHFCQUFxQjtJQUNyQixpREFBTyxDQUFBO0lBRVAsWUFBWTtJQUNaLG1EQUFRLENBQUE7SUFFUiwyQkFBMkI7SUFDM0IsMkVBQW9CLENBQUE7SUFFcEIsdUJBQXVCO0lBQ3ZCLDZEQUFhLENBQUE7SUFFYiwyQkFBMkI7SUFDM0IsZ0ZBQXVCLENBQUE7SUFFdkIsMkJBQTJCO0lBQzNCLGdGQUF1QixDQUFBO0lBRXZCLGNBQWM7SUFDZCxzREFBVSxDQUFBO0lBRVYsZ0JBQWdCO0lBQ2hCLDBEQUFZLENBQUE7SUFFWixZQUFZO0lBQ1osa0RBQVEsQ0FBQTtBQUVaLENBQUMsRUEvQ1csY0FBYyxLQUFkLGNBQWMsUUErQ3pCO0FBRUQsK0RBQStEO0FBQy9ELE1BQU0sVUFBVSxrQkFBa0I7SUFFOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7SUFHL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWxELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUxQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFcEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUU1QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXRDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV4QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBRWhFLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBRXBFLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFFcEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUU5QyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFHdEMsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gRGV2aWNlIHR5cGUgY29kZVxuZXhwb3J0IGVudW0gRGV2aWNlVHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBPdGhlciAoVW5rbm93biBEZXZpY2UpIFsxXSBcbiAgICBPVEhFUiA9IDEsXG4gXG4gICAgLy8gSW5kdXN0cmlhbCBDb250cm9sbGVyIFsyXSBcbiAgICBDT05UUk9MTEVSID0gMixcbiBcbiAgICAvLyBHZW5lcmFsIHNtYXJ0IG1ldGVyIFszXSBcbiAgICBNRVRFUiA9IDMsXG4gXG4gICAgLy8gR2VuZXJhbCBzZW5zb3IgWzRdIFxuICAgIFNFTlNPUiA9IDQsXG4gXG4gICAgLy8gR2VuZXJhbCBjYW1lcmEgWzVdIFxuICAgIENBTUVSQSA9IDUsXG4gXG4gICAgLy8gUG9pbnQgb2Ygc2FsZSBbNl0gXG4gICAgUE9TID0gNixcbiBcbiAgICAvLyBQdW1wIFs3XSBcbiAgICBQVU1QID0gNyxcbiBcbiAgICAvLyBFViBjaGFyZ2luZyBzdGF0aW9uIFs4XSBcbiAgICBDSEFSR0lOR19TVEFUSU9OID0gOCxcbiBcbiAgICAvLyBTbWFydCBsaWdodG5pbmcgWzldIFxuICAgIExJR0hUTklORyA9IDksXG4gXG4gICAgLy8gVGVtcGVyYXR1cmUgc2Vuc29yIFsxMF0gXG4gICAgVEVNUEVSQVRVUkVfU0VOU09SID0gMTAsXG4gXG4gICAgLy8gQWlyIFF1YWxpdHkgc2Vuc29yIFsxMV0gXG4gICAgQUlSX1FVQUxJVFlfU0VOU09SID0gMTEsXG4gXG4gICAgLy8gVmFsdmUgWzEyXSBcbiAgICBWQUxWRSA9IDEyLFxuIFxuICAgIC8vIEdhdGV3YXkgWzEzXSBcbiAgICBHQVRFV0FZID0gMTMsXG4gXG4gICAgLy8gQVRNIFsxNF0gXG4gICAgQVRNID0gMTQsXG4gXG59XG5cbi8vIFJldHVybiBsaXN0IG9mIERldmljZVR5cGVDb2RlIHZhbHVlcyBhbmQgdGhlaXIgZGlzcGxheSBuYW1lc1xuZXhwb3J0IGZ1bmN0aW9uIEdldERldmljZVR5cGVDb2RlcygpIDogTWFwPERldmljZVR5cGVDb2RlLCBzdHJpbmc+IHtcblxuICAgIGxldCByZXN1bHQgPSBuZXcgTWFwPERldmljZVR5cGVDb2RlLCBzdHJpbmc+KCk7XG5cbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLlVOREVGSU5FRCwgJ1VuZGVmaW5lZCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlVHlwZUNvZGUuT1RIRVIsICdPdGhlcicpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlVHlwZUNvZGUuQ09OVFJPTExFUiwgJ0NvbnRyb2xsZXInKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLk1FVEVSLCAnTWV0ZXInKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLlNFTlNPUiwgJ1NlbnNvcicpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlVHlwZUNvZGUuQ0FNRVJBLCAnQ2FtZXJhJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChEZXZpY2VUeXBlQ29kZS5QT1MsICdQb3MnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLlBVTVAsICdQdW1wJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChEZXZpY2VUeXBlQ29kZS5DSEFSR0lOR19TVEFUSU9OLCAnQ2hhcmdpbmcgU3RhdGlvbicpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlVHlwZUNvZGUuTElHSFROSU5HLCAnTGlnaHRuaW5nJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChEZXZpY2VUeXBlQ29kZS5URU1QRVJBVFVSRV9TRU5TT1IsICdUZW1wZXJhdHVyZSBTZW5zb3InKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLkFJUl9RVUFMSVRZX1NFTlNPUiwgJ0FpciBRdWFsaXR5IFNlbnNvcicpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlVHlwZUNvZGUuVkFMVkUsICdWYWx2ZScpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRGV2aWNlVHlwZUNvZGUuR0FURVdBWSwgJ0dhdGV3YXknKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KERldmljZVR5cGVDb2RlLkFUTSwgJ0F0bScpO1xuICAgIFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXX0=