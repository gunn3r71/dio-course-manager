import { NgModule } from "@angular/core";
import { StarComponent } from "./components/star/star.component";
import { ReplacePipe } from "./pipes/replace.pipe";

@NgModule({
    declarations: [
        StarComponent,
        ReplacePipe
    ], 
    imports: [
    ],
    exports: [
        StarComponent,
        ReplacePipe
    ]
})
export class ShareModule {}