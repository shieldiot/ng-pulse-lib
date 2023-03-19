// Indicator model represents a feature and feature value within a normal range
export class Indicator {
    constructor(name, significance, min, max, actual) {
        if (name !== undefined) {
            this.name = name;
        }
        if (significance !== undefined) {
            this.significance = significance;
        }
        if (min !== undefined) {
            this.min = min;
        }
        if (max !== undefined) {
            this.max = max;
        }
        if (actual !== undefined) {
            this.actual = actual;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcHVsc2UtbGliL3NyYy9saWIvY29tbW9uL0luZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSwrRUFBK0U7QUFDL0UsTUFBTSxPQUFPLFNBQVM7SUFpQmpCLFlBQVksSUFBYSxFQUFFLFlBQXFCLEVBQUUsR0FBWSxFQUFFLEdBQVksRUFBRSxNQUFlO1FBQzFGLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDN0MsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7U0FBRTtRQUNyRSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUFFO1FBQzFDLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQUU7UUFDMUMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FBRTtJQUN2RCxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4vLyBJbmRpY2F0b3IgbW9kZWwgcmVwcmVzZW50cyBhIGZlYXR1cmUgYW5kIGZlYXR1cmUgdmFsdWUgd2l0aGluIGEgbm9ybWFsIHJhbmdlXG5leHBvcnQgY2xhc3MgSW5kaWNhdG9yIHtcbiBcbiAgICAvLyBGZWF0dXJlIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBMZXZlbCBvZiBTaWduaWZpY2FuY2UgXG4gICAgcHVibGljIHNpZ25pZmljYW5jZTogbnVtYmVyO1xuIFxuICAgIC8vIE1pbiBub3JtYWwgdmFsdWUgXG4gICAgcHVibGljIG1pbjogbnVtYmVyO1xuIFxuICAgIC8vIE1heCBub3JtYWwgdmFsdWUgXG4gICAgcHVibGljIG1heDogbnVtYmVyO1xuIFxuICAgIC8vIEFjdHVhbCB2YWx1ZSBvZiB0aGUgZmVhdHVyZSBcbiAgICBwdWJsaWMgYWN0dWFsOiBudW1iZXI7XG4gXG4gICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIHNpZ25pZmljYW5jZT86IG51bWJlciwgbWluPzogbnVtYmVyLCBtYXg/OiBudW1iZXIsIGFjdHVhbD86IG51bWJlcikgeyBcbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9XG4gICAgICAgIGlmIChzaWduaWZpY2FuY2UgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnNpZ25pZmljYW5jZSA9IHNpZ25pZmljYW5jZTsgfVxuICAgICAgICBpZiAobWluICE9PSB1bmRlZmluZWQpIHsgdGhpcy5taW4gPSBtaW47IH1cbiAgICAgICAgaWYgKG1heCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMubWF4ID0gbWF4OyB9XG4gICAgICAgIGlmIChhY3R1YWwgIT09IHVuZGVmaW5lZCkgeyB0aGlzLmFjdHVhbCA9IGFjdHVhbDsgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==