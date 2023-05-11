export declare class DataIngestion {
    inputFilesURIs: string[];
    inputFilesExt: string[];
    subNets: string[];
    usageTimeWindowSec: number;
    sessionTimeWindowSec: number;
    usageOutputURIs: string[];
    sessionOutputURIs: string[];
    dNSOutputURIs: string[];
    rawDataBackupURI: string;
    overwriteFiles: boolean;
    postAction: string;
    schedule: string;
    constructor(inputFilesURIs?: string[], inputFilesExt?: string[], subNets?: string[], usageTimeWindowSec?: number, sessionTimeWindowSec?: number, usageOutputURIs?: string[], sessionOutputURIs?: string[], dNSOutputURIs?: string[], rawDataBackupURI?: string, overwriteFiles?: boolean, postAction?: string, schedule?: string);
}
