import { NgModule} from '@angular/core';
import { MatFormFieldModule,
         MatButtonModule,
         MatInputModule,
         MatCheckboxModule,
         MatSidenavModule,
         MatToolbarModule,
         MatIconModule,
         MatListModule
        } from '@angular/material';

@NgModule({
    imports : [MatFormFieldModule,
               MatButtonModule,
               MatInputModule,
               MatCheckboxModule,
               MatSidenavModule,
               MatToolbarModule,
               MatIconModule,
               MatListModule
    ],
    exports : [MatFormFieldModule,
               MatButtonModule,
               MatInputModule,
               MatCheckboxModule,
               MatSidenavModule,
               MatToolbarModule,
               MatIconModule,
               MatListModule
    ]
})
export class MaterialModule {

}
