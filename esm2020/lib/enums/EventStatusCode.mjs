// Event workflow status code
export var EventStatusCode;
(function (EventStatusCode) {
    // Undefined [0] 
    EventStatusCode[EventStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // New event [1] 
    EventStatusCode[EventStatusCode["NEW"] = 1] = "NEW";
    // Open event, handled by the operator [2] 
    EventStatusCode[EventStatusCode["OPEN"] = 2] = "OPEN";
    // Closed event (tagged as True event) [3] 
    EventStatusCode[EventStatusCode["CLOSED_TRUE"] = 3] = "CLOSED_TRUE";
    // Closed event (tagged as False event) [4] 
    EventStatusCode[EventStatusCode["CLOSED_FALSE"] = 4] = "CLOSED_FALSE";
})(EventStatusCode || (EventStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTdGF0dXNDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctcHVsc2UtbGliL3NyYy9saWIvZW51bXMvRXZlbnRTdGF0dXNDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDZCQUE2QjtBQUM3QixNQUFNLENBQU4sSUFBWSxlQWlCWDtBQWpCRCxXQUFZLGVBQWU7SUFFdkIsaUJBQWlCO0lBQ2pCLCtEQUFhLENBQUE7SUFFYixpQkFBaUI7SUFDakIsbURBQU8sQ0FBQTtJQUVQLDJDQUEyQztJQUMzQyxxREFBUSxDQUFBO0lBRVIsMkNBQTJDO0lBQzNDLG1FQUFlLENBQUE7SUFFZiw0Q0FBNEM7SUFDNUMscUVBQWdCLENBQUE7QUFFcEIsQ0FBQyxFQWpCVyxlQUFlLEtBQWYsZUFBZSxRQWlCMUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEV2ZW50IHdvcmtmbG93IHN0YXR1cyBjb2RlXG5leHBvcnQgZW51bSBFdmVudFN0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBOZXcgZXZlbnQgWzFdIFxuICAgIE5FVyA9IDEsXG4gXG4gICAgLy8gT3BlbiBldmVudCwgaGFuZGxlZCBieSB0aGUgb3BlcmF0b3IgWzJdIFxuICAgIE9QRU4gPSAyLFxuIFxuICAgIC8vIENsb3NlZCBldmVudCAodGFnZ2VkIGFzIFRydWUgZXZlbnQpIFszXSBcbiAgICBDTE9TRURfVFJVRSA9IDMsXG4gXG4gICAgLy8gQ2xvc2VkIGV2ZW50ICh0YWdnZWQgYXMgRmFsc2UgZXZlbnQpIFs0XSBcbiAgICBDTE9TRURfRkFMU0UgPSA0LFxuIFxufSJdfQ==