import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { NgxIntlTelInputComponent } from './ngx-intl-tel-input.component';
import { NgxMaskModule } from './ngx-mask/ngx-mask.module';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ngx-bootstrap/dropdown';
import * as ɵngcc2 from './ngx-mask/ngx-mask.module';
export const dropdownModuleForRoot = BsDropdownModule.forRoot();
export class NgxIntlTelInputModule {
}
NgxIntlTelInputModule.ɵfac = function NgxIntlTelInputModule_Factory(t) { return new (t || NgxIntlTelInputModule)(); };
NgxIntlTelInputModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxIntlTelInputModule });
NgxIntlTelInputModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            dropdownModuleForRoot,
            NgxMaskModule.forRoot(),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxIntlTelInputModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxIntlTelInputComponent, NativeElementInjectorDirective],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    dropdownModuleForRoot,
                    NgxMaskModule.forRoot(),
                ],
                exports: [NgxIntlTelInputComponent, NativeElementInjectorDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxIntlTelInputModule, { declarations: function () { return [NgxIntlTelInputComponent, NativeElementInjectorDirective]; }, imports: function () { return [CommonModule,
        FormsModule,
        ReactiveFormsModule, ɵngcc1.BsDropdownModule, ɵngcc2.NgxMaskModule]; }, exports: function () { return [NgxIntlTelInputComponent, NativeElementInjectorDirective]; } }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWludGwtdGVsLWlucHV0L3NyYy9saWIvbmd4LWludGwtdGVsLWlucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUMzRCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBMEMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7QUFhdkcsTUFBTSxPQUFPLHFCQUFxQjtBQUNsQztpREFaQyxRQUFRLFNBQUMsa0JBQ1QsWUFBWSxFQUFFLENBQUM7SUFBd0IsRUFBRSw4QkFBOEIsQ0FBQyxrQkFDeEUsT0FBTyxFQUFFLHNCQUNSLFlBQVk7bUJBQ1osV0FBVyxzQkFDWCxtQkFBbUI7WUFDbkI7T0FBcUI7SUFDckIsYUFBYSxDQUFDLE9BQU8sRUFBRTthQUN0QixrQkFDRjtHQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTs7VUFBOEIsQ0FBQyxlQUNuRTs7Ozs7Ozs7Ozs7Ozs7OztxTEFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOYXRpdmVFbGVtZW50SW5qZWN0b3JEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmF0aXZlLWVsZW1lbnQtaW5qZWN0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neEludGxUZWxJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vbmd4LWludGwtdGVsLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hNYXNrTW9kdWxlIH0gZnJvbSAnLi9uZ3gtbWFzay9uZ3gtbWFzay5tb2R1bGUnO1xuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTW9kdWxlRm9yUm9vdDogTW9kdWxlV2l0aFByb3ZpZGVyczxCc0Ryb3Bkb3duTW9kdWxlPiA9IEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpO1xuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQsIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZV0sXG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcblx0XHRkcm9wZG93bk1vZHVsZUZvclJvb3QsXG5cdFx0Tmd4TWFza01vZHVsZS5mb3JSb290KCksXG4gIF0sXG5cdGV4cG9ydHM6IFtOZ3hJbnRsVGVsSW5wdXRDb21wb25lbnQsIE5hdGl2ZUVsZW1lbnRJbmplY3RvckRpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEludGxUZWxJbnB1dE1vZHVsZSB7XG5cbn1cbiJdfQ==