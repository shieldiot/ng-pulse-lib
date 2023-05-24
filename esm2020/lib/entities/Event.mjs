import { BaseEntity } from '../entities/BaseEntity';
// Cyber event entity
// The Event entity is created by multiple services (e.g. ip reputation, static rules, anomaly detection) by analyzing network statistics (usage and session data) and related to specific IP address.
// Since it is not always clear what is the actual device with the IP address (RADIUS or DIAMETER logs can be provided later), we should be able to create event without device Id and assign the device Id later on.
// For this purpose, when the device Id is not provided, the event will be created with the `unknown` value in the deviceId field and the eventId must follow the following pattern: streamId:timestamp:ip_address
export class Event extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wdWxzZS1saWIvc3JjL2xpYi9lbnRpdGllcy9FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFTcEQscUJBQXFCO0FBQ3JCLHNNQUFzTTtBQUN0TSxxTkFBcU47QUFDck4sa05BQWtOO0FBQ2xOLE1BQU0sT0FBTyxLQUFNLFNBQVEsVUFBVTtDQXlEcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudENhdGVnb3J5Q29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50Q2F0ZWdvcnlDb2RlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEV2ZW50VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudFR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IEV2ZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBJbmRpY2F0b3IgfSBmcm9tICcuLi9jb21tb24vSW5kaWNhdG9yJztcbmltcG9ydCB7IFJ1bGVUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1J1bGVUeXBlQ29kZSc7XG5cblxuXG4vLyBDeWJlciBldmVudCBlbnRpdHlcbi8vIFRoZSBFdmVudCBlbnRpdHkgaXMgY3JlYXRlZCBieSBtdWx0aXBsZSBzZXJ2aWNlcyAoZS5nLiBpcCByZXB1dGF0aW9uLCBzdGF0aWMgcnVsZXMsIGFub21hbHkgZGV0ZWN0aW9uKSBieSBhbmFseXppbmcgbmV0d29yayBzdGF0aXN0aWNzICh1c2FnZSBhbmQgc2Vzc2lvbiBkYXRhKSBhbmQgcmVsYXRlZCB0byBzcGVjaWZpYyBJUCBhZGRyZXNzLlxuLy8gU2luY2UgaXQgaXMgbm90IGFsd2F5cyBjbGVhciB3aGF0IGlzIHRoZSBhY3R1YWwgZGV2aWNlIHdpdGggdGhlIElQIGFkZHJlc3MgKFJBRElVUyBvciBESUFNRVRFUiBsb2dzIGNhbiBiZSBwcm92aWRlZCBsYXRlciksIHdlIHNob3VsZCBiZSBhYmxlIHRvIGNyZWF0ZSBldmVudCB3aXRob3V0IGRldmljZSBJZCBhbmQgYXNzaWduIHRoZSBkZXZpY2UgSWQgbGF0ZXIgb24uXG4vLyBGb3IgdGhpcyBwdXJwb3NlLCB3aGVuIHRoZSBkZXZpY2UgSWQgaXMgbm90IHByb3ZpZGVkLCB0aGUgZXZlbnQgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIGB1bmtub3duYCB2YWx1ZSBpbiB0aGUgZGV2aWNlSWQgZmllbGQgYW5kIHRoZSBldmVudElkIG11c3QgZm9sbG93IHRoZSBmb2xsb3dpbmcgcGF0dGVybjogc3RyZWFtSWQ6dGltZXN0YW1wOmlwX2FkZHJlc3NcbmV4cG9ydCBjbGFzcyBFdmVudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFN0cmVhbSBJZCBcbiAgICBwdWJsaWMgc3RyZWFtSWQ6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgSWQgXG4gICAgcHVibGljIGRldmljZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gU3RhcnQgd2luZG93IHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBzdGFydFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBFbmQgd2luZG93IHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBlbmRUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gRXZlbnQgdHlwZTogVU5ERUZJTkVEIHwgRERPUyB8IFBPUlRfU0NBTk5JTkcgfCBERVZJQ0VfVEFLRU9WRVIgLi4uIFxuICAgIHB1YmxpYyB0eXBlOiBFdmVudFR5cGVDb2RlO1xuIFxuICAgIC8vIEV2ZW50IHNldmVyaXR5IGxldmVsOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIEV2ZW50IGN1cnJlbnQgc2VjdXJpdHkgc2NvcmUgXG4gICAgcHVibGljIHNjb3JlOiBudW1iZXI7XG4gXG4gICAgLy8gUHJvYmFiaWxpdHkgc2NvcmUgYnkgSVAgcmVwdXRhdGlvbiBlbmdpbmUgXG4gICAgcHVibGljIHByb2JhYmlsaXR5OiBudW1iZXI7XG4gXG4gICAgLy8gRXZlbnQgd29ya2Zsb3cgc3RhdHVzOiBVTkRFRklORUQgfCBORVcgfCBPUEVOIC4uLiBcbiAgICBwdWJsaWMgc3RhdHVzOiBFdmVudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gTGlzdCBvZiBldmVudCBpbmRpY2F0b3JzIFxuICAgIHB1YmxpYyBpbmRpY2F0b3JzOiBJbmRpY2F0b3JbXTtcbiBcbiAgICAvLyBSdWxlIGVuZ2luZSB0eXBlIFxuICAgIHB1YmxpYyBydWxlVHlwZTogUnVsZVR5cGVDb2RlO1xuIFxuICAgIC8vIFN0YXRpYyBSdWxlIGlkIFxuICAgIHB1YmxpYyBydWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBBZGRpdGlvbmFsIEV2ZW50IHRhZ3MgXG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEV2ZW50IGNhdGVnb3J5IFxuICAgIHB1YmxpYyBjYXRlZ29yeTogRXZlbnRDYXRlZ29yeUNvZGU7XG4gXG4gICAgLy8gUmVjb21tZW5kZWQgYWN0aW9uIGRlc2NyaXB0aW9uIHRvIGFwcGx5IG9uIHRoZSBkZXZpY2UgXG4gICAgcHVibGljIHJlY29tbWVuZGVkQWN0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiByZWZlcmVuY2VkIHNvdXJjZSBmaWxlcyBcbiAgICBwdWJsaWMgc291cmNlczogc3RyaW5nW107XG4gXG4gXG59XG5cblxuIl19