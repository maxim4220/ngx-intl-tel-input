import { IConfig } from './config';
import * as ɵngcc0 from '@angular/core';
export declare class MaskApplierService {
    protected _config: IConfig;
    dropSpecialCharacters: IConfig['dropSpecialCharacters'];
    showTemplate: IConfig['showTemplate'];
    clearIfNotMatch: IConfig['clearIfNotMatch'];
    maskExpression: string;
    maskSpecialCharacters: IConfig['specialCharacters'];
    maskAvailablePatterns: IConfig['patterns'];
    prefix: IConfig['prefix'];
    sufix: IConfig['sufix'];
    customPattern: IConfig['patterns'];
    private _shift;
    constructor(_config: IConfig);
    applyMaskWithPattern(inputValue: string, maskAndPattern: [string, IConfig['patterns']]): string;
    applyMask(inputValue: string, maskExpression: string, position?: number, cb?: Function): string;
    _findSpecialChar(inputSymbol: string): undefined | string;
    private _checkSymbolMask;
    private separator;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MaskApplierService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<MaskApplierService>;
}

//# sourceMappingURL=mask-applier.service.d.ts.map