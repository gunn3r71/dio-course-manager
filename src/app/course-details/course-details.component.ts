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
  course: Course;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    let parsedId = (id != null) ? parseInt(id) : 0;
    this.course = this.courseService.GetById(parsedId) ?? new Course();
  }

  save(course: Course): void{
      this.courseService.Save(course);
  }

}
