import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports:[
        RouterModule.forChild([])
    ],
    exports:[
        NavbarComponent
    ]
})

export class CoreModule {}