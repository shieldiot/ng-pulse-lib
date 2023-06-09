// Session data transformation parameters (to calculate z-score)
export class SessionTransform {
    constructor(packetsIn, packetsOut, bytesIn, bytesOut) {
        if (packetsIn !== undefined) {
            this.packetsIn = packetsIn;
        }
        if (packetsOut !== undefined) {
            this.packetsOut = packetsOut;
        }
        if (bytesIn !== undefined) {
            this.bytesIn = bytesIn;
        }
        if (bytesOut !== undefined) {
            this.bytesOut = bytesOut;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvblRyYW5zZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXB1bHNlLWxpYi9zcmMvbGliL2NvbW1vbi9TZXNzaW9uVHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLGdFQUFnRTtBQUNoRSxNQUFNLE9BQU8sZ0JBQWdCO0lBY3hCLFlBQVksU0FBa0IsRUFBRSxVQUFtQixFQUFFLE9BQWdCLEVBQUUsUUFBaUI7UUFDckYsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FBRTtRQUM1RCxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUFFO1FBQy9ELElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQUU7UUFDdEQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FBRTtJQUM3RCxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBaU2NvcmUgfSBmcm9tICcuLi9jb21tb24vWlNjb3JlJztcblxuXG5cbi8vIFNlc3Npb24gZGF0YSB0cmFuc2Zvcm1hdGlvbiBwYXJhbWV0ZXJzICh0byBjYWxjdWxhdGUgei1zY29yZSlcbmV4cG9ydCBjbGFzcyBTZXNzaW9uVHJhbnNmb3JtIHtcbiBcbiAgICAvLyBaU2NvcmUgcGFyYW1ldGVycyBmb3IgaW5jb21pbmcgcGFja2V0cyAodG8gdGhlIGRldmljZSkgXG4gICAgcHVibGljIHBhY2tldHNJbjogWlNjb3JlO1xuIFxuICAgIC8vIFpTY29yZSBwYXJhbWV0ZXJzIGZvciBvdXRnb2luZyBwYWNrZXRzIChmcm9tIHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBwYWNrZXRzT3V0OiBaU2NvcmU7XG4gXG4gICAgLy8gWlNjb3JlIHBhcmFtZXRlcnMgZm9yIHRvdGFsIG51bWJlciBvZiBpbmNvbWluZyBieXRlcyAodG8gdGhlIGRldmljZSkgXG4gICAgcHVibGljIGJ5dGVzSW46IFpTY29yZTtcbiBcbiAgICAvLyBaU2NvcmUgcGFyYW1ldGVycyBmb3IgdG90YWwgbnVtYmVyIG9mIG91dGdvaW5nIGJ5dGVzIChmcm9tIHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBieXRlc091dDogWlNjb3JlO1xuIFxuICAgICBjb25zdHJ1Y3RvcihwYWNrZXRzSW4/OiBaU2NvcmUsIHBhY2tldHNPdXQ/OiBaU2NvcmUsIGJ5dGVzSW4/OiBaU2NvcmUsIGJ5dGVzT3V0PzogWlNjb3JlKSB7IFxuICAgICAgICBpZiAocGFja2V0c0luICE9PSB1bmRlZmluZWQpIHsgdGhpcy5wYWNrZXRzSW4gPSBwYWNrZXRzSW47IH1cbiAgICAgICAgaWYgKHBhY2tldHNPdXQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnBhY2tldHNPdXQgPSBwYWNrZXRzT3V0OyB9XG4gICAgICAgIGlmIChieXRlc0luICE9PSB1bmRlZmluZWQpIHsgdGhpcy5ieXRlc0luID0gYnl0ZXNJbjsgfVxuICAgICAgICBpZiAoYnl0ZXNPdXQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmJ5dGVzT3V0ID0gYnl0ZXNPdXQ7IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=