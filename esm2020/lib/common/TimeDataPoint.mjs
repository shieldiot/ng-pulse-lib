// TimeDataPoint model represents a generic datapoint in time
export class TimeDataPoint {
    constructor(timestamp, value) {
        if (timestamp !== undefined) {
            this.timestamp = timestamp;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZURhdGFQb2ludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXB1bHNlLWxpYi9zcmMvbGliL2NvbW1vbi9UaW1lRGF0YVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDZEQUE2RDtBQUM3RCxNQUFNLE9BQU8sYUFBYTtJQVFyQixZQUFZLFNBQWtCLEVBQUUsS0FBVztRQUN4QyxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUFFO1FBQzVELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQUU7SUFDcEQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy8gVGltZURhdGFQb2ludCBtb2RlbCByZXByZXNlbnRzIGEgZ2VuZXJpYyBkYXRhcG9pbnQgaW4gdGltZVxuZXhwb3J0IGNsYXNzIFRpbWVEYXRhUG9pbnQge1xuIFxuICAgIC8vIFNhdGEgcG9pbnQgdGltZXN0YW1wIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdGltZXN0YW1wOiBudW1iZXI7XG4gXG4gICAgLy8gR2VuZXJpYyB2YWx1ZSBcbiAgICBwdWJsaWMgdmFsdWU6IGFueTtcbiBcbiAgICAgY29uc3RydWN0b3IodGltZXN0YW1wPzogbnVtYmVyLCB2YWx1ZT86IGFueSkgeyBcbiAgICAgICAgaWYgKHRpbWVzdGFtcCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wOyB9XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMudmFsdWUgPSB2YWx1ZTsgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==