import { NgModule } from '@angular/core';
import { config, INITIAL_CONFIG, initialConfig, NEW_CONFIG } from './config';
import { MaskApplierService } from './mask-applier.service';
import { MaskDirective } from './mask.directive';
import { MaskPipe } from './mask.pipe';
import * as ɵngcc0 from '@angular/core';
export class NgxMaskModule {
    static forRoot(configValue) {
        return {
            ngModule: NgxMaskModule,
            providers: [
                {
                    provide: NEW_CONFIG,
                    useValue: configValue
                },
                {
                    provide: INITIAL_CONFIG,
                    useValue: initialConfig
                },
                {
                    provide: config,
                    useFactory: _configFactory,
                    deps: [INITIAL_CONFIG, NEW_CONFIG]
                },
            ]
        };
    }
    static forChild(configValue) {
        return {
            ngModule: NgxMaskModule,
        };
    }
}
NgxMaskModule.ɵfac = function NgxMaskModule_Factory(t) { return new (t || NgxMaskModule)(); };
NgxMaskModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxMaskModule });
NgxMaskModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [MaskApplierService] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxMaskModule, [{
        type: NgModule,
        args: [{
                providers: [MaskApplierService],
                exports: [MaskDirective, MaskPipe],
                declarations: [MaskDirective, MaskPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxMaskModule, { declarations: function () { return [MaskDirective, MaskPipe]; }, exports: function () { return [MaskDirective, MaskPipe]; } }); })();
/**
 * @internal
 */
export function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : Object.assign(Object.assign({}, initConfig), configValue);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hc2subW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaW50bC10ZWwtaW5wdXQvc3JjL2xpYi9uZ3gtbWFzay9uZ3gtbWFzay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBaUIsTUFBTSxVQUFVLENBQUM7QUFDNUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBT3ZDLE1BQU0sT0FBTyxhQUFhO0FBQzFCLElBQ1MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUEyQjtBQUFJLFFBQ25ELE9BQU87QUFDWCxZQUFNLFFBQVEsRUFBRSxhQUFhO0FBQzdCLFlBQU0sU0FBUyxFQUFFO0FBQ2pCLGdCQUFRO0FBQ1Isb0JBQVUsT0FBTyxFQUFFLFVBQVU7QUFDN0Isb0JBQVUsUUFBUSxFQUFFLFdBQVc7QUFDL0IsaUJBQVM7QUFDVCxnQkFBUTtBQUNSLG9CQUFVLE9BQU8sRUFBRSxjQUFjO0FBQ2pDLG9CQUFVLFFBQVEsRUFBRSxhQUFhO0FBQ2pDLGlCQUFTO0FBQ1QsZ0JBQVE7QUFDUixvQkFBVSxPQUFPLEVBQUUsTUFBTTtBQUN6QixvQkFBVSxVQUFVLEVBQUUsY0FBYztBQUNwQyxvQkFBVSxJQUFJLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO0FBQzVDLGlCQUFTO0FBQ1QsYUFBTztBQUNQLFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNILElBQVMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUEyQjtBQUFJLFFBQ3BELE9BQU87QUFDWCxZQUFNLFFBQVEsRUFBRSxhQUFhO0FBQzdCLFNBQUssQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNIO3lDQWhDQyxRQUFRLFNBQUMsa0JBQ1IsU0FBUyxFQUFFLENBQUM7V0FBa0IsQ0FBQyxrQkFDL0IsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxrQkFDbEM7U0FBWSxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxjQUN4Qzs7Ozs7Ozs7O2tQQUNJO0FBNkJMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBTSxVQUFVLGNBQWMsQ0FDN0IsVUFBeUIsRUFBRSxXQUFrRDtBQUFJLElBQ2hGLE9BQU8sQ0FBQyxPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxpQ0FBTSxVQUFVLEdBQUssV0FBVyxDQUFFLENBQUM7QUFDakcsQ0FBQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29uZmlnLCBJTklUSUFMX0NPTkZJRywgaW5pdGlhbENvbmZpZywgTkVXX0NPTkZJRywgb3B0aW9uc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IE1hc2tBcHBsaWVyU2VydmljZSB9IGZyb20gJy4vbWFzay1hcHBsaWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vbWFzay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFza1BpcGUgfSBmcm9tICcuL21hc2sucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW01hc2tBcHBsaWVyU2VydmljZV0sXG4gIGV4cG9ydHM6IFtNYXNrRGlyZWN0aXZlLCBNYXNrUGlwZV0sXG4gIGRlY2xhcmF0aW9uczogW01hc2tEaXJlY3RpdmUsIE1hc2tQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXNrTW9kdWxlIHtcblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnVmFsdWU/OiBvcHRpb25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neE1hc2tNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE5FV19DT05GSUcsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1ZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBJTklUSUFMX0NPTkZJRyxcbiAgICAgICAgICB1c2VWYWx1ZTogaW5pdGlhbENvbmZpZ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogY29uZmlnLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IF9jb25maWdGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtJTklUSUFMX0NPTkZJRywgTkVXX0NPTkZJR11cbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnVmFsdWU/OiBvcHRpb25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neE1hc2tNb2R1bGUsXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbmZpZ0ZhY3Rvcnlcbihpbml0Q29uZmlnOiBvcHRpb25zQ29uZmlnLCBjb25maWdWYWx1ZTogb3B0aW9uc0NvbmZpZyB8ICgoKSA9PiBvcHRpb25zQ29uZmlnKSk6IEZ1bmN0aW9uIHwgb3B0aW9uc0NvbmZpZyB7XG4gIHJldHVybiAodHlwZW9mIGNvbmZpZ1ZhbHVlID09PSAnZnVuY3Rpb24nKSA/IGNvbmZpZ1ZhbHVlKCkgOiB7IC4uLmluaXRDb25maWcsIC4uLmNvbmZpZ1ZhbHVlIH07XG59XG4iXX0=