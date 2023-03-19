import * as i0 from '@angular/core';
import { Injectable, Inject, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpRequest, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

// Account role represents the role of the user in the account
class AccountRole {
    constructor(accountId, role) {
        if (accountId !== undefined) {
            this.accountId = accountId;
        }
        if (role !== undefined) {
            this.role = role;
        }
    }
}

// Indicator model represents a feature and feature value within a normal range
class Indicator {
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

// Login parameters data model
class LoginParams {
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

// String Int Value tuple
class StringIntValue {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// Key Value string tuple
class StringKeyValue {
    constructor(key, value) {
        if (key !== undefined) {
            this.key = key;
        }
        if (value !== undefined) {
            this.value = value;
        }
    }
}

// TokenData model represents a user in account which is encrypted with the JWT token
class TokenData {
    constructor(accountId, subjectId, subjectType, role, status, expiresIn) {
        if (accountId !== undefined) {
            this.accountId = accountId;
        }
        if (subjectId !== undefined) {
            this.subjectId = subjectId;
        }
        if (subjectType !== undefined) {
            this.subjectType = subjectType;
        }
        if (role !== undefined) {
            this.role = role;
        }
        if (status !== undefined) {
            this.status = status;
        }
        if (expiresIn !== undefined) {
            this.expiresIn = expiresIn;
        }
    }
}

// ZScore parameters
class ZScore {
    constructor(mean, sD) {
        if (mean !== undefined) {
            this.mean = mean;
        }
        if (sD !== undefined) {
            this.sD = sD;
        }
    }
}

// Base entity includes common fields for all entities (persistence objects) in the system
class BaseEntity {
    constructor(id, createdOn, updatedOn) {
        if (id !== undefined) {
            this.id = id;
        }
        if (createdOn !== undefined) {
            this.createdOn = createdOn;
        }
        if (updatedOn !== undefined) {
            this.updatedOn = updatedOn;
        }
    }
}

// Account entity in the system represents customer account
class Account extends BaseEntity {
}

// Audit Log - each entry represents a single action done by user
class AuditLog extends BaseEntity {
}

// Checkpoint represents parsing status in time that preserves parsing cycle statistics and last checkpoint (timestamp) to avoid parsing the same files over and over again
class Calendar extends BaseEntity {
}

// DNSRecord represents network statistics of DNS requests
class DNSRecord extends BaseEntity {
}

// DataIngestion is the ingestion pipeline configuration
class DataIngestion {
    constructor(inputFilesURIs, inputFilesExt, usageTimeWindowSec, sessionTimeWindowSec, usageOutputURIs, sessionOutputURIs, dNSOutputURIs, rawDataBackupURI, overwriteFiles, postAction) {
        if (inputFilesURIs !== undefined) {
            this.inputFilesURIs = inputFilesURIs;
        }
        if (inputFilesExt !== undefined) {
            this.inputFilesExt = inputFilesExt;
        }
        if (usageTimeWindowSec !== undefined) {
            this.usageTimeWindowSec = usageTimeWindowSec;
        }
        if (sessionTimeWindowSec !== undefined) {
            this.sessionTimeWindowSec = sessionTimeWindowSec;
        }
        if (usageOutputURIs !== undefined) {
            this.usageOutputURIs = usageOutputURIs;
        }
        if (sessionOutputURIs !== undefined) {
            this.sessionOutputURIs = sessionOutputURIs;
        }
        if (dNSOutputURIs !== undefined) {
            this.dNSOutputURIs = dNSOutputURIs;
        }
        if (rawDataBackupURI !== undefined) {
            this.rawDataBackupURI = rawDataBackupURI;
        }
        if (overwriteFiles !== undefined) {
            this.overwriteFiles = overwriteFiles;
        }
        if (postAction !== undefined) {
            this.postAction = postAction;
        }
    }
}

// Device entity is an IoT device representation with attributes and state
class Device extends BaseEntity {
}

// Cyber event entity
class Event extends BaseEntity {
}

// Member represents a user in the account and the role he has in this account
// User may have several memberships for several accounts, each with a different role
class Member extends BaseEntity {
}

// RuleTemplate entity is used to define rules quickly based on pre-defined templates
class Rule extends BaseEntity {
}

// SessionRecord represents network statistics for a session
class SessionRecord extends BaseEntity {
}

// Shieldex is a security score per account level calculated periodically
class Shieldex extends BaseEntity {
}

// Stream represents data stream configuration for group of identical IoT devices service the same purpose and sharing the same attributes (e.g. water meter, point-of-sale, ATM IP camera etc)
class Stream extends BaseEntity {
}

// StreamConfig is a stream configuration description
class StreamConfig {
    constructor(ingest) {
        if (ingest !== undefined) {
            this.ingest = ingest;
        }
    }
}

// UsageRecord represents network statistics
class UsageRecord extends BaseEntity {
}

// User represents a human / system operator that has access to the system, and can perform operations
// User authentication is done by an external identity provider
class User extends BaseEntity {
}

// UserMembership model include user data with a specific account membership
class UserMembership extends BaseEntity {
}

// UserMemberships model include user data and all its accounts memberships
class UserMemberships extends BaseEntity {
}

// Account status code
var AccountStatusCode;
(function (AccountStatusCode) {
    // Undefined [0] 
    AccountStatusCode[AccountStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Active account [1] 
    AccountStatusCode[AccountStatusCode["ACTIVE"] = 1] = "ACTIVE";
    // Suspended (non-active) account [2] 
    AccountStatusCode[AccountStatusCode["SUSPENDED"] = 2] = "SUSPENDED";
    // Deleted account [3] 
    AccountStatusCode[AccountStatusCode["DELETED"] = 3] = "DELETED";
})(AccountStatusCode || (AccountStatusCode = {}));

// Account type code
var AccountTypeCode;
(function (AccountTypeCode) {
    // Undefined [0] 
    AccountTypeCode[AccountTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Demo account for internal use [1] 
    AccountTypeCode[AccountTypeCode["DEMO"] = 1] = "DEMO";
    // Trial account for pilots [2] 
    AccountTypeCode[AccountTypeCode["TRIAL"] = 2] = "TRIAL";
    // Active account for partner [3] 
    AccountTypeCode[AccountTypeCode["PARTNER"] = 3] = "PARTNER";
    // Active account for paying customers [4] 
    AccountTypeCode[AccountTypeCode["CUSTOMER"] = 4] = "CUSTOMER";
})(AccountTypeCode || (AccountTypeCode = {}));

// Device status code
var DeviceStatusCode;
(function (DeviceStatusCode) {
    // Undefined [0] 
    DeviceStatusCode[DeviceStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Device is registered and pending verification [1] 
    DeviceStatusCode[DeviceStatusCode["PENDING"] = 1] = "PENDING";
    // Active device in the system [2] 
    DeviceStatusCode[DeviceStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // Inactive device [3] 
    DeviceStatusCode[DeviceStatusCode["INACTIVE"] = 3] = "INACTIVE";
    // Suspended device (about to be deleted) [4] 
    DeviceStatusCode[DeviceStatusCode["SUSPENDED"] = 4] = "SUSPENDED";
})(DeviceStatusCode || (DeviceStatusCode = {}));

// Device type code
var DeviceTypeCode;
(function (DeviceTypeCode) {
    // Undefined [0] 
    DeviceTypeCode[DeviceTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Industrial Controller [1] 
    DeviceTypeCode[DeviceTypeCode["CONTROLLER"] = 1] = "CONTROLLER";
    // General smart meter [2] 
    DeviceTypeCode[DeviceTypeCode["METER"] = 2] = "METER";
    // General sensor [3] 
    DeviceTypeCode[DeviceTypeCode["SENSOR"] = 3] = "SENSOR";
    // General camera [4] 
    DeviceTypeCode[DeviceTypeCode["CAMERA"] = 4] = "CAMERA";
    // Point of sale [5] 
    DeviceTypeCode[DeviceTypeCode["POS"] = 5] = "POS";
    // Pump [6] 
    DeviceTypeCode[DeviceTypeCode["PUMP"] = 6] = "PUMP";
    // EV charging station [7] 
    DeviceTypeCode[DeviceTypeCode["CHARGING_STATION"] = 7] = "CHARGING_STATION";
    // Smart lightning [8] 
    DeviceTypeCode[DeviceTypeCode["LIGHTNING"] = 8] = "LIGHTNING";
    // Temperature sensor [9] 
    DeviceTypeCode[DeviceTypeCode["TEMPERATURE_SENSOR"] = 9] = "TEMPERATURE_SENSOR";
    // Air Quality sensor [10] 
    DeviceTypeCode[DeviceTypeCode["AIR_QUALITY_SENSOR"] = 10] = "AIR_QUALITY_SENSOR";
    // Valve [11] 
    DeviceTypeCode[DeviceTypeCode["VALVE"] = 11] = "VALVE";
    // Gateway [12] 
    DeviceTypeCode[DeviceTypeCode["GATEWAY"] = 12] = "GATEWAY";
})(DeviceTypeCode || (DeviceTypeCode = {}));

// Event type code
var EventTypeCode;
(function (EventTypeCode) {
    // Undefined [0] 
    EventTypeCode[EventTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Device Takeover [1] 
    EventTypeCode[EventTypeCode["DEVICE_TAKEOVER"] = 1] = "DEVICE_TAKEOVER";
    // DDoS [2] 
    EventTypeCode[EventTypeCode["DDOS"] = 2] = "DDOS";
    // Unknown Malware [3] 
    EventTypeCode[EventTypeCode["UNKNOWN_MALWARE"] = 3] = "UNKNOWN_MALWARE";
    // Man-in-the-Middle [4] 
    EventTypeCode[EventTypeCode["MAN_IN_THE_MIDDLE"] = 4] = "MAN_IN_THE_MIDDLE";
    // Data Theft [5] 
    EventTypeCode[EventTypeCode["DATA_THEFT"] = 5] = "DATA_THEFT";
    // Port Scanning [6] 
    EventTypeCode[EventTypeCode["PORT_SCANNING"] = 6] = "PORT_SCANNING";
    // Abnormal Download [7] 
    EventTypeCode[EventTypeCode["ABNORMAL_DOWNLOAD"] = 7] = "ABNORMAL_DOWNLOAD";
    // Abnormal Incoming Connection [8] 
    EventTypeCode[EventTypeCode["ABNORMAL_INCOMING_CONNECTION"] = 8] = "ABNORMAL_INCOMING_CONNECTION";
    // Unsuccessful Connection Attempts [9] 
    EventTypeCode[EventTypeCode["UNSUCCESSFUL_CONNECTION_ATTEMPTS"] = 9] = "UNSUCCESSFUL_CONNECTION_ATTEMPTS";
    // High Volume Transmit [10] 
    EventTypeCode[EventTypeCode["HIGH_VOLUME_TRANSIT"] = 10] = "HIGH_VOLUME_TRANSIT";
    // Device Level Attack [11] 
    EventTypeCode[EventTypeCode["DEVICE_LEVEL_ATTACK"] = 11] = "DEVICE_LEVEL_ATTACK";
    // Replay Attack [12] 
    EventTypeCode[EventTypeCode["REPLAY_ATTACK"] = 12] = "REPLAY_ATTACK";
    // Attempted Device Takeover [13] 
    EventTypeCode[EventTypeCode["DEVICE_TAKEOVER_ATTEMPT"] = 13] = "DEVICE_TAKEOVER_ATTEMPT";
    // Unknown Operation' [14] 
    EventTypeCode[EventTypeCode["UNKNOWN_OPERATION"] = 14] = "UNKNOWN_OPERATION";
    // Crypto Mining [15] 
    EventTypeCode[EventTypeCode["CRYPTO_MINING"] = 15] = "CRYPTO_MINING";
    // Suspicious IP [16] 
    EventTypeCode[EventTypeCode["SUSPICIOUS_IP"] = 16] = "SUSPICIOUS_IP";
})(EventTypeCode || (EventTypeCode = {}));

// Member role code (represent role of user in the account)
var MemberRoleCode;
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

// RuleTypeCode represents the sources (engines) of rules
var RuleTypeCode;
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

// Severity type (level) code
var SeverityTypeCode;
(function (SeverityTypeCode) {
    // Undefined [0] 
    SeverityTypeCode[SeverityTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // No effect [1] 
    SeverityTypeCode[SeverityTypeCode["NO_EFFECT"] = 1] = "NO_EFFECT";
    // Notification only [2] 
    SeverityTypeCode[SeverityTypeCode["NOTIFICATION"] = 2] = "NOTIFICATION";
    // Lowest severity [3] 
    SeverityTypeCode[SeverityTypeCode["LOWEST"] = 3] = "LOWEST";
    // Low severity [4] 
    SeverityTypeCode[SeverityTypeCode["LOW"] = 4] = "LOW";
    // Medium severity [5] 
    SeverityTypeCode[SeverityTypeCode["MEDIUM"] = 5] = "MEDIUM";
    // High severity [6] 
    SeverityTypeCode[SeverityTypeCode["HIGH"] = 6] = "HIGH";
    // Highest severity [7] 
    SeverityTypeCode[SeverityTypeCode["HIGHEST"] = 7] = "HIGHEST";
    // Critical severity [8] 
    SeverityTypeCode[SeverityTypeCode["CRITICAL"] = 8] = "CRITICAL";
})(SeverityTypeCode || (SeverityTypeCode = {}));

// User status code
var UserStatusCode;
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

// User type code
var UserTypeCode;
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

class AccountIdRequest {
    constructor(id) {
        if (id !== undefined) {
            this.id = id;
        }
    }
}

class AccountsServiceCreateRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

class AccountsServiceFindRequest {
    constructor(search, type, status, sort, page, size) {
        if (search !== undefined) {
            this.search = search;
        }
        if (type !== undefined) {
            this.type = type;
        }
        if (status !== undefined) {
            this.status = status;
        }
        if (sort !== undefined) {
            this.sort = sort;
        }
        if (page !== undefined) {
            this.page = page;
        }
        if (size !== undefined) {
            this.size = size;
        }
    }
}

class AccountsServiceUpdateRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

// ActionResponse message is returned for any action on entity with no return data (e.d. delete)
class ActionResponse {
    constructor(code, error, key, data) {
        if (code !== undefined) {
            this.code = code;
        }
        if (error !== undefined) {
            this.error = error;
        }
        if (key !== undefined) {
            this.key = key;
        }
        if (data !== undefined) {
            this.data = data;
        }
    }
}

class DeviceIdRequest {
    constructor(id) {
        if (id !== undefined) {
            this.id = id;
        }
    }
}

class DevicesServiceCreateRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

class DevicesServiceFindRequest {
    constructor(accountId, streamId, search, type, status, sort, page, size) {
        if (accountId !== undefined) {
            this.accountId = accountId;
        }
        if (streamId !== undefined) {
            this.streamId = streamId;
        }
        if (search !== undefined) {
            this.search = search;
        }
        if (type !== undefined) {
            this.type = type;
        }
        if (status !== undefined) {
            this.status = status;
        }
        if (sort !== undefined) {
            this.sort = sort;
        }
        if (page !== undefined) {
            this.page = page;
        }
        if (size !== undefined) {
            this.size = size;
        }
    }
}

class DevicesServiceUpdateRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

class EmptyRequest {
    constructor() {
    }
}

class EmptyResponse {
    constructor() {
    }
}

// EntitiesResponse message is returned for any action returning multiple entities
class EntitiesResponse {
    constructor(code, error, page, size, pages, total) {
        if (code !== undefined) {
            this.code = code;
        }
        if (error !== undefined) {
            this.error = error;
        }
        if (page !== undefined) {
            this.page = page;
        }
        if (size !== undefined) {
            this.size = size;
        }
        if (pages !== undefined) {
            this.pages = pages;
        }
        if (total !== undefined) {
            this.total = total;
        }
    }
}

class EntitiesResponseOfAccount extends EntitiesResponse {
}

class EntitiesResponseOfDevice extends EntitiesResponse {
}

class EntitiesResponseOfEvent extends EntitiesResponse {
}

class EntitiesResponseOfMember extends EntitiesResponse {
}

class EntitiesResponseOfStream extends EntitiesResponse {
}

class EntitiesResponseOfUser extends EntitiesResponse {
}

// EntityResponse message is returned for any create/update action on entity
class EntityResponse {
    constructor(code, error) {
        if (code !== undefined) {
            this.code = code;
        }
        if (error !== undefined) {
            this.error = error;
        }
    }
}

class EntityResponseOfAccount extends EntityResponse {
}

class EntityResponseOfDevice extends EntityResponse {
}

class EntityResponseOfEvent extends EntityResponse {
}

class EntityResponseOfMember extends EntityResponse {
}

class EntityResponseOfStream extends EntityResponse {
}

class EntityResponseOfUser extends EntityResponse {
}

class EntityResponseOfUserMemberships extends EntityResponse {
}

class EventIdRequest {
    constructor(id) {
        if (id !== undefined) {
            this.id = id;
        }
    }
}

class EventsServiceFindRequest {
    constructor(accountId, streamId, deviceId, from, to, type, severity, sort, page, size) {
        if (accountId !== undefined) {
            this.accountId = accountId;
        }
        if (streamId !== undefined) {
            this.streamId = streamId;
        }
        if (deviceId !== undefined) {
            this.deviceId = deviceId;
        }
        if (from !== undefined) {
            this.from = from;
        }
        if (to !== undefined) {
            this.to = to;
        }
        if (type !== undefined) {
            this.type = type;
        }
        if (severity !== undefined) {
            this.severity = severity;
        }
        if (sort !== undefined) {
            this.sort = sort;
        }
        if (page !== undefined) {
            this.page = page;
        }
        if (size !== undefined) {
            this.size = size;
        }
    }
}

class MemberIdRequest {
    constructor(id) {
        if (id !== undefined) {
            this.id = id;
        }
    }
}

class MembersServiceCreateRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

class MembersServiceFindRequest {
    constructor(accountId, userId, role, sort, page, size) {
        if (accountId !== undefined) {
            this.accountId = accountId;
        }
        if (userId !== undefined) {
            this.userId = userId;
        }
        if (role !== undefined) {
            this.role = role;
        }
        if (sort !== undefined) {
            this.sort = sort;
        }
        if (page !== undefined) {
            this.page = page;
        }
        if (size !== undefined) {
            this.size = size;
        }
    }
}

class MembersServiceUpdateRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

class StreamIdRequest {
    constructor(id) {
        if (id !== undefined) {
            this.id = id;
        }
    }
}

// Response of byte array
class StreamResponse {
    constructor(content) {
        if (content !== undefined) {
            this.content = content;
        }
    }
}

class StreamsServiceCreateRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

class StreamsServiceFindRequest {
    constructor(accountId, search, sort, page, size) {
        if (accountId !== undefined) {
            this.accountId = accountId;
        }
        if (search !== undefined) {
            this.search = search;
        }
        if (sort !== undefined) {
            this.sort = sort;
        }
        if (page !== undefined) {
            this.page = page;
        }
        if (size !== undefined) {
            this.size = size;
        }
    }
}

class StreamsServiceUpdateRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

class UserIdRequest {
    constructor(id) {
        if (id !== undefined) {
            this.id = id;
        }
    }
}

class UserServiceAuthorizeRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

class UserServiceSetAccountRequest {
    constructor(id) {
        if (id !== undefined) {
            this.id = id;
        }
    }
}

class UsersServiceCreateMembershipsRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

class UsersServiceCreateRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

class UsersServiceFindRequest {
    constructor(search, type, status, sort, page, size) {
        if (search !== undefined) {
            this.search = search;
        }
        if (type !== undefined) {
            this.type = type;
        }
        if (status !== undefined) {
            this.status = status;
        }
        if (sort !== undefined) {
            this.sort = sort;
        }
        if (page !== undefined) {
            this.page = page;
        }
        if (size !== undefined) {
            this.size = size;
        }
    }
}

class UsersServiceUpdateRequest {
    constructor(body) {
        if (body !== undefined) {
            this.body = body;
        }
    }
}

// @WebSocketMessage Message header for all web socket messages
class WebSocketMessageHeader {
    constructor(opcode, version, messageId, correlationId, sessionId) {
        if (opcode !== undefined) {
            this.op = opcode;
        }
        if (version !== undefined) {
            this.ver = version;
        }
        if (messageId !== undefined) {
            this.id = messageId;
        }
        if (correlationId !== undefined) {
            this.cid = correlationId;
        }
        if (sessionId !== undefined) {
            this.sid = sessionId;
        }
    }
}

// Access token key in the local storage
const tokenKey = 'portalAccessToken';
const loginKey = 'portalLoginData';
function getToken() {
    return localStorage.getItem(tokenKey);
}
function setToken(token) {
    localStorage.setItem(tokenKey, token);
}
function removeToken() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(loginKey);
}

/**
 * Utility class for all REST services with common functions
 */
class RestUtil {
    /**
     * Constructor with injected authentication service
     */
    constructor(http) {
        this.http = http;
        // Set headers
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * Upload is HTTP POST action but the body is File object
     */
    upload(file, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        const formData = new FormData();
        formData.append('fileKey', file, file.name);
        const req = new HttpRequest('POST', resourceUrl, formData, {
            reportProgress: false,
            responseType: 'json',
        });
        return this.http.request(req);
    }
    /**
     * Download is HTTP GET action but the content is blob
     */
    download(fileName, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        let downloadLink = fileName;
        // extract file name
        params.forEach(p => {
            let arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'filename') {
                    downloadLink = arr[1];
                }
            }
        });
        // return this.http.get(resourceUrl, {responseType: 'blob'}).subscribe((data) => {
        //   const downloadURL = window.URL.createObjectURL(data);
        //   const link = document.createElement('a');
        //   link.href = downloadURL;
        //   link.download = downloadLink;
        //
        //   link.click();
        // });
        // Set content type for: json / csv / xml / pdf
        let contentType = 'application/json';
        if (downloadLink.toLowerCase().endsWith('csv')) {
            contentType = 'text/csv';
        }
        else if (downloadLink.toLowerCase().endsWith('xml')) {
            contentType = 'text/xml';
        }
        else if (downloadLink.toLowerCase().endsWith('pdf')) {
            contentType = 'application/pdf';
        }
        return this.http.get(resourceUrl, {
            responseType: 'blob',
            reportProgress: true,
            observe: 'events',
            headers: new HttpHeaders({ 'Content-Type': contentType })
        });
    }
    /**
     * HTTP GET action
     */
    get(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .get(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP POST action
     */
    post(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP PUT action
     */
    put(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP DELETE action
     */
    delete(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .delete(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * Construct URL with parameters
     */
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
    /**
     * Process the response, extract and refresh access token and return the body
     */
    processResponse(response) {
        if (response.status === 401) {
            removeToken();
            throw new Error('Access denied, reset token: ' + response.status);
        }
        else if (response.status > 400) {
            throw new Error('HTTP status error: ' + response.status);
        }
        // Get access token from header and update authentication service
        const accessToken = response.headers.get('X-ACCESS-TOKEN');
        if ((accessToken !== null) && (accessToken.length > 0)) {
            setToken(accessToken);
        }
        if (response.body && response.body.code && response.body.code !== 0) {
            throw { code: response.body.code, message: response.body.error };
        }
        return response.body;
    }
    /**
     * Error handling
     */
    handleError(error) {
        if (error.code) {
            return Promise.reject(error);
        }
        return Promise.reject(error.message || error);
    }
}
RestUtil.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
RestUtil.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: RestUtil, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class PulseConfig {
}

// List of device related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class DevicesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/devices';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new device
     * @Return: EntityResponse<Device>
     */
    create() {
        return this.rest.post(`${this.baseUrl}`, '');
    }
    /**
     * Update existing device in the system
     * @Return: EntityResponse<Device>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete device from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single device by id
     * @Return: EntityResponse<Device>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of devices by query
     * @Return: EntitiesResponse<Device>
     */
    find(accountId, streamId, search, type, status, sort, page, size) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
DevicesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DevicesService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
DevicesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DevicesService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DevicesService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; } });

// List of events related actions for the operator 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class EventsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/events';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get single event by id
     * @Return: EntityResponse<Event>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of events by query
     * @Return: EntitiesResponse<Event>
     */
    find(accountId, streamId, deviceId, from, to, type, severity, sort, page, size) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (streamId != null) {
            params.push(`streamId=${streamId}`);
        }
        if (deviceId != null) {
            params.push(`deviceId=${deviceId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
EventsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: EventsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
EventsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: EventsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: EventsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; } });

// List of account related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysAccountsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/accounts';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new account
     * @Return: EntityResponse<Account>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing account in the system
     * @Return: EntityResponse<Account>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete account from the system and all its related content
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of accounts by query
     * @Return: EntitiesResponse<Account>
     */
    find(search, type, status, sort, page, size) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
SysAccountsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysAccountsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
SysAccountsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysAccountsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysAccountsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; } });

// List of members related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysMembersService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/members';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new member
     * @Return: EntityResponse<Member>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing member in the system
     * @Return: EntityResponse<Member>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete member from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single member by id
     * @Return: EntityResponse<Member>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of members by query
     * @Return: EntitiesResponse<Member>
     */
    find() {
        return this.rest.get(`${this.baseUrl}`);
    }
}
SysMembersService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysMembersService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
SysMembersService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysMembersService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysMembersService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; } });

// List of stream related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysStreamsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/streams';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new stream
     * @Return: EntityResponse<Stream>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing stream in the system
     * @Return: EntityResponse<Stream>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a stream from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single stream by id
     * @Return: EntityResponse<Stream>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of streams by query
     * @Return: EntitiesResponse<Stream>
     */
    find(accountId, search, sort, page, size) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
SysStreamsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysStreamsService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
SysStreamsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysStreamsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysStreamsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; } });

// List of users related actions for system administrator only 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class SysUsersService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/users';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new user
     * @Return: EntityResponse<User>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing user in the system
     * @Return: EntityResponse<User>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete a user from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by id
     * @Return: EntityResponse<User>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of users by query
     * @Return: EntitiesResponse<User>
     */
    find(search, type, status, sort, page, size) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (size != null) {
            params.push(`size=${size}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Create new user with all its accounts memberships
     * @Return: EntityResponse<UserMemberships>
     */
    createMembership(body) {
        return this.rest.post(`${this.baseUrl}/memberships`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
SysUsersService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysUsersService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
SysUsersService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysUsersService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: SysUsersService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; } });

// List of user related actions 
// @RequestHeader X-API-KEY The key to identify the application (console) 
// @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user 
class UserService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/user';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Authorize user, verify user exists in the system (user was already authenticated by OAuth provider)
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: ActionResponse
     */
    authorize(body) {
        return this.rest.post(`${this.baseUrl}/authorize`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * The response includes the newly refreshed token both in the HTTP header and in the message body as data
     * @Return: ActionResponse
     */
    setAccount(id) {
        return this.rest.post(`${this.baseUrl}/set-account/${id}`, '');
    }
}
UserService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UserService, deps: [{ token: 'config' }, { token: RestUtil }], target: i0.ɵɵFactoryTarget.Injectable });
UserService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UserService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: UserService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: PulseConfig, decorators: [{
                    type: Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; } });

const Services = [
    SysAccountsService,
    SysMembersService,
    SysStreamsService,
    SysUsersService,
    UserService,
    DevicesService,
    EventsService,
];

class PulseLibModule {
    static forRoot(config) {
        return {
            ngModule: PulseLibModule,
            providers: [
                { provide: 'config', useValue: config },
                RestUtil,
                ...Services
            ]
        };
    }
}
PulseLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PulseLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PulseLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: PulseLibModule, imports: [CommonModule, HttpClientModule] });
PulseLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PulseLibModule, imports: [CommonModule, HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: PulseLibModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule]
                }]
        }] });

/* Public API Surface of ng-pulse-lib */

/**
 * Generated bundle index. Do not edit.
 */

export { Account, AccountIdRequest, AccountRole, AccountStatusCode, AccountTypeCode, AccountsServiceCreateRequest, AccountsServiceFindRequest, AccountsServiceUpdateRequest, ActionResponse, AuditLog, BaseEntity, Calendar, DNSRecord, DataIngestion, Device, DeviceIdRequest, DeviceStatusCode, DeviceTypeCode, DevicesService, DevicesServiceCreateRequest, DevicesServiceFindRequest, DevicesServiceUpdateRequest, EmptyRequest, EmptyResponse, EntitiesResponse, EntitiesResponseOfAccount, EntitiesResponseOfDevice, EntitiesResponseOfEvent, EntitiesResponseOfMember, EntitiesResponseOfStream, EntitiesResponseOfUser, EntityResponse, EntityResponseOfAccount, EntityResponseOfDevice, EntityResponseOfEvent, EntityResponseOfMember, EntityResponseOfStream, EntityResponseOfUser, EntityResponseOfUserMemberships, Event, EventIdRequest, EventTypeCode, EventsService, EventsServiceFindRequest, Indicator, LoginParams, Member, MemberIdRequest, MemberRoleCode, MembersServiceCreateRequest, MembersServiceFindRequest, MembersServiceUpdateRequest, PulseConfig, PulseLibModule, RestUtil, Rule, RuleTypeCode, Services, SessionRecord, SeverityTypeCode, Shieldex, Stream, StreamConfig, StreamIdRequest, StreamResponse, StreamsServiceCreateRequest, StreamsServiceFindRequest, StreamsServiceUpdateRequest, StringIntValue, StringKeyValue, SysAccountsService, SysMembersService, SysStreamsService, SysUsersService, TokenData, UsageRecord, User, UserIdRequest, UserMembership, UserMemberships, UserService, UserServiceAuthorizeRequest, UserServiceSetAccountRequest, UserStatusCode, UserTypeCode, UsersServiceCreateMembershipsRequest, UsersServiceCreateRequest, UsersServiceFindRequest, UsersServiceUpdateRequest, WebSocketMessageHeader, ZScore, getToken, removeToken, setToken };
//# sourceMappingURL=pulseiot-ng-pulse-lib.mjs.map
