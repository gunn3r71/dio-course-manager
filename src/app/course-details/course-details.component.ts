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
    this.courseService.GetById(parseInt(this.route.snapshot.paramMap.get('id') ?? "0")).subscribe({
      next: course => this.course = course,
      error: err => {
        console.log("Error: ", err);
      }
    });
  }

  save(course: Course): void{
      this.courseService.Save(course).subscribe({
        next: course => console.log("success",course),
        error: err => {
          console.log("Error: ", err)
        }
      });
  }

}
