import { NgModule} from '@angular/core';
import { MatFormFieldModule,
         MatButtonModule,
         MatInputModule,
         MatCheckboxModule,
         MatSidenavModule,
         MatToolbarModule,
         MatIconModule
        } from '@angular/material';

@NgModule({
    imports : [MatFormFieldModule,
               MatButtonModule,
               MatInputModule,
               MatCheckboxModule,
               MatSidenavModule,
               MatToolbarModule,
               MatIconModule
    ],
    exports : [MatFormFieldModule,
               MatButtonModule,
               MatInputModule,
               MatCheckboxModule,
               MatSidenavModule,
               MatToolbarModule,
               MatIconModule
    ]
})
export class MaterialModule {

}
