// RuleTypeCode represents the sources (engines) of rules
export var RuleTypeCode;
(function (RuleTypeCode) {
    // Undefined [0] 
    RuleTypeCode[RuleTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Suspicious IP based on IP reputation engine [1] 
    RuleTypeCode[RuleTypeCode["SUSPICIOUS_IP"] = 1] = "SUSPICIOUS_IP";
    // Static rule based on deterministic rule engine [2] 
    RuleTypeCode[RuleTypeCode["STATIC"] = 2] = "STATIC";
    // Rule based on anomaly detection and classification [3] 
    RuleTypeCode[RuleTypeCode["ANOMALY"] = 3] = "ANOMALY";
})(RuleTypeCode || (RuleTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZVR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcHVsc2UtbGliL3NyYy9saWIvZW51bXMvUnVsZVR5cGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLHlEQUF5RDtBQUN6RCxNQUFNLENBQU4sSUFBWSxZQWNYO0FBZEQsV0FBWSxZQUFZO0lBRXBCLGlCQUFpQjtJQUNqQix5REFBYSxDQUFBO0lBRWIsbURBQW1EO0lBQ25ELGlFQUFpQixDQUFBO0lBRWpCLHNEQUFzRDtJQUN0RCxtREFBVSxDQUFBO0lBRVYsMERBQTBEO0lBQzFELHFEQUFXLENBQUE7QUFFZixDQUFDLEVBZFcsWUFBWSxLQUFaLFlBQVksUUFjdkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFJ1bGVUeXBlQ29kZSByZXByZXNlbnRzIHRoZSBzb3VyY2VzIChlbmdpbmVzKSBvZiBydWxlc1xuZXhwb3J0IGVudW0gUnVsZVR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gU3VzcGljaW91cyBJUCBiYXNlZCBvbiBJUCByZXB1dGF0aW9uIGVuZ2luZSBbMV0gXG4gICAgU1VTUElDSU9VU19JUCA9IDEsXG4gXG4gICAgLy8gU3RhdGljIHJ1bGUgYmFzZWQgb24gZGV0ZXJtaW5pc3RpYyBydWxlIGVuZ2luZSBbMl0gXG4gICAgU1RBVElDID0gMixcbiBcbiAgICAvLyBSdWxlIGJhc2VkIG9uIGFub21hbHkgZGV0ZWN0aW9uIGFuZCBjbGFzc2lmaWNhdGlvbiBbM10gXG4gICAgQU5PTUFMWSA9IDMsXG4gXG59Il19