// ActionResponse message is returned for any action on entity with no return data (e.d. delete)
export class ActionResponse {
    constructor(code, error, key, data) {
        if (code !== undefined) {
            this.code = code;
        }
        if (error !== undefined) {
            this.error = error;
        }
        if (key !== undefined) {
            this.key = key;
        }
        if (data !== undefined) {
            this.data = data;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wdWxzZS1saWIvc3JjL2xpYi9tZXNzYWdlcy9BY3Rpb25SZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxnR0FBZ0c7QUFDaEcsTUFBTSxPQUFPLGNBQWM7SUFjdEIsWUFBWSxJQUFhLEVBQUUsS0FBYyxFQUFFLEdBQVksRUFBRSxJQUFhO1FBQ25FLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDN0MsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FBRTtRQUNoRCxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUFFO1FBQzFDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7SUFDakQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy8gQWN0aW9uUmVzcG9uc2UgbWVzc2FnZSBpcyByZXR1cm5lZCBmb3IgYW55IGFjdGlvbiBvbiBlbnRpdHkgd2l0aCBubyByZXR1cm4gZGF0YSAoZS5kLiBkZWxldGUpXG5leHBvcnQgY2xhc3MgQWN0aW9uUmVzcG9uc2Uge1xuIFxuICAgIC8vIEVycm9yIGNvZGUgKDAgZm9yIHN1Y2Nlc3MpIFxuICAgIHB1YmxpYyBjb2RlOiBudW1iZXI7XG4gXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBcbiAgICBwdWJsaWMgZXJyb3I6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkga2V5IFxuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcbiBcbiAgICAvLyBBZGRpdGlvbmFsIGRhdGEgXG4gICAgcHVibGljIGRhdGE6IHN0cmluZztcbiBcbiAgICAgY29uc3RydWN0b3IoY29kZT86IG51bWJlciwgZXJyb3I/OiBzdHJpbmcsIGtleT86IHN0cmluZywgZGF0YT86IHN0cmluZykgeyBcbiAgICAgICAgaWYgKGNvZGUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmNvZGUgPSBjb2RlOyB9XG4gICAgICAgIGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZXJyb3IgPSBlcnJvcjsgfVxuICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHsgdGhpcy5rZXkgPSBrZXk7IH1cbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmRhdGEgPSBkYXRhOyB9XG4gICAgfVxuXG59XG5cblxuIl19