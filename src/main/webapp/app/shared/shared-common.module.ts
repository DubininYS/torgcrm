import { NgModule } from '@angular/core';

import { TorgcrmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TorgcrmSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TorgcrmSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TorgcrmSharedCommonModule {}
