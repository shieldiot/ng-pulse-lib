import { ModuleWithProviders } from '@angular/core';
import { PulseConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/common/http";
export declare class PulseLibModule {
    static forRoot(config: PulseConfig): ModuleWithProviders<PulseLibModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PulseLibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PulseLibModule, never, [typeof i1.CommonModule, typeof i2.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PulseLibModule>;
}
