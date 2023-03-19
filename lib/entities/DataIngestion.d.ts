export declare class DataIngestion {
    inputFilesURIs: string[];
    inputFilesExt: string[];
    usageTimeWindowSec: number;
    sessionTimeWindowSec: number;
    usageOutputURIs: string[];
    sessionOutputURIs: string[];
    dNSOutputURIs: string[];
    rawDataBackupURI: string;
    overwriteFiles: boolean;
    postAction: string;
    constructor(inputFilesURIs?: string[], inputFilesExt?: string[], usageTimeWindowSec?: number, sessionTimeWindowSec?: number, usageOutputURIs?: string[], sessionOutputURIs?: string[], dNSOutputURIs?: string[], rawDataBackupURI?: string, overwriteFiles?: boolean, postAction?: string);
}