import { NgModule } from '@angular/core';
import { config, INITIAL_CONFIG, initialConfig, NEW_CONFIG } from './config';
import { MaskApplierService } from './mask-applier.service';
import { MaskDirective } from './mask.directive';
import { MaskPipe } from './mask.pipe';
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
NgxMaskModule.decorators = [
    { type: NgModule, args: [{
                providers: [MaskApplierService],
                exports: [MaskDirective, MaskPipe],
                declarations: [MaskDirective, MaskPipe]
            },] }
];
/**
 * @internal
 */
export function _configFactory(initConfig, configValue) {
    return (typeof configValue === 'function') ? configValue() : Object.assign(Object.assign({}, initConfig), configValue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hc2subW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWludGwtdGVsLWlucHV0L3NyYy9saWIvbmd4LW1hc2svbmd4LW1hc2subW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQWlCLE1BQU0sVUFBVSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBT3ZDLE1BQU0sT0FBTyxhQUFhO0lBRWpCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBMkI7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsVUFBVTtvQkFDbkIsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsVUFBVSxFQUFFLGNBQWM7b0JBQzFCLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUM7aUJBQ25DO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNNLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBMkI7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1NBQ3hCLENBQUM7SUFDSixDQUFDOzs7WUEvQkYsUUFBUSxTQUFDO2dCQUNSLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2dCQUNsQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2FBQ3hDOztBQThCRDs7R0FFRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQzdCLFVBQXlCLEVBQUUsV0FBa0Q7SUFDNUUsT0FBTyxDQUFDLE9BQU8sV0FBVyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLGlDQUFNLFVBQVUsR0FBSyxXQUFXLENBQUUsQ0FBQztBQUNqRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29uZmlnLCBJTklUSUFMX0NPTkZJRywgaW5pdGlhbENvbmZpZywgTkVXX0NPTkZJRywgb3B0aW9uc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IE1hc2tBcHBsaWVyU2VydmljZSB9IGZyb20gJy4vbWFzay1hcHBsaWVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vbWFzay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFza1BpcGUgfSBmcm9tICcuL21hc2sucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW01hc2tBcHBsaWVyU2VydmljZV0sXG4gIGV4cG9ydHM6IFtNYXNrRGlyZWN0aXZlLCBNYXNrUGlwZV0sXG4gIGRlY2xhcmF0aW9uczogW01hc2tEaXJlY3RpdmUsIE1hc2tQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXNrTW9kdWxlIHtcblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnVmFsdWU/OiBvcHRpb25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neE1hc2tNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE5FV19DT05GSUcsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1ZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBJTklUSUFMX0NPTkZJRyxcbiAgICAgICAgICB1c2VWYWx1ZTogaW5pdGlhbENvbmZpZ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogY29uZmlnLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IF9jb25maWdGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtJTklUSUFMX0NPTkZJRywgTkVXX0NPTkZJR11cbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgZm9yQ2hpbGQoY29uZmlnVmFsdWU/OiBvcHRpb25zQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neE1hc2tNb2R1bGUsXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NvbmZpZ0ZhY3Rvcnlcbihpbml0Q29uZmlnOiBvcHRpb25zQ29uZmlnLCBjb25maWdWYWx1ZTogb3B0aW9uc0NvbmZpZyB8ICgoKSA9PiBvcHRpb25zQ29uZmlnKSk6IEZ1bmN0aW9uIHwgb3B0aW9uc0NvbmZpZyB7XG4gIHJldHVybiAodHlwZW9mIGNvbmZpZ1ZhbHVlID09PSAnZnVuY3Rpb24nKSA/IGNvbmZpZ1ZhbHVlKCkgOiB7IC4uLmluaXRDb25maWcsIC4uLmNvbmZpZ1ZhbHVlIH07XG59XG4iXX0=