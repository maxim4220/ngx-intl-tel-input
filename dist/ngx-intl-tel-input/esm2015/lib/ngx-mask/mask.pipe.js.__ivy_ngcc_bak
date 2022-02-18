import { Pipe } from '@angular/core';
import { MaskApplierService } from './mask-applier.service';
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
MaskPipe.decorators = [
    { type: Pipe, args: [{
                name: 'mask',
                pure: true
            },] }
];
MaskPipe.ctorParameters = () => [
    { type: MaskApplierService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWludGwtdGVsLWlucHV0L3NyYy9saWIvbmd4LW1hc2svbWFzay5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTzVELE1BQU0sT0FBTyxRQUFRO0lBRW5CLFlBQTJCLFlBQWdDO1FBQWhDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtJQUFJLENBQUM7SUFFekQsU0FBUyxDQUFDLEtBQW9CLEVBQUUsSUFBNEM7UUFDakYsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsR0FBRyxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7WUFoQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxJQUFJO2FBQ1g7OztZQU5RLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hc2tBcHBsaWVyU2VydmljZSB9IGZyb20gJy4vbWFzay1hcHBsaWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbWFzaycsXG4gIHB1cmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTWFza1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBfbWFza1NlcnZpY2U6IE1hc2tBcHBsaWVyU2VydmljZSkgeyB9XG5cbiAgcHVibGljIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nfG51bWJlciwgbWFzazogc3RyaW5nIHwgW3N0cmluZywgSUNvbmZpZ1sncGF0dGVybnMnXV0pOiBzdHJpbmcge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXNrID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5TWFzayhgJHt2YWx1ZX1gLCBtYXNrKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX21hc2tTZXJ2aWNlLmFwcGx5TWFza1dpdGhQYXR0ZXJuKGAke3ZhbHVlfWAsIG1hc2spO1xuICB9XG59XG4iXX0=