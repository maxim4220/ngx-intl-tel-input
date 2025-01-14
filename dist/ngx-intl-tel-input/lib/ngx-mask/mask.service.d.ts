import { ElementRef, Renderer2 } from '@angular/core';
import { IConfig } from './config';
import { MaskApplierService } from './mask-applier.service';
import * as ɵngcc0 from '@angular/core';
export declare class MaskService extends MaskApplierService {
    private document;
    protected _config: IConfig;
    private _elementRef;
    private _renderer;
    maskExpression: string;
    isNumberValue: boolean;
    showMaskTyped: boolean;
    maskIsShown: string;
    private _formElement;
    onChange: (_: any) => void;
    onTouch: () => void;
    constructor(document: any, _config: IConfig, _elementRef: ElementRef, _renderer: Renderer2);
    applyMask(inputValue: string, maskExpression: string, position?: number, cb?: Function): string;
    applyValueChanges(position?: number, cb?: Function): void;
    showMaskInInput(): void;
    clearIfNotMatchFn(): void;
    set formElementProperty([name, value]: [string, string | boolean]);
    private _removeMask;
    private _removePrefix;
    private _removeSufix;
    private _regExpForRemove;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MaskService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<MaskService>;
}

//# sourceMappingURL=mask.service.d.ts.map