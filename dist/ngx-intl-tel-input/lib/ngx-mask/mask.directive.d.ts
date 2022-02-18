import { ControlValueAccessor } from '@angular/forms';
import { MaskService } from './mask.service';
import { IConfig } from './config';
import * as ɵngcc0 from '@angular/core';
export declare class MaskDirective implements ControlValueAccessor {
    private document;
    private _maskService;
    private _maskValue;
    private _inputValue;
    private _position;
    private _start;
    private _end;
    onChange: (_: any) => void;
    onTouch: () => void;
    constructor(document: any, _maskService: MaskService);
    set maskExpression(value: string);
    set specialCharacters(value: IConfig['specialCharacters']);
    set patterns(value: IConfig['patterns']);
    set prefix(value: IConfig['prefix']);
    set sufix(value: IConfig['sufix']);
    set dropSpecialCharacters(value: IConfig['dropSpecialCharacters']);
    set showMaskTyped(value: IConfig['showMaskTyped']);
    set showTemplate(value: IConfig['showTemplate']);
    set clearIfNotMatch(value: IConfig['clearIfNotMatch']);
    onInput(e: KeyboardEvent): void;
    onBlur(): void;
    onFocus(e: MouseEvent | KeyboardEvent): void;
    a(e: KeyboardEvent): void;
    onPaste(): void;
    /** It writes the value in the input */
    writeValue(inputValue: string): Promise<void>;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    /** It disables the input element */
    setDisabledState(isDisabled: boolean): void;
    private _repeatPatternSymbols;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MaskDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<MaskDirective, "[mask]", never, { "maskExpression": "mask"; "specialCharacters": "specialCharacters"; "patterns": "patterns"; "prefix": "prefix"; "sufix": "sufix"; "dropSpecialCharacters": "dropSpecialCharacters"; "showMaskTyped": "showMaskTyped"; "showTemplate": "showTemplate"; "clearIfNotMatch": "clearIfNotMatch"; }, {}, never>;
}

//# sourceMappingURL=mask.directive.d.ts.map