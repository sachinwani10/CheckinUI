import { NgModule} from '@angular/core';
import { MatFormFieldModule, MatButtonModule, MatInputModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    imports : [MatFormFieldModule,
               MatButtonModule,
               MatInputModule,
               MatCheckboxModule
    ],
    exports : [MatFormFieldModule,
               MatButtonModule,
               MatInputModule,
               MatCheckboxModule
    ]
})
export class MaterialModule {

}
