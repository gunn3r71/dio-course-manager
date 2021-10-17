import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";

@NgModule({
    declarations: [
        NavbarComponent,
        NotfoundComponent
    ],
    imports:[
        RouterModule.forChild([
            {
                path: '**',
                component: NotfoundComponent
            }
        ])
    ],
    exports:[
        NavbarComponent,
        NotfoundComponent
    ]
})

export class CoreModule {}