import { BaseEntity } from '../entities/BaseEntity';
// Checkpoint represents parsing status in time that preserves parsing cycle statistics and last checkpoint (timestamp) to avoid parsing the same files over and over again
export class Checkpoint extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2twb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXB1bHNlLWxpYi9zcmMvbGliL2VudGl0aWVzL0NoZWNrcG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSXBELDJLQUEySztBQUMzSyxNQUFNLE9BQU8sVUFBVyxTQUFRLFVBQVU7Q0E2Q3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG5cblxuLy8gQ2hlY2twb2ludCByZXByZXNlbnRzIHBhcnNpbmcgc3RhdHVzIGluIHRpbWUgdGhhdCBwcmVzZXJ2ZXMgcGFyc2luZyBjeWNsZSBzdGF0aXN0aWNzIGFuZCBsYXN0IGNoZWNrcG9pbnQgKHRpbWVzdGFtcCkgdG8gYXZvaWQgcGFyc2luZyB0aGUgc2FtZSBmaWxlcyBvdmVyIGFuZCBvdmVyIGFnYWluXG5leHBvcnQgY2xhc3MgQ2hlY2twb2ludCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFN0cmVhbSBJZCBcbiAgICBwdWJsaWMgc3RyZWFtSWQ6IHN0cmluZztcbiBcbiAgICAvLyBUaW1lc3RhbXAgbWFya2luZyBjaGVja3BvaW50IHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjaGVja3BvaW50OiBudW1iZXI7XG4gXG4gICAgLy8gQ2hlY2twb2ludCBsYWJlbCAodXN1YWxseSBmaWxlIG5hbWUpIFxuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuIFxuICAgIC8vIEdlbmVyYWwgcHVycG9zZSBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBUb3RhbCBlbGFwc2VkIHRpbWUgKGJldHdlZW4gdXBkYXRlZCBhbmQgY3JlYXRlZCB0aW1lKSBcbiAgICBwdWJsaWMgZWxhcHNlZDogbnVtYmVyO1xuIFxuICAgIC8vIFRvdGFsIGVsYXBzZWQgdGltZSBvZiBwdWJsaXNoIG1lc3NhZ2VzIG9ubHkgLSB3aXRob3V0IHRoZSBwYXJzaW5nIHRpbWUgKGJldHdlZW4gdXBkYXRlZCBhbmQgY3JlYXRlZCB0aW1lKSBcbiAgICBwdWJsaWMgZWxhcHNlZFNlbnQ6IG51bWJlcjtcbiBcbiAgICAvLyBUb3RhbCBmaWxlcyBwYXJzZWQgaW4gdGhpcyBjeWNsZSBcbiAgICBwdWJsaWMgdG90YWxGaWxlczogbnVtYmVyO1xuIFxuICAgIC8vIFRvdGFsIHBhY2tldHMgcGFyc2VkIGluIHRoaXMgY3ljbGUgXG4gICAgcHVibGljIHRvdGFsUGFja2V0czogbnVtYmVyO1xuIFxuICAgIC8vIFRvdGFsIHVzYWdlIHJlY29yZHMgY3JlYXRlZCBcbiAgICBwdWJsaWMgdG90YWxVc2FnZTogbnVtYmVyO1xuIFxuICAgIC8vIFRvdGFsIHNlc3Npb24gcmVjb3JkcyBjcmVhdGVkIFxuICAgIHB1YmxpYyB0b3RhbFNlc3Npb246IG51bWJlcjtcbiBcbiAgICAvLyBUb3RhbCBSQURJVVMgcmVjb3JkcyBjcmVhdGVkIFxuICAgIHB1YmxpYyB0b3RhbFJhZGl1czogbnVtYmVyO1xuIFxuICAgIC8vIENoZWNrcG9pbnQgc3RhdGU6IDAgLSBjcmVhdGVkLCAxIC0gaW4gcHJvZ3Jlc3MsIDIgLSBjb21wbGV0ZWQgXG4gICAgcHVibGljIHN0YXRlOiBudW1iZXI7XG4gXG4gICAgLy8gSWRlbnRpdHkgb2YgdGhlIHdvcmtlciBwcm9jZXNzZWQgdGhlIGZpbGUgXG4gICAgcHVibGljIHByb2Nlc3NlZEJ5OiBzdHJpbmc7XG4gXG4gXG59XG5cblxuIl19