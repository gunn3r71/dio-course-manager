import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course/course';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId: number;
  course: Course;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.courseId = (id != null && id != undefined) ? parseInt(id) : 0;

    this.course = this.courseService.GetById(this.courseId) ?? new Course();
  }

}
