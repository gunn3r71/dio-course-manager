import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

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
        imageUrl: "https://www.google.com.br/search?q=csharp",
        price: 1222.00,
        code: "C#123",
        duration: 5,
        rating: 5
      },      
      {
        id: 2,
        name: "Advanced JS",
        imageUrl: "https://www.google.com.br/search?q=js",
        price: 700.00,
        code: "Js123",
        duration: 2,
        rating: 5
      },      {
        id: 3,
        name: "Advanced Python",
        imageUrl: "https://www.google.com.br/search?q=python",
        price: 90.00,
        code: "Py123",
        duration: 12,
        rating: 4
      }
    ]
  }

}
