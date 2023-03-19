// Member role code (represent role of user in the account)
export var MemberRoleCode;
(function (MemberRoleCode) {
    // Undefined [0] 
    MemberRoleCode[MemberRoleCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Account administrator can perform all operations [1] 
    MemberRoleCode[MemberRoleCode["ADMIN"] = 1] = "ADMIN";
    // Account operator can perform operations on events only [2] 
    MemberRoleCode[MemberRoleCode["OPERATOR"] = 2] = "OPERATOR";
    // Viewer has read-only permissions [3] 
    MemberRoleCode[MemberRoleCode["VIEWER"] = 3] = "VIEWER";
})(MemberRoleCode || (MemberRoleCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyUm9sZUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wdWxzZS1saWIvc3JjL2xpYi9lbnVtcy9NZW1iZXJSb2xlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyREFBMkQ7QUFDM0QsTUFBTSxDQUFOLElBQVksY0FjWDtBQWRELFdBQVksY0FBYztJQUV0QixpQkFBaUI7SUFDakIsNkRBQWEsQ0FBQTtJQUViLHdEQUF3RDtJQUN4RCxxREFBUyxDQUFBO0lBRVQsOERBQThEO0lBQzlELDJEQUFZLENBQUE7SUFFWix3Q0FBd0M7SUFDeEMsdURBQVUsQ0FBQTtBQUVkLENBQUMsRUFkVyxjQUFjLEtBQWQsY0FBYyxRQWN6QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gTWVtYmVyIHJvbGUgY29kZSAocmVwcmVzZW50IHJvbGUgb2YgdXNlciBpbiB0aGUgYWNjb3VudClcbmV4cG9ydCBlbnVtIE1lbWJlclJvbGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gQWNjb3VudCBhZG1pbmlzdHJhdG9yIGNhbiBwZXJmb3JtIGFsbCBvcGVyYXRpb25zIFsxXSBcbiAgICBBRE1JTiA9IDEsXG4gXG4gICAgLy8gQWNjb3VudCBvcGVyYXRvciBjYW4gcGVyZm9ybSBvcGVyYXRpb25zIG9uIGV2ZW50cyBvbmx5IFsyXSBcbiAgICBPUEVSQVRPUiA9IDIsXG4gXG4gICAgLy8gVmlld2VyIGhhcyByZWFkLW9ubHkgcGVybWlzc2lvbnMgWzNdIFxuICAgIFZJRVdFUiA9IDMsXG4gXG59Il19