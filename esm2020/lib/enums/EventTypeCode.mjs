// Event type code
export var EventTypeCode;
(function (EventTypeCode) {
    // Undefined [0] 
    EventTypeCode[EventTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Other (Unknown Event) [1] 
    EventTypeCode[EventTypeCode["OTHER"] = 1] = "OTHER";
    // Device Takeover [2] 
    EventTypeCode[EventTypeCode["DEVICE_TAKEOVER"] = 2] = "DEVICE_TAKEOVER";
    // DDoS [3] 
    EventTypeCode[EventTypeCode["DDOS"] = 3] = "DDOS";
    // Unknown Malware [4] 
    EventTypeCode[EventTypeCode["UNKNOWN_MALWARE"] = 4] = "UNKNOWN_MALWARE";
    // Man-in-the-Middle [5] 
    EventTypeCode[EventTypeCode["MAN_IN_THE_MIDDLE"] = 5] = "MAN_IN_THE_MIDDLE";
    // Data Theft [6] 
    EventTypeCode[EventTypeCode["DATA_THEFT"] = 6] = "DATA_THEFT";
    // Port Scanning [7] 
    EventTypeCode[EventTypeCode["PORT_SCANNING"] = 7] = "PORT_SCANNING";
    // Abnormal Download [8] 
    EventTypeCode[EventTypeCode["ABNORMAL_DOWNLOAD"] = 8] = "ABNORMAL_DOWNLOAD";
    // Abnormal Incoming Connection [9] 
    EventTypeCode[EventTypeCode["ABNORMAL_INCOMING_CONNECTION"] = 9] = "ABNORMAL_INCOMING_CONNECTION";
    // Unsuccessful Connection Attempts [10] 
    EventTypeCode[EventTypeCode["UNSUCCESSFUL_CONNECTION_ATTEMPTS"] = 10] = "UNSUCCESSFUL_CONNECTION_ATTEMPTS";
    // High Volume Transmit [11] 
    EventTypeCode[EventTypeCode["HIGH_VOLUME_TRANSIT"] = 11] = "HIGH_VOLUME_TRANSIT";
    // Device Level Attack [12] 
    EventTypeCode[EventTypeCode["DEVICE_LEVEL_ATTACK"] = 12] = "DEVICE_LEVEL_ATTACK";
    // Replay Attack [13] 
    EventTypeCode[EventTypeCode["REPLAY_ATTACK"] = 13] = "REPLAY_ATTACK";
    // Attempted Device Takeover [14] 
    EventTypeCode[EventTypeCode["DEVICE_TAKEOVER_ATTEMPT"] = 14] = "DEVICE_TAKEOVER_ATTEMPT";
    // Unknown Operation [15] 
    EventTypeCode[EventTypeCode["UNKNOWN_OPERATION"] = 15] = "UNKNOWN_OPERATION";
    // Crypto Mining [16] 
    EventTypeCode[EventTypeCode["CRYPTO_MINING"] = 16] = "CRYPTO_MINING";
    // Suspicious IP [17] 
    EventTypeCode[EventTypeCode["SUSPICIOUS_IP"] = 17] = "SUSPICIOUS_IP";
})(EventTypeCode || (EventTypeCode = {}));
// Return list of EventTypeCode values and their display names
export function GetEventTypeCodes() {
    let result = new Map();
    result.set(EventTypeCode.UNDEFINED, 'Undefined');
    result.set(EventTypeCode.OTHER, 'Other');
    result.set(EventTypeCode.DEVICE_TAKEOVER, 'Device Takeover');
    result.set(EventTypeCode.DDOS, 'Ddos');
    result.set(EventTypeCode.UNKNOWN_MALWARE, 'Unknown Malware');
    result.set(EventTypeCode.MAN_IN_THE_MIDDLE, 'Man In The Middle');
    result.set(EventTypeCode.DATA_THEFT, 'Data Theft');
    result.set(EventTypeCode.PORT_SCANNING, 'Port Scanning');
    result.set(EventTypeCode.ABNORMAL_DOWNLOAD, 'Abnormal Download');
    result.set(EventTypeCode.ABNORMAL_INCOMING_CONNECTION, 'Abnormal Incoming Connection');
    result.set(EventTypeCode.UNSUCCESSFUL_CONNECTION_ATTEMPTS, 'Unsuccessful Connection Attempts');
    result.set(EventTypeCode.HIGH_VOLUME_TRANSIT, 'High Volume Transit');
    result.set(EventTypeCode.DEVICE_LEVEL_ATTACK, 'Device Level Attack');
    result.set(EventTypeCode.REPLAY_ATTACK, 'Replay Attack');
    result.set(EventTypeCode.DEVICE_TAKEOVER_ATTEMPT, 'Device Takeover Attempt');
    result.set(EventTypeCode.UNKNOWN_OPERATION, 'Unknown Operation');
    result.set(EventTypeCode.CRYPTO_MINING, 'Crypto Mining');
    result.set(EventTypeCode.SUSPICIOUS_IP, 'Suspicious Ip');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRUeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXB1bHNlLWxpYi9zcmMvbGliL2VudW1zL0V2ZW50VHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0Esa0JBQWtCO0FBQ2xCLE1BQU0sQ0FBTixJQUFZLGFBd0RYO0FBeERELFdBQVksYUFBYTtJQUVyQixpQkFBaUI7SUFDakIsMkRBQWEsQ0FBQTtJQUViLDZCQUE2QjtJQUM3QixtREFBUyxDQUFBO0lBRVQsdUJBQXVCO0lBQ3ZCLHVFQUFtQixDQUFBO0lBRW5CLFlBQVk7SUFDWixpREFBUSxDQUFBO0lBRVIsdUJBQXVCO0lBQ3ZCLHVFQUFtQixDQUFBO0lBRW5CLHlCQUF5QjtJQUN6QiwyRUFBcUIsQ0FBQTtJQUVyQixrQkFBa0I7SUFDbEIsNkRBQWMsQ0FBQTtJQUVkLHFCQUFxQjtJQUNyQixtRUFBaUIsQ0FBQTtJQUVqQix5QkFBeUI7SUFDekIsMkVBQXFCLENBQUE7SUFFckIsb0NBQW9DO0lBQ3BDLGlHQUFnQyxDQUFBO0lBRWhDLHlDQUF5QztJQUN6QywwR0FBcUMsQ0FBQTtJQUVyQyw2QkFBNkI7SUFDN0IsZ0ZBQXdCLENBQUE7SUFFeEIsNEJBQTRCO0lBQzVCLGdGQUF3QixDQUFBO0lBRXhCLHNCQUFzQjtJQUN0QixvRUFBa0IsQ0FBQTtJQUVsQixrQ0FBa0M7SUFDbEMsd0ZBQTRCLENBQUE7SUFFNUIsMEJBQTBCO0lBQzFCLDRFQUFzQixDQUFBO0lBRXRCLHNCQUFzQjtJQUN0QixvRUFBa0IsQ0FBQTtJQUVsQixzQkFBc0I7SUFDdEIsb0VBQWtCLENBQUE7QUFFdEIsQ0FBQyxFQXhEVyxhQUFhLEtBQWIsYUFBYSxRQXdEeEI7QUFFRCw4REFBOEQ7QUFDOUQsTUFBTSxVQUFVLGlCQUFpQjtJQUU3QixJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBeUIsQ0FBQztJQUc5QyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFakQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRXpDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBRTdELE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV2QyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUU3RCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUVuRCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFekQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUVqRSxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0lBRXZGLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGdDQUFnQyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7SUFFL0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUVyRSxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBRXJFLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUV6RCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBRTdFLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFFakUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRXpELE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUd6RCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBFdmVudCB0eXBlIGNvZGVcbmV4cG9ydCBlbnVtIEV2ZW50VHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBPdGhlciAoVW5rbm93biBFdmVudCkgWzFdIFxuICAgIE9USEVSID0gMSxcbiBcbiAgICAvLyBEZXZpY2UgVGFrZW92ZXIgWzJdIFxuICAgIERFVklDRV9UQUtFT1ZFUiA9IDIsXG4gXG4gICAgLy8gRERvUyBbM10gXG4gICAgRERPUyA9IDMsXG4gXG4gICAgLy8gVW5rbm93biBNYWx3YXJlIFs0XSBcbiAgICBVTktOT1dOX01BTFdBUkUgPSA0LFxuIFxuICAgIC8vIE1hbi1pbi10aGUtTWlkZGxlIFs1XSBcbiAgICBNQU5fSU5fVEhFX01JRERMRSA9IDUsXG4gXG4gICAgLy8gRGF0YSBUaGVmdCBbNl0gXG4gICAgREFUQV9USEVGVCA9IDYsXG4gXG4gICAgLy8gUG9ydCBTY2FubmluZyBbN10gXG4gICAgUE9SVF9TQ0FOTklORyA9IDcsXG4gXG4gICAgLy8gQWJub3JtYWwgRG93bmxvYWQgWzhdIFxuICAgIEFCTk9STUFMX0RPV05MT0FEID0gOCxcbiBcbiAgICAvLyBBYm5vcm1hbCBJbmNvbWluZyBDb25uZWN0aW9uIFs5XSBcbiAgICBBQk5PUk1BTF9JTkNPTUlOR19DT05ORUNUSU9OID0gOSxcbiBcbiAgICAvLyBVbnN1Y2Nlc3NmdWwgQ29ubmVjdGlvbiBBdHRlbXB0cyBbMTBdIFxuICAgIFVOU1VDQ0VTU0ZVTF9DT05ORUNUSU9OX0FUVEVNUFRTID0gMTAsXG4gXG4gICAgLy8gSGlnaCBWb2x1bWUgVHJhbnNtaXQgWzExXSBcbiAgICBISUdIX1ZPTFVNRV9UUkFOU0lUID0gMTEsXG4gXG4gICAgLy8gRGV2aWNlIExldmVsIEF0dGFjayBbMTJdIFxuICAgIERFVklDRV9MRVZFTF9BVFRBQ0sgPSAxMixcbiBcbiAgICAvLyBSZXBsYXkgQXR0YWNrIFsxM10gXG4gICAgUkVQTEFZX0FUVEFDSyA9IDEzLFxuIFxuICAgIC8vIEF0dGVtcHRlZCBEZXZpY2UgVGFrZW92ZXIgWzE0XSBcbiAgICBERVZJQ0VfVEFLRU9WRVJfQVRURU1QVCA9IDE0LFxuIFxuICAgIC8vIFVua25vd24gT3BlcmF0aW9uIFsxNV0gXG4gICAgVU5LTk9XTl9PUEVSQVRJT04gPSAxNSxcbiBcbiAgICAvLyBDcnlwdG8gTWluaW5nIFsxNl0gXG4gICAgQ1JZUFRPX01JTklORyA9IDE2LFxuIFxuICAgIC8vIFN1c3BpY2lvdXMgSVAgWzE3XSBcbiAgICBTVVNQSUNJT1VTX0lQID0gMTcsXG4gXG59XG5cbi8vIFJldHVybiBsaXN0IG9mIEV2ZW50VHlwZUNvZGUgdmFsdWVzIGFuZCB0aGVpciBkaXNwbGF5IG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gR2V0RXZlbnRUeXBlQ29kZXMoKSA6IE1hcDxFdmVudFR5cGVDb2RlLCBzdHJpbmc+IHtcblxuICAgIGxldCByZXN1bHQgPSBuZXcgTWFwPEV2ZW50VHlwZUNvZGUsIHN0cmluZz4oKTtcblxuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5VTkRFRklORUQsICdVbmRlZmluZWQnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuT1RIRVIsICdPdGhlcicpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5ERVZJQ0VfVEFLRU9WRVIsICdEZXZpY2UgVGFrZW92ZXInKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuRERPUywgJ0Rkb3MnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuVU5LTk9XTl9NQUxXQVJFLCAnVW5rbm93biBNYWx3YXJlJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLk1BTl9JTl9USEVfTUlERExFLCAnTWFuIEluIFRoZSBNaWRkbGUnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuREFUQV9USEVGVCwgJ0RhdGEgVGhlZnQnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuUE9SVF9TQ0FOTklORywgJ1BvcnQgU2Nhbm5pbmcnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuQUJOT1JNQUxfRE9XTkxPQUQsICdBYm5vcm1hbCBEb3dubG9hZCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5BQk5PUk1BTF9JTkNPTUlOR19DT05ORUNUSU9OLCAnQWJub3JtYWwgSW5jb21pbmcgQ29ubmVjdGlvbicpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5VTlNVQ0NFU1NGVUxfQ09OTkVDVElPTl9BVFRFTVBUUywgJ1Vuc3VjY2Vzc2Z1bCBDb25uZWN0aW9uIEF0dGVtcHRzJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLkhJR0hfVk9MVU1FX1RSQU5TSVQsICdIaWdoIFZvbHVtZSBUcmFuc2l0Jyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLkRFVklDRV9MRVZFTF9BVFRBQ0ssICdEZXZpY2UgTGV2ZWwgQXR0YWNrJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLlJFUExBWV9BVFRBQ0ssICdSZXBsYXkgQXR0YWNrJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLkRFVklDRV9UQUtFT1ZFUl9BVFRFTVBULCAnRGV2aWNlIFRha2VvdmVyIEF0dGVtcHQnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuVU5LTk9XTl9PUEVSQVRJT04sICdVbmtub3duIE9wZXJhdGlvbicpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5DUllQVE9fTUlOSU5HLCAnQ3J5cHRvIE1pbmluZycpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5TVVNQSUNJT1VTX0lQLCAnU3VzcGljaW91cyBJcCcpO1xuICAgIFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXX0=