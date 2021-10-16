import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }  from '@angular/common/http' 

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { StarComponent } from './star/star.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavbarComponent,
    NotfoundComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: 'courses',
        component: CourseListComponent
      },
      {
        path: 'courses/details/:id',
        component: CourseDetailsComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
