// User status code
export var UserStatusCode;
(function (UserStatusCode) {
    // Undefined [0] 
    UserStatusCode[UserStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // User is registered and pending verification [1] 
    UserStatusCode[UserStatusCode["PENDING"] = 1] = "PENDING";
    // Active user in the system [2] 
    UserStatusCode[UserStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // Blocked user (only account system can unblock the user) [4] 
    UserStatusCode[UserStatusCode["BLOCKED"] = 3] = "BLOCKED";
    // Suspended user (about to be deleted) [8] 
    UserStatusCode[UserStatusCode["SUSPENDED"] = 4] = "SUSPENDED";
})(UserStatusCode || (UserStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wdWxzZS1saWIvc3JjL2xpYi9lbnVtcy9Vc2VyU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxtQkFBbUI7QUFDbkIsTUFBTSxDQUFOLElBQVksY0FpQlg7QUFqQkQsV0FBWSxjQUFjO0lBRXRCLGlCQUFpQjtJQUNqQiw2REFBYSxDQUFBO0lBRWIsbURBQW1EO0lBQ25ELHlEQUFXLENBQUE7SUFFWCxpQ0FBaUM7SUFDakMsdURBQVUsQ0FBQTtJQUVWLCtEQUErRDtJQUMvRCx5REFBVyxDQUFBO0lBRVgsNENBQTRDO0lBQzVDLDZEQUFhLENBQUE7QUFFakIsQ0FBQyxFQWpCVyxjQUFjLEtBQWQsY0FBYyxRQWlCekIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFVzZXIgc3RhdHVzIGNvZGVcbmV4cG9ydCBlbnVtIFVzZXJTdGF0dXNDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gVXNlciBpcyByZWdpc3RlcmVkIGFuZCBwZW5kaW5nIHZlcmlmaWNhdGlvbiBbMV0gXG4gICAgUEVORElORyA9IDEsXG4gXG4gICAgLy8gQWN0aXZlIHVzZXIgaW4gdGhlIHN5c3RlbSBbMl0gXG4gICAgQUNUSVZFID0gMixcbiBcbiAgICAvLyBCbG9ja2VkIHVzZXIgKG9ubHkgYWNjb3VudCBzeXN0ZW0gY2FuIHVuYmxvY2sgdGhlIHVzZXIpIFs0XSBcbiAgICBCTE9DS0VEID0gMyxcbiBcbiAgICAvLyBTdXNwZW5kZWQgdXNlciAoYWJvdXQgdG8gYmUgZGVsZXRlZCkgWzhdIFxuICAgIFNVU1BFTkRFRCA9IDQsXG4gXG59Il19