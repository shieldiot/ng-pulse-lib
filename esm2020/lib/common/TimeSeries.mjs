// TimeSeries model represents a generic set of data points over time
export class TimeSeries {
    constructor(name, range, values) {
        if (name !== undefined) {
            this.name = name;
        }
        if (range !== undefined) {
            this.range = range;
        }
        if (values !== undefined) {
            this.values = values;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVNlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXB1bHNlLWxpYi9zcmMvbGliL2NvbW1vbi9UaW1lU2VyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLHFFQUFxRTtBQUNyRSxNQUFNLE9BQU8sVUFBVTtJQVdsQixZQUFZLElBQWEsRUFBRSxLQUFpQixFQUFFLE1BQXdCO1FBQ25FLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQUU7UUFDN0MsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FBRTtRQUNoRCxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUFFO0lBQ3ZELENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVGcmFtZSB9IGZyb20gJy4uL2NvbW1vbi9UaW1lRnJhbWUnO1xuaW1wb3J0IHsgVGltZURhdGFQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9UaW1lRGF0YVBvaW50JztcblxuXG5cbi8vIFRpbWVTZXJpZXMgbW9kZWwgcmVwcmVzZW50cyBhIGdlbmVyaWMgc2V0IG9mIGRhdGEgcG9pbnRzIG92ZXIgdGltZVxuZXhwb3J0IGNsYXNzIFRpbWVTZXJpZXMge1xuIFxuICAgIC8vIE5hbWUgb2YgdGhlIHRpbWUgc2VyaWVzIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gUmFuZ2Ugb2YgdGhlIHNlcmllcyAoZnJvbSAuLi4gdG8pIFxuICAgIHB1YmxpYyByYW5nZTogVGltZUZyYW1lO1xuIFxuICAgIC8vIFNlcmllcyBvZiBnZW5lcmljIGRhdGEgcG9pbnRzIFxuICAgIHB1YmxpYyB2YWx1ZXM6IFRpbWVEYXRhUG9pbnRbXTtcbiBcbiAgICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgcmFuZ2U/OiBUaW1lRnJhbWUsIHZhbHVlcz86IFRpbWVEYXRhUG9pbnRbXSkgeyBcbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkgeyB0aGlzLm5hbWUgPSBuYW1lOyB9XG4gICAgICAgIGlmIChyYW5nZSAhPT0gdW5kZWZpbmVkKSB7IHRoaXMucmFuZ2UgPSByYW5nZTsgfVxuICAgICAgICBpZiAodmFsdWVzICE9PSB1bmRlZmluZWQpIHsgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7IH1cbiAgICB9XG5cbn1cblxuXG4iXX0=