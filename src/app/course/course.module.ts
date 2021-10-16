import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReplacePipe } from '../pipes/replace.pipe';
import { StarComponent } from '../star/star.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseDetailsComponent,
        StarComponent,
        ReplacePipe
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forChild([
            {
                path: 'courses',
                component: CourseListComponent
            },
            {
                path: 'courses/details/:id',
                component: CourseDetailsComponent
            },
        ])
    ]
})

export class CourseModule {}