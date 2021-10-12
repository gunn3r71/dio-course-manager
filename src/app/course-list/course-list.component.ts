import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) { 
  }

  ngOnInit(): void {
    this.courses = this.courseService.GetAll();
  }

}
