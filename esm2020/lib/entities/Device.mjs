import { BaseEntity } from '../entities/BaseEntity';
// Device entity is an IoT device representation with attributes and state
export class Device extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcHVsc2UtbGliL3NyYy9saWIvZW50aXRpZXMvRGV2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUlwRCwwRUFBMEU7QUFDMUUsTUFBTSxPQUFPLE1BQU8sU0FBUSxVQUFVO0NBc0RyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERldmljZVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvRGV2aWNlVHlwZUNvZGUnO1xuaW1wb3J0IHsgRGV2aWNlU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0RldmljZVN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgRGV2aWNlQWN0aW9uQ29kZSB9IGZyb20gJy4uL2VudW1zL0RldmljZUFjdGlvbkNvZGUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG5cblxuLy8gRGV2aWNlIGVudGl0eSBpcyBhbiBJb1QgZGV2aWNlIHJlcHJlc2VudGF0aW9uIHdpdGggYXR0cmlidXRlcyBhbmQgc3RhdGVcbmV4cG9ydCBjbGFzcyBEZXZpY2UgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTdHJlYW0gSWQgXG4gICAgcHVibGljIHN0cmVhbUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV2aWNlIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV2aWNlIHR5cGU6IFVOREVGSU5FRCB8IENPTlRST0xMRVIgfCBNRVRFUiB8IFNFTlNPUiAuLi4gXG4gICAgcHVibGljIHR5cGU6IERldmljZVR5cGVDb2RlO1xuIFxuICAgIC8vIERldmljZSBzdGF0dXM6IFVOREVGSU5FRCB8IFBFTkRJTkcgfCBBQ1RJVkUgfCAgSU5BQ1RJVkUgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogRGV2aWNlU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBEZXZpY2UgbGFzdCBhY3Rpdml0eSB0aW1lc3RhbXAgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBsYXN0QWN0aXZpdHk6IG51bWJlcjtcbiBcbiAgICAvLyBEZXZpY2UgTUFDIGFkZHJlc3MgXG4gICAgcHVibGljIG1hYzogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBJUCBhZGRyZXNzIChJUHY0IG9yIElQdjYpIFxuICAgIHB1YmxpYyBpcDogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBtb2JpbGUgc3Vic2NyaWJlciBpZCAoSU1TSSBvciBTVVBJIGZvciA1RykgXG4gICAgcHVibGljIHNpZDogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBtb2JpbGUgZXF1aXBtZW50IGlkIChJTUVJIG9yIFBFSSBmb3IgNUcpIFxuICAgIHB1YmxpYyBlaWQ6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgY3VycmVudCBzZWN1cml0eSBzY29yZSBcbiAgICBwdWJsaWMgc2NvcmU6IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIGRldmljZSB0YWdzIFxuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBOdW1iZXIgb2YgZXZlbnRzIGZvciB0aGUgdGltZSBwZXJpb2QgKGNhbGN1bGF0ZWQgZmllbGQpIFxuICAgIHB1YmxpYyBldmVudENvdW50OiBudW1iZXI7XG4gXG4gICAgLy8gQWN0aW9uIGFwcGxpZWQgb24gdGhlIGRldmljZSBcbiAgICBwdWJsaWMgYWN0aW9uQXBwbGllZDogRGV2aWNlQWN0aW9uQ29kZTtcbiBcbiAgICAvLyBXaG8gYXBwbGllZCB0aGUgYWN0aW9uICh1c2VyIGlkKSBcbiAgICBwdWJsaWMgYWN0aW9uQXBwbGllZEJ5OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiBhY3Rpb24gd2FzIGFwcGxpZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBhY3Rpb25BcHBsaWVkT246IG51bWJlcjtcbiBcbiBcbn1cblxuXG4iXX0=