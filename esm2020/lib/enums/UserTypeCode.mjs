// User type code
export var UserTypeCode;
(function (UserTypeCode) {
    // Undefined [0] 
    UserTypeCode[UserTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // System administrator has access to all accounts and permissions to perform all actions [1] 
    UserTypeCode[UserTypeCode["SYSADMIN"] = 1] = "SYSADMIN";
    // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
    UserTypeCode[UserTypeCode["SUPPORT"] = 2] = "SUPPORT";
    // Account user - has access to specific accounts with role based access control [4] 
    UserTypeCode[UserTypeCode["USER"] = 4] = "USER";
    // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
    UserTypeCode[UserTypeCode["SERVICE"] = 5] = "SERVICE";
})(UserTypeCode || (UserTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcHVsc2UtbGliL3NyYy9saWIvZW51bXMvVXNlclR5cGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLGlCQUFpQjtBQUNqQixNQUFNLENBQU4sSUFBWSxZQWlCWDtBQWpCRCxXQUFZLFlBQVk7SUFFcEIsaUJBQWlCO0lBQ2pCLHlEQUFhLENBQUE7SUFFYiw4RkFBOEY7SUFDOUYsdURBQVksQ0FBQTtJQUVaLGtHQUFrRztJQUNsRyxxREFBVyxDQUFBO0lBRVgscUZBQXFGO0lBQ3JGLCtDQUFRLENBQUE7SUFFUiw4SEFBOEg7SUFDOUgscURBQVcsQ0FBQTtBQUVmLENBQUMsRUFqQlcsWUFBWSxLQUFaLFlBQVksUUFpQnZCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBVc2VyIHR5cGUgY29kZVxuZXhwb3J0IGVudW0gVXNlclR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gU3lzdGVtIGFkbWluaXN0cmF0b3IgaGFzIGFjY2VzcyB0byBhbGwgYWNjb3VudHMgYW5kIHBlcm1pc3Npb25zIHRvIHBlcmZvcm0gYWxsIGFjdGlvbnMgWzFdIFxuICAgIFNZU0FETUlOID0gMSxcbiBcbiAgICAvLyBTdXBwb3J0IHVzZXIgaGFzIHZpZXcgcGVybWlzc2lvbnMgb25seSBmb3IgYWxsIGFjY291bnRzIHRoYXQgZW5hYmxlZCBvcHRpb24gRW5hYmxlIFN1cHBvcnQgWzJdIFxuICAgIFNVUFBPUlQgPSAyLFxuIFxuICAgIC8vIEFjY291bnQgdXNlciAtIGhhcyBhY2Nlc3MgdG8gc3BlY2lmaWMgYWNjb3VudHMgd2l0aCByb2xlIGJhc2VkIGFjY2VzcyBjb250cm9sIFs0XSBcbiAgICBVU0VSID0gNCxcbiBcbiAgICAvLyBBY2NvdW50IHNlcnZpY2UgLSB0byBiZSB1c2VkIGJ5IG90aGVyIHN5c3RlbXMgdG8gcGVyZm9ybSBhY3Rpb25zIHVzaW5nIHRoZSBBUEkgKGNhbid0IGxvZ2luIGFzIGEgdXNlciB0byB0aGUgcG9ydGFsKScgWzVdYCBcbiAgICBTRVJWSUNFID0gNSxcbiBcbn0iXX0=