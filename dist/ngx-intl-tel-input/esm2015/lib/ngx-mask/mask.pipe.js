import { Pipe } from '@angular/core';
import { MaskApplierService } from './mask-applier.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './mask-applier.service';
export class MaskPipe {
    constructor(_maskService) {
        this._maskService = _maskService;
    }
    transform(value, mask) {
        if (!value) {
            return '';
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask(`${value}`, mask);
        }
        return this._maskService.applyMaskWithPattern(`${value}`, mask);
    }
}
MaskPipe.ɵfac = function MaskPipe_Factory(t) { return new (t || MaskPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.MaskApplierService, 16)); };
MaskPipe.ɵpipe = /*@__PURE__*/ ɵngcc0.ɵɵdefinePipe({ name: "mask", type: MaskPipe, pure: true });
MaskPipe.ctorParameters = () => [
    { type: MaskApplierService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MaskPipe, [{
        type: Pipe,
        args: [{
                name: 'mask',
                pure: true
            }]
    }], function () { return [{ type: ɵngcc1.MaskApplierService }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5waXBlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaW50bC10ZWwtaW5wdXQvc3JjL2xpYi9uZ3gtbWFzay9tYXNrLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQU81RCxNQUFNLE9BQU8sUUFBUTtBQUFHLElBRXRCLFlBQTJCLFlBQWdDO0FBQUksUUFBcEMsaUJBQVksR0FBWixZQUFZLENBQW9CO0FBQUMsSUFBRyxDQUFDO0FBQ2xFLElBQ1MsU0FBUyxDQUFDLEtBQW9CLEVBQUUsSUFBNEM7QUFBSSxRQUNyRixJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2hCLFlBQU0sT0FBTyxFQUFFLENBQUM7QUFDaEIsU0FBSztBQUNMLFFBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDbEMsWUFBTSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0QsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEUsSUFBRSxDQUFDO0FBQ0g7b0NBakJDLElBQUksU0FBQyxrQkFDSixJQUFJLEVBQUUsTUFBTSxrQkFDWixJQUFJLEVBQUUsSUFBSSxjQUNYO2lHQUNJO0FBQUM7QUFBa0MsWUFQL0Isa0JBQWtCO0FBQUc7Ozs7Ozs7bUZBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hc2tBcHBsaWVyU2VydmljZSB9IGZyb20gJy4vbWFzay1hcHBsaWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbWFzaycsXG4gIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTWFza1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfbWFza1NlcnZpY2U6IE1hc2tBcHBsaWVyU2VydmljZSkgeyB9XG5cbiAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nfG51bWJlciwgbWFzazogc3RyaW5nIHwgW3N0cmluZywgSUNvbmZpZ1sncGF0dGVybnMnXV0pOiBzdHJpbmcge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXNrID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5TWFzayhgJHt2YWx1ZX1gLCBtYXNrKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5TWFza1dpdGhQYXR0ZXJuKGAke3ZhbHVlfWAsIG1hc2spO1xuICB9XG59XG4iXX0=