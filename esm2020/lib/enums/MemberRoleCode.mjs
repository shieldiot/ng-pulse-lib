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
// Return list of MemberRoleCode values and their display names
export function GetMemberRoleCodes() {
    let result = new Map();
    result.set(MemberRoleCode.UNDEFINED, 'Undefined');
    result.set(MemberRoleCode.ADMIN, 'Admin');
    result.set(MemberRoleCode.OPERATOR, 'Operator');
    result.set(MemberRoleCode.VIEWER, 'Viewer');
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyUm9sZUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1wdWxzZS1saWIvc3JjL2xpYi9lbnVtcy9NZW1iZXJSb2xlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyREFBMkQ7QUFDM0QsTUFBTSxDQUFOLElBQVksY0FjWDtBQWRELFdBQVksY0FBYztJQUV0QixpQkFBaUI7SUFDakIsNkRBQWEsQ0FBQTtJQUViLHdEQUF3RDtJQUN4RCxxREFBUyxDQUFBO0lBRVQsOERBQThEO0lBQzlELDJEQUFZLENBQUE7SUFFWix3Q0FBd0M7SUFDeEMsdURBQVUsQ0FBQTtBQUVkLENBQUMsRUFkVyxjQUFjLEtBQWQsY0FBYyxRQWN6QjtBQUVELCtEQUErRDtBQUMvRCxNQUFNLFVBQVUsa0JBQWtCO0lBRTlCLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUEwQixDQUFDO0lBRy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUVsRCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRWhELE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUc1QyxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBNZW1iZXIgcm9sZSBjb2RlIChyZXByZXNlbnQgcm9sZSBvZiB1c2VyIGluIHRoZSBhY2NvdW50KVxuZXhwb3J0IGVudW0gTWVtYmVyUm9sZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBBY2NvdW50IGFkbWluaXN0cmF0b3IgY2FuIHBlcmZvcm0gYWxsIG9wZXJhdGlvbnMgWzFdIFxuICAgIEFETUlOID0gMSxcbiBcbiAgICAvLyBBY2NvdW50IG9wZXJhdG9yIGNhbiBwZXJmb3JtIG9wZXJhdGlvbnMgb24gZXZlbnRzIG9ubHkgWzJdIFxuICAgIE9QRVJBVE9SID0gMixcbiBcbiAgICAvLyBWaWV3ZXIgaGFzIHJlYWQtb25seSBwZXJtaXNzaW9ucyBbM10gXG4gICAgVklFV0VSID0gMyxcbiBcbn1cblxuLy8gUmV0dXJuIGxpc3Qgb2YgTWVtYmVyUm9sZUNvZGUgdmFsdWVzIGFuZCB0aGVpciBkaXNwbGF5IG5hbWVzXG5leHBvcnQgZnVuY3Rpb24gR2V0TWVtYmVyUm9sZUNvZGVzKCkgOiBNYXA8TWVtYmVyUm9sZUNvZGUsIHN0cmluZz4ge1xuXG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXA8TWVtYmVyUm9sZUNvZGUsIHN0cmluZz4oKTtcblxuICAgIFxuICAgIHJlc3VsdC5zZXQoTWVtYmVyUm9sZUNvZGUuVU5ERUZJTkVELCAnVW5kZWZpbmVkJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChNZW1iZXJSb2xlQ29kZS5BRE1JTiwgJ0FkbWluJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChNZW1iZXJSb2xlQ29kZS5PUEVSQVRPUiwgJ09wZXJhdG9yJyk7XG4gICAgXG4gICAgcmVzdWx0LnNldChNZW1iZXJSb2xlQ29kZS5WSUVXRVIsICdWaWV3ZXInKTtcbiAgICBcblxuICAgIHJldHVybiByZXN1bHQ7XG59Il19