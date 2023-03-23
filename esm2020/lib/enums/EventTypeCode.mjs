// Event type code
export var EventTypeCode;
(function (EventTypeCode) {
    // Undefined [0] 
    EventTypeCode[EventTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Device Takeover [1] 
    EventTypeCode[EventTypeCode["DEVICE_TAKEOVER"] = 1] = "DEVICE_TAKEOVER";
    // DDoS [2] 
    EventTypeCode[EventTypeCode["DDOS"] = 2] = "DDOS";
    // Unknown Malware [3] 
    EventTypeCode[EventTypeCode["UNKNOWN_MALWARE"] = 3] = "UNKNOWN_MALWARE";
    // Man-in-the-Middle [4] 
    EventTypeCode[EventTypeCode["MAN_IN_THE_MIDDLE"] = 4] = "MAN_IN_THE_MIDDLE";
    // Data Theft [5] 
    EventTypeCode[EventTypeCode["DATA_THEFT"] = 5] = "DATA_THEFT";
    // Port Scanning [6] 
    EventTypeCode[EventTypeCode["PORT_SCANNING"] = 6] = "PORT_SCANNING";
    // Abnormal Download [7] 
    EventTypeCode[EventTypeCode["ABNORMAL_DOWNLOAD"] = 7] = "ABNORMAL_DOWNLOAD";
    // Abnormal Incoming Connection [8] 
    EventTypeCode[EventTypeCode["ABNORMAL_INCOMING_CONNECTION"] = 8] = "ABNORMAL_INCOMING_CONNECTION";
    // Unsuccessful Connection Attempts [9] 
    EventTypeCode[EventTypeCode["UNSUCCESSFUL_CONNECTION_ATTEMPTS"] = 9] = "UNSUCCESSFUL_CONNECTION_ATTEMPTS";
    // High Volume Transmit [10] 
    EventTypeCode[EventTypeCode["HIGH_VOLUME_TRANSIT"] = 10] = "HIGH_VOLUME_TRANSIT";
    // Device Level Attack [11] 
    EventTypeCode[EventTypeCode["DEVICE_LEVEL_ATTACK"] = 11] = "DEVICE_LEVEL_ATTACK";
    // Replay Attack [12] 
    EventTypeCode[EventTypeCode["REPLAY_ATTACK"] = 12] = "REPLAY_ATTACK";
    // Attempted Device Takeover [13] 
    EventTypeCode[EventTypeCode["DEVICE_TAKEOVER_ATTEMPT"] = 13] = "DEVICE_TAKEOVER_ATTEMPT";
    // Unknown Operation' [14] 
    EventTypeCode[EventTypeCode["UNKNOWN_OPERATION"] = 14] = "UNKNOWN_OPERATION";
    // Crypto Mining [15] 
    EventTypeCode[EventTypeCode["CRYPTO_MINING"] = 15] = "CRYPTO_MINING";
    // Suspicious IP [16] 
    EventTypeCode[EventTypeCode["SUSPICIOUS_IP"] = 16] = "SUSPICIOUS_IP";
})(EventTypeCode || (EventTypeCode = {}));
// Return list of EventTypeCode values and their display names
export function GetEventTypeCodes() {
    let result = new Map();
    result.set(EventTypeCode.UNDEFINED, 'Undefined');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRUeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXB1bHNlLWxpYi9zcmMvbGliL2VudW1zL0V2ZW50VHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0Esa0JBQWtCO0FBQ2xCLE1BQU0sQ0FBTixJQUFZLGFBcURYO0FBckRELFdBQVksYUFBYTtJQUVyQixpQkFBaUI7SUFDakIsMkRBQWEsQ0FBQTtJQUViLHVCQUF1QjtJQUN2Qix1RUFBbUIsQ0FBQTtJQUVuQixZQUFZO0lBQ1osaURBQVEsQ0FBQTtJQUVSLHVCQUF1QjtJQUN2Qix1RUFBbUIsQ0FBQTtJQUVuQix5QkFBeUI7SUFDekIsMkVBQXFCLENBQUE7SUFFckIsa0JBQWtCO0lBQ2xCLDZEQUFjLENBQUE7SUFFZCxxQkFBcUI7SUFDckIsbUVBQWlCLENBQUE7SUFFakIseUJBQXlCO0lBQ3pCLDJFQUFxQixDQUFBO0lBRXJCLG9DQUFvQztJQUNwQyxpR0FBZ0MsQ0FBQTtJQUVoQyx3Q0FBd0M7SUFDeEMseUdBQW9DLENBQUE7SUFFcEMsNkJBQTZCO0lBQzdCLGdGQUF3QixDQUFBO0lBRXhCLDRCQUE0QjtJQUM1QixnRkFBd0IsQ0FBQTtJQUV4QixzQkFBc0I7SUFDdEIsb0VBQWtCLENBQUE7SUFFbEIsa0NBQWtDO0lBQ2xDLHdGQUE0QixDQUFBO0lBRTVCLDJCQUEyQjtJQUMzQiw0RUFBc0IsQ0FBQTtJQUV0QixzQkFBc0I7SUFDdEIsb0VBQWtCLENBQUE7SUFFbEIsc0JBQXNCO0lBQ3RCLG9FQUFrQixDQUFBO0FBRXRCLENBQUMsRUFyRFcsYUFBYSxLQUFiLGFBQWEsUUFxRHhCO0FBRUQsOERBQThEO0FBQzlELE1BQU0sVUFBVSxpQkFBaUI7SUFFN0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7SUFHOUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRWpELE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBRTdELE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV2QyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUU3RCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBRWpFLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUVuRCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFekQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUVqRSxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0lBRXZGLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGdDQUFnQyxFQUFFLGtDQUFrQyxDQUFDLENBQUM7SUFFL0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUVyRSxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBRXJFLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUV6RCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBRTdFLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFFakUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRXpELE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUd6RCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBFdmVudCB0eXBlIGNvZGVcbmV4cG9ydCBlbnVtIEV2ZW50VHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBEZXZpY2UgVGFrZW92ZXIgWzFdIFxuICAgIERFVklDRV9UQUtFT1ZFUiA9IDEsXG4gXG4gICAgLy8gRERvUyBbMl0gXG4gICAgRERPUyA9IDIsXG4gXG4gICAgLy8gVW5rbm93biBNYWx3YXJlIFszXSBcbiAgICBVTktOT1dOX01BTFdBUkUgPSAzLFxuIFxuICAgIC8vIE1hbi1pbi10aGUtTWlkZGxlIFs0XSBcbiAgICBNQU5fSU5fVEhFX01JRERMRSA9IDQsXG4gXG4gICAgLy8gRGF0YSBUaGVmdCBbNV0gXG4gICAgREFUQV9USEVGVCA9IDUsXG4gXG4gICAgLy8gUG9ydCBTY2FubmluZyBbNl0gXG4gICAgUE9SVF9TQ0FOTklORyA9IDYsXG4gXG4gICAgLy8gQWJub3JtYWwgRG93bmxvYWQgWzddIFxuICAgIEFCTk9STUFMX0RPV05MT0FEID0gNyxcbiBcbiAgICAvLyBBYm5vcm1hbCBJbmNvbWluZyBDb25uZWN0aW9uIFs4XSBcbiAgICBBQk5PUk1BTF9JTkNPTUlOR19DT05ORUNUSU9OID0gOCxcbiBcbiAgICAvLyBVbnN1Y2Nlc3NmdWwgQ29ubmVjdGlvbiBBdHRlbXB0cyBbOV0gXG4gICAgVU5TVUNDRVNTRlVMX0NPTk5FQ1RJT05fQVRURU1QVFMgPSA5LFxuIFxuICAgIC8vIEhpZ2ggVm9sdW1lIFRyYW5zbWl0IFsxMF0gXG4gICAgSElHSF9WT0xVTUVfVFJBTlNJVCA9IDEwLFxuIFxuICAgIC8vIERldmljZSBMZXZlbCBBdHRhY2sgWzExXSBcbiAgICBERVZJQ0VfTEVWRUxfQVRUQUNLID0gMTEsXG4gXG4gICAgLy8gUmVwbGF5IEF0dGFjayBbMTJdIFxuICAgIFJFUExBWV9BVFRBQ0sgPSAxMixcbiBcbiAgICAvLyBBdHRlbXB0ZWQgRGV2aWNlIFRha2VvdmVyIFsxM10gXG4gICAgREVWSUNFX1RBS0VPVkVSX0FUVEVNUFQgPSAxMyxcbiBcbiAgICAvLyBVbmtub3duIE9wZXJhdGlvbicgWzE0XSBcbiAgICBVTktOT1dOX09QRVJBVElPTiA9IDE0LFxuIFxuICAgIC8vIENyeXB0byBNaW5pbmcgWzE1XSBcbiAgICBDUllQVE9fTUlOSU5HID0gMTUsXG4gXG4gICAgLy8gU3VzcGljaW91cyBJUCBbMTZdIFxuICAgIFNVU1BJQ0lPVVNfSVAgPSAxNixcbiBcbn1cblxuLy8gUmV0dXJuIGxpc3Qgb2YgRXZlbnRUeXBlQ29kZSB2YWx1ZXMgYW5kIHRoZWlyIGRpc3BsYXkgbmFtZXNcbmV4cG9ydCBmdW5jdGlvbiBHZXRFdmVudFR5cGVDb2RlcygpIDogTWFwPEV2ZW50VHlwZUNvZGUsIHN0cmluZz4ge1xuXG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXA8RXZlbnRUeXBlQ29kZSwgc3RyaW5nPigpO1xuXG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLlVOREVGSU5FRCwgJ1VuZGVmaW5lZCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5ERVZJQ0VfVEFLRU9WRVIsICdEZXZpY2UgVGFrZW92ZXInKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuRERPUywgJ0Rkb3MnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuVU5LTk9XTl9NQUxXQVJFLCAnVW5rbm93biBNYWx3YXJlJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLk1BTl9JTl9USEVfTUlERExFLCAnTWFuIEluIFRoZSBNaWRkbGUnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuREFUQV9USEVGVCwgJ0RhdGEgVGhlZnQnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuUE9SVF9TQ0FOTklORywgJ1BvcnQgU2Nhbm5pbmcnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuQUJOT1JNQUxfRE9XTkxPQUQsICdBYm5vcm1hbCBEb3dubG9hZCcpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5BQk5PUk1BTF9JTkNPTUlOR19DT05ORUNUSU9OLCAnQWJub3JtYWwgSW5jb21pbmcgQ29ubmVjdGlvbicpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5VTlNVQ0NFU1NGVUxfQ09OTkVDVElPTl9BVFRFTVBUUywgJ1Vuc3VjY2Vzc2Z1bCBDb25uZWN0aW9uIEF0dGVtcHRzJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLkhJR0hfVk9MVU1FX1RSQU5TSVQsICdIaWdoIFZvbHVtZSBUcmFuc2l0Jyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLkRFVklDRV9MRVZFTF9BVFRBQ0ssICdEZXZpY2UgTGV2ZWwgQXR0YWNrJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLlJFUExBWV9BVFRBQ0ssICdSZXBsYXkgQXR0YWNrJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChFdmVudFR5cGVDb2RlLkRFVklDRV9UQUtFT1ZFUl9BVFRFTVBULCAnRGV2aWNlIFRha2VvdmVyIEF0dGVtcHQnKTtcbiAgICBcbiAgICByZXN1bHQuc2V0KEV2ZW50VHlwZUNvZGUuVU5LTk9XTl9PUEVSQVRJT04sICdVbmtub3duIE9wZXJhdGlvbicpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5DUllQVE9fTUlOSU5HLCAnQ3J5cHRvIE1pbmluZycpO1xuICAgIFxuICAgIHJlc3VsdC5zZXQoRXZlbnRUeXBlQ29kZS5TVVNQSUNJT1VTX0lQLCAnU3VzcGljaW91cyBJcCcpO1xuICAgIFxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn0iXX0=