// EntityResponse message is returned for any create/update action on entity
export class EntityResponse {
    constructor(code, error) {
        if (code !== undefined) {
            this.code = code;
        }
        if (error !== undefined) {
            this.error = error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wdWxzZS1saWIvc3JjL2xpYi9tZXNzYWdlcy9FbnRpdHlSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSw0RUFBNEU7QUFDNUUsTUFBTSxPQUFPLGNBQWM7SUFRdEIsWUFBWSxJQUFhLEVBQUUsS0FBYztRQUN0QyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUFFO1FBQzdDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQUU7SUFDcEQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy8gRW50aXR5UmVzcG9uc2UgbWVzc2FnZSBpcyByZXR1cm5lZCBmb3IgYW55IGNyZWF0ZS91cGRhdGUgYWN0aW9uIG9uIGVudGl0eVxuZXhwb3J0IGNsYXNzIEVudGl0eVJlc3BvbnNlIHtcbiBcbiAgICAvLyBFcnJvciBjb2RlICgwIGZvciBzdWNjZXNzKSBcbiAgICBwdWJsaWMgY29kZTogbnVtYmVyO1xuIFxuICAgIC8vIEVycm9yIG1lc3NhZ2UgXG4gICAgcHVibGljIGVycm9yOiBzdHJpbmc7XG4gXG4gICAgIGNvbnN0cnVjdG9yKGNvZGU/OiBudW1iZXIsIGVycm9yPzogc3RyaW5nKSB7IFxuICAgICAgICBpZiAoY29kZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuY29kZSA9IGNvZGU7IH1cbiAgICAgICAgaWYgKGVycm9yICE9PSB1bmRlZmluZWQpIHsgdGhpcy5lcnJvciA9IGVycm9yOyB9XG4gICAgfVxuXG59XG5cblxuIl19