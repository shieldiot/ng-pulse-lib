// Login parameters data model
export class LoginParams {
    constructor(email, password, accessToken) {
        if (email !== undefined) {
            this.email = email;
        }
        if (password !== undefined) {
            this.password = password;
        }
        if (accessToken !== undefined) {
            this.accessToken = accessToken;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYXJhbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wdWxzZS1saWIvc3JjL2xpYi9jb21tb24vTG9naW5QYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsOEJBQThCO0FBQzlCLE1BQU0sT0FBTyxXQUFXO0lBV25CLFlBQVksS0FBYyxFQUFFLFFBQWlCLEVBQUUsV0FBb0I7UUFDaEUsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FBRTtRQUNoRCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUFFO1FBQ3pELElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQUU7SUFDdEUsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLy8gTG9naW4gcGFyYW1ldGVycyBkYXRhIG1vZGVsXG5leHBvcnQgY2xhc3MgTG9naW5QYXJhbXMge1xuIFxuICAgIC8vIFVzZXIgZW1haWwgXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBwYXNzd29yZCBcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2Nlc3MgdG9rZW4gLSBpbiBjYXNlIG9mIHJlLWxvZ2luIHdpdGggZXhpc3RpbmcgdG9rZW4gXG4gICAgcHVibGljIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gXG4gICAgIGNvbnN0cnVjdG9yKGVtYWlsPzogc3RyaW5nLCBwYXNzd29yZD86IHN0cmluZywgYWNjZXNzVG9rZW4/OiBzdHJpbmcpIHsgXG4gICAgICAgIGlmIChlbWFpbCAhPT0gdW5kZWZpbmVkKSB7IHRoaXMuZW1haWwgPSBlbWFpbDsgfVxuICAgICAgICBpZiAocGFzc3dvcmQgIT09IHVuZGVmaW5lZCkgeyB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7IH1cbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuICE9PSB1bmRlZmluZWQpIHsgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuOyB9XG4gICAgfVxuXG59XG5cblxuIl19