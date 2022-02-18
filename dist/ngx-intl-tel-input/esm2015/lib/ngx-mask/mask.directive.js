import { __awaiter } from "tslib";
import { Directive, forwardRef, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MaskService } from './mask.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './mask.service';
export class MaskDirective {
    constructor(
    // tslint:disable-next-line
    document, _maskService) {
        this.document = document;
        this._maskService = _maskService;
        this._position = null;
        // tslint:disable-next-line
        this.onChange = (_) => { };
        this.onTouch = () => { };
    }
    set maskExpression(value) {
        this._maskValue = value || '';
        if (!this._maskValue) {
            return;
        }
        this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue);
        this._maskService.formElementProperty = [
            'value',
            this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)
        ];
    }
    set specialCharacters(value) {
        if (!value ||
            !Array.isArray(value) ||
            (Array.isArray(value) && !value.length)) {
            return;
        }
        this._maskService.maskSpecialCharacters = value;
    }
    set patterns(value) {
        if (!value) {
            return;
        }
        this._maskService.maskAvailablePatterns = value;
    }
    set prefix(value) {
        if (!value) {
            return;
        }
        this._maskService.prefix = value;
    }
    set sufix(value) {
        if (!value) {
            return;
        }
        this._maskService.sufix = value;
    }
    set dropSpecialCharacters(value) {
        this._maskService.dropSpecialCharacters = value;
    }
    set showMaskTyped(value) {
        if (!value) {
            return;
        }
        this._maskService.showMaskTyped = value;
    }
    set showTemplate(value) {
        this._maskService.showTemplate = value;
    }
    set clearIfNotMatch(value) {
        this._maskService.clearIfNotMatch = value;
    }
    onInput(e) {
        const el = e.target;
        this._inputValue = el.value;
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        const position = el.selectionStart === 1
            ? el.selectionStart + this._maskService.prefix.length
            : el.selectionStart;
        let caretShift = 0;
        this._maskService.applyValueChanges(position, (shift) => (caretShift = shift));
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        el.selectionStart = el.selectionEnd =
            this._position !== null
                ? this._position
                : position +
                    // tslint:disable-next-line
                    (e.inputType === 'deleteContentBackward' ? 0 : caretShift);
        this._position = null;
    }
    onBlur() {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    }
    onFocus(e) {
        const el = e.target;
        if (el !== null && el.selectionStart !== null &&
            el.selectionStart === el.selectionEnd &&
            el.selectionStart > this._maskService.prefix.length &&
            // tslint:disable-next-line
            e.keyCode !== 38) {
            return;
        }
        if (this._maskService.showMaskTyped) {
            this._maskService.maskIsShown = this._maskService.maskExpression.replace(/[0-9]/g, '_');
        }
        el.value = !el.value || el.value === this._maskService.prefix
            ? this._maskService.prefix + this._maskService.maskIsShown
            : el.value;
        /** fix of cursor position with prefix when mouse click occur */
        if ((el.selectionStart || el.selectionEnd) <= this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
        }
    }
    a(e) {
        const el = e.target;
        if (e.keyCode === 38) {
            e.preventDefault();
        }
        if (e.keyCode === 37 || e.keyCode === 8) {
            if (el.selectionStart <= this._maskService.prefix.length
                && el.selectionEnd <= this._maskService.prefix.length) {
                e.preventDefault();
            }
            this.onFocus(e);
            if (e.keyCode === 8
                && el.selectionStart === 0
                && el.selectionEnd === el.value.length) {
                el.value = this._maskService.prefix;
                this._position = this._maskService.prefix ? this._maskService.prefix.length : 1;
                this.onInput(e);
            }
        }
    }
    onPaste() {
        this._position = Number.MAX_SAFE_INTEGER;
    }
    /** It writes the value in the input */
    writeValue(inputValue) {
        return __awaiter(this, void 0, void 0, function* () {
            if (inputValue === undefined) {
                inputValue = '';
            }
            if (typeof inputValue === 'number') {
                inputValue = String(inputValue);
                this._maskService.isNumberValue = true;
            }
            inputValue && this._maskService.maskExpression ||
                this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)
                ? (this._maskService.formElementProperty = [
                    'value',
                    this._maskService.applyMask(inputValue, this._maskService.maskExpression)
                ])
                : (this._maskService.formElementProperty = ['value', inputValue]);
            this._inputValue = inputValue;
        });
    }
    // tslint:disable-next-line
    registerOnChange(fn) {
        this.onChange = fn;
        this._maskService.onChange = this.onChange;
    }
    // tslint:disable-next-line
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /** It disables the input element */
    setDisabledState(isDisabled) {
        this._maskService.formElementProperty = ['disabled', isDisabled];
    }
    _repeatPatternSymbols(maskExp) {
        return maskExp.match(/{[0-9]+}/)
            && maskExp.split('')
                .reduce((accum, currval, index) => {
                this._start = (currval === '{') ? index : this._start;
                if (currval !== '}') {
                    return this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                }
                this._end = index;
                const repeatNumber = Number(maskExp
                    .slice(this._start + 1, this._end));
                const repaceWith = new Array(repeatNumber + 1)
                    .join(maskExp[this._start - 1]);
                return accum + repaceWith;
            }, '') || maskExp;
    }
}
MaskDirective.ɵfac = function MaskDirective_Factory(t) { return new (t || MaskDirective)(ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MaskService)); };
MaskDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: MaskDirective, selectors: [["", "mask", ""]], hostBindings: function MaskDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function MaskDirective_input_HostBindingHandler($event) { return ctx.onInput($event); })("blur", function MaskDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function MaskDirective_click_HostBindingHandler($event) { return ctx.onFocus($event); })("keydown", function MaskDirective_keydown_HostBindingHandler($event) { return ctx.a($event); })("paste", function MaskDirective_paste_HostBindingHandler() { return ctx.onPaste(); });
    } }, inputs: { maskExpression: ["mask", "maskExpression"], specialCharacters: "specialCharacters", patterns: "patterns", prefix: "prefix", sufix: "sufix", dropSpecialCharacters: "dropSpecialCharacters", showMaskTyped: "showMaskTyped", showTemplate: "showTemplate", clearIfNotMatch: "clearIfNotMatch" }, features: [ɵngcc0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MaskDirective),
                multi: true
            },
            MaskService
        ])] });
MaskDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: MaskService }
];
MaskDirective.propDecorators = {
    maskExpression: [{ type: Input, args: ['mask',] }],
    specialCharacters: [{ type: Input }],
    patterns: [{ type: Input }],
    prefix: [{ type: Input }],
    sufix: [{ type: Input }],
    dropSpecialCharacters: [{ type: Input }],
    showMaskTyped: [{ type: Input }],
    showTemplate: [{ type: Input }],
    clearIfNotMatch: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }],
    onBlur: [{ type: HostListener, args: ['blur',] }],
    onFocus: [{ type: HostListener, args: ['click', ['$event'],] }],
    a: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onPaste: [{ type: HostListener, args: ['paste',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MaskDirective, [{
        type: Directive,
        args: [{
                selector: '[mask]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MaskDirective),
                        multi: true
                    },
                    MaskService
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc1.MaskService }]; }, { maskExpression: [{
            type: Input,
            args: ['mask']
        }], specialCharacters: [{
            type: Input
        }], patterns: [{
            type: Input
        }], prefix: [{
            type: Input
        }], sufix: [{
            type: Input
        }], dropSpecialCharacters: [{
            type: Input
        }], showMaskTyped: [{
            type: Input
        }], showTemplate: [{
            type: Input
        }], clearIfNotMatch: [{
            type: Input
        }], onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }], onFocus: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], a: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onPaste: [{
            type: HostListener,
            args: ['paste']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL25neC1tYXNrL21hc2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBYzdDLE1BQU0sT0FBTyxhQUFhO0FBQUcsSUFVM0I7QUFBYSxJQUNYLDJCQUEyQjtBQUMvQixJQUE4QixRQUFhLEVBQy9CLFlBQXlCO0FBQ2xDLFFBRjJCLGFBQVEsR0FBUixRQUFRLENBQUs7QUFBQyxRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtBQUNyQyxRQVhVLGNBQVMsR0FBa0IsSUFBSSxDQUFDO0FBQzFDLFFBR0UsMkJBQTJCO0FBQzdCLFFBQVMsYUFBUSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsUUFBUyxZQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLElBSU0sQ0FBQztBQUNQLElBRUUsSUFDVyxjQUFjLENBQUMsS0FBYTtBQUN6QyxRQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxRQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQzFCLFlBQU0sT0FBTztBQUNiLFNBQUs7QUFDTCxRQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMs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Q0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxnQkFBVSxPQUFPLEtBQUssR0FBRyxVQUFVLENBQUM7QUFDcEMsWUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDO0FBQzFCLElBQUUsQ0FBQztBQUNIO3lDQXBQQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLFFBQVEsa0JBQ2xCLFNBQVMsRUFBRSxzQkFDVCwwQkFDRTtJQUFPLEVBQUUsaUJBQWlCLDBCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQywwQkFDNUMsS0FBSyxFQUFFLElBQUksc0JBQ1osc0JBQ0QsV0FBVztjQUNaLGNBQ0Y7Ozs7Ozs7O2VBQ0k7QUFBQztBQUF1Qyw0Q0FZeEMsTUFBTSxTQUFDLFFBQVE7QUFBUyxZQTFCcEIsV0FBVztBQUFHO0FBQUc7QUFDYiw2QkE4QlYsS0FBSyxTQUFDLE1BQU07QUFDVixnQ0FlRixLQUFLO0FBQ04sdUJBV0MsS0FBSztBQUNOLHFCQU9DLEtBQUs7QUFDTixvQkFPQyxLQUFLO0FBQ04sb0NBT0MsS0FBSztBQUNOLDRCQUlDLEtBQUs7QUFDTiwyQkFPQyxLQUFLO0FBQ04sOEJBSUMsS0FBSztBQUNOLHNCQUlDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDOUIscUJBNEJGLFlBQVksU0FBQyxNQUFNO0FBQ2pCLHNCQUtGLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDOUIsZ0JBd0JGLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDaEMsc0JBcUJGLFlBQVksU0FBQyxPQUFPO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWFza1NlcnZpY2UgfSBmcm9tICcuL21hc2suc2VydmljZSc7XG5pbXBvcnQgeyBJQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWFza10nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hc2tEaXJlY3RpdmUpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIE1hc2tTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWFza0RpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfbWFza1ZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgX2lucHV0VmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfcG9zaXRpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHJpdmF0ZSBfc3RhcnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZW5kOiBudW1iZXI7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwdWJsaWMgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gIHB1YmxpYyBvblRvdWNoID0gKCkgPT4geyB9O1xuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgX21hc2tTZXJ2aWNlOiBNYXNrU2VydmljZVxuICApIHsgfVxuXG5cbiAgQElucHV0KCdtYXNrJylcbiAgcHVibGljIHNldCBtYXNrRXhwcmVzc2lvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWFza1ZhbHVlID0gdmFsdWUgfHwgJyc7XG4gICAgaWYgKCF0aGlzLl9tYXNrVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbWFza1NlcnZpY2UubWFza0V4cHJlc3Npb24gPSB0aGlzLl9yZXBlYXRQYXR0ZXJuU3ltYm9scyh0aGlzLl9tYXNrVmFsdWUpO1xuICAgIHRoaXMuX21hc2tTZXJ2aWNlLmZvcm1FbGVtZW50UHJvcGVydHkgPSBbXG4gICAgICAndmFsdWUnLFxuICAgICAgdGhpcy5fbWFza1NlcnZpY2UuYXBwbHlNYXNrKFxuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlLFxuICAgICAgICB0aGlzLl9tYXNrU2VydmljZS5tYXNrRXhwcmVzc2lvblxuICAgICAgKVxuICAgIF07XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNwZWNpYWxDaGFyYWN0ZXJzKHZhbHVlOiBJQ29uZmlnWydzcGVjaWFsQ2hhcmFjdGVycyddKSB7XG4gICAgaWYgKFxuICAgICAgIXZhbHVlIHx8XG4gICAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHxcbiAgICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhdmFsdWUubGVuZ3RoKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYXNrU2VydmljZS5tYXNrU3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGF0dGVybnModmFsdWU6IElDb25maWdbJ3BhdHRlcm5zJ10pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tBdmFpbGFibGVQYXR0ZXJucyA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwcmVmaXgodmFsdWU6IElDb25maWdbJ3ByZWZpeCddKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXggPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3VmaXgodmFsdWU6IElDb25maWdbJ3N1Zml4J10pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hc2tTZXJ2aWNlLnN1Zml4ID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRyb3BTcGVjaWFsQ2hhcmFjdGVycyh2YWx1ZTogSUNvbmZpZ1snZHJvcFNwZWNpYWxDaGFyYWN0ZXJzJ10pIHtcbiAgICB0aGlzLl9tYXNrU2VydmljZS5kcm9wU3BlY2lhbENoYXJhY3RlcnMgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd01hc2tUeXBlZCh2YWx1ZTogSUNvbmZpZ1snc2hvd01hc2tUeXBlZCddKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYXNrU2VydmljZS5zaG93TWFza1R5cGVkID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dUZW1wbGF0ZSh2YWx1ZTogSUNvbmZpZ1snc2hvd1RlbXBsYXRlJ10pIHtcbiAgICB0aGlzLl9tYXNrU2VydmljZS5zaG93VGVtcGxhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgY2xlYXJJZk5vdE1hdGNoKHZhbHVlOiBJQ29uZmlnWydjbGVhcklmTm90TWF0Y2gnXSkge1xuICAgIHRoaXMuX21hc2tTZXJ2aWNlLmNsZWFySWZOb3RNYXRjaCA9IHZhbHVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25JbnB1dChlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWw6IEhUTUxJbnB1dEVsZW1lbnQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRoaXMuX2lucHV0VmFsdWUgPSBlbC52YWx1ZTtcbiAgICBpZiAoIXRoaXMuX21hc2tWYWx1ZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZShlbC52YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPSAoZWwuc2VsZWN0aW9uU3RhcnQgYXMgbnVtYmVyKSA9PT0gMVxuICAgICAgPyAoZWwuc2VsZWN0aW9uU3RhcnQgYXMgbnVtYmVyKSArIHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeC5sZW5ndGhcbiAgICAgIDogZWwuc2VsZWN0aW9uU3RhcnQgYXMgbnVtYmVyO1xuICAgIGxldCBjYXJldFNoaWZ0OiBudW1iZXIgPSAwO1xuICAgIHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5VmFsdWVDaGFuZ2VzKFxuICAgICAgcG9zaXRpb24sXG4gICAgICAoc2hpZnQ6IG51bWJlcikgPT4gKGNhcmV0U2hpZnQgPSBzaGlmdClcbiAgICApO1xuICAgIC8vIG9ubHkgc2V0IHRoZSBzZWxlY3Rpb24gaWYgdGhlIGVsZW1lbnQgaXMgYWN0aXZlXG4gICAgaWYgKHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuc2VsZWN0aW9uU3RhcnQgPSBlbC5zZWxlY3Rpb25FbmQgPVxuICAgICAgdGhpcy5fcG9zaXRpb24gIT09IG51bGxcbiAgICAgICAgPyB0aGlzLl9wb3NpdGlvblxuICAgICAgICA6IHBvc2l0aW9uICtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICgoZSBhcyBhbnkpLmlucHV0VHlwZSA9PT0gJ2RlbGV0ZUNvbnRlbnRCYWNrd2FyZCcgPyAwIDogY2FyZXRTaGlmdCk7XG4gICAgdGhpcy5fcG9zaXRpb24gPSBudWxsO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIHB1YmxpYyBvbkJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5fbWFza1NlcnZpY2UuY2xlYXJJZk5vdE1hdGNoRm4oKTtcbiAgICB0aGlzLm9uVG91Y2goKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRm9jdXMoZTogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbDogSFRNTElucHV0RWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKFxuICAgICAgZWwgIT09IG51bGwgJiYgZWwuc2VsZWN0aW9uU3RhcnQgIT09IG51bGwgJiZcbiAgICAgIGVsLnNlbGVjdGlvblN0YXJ0ID09PSBlbC5zZWxlY3Rpb25FbmQgJiZcbiAgICAgIGVsLnNlbGVjdGlvblN0YXJ0ID4gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aCAmJlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAoZSBhcyBhbnkpLmtleUNvZGUgIT09IDM4XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9tYXNrU2VydmljZS5zaG93TWFza1R5cGVkKSB7XG4gICAgICB0aGlzLl9tYXNrU2VydmljZS5tYXNrSXNTaG93biA9IHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tFeHByZXNzaW9uLnJlcGxhY2UoL1swLTldL2csICdfJyk7XG4gICAgfVxuICAgIGVsLnZhbHVlID0gIWVsLnZhbHVlIHx8IGVsLnZhbHVlID09PSB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXhcbiAgICAgID8gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4ICsgdGhpcy5fbWFza1NlcnZpY2UubWFza0lzU2hvd25cbiAgICAgIDogZWwudmFsdWU7XG4gICAgLyoqIGZpeCBvZiBjdXJzb3IgcG9zaXRpb24gd2l0aCBwcmVmaXggd2hlbiBtb3VzZSBjbGljayBvY2N1ciAqL1xuICAgIGlmICgoKGVsLnNlbGVjdGlvblN0YXJ0IGFzIG51bWJlcikgfHwgKGVsLnNlbGVjdGlvbkVuZCBhcyBudW1iZXIpKSA8PSB0aGlzLl9tYXNrU2VydmljZS5wcmVmaXgubGVuZ3RoKSB7XG4gICAgICBlbC5zZWxlY3Rpb25TdGFydCA9IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeC5sZW5ndGg7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBhKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbDogSFRNTElucHV0RWxlbWVudCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgICBpZiAoKGVsLnNlbGVjdGlvblN0YXJ0IGFzIG51bWJlcikgPD0gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aFxuICAgICAgICAmJiAoZWwuc2VsZWN0aW9uRW5kIGFzIG51bWJlcikgPD0gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4Lmxlbmd0aCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uRm9jdXMoZSk7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSA4XG4gICAgICAgICYmIGVsLnNlbGVjdGlvblN0YXJ0ID09PSAwXG4gICAgICAgICYmIGVsLnNlbGVjdGlvbkVuZCA9PT0gZWwudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGVsLnZhbHVlID0gdGhpcy5fbWFza1NlcnZpY2UucHJlZml4O1xuICAgICAgICB0aGlzLl9wb3NpdGlvbiA9IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeCA/IHRoaXMuX21hc2tTZXJ2aWNlLnByZWZpeC5sZW5ndGggOiAxO1xuICAgICAgICB0aGlzLm9uSW5wdXQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigncGFzdGUnKVxuICBwdWJsaWMgb25QYXN0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9wb3NpdGlvbiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICB9XG5cbiAgLyoqIEl0IHdyaXRlcyB0aGUgdmFsdWUgaW4gdGhlIGlucHV0ICovXG4gIHB1YmxpYyBhc3luYyB3cml0ZVZhbHVlKGlucHV0VmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChpbnB1dFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlucHV0VmFsdWUgPSAnJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpbnB1dFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgaW5wdXRWYWx1ZSA9IFN0cmluZyhpbnB1dFZhbHVlKTtcbiAgICAgIHRoaXMuX21hc2tTZXJ2aWNlLmlzTnVtYmVyVmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnB1dFZhbHVlICYmIHRoaXMuX21hc2tTZXJ2aWNlLm1hc2tFeHByZXNzaW9uIHx8XG4gICAgICB0aGlzLl9tYXNrU2VydmljZS5tYXNrRXhwcmVzc2lvbiAmJiAodGhpcy5fbWFza1NlcnZpY2UucHJlZml4IHx8IHRoaXMuX21hc2tTZXJ2aWNlLnNob3dNYXNrVHlwZWQpXG4gICAgICA/ICh0aGlzLl9tYXNrU2VydmljZS5mb3JtRWxlbWVudFByb3BlcnR5ID0gW1xuICAgICAgICAndmFsdWUnLFxuICAgICAgICB0aGlzLl9tYXNrU2VydmljZS5hcHBseU1hc2soXG4gICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICB0aGlzLl9tYXNrU2VydmljZS5tYXNrRXhwcmVzc2lvblxuICAgICAgICApXG4gICAgICBdKVxuICAgICAgOiAodGhpcy5fbWFza1NlcnZpY2UuZm9ybUVsZW1lbnRQcm9wZXJ0eSA9IFsndmFsdWUnLCBpbnB1dFZhbHVlXSk7XG4gICAgdGhpcy5faW5wdXRWYWx1ZSA9IGlucHV0VmFsdWU7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgICB0aGlzLl9tYXNrU2VydmljZS5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2U7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcbiAgfVxuXG4gIC8qKiBJdCBkaXNhYmxlcyB0aGUgaW5wdXQgZWxlbWVudCAqL1xuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fbWFza1NlcnZpY2UuZm9ybUVsZW1lbnRQcm9wZXJ0eSA9IFsnZGlzYWJsZWQnLCBpc0Rpc2FibGVkXTtcbiAgfVxuICBwcml2YXRlIF9yZXBlYXRQYXR0ZXJuU3ltYm9scyhtYXNrRXhwOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBtYXNrRXhwLm1hdGNoKC97WzAtOV0rfS8pXG4gICAgICAmJiBtYXNrRXhwLnNwbGl0KCcnKVxuICAgICAgICAucmVkdWNlKChhY2N1bTogc3RyaW5nLCBjdXJydmFsOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gKGN1cnJ2YWwgPT09ICd7JykgPyBpbmRleCA6IHRoaXMuX3N0YXJ0O1xuXG4gICAgICAgICAgaWYgKGN1cnJ2YWwgIT09ICd9Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hc2tTZXJ2aWNlLl9maW5kU3BlY2lhbENoYXIoY3VycnZhbCkgPyBhY2N1bSArIGN1cnJ2YWwgOiBhY2N1bTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fZW5kID0gaW5kZXg7XG4gICAgICAgICAgY29uc3QgcmVwZWF0TnVtYmVyOiBudW1iZXIgPSBOdW1iZXIobWFza0V4cFxuICAgICAgICAgICAgLnNsaWNlKHRoaXMuX3N0YXJ0ICsgMSwgdGhpcy5fZW5kKSk7XG4gICAgICAgICAgY29uc3QgcmVwYWNlV2l0aDogc3RyaW5nID0gbmV3IEFycmF5KHJlcGVhdE51bWJlciArIDEpXG4gICAgICAgICAgICAuam9pbihtYXNrRXhwW3RoaXMuX3N0YXJ0IC0gMV0pO1xuICAgICAgICAgIHJldHVybiBhY2N1bSArIHJlcGFjZVdpdGg7XG4gICAgICAgIH0sICcnKSB8fCBtYXNrRXhwO1xuICB9XG5cbn0iXX0=