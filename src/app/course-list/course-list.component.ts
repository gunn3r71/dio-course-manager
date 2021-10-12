import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Advanced C#",
        imageUrl: "/assets/images/cli.png",
        price: 1222.99,
        code: "C#123",
        duration: 5,
        rating: 5,
        releaseDate: "20/07/2021"
      },      
      {
        id: 2,
        name: "Advanced JS",
        imageUrl: "/assets/images/forms.png",
        price: 700.99,
        code: "Js123",
        duration: 2,
        rating: 2,
        releaseDate: "20/03/2021"
      },      
      {
        id: 3,
        name: "Advanced Python for web",
        imageUrl: "/assets/images/http.png",
        price: 90.99,
        code: "Py123",
        duration: 12,
        rating: 3.6,
        releaseDate: "20/06/2021"
      }
    ]
  }

}
