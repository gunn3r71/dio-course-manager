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
        imageUrl: "https://www.google.com.br/imgres?imgurl=https%3A%2F%2Fgrowiz.com.br%2Fwp-content%2Fuploads%2F2020%2F08%2Fkisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png&imgrefurl=https%3A%2F%2Fgrowiz.com.br%2Fvale-a-pena-estudar-csharp%2F&tbnid=EaUQIzxe5PjYIM&vet=12ahUKEwihx5fk3cPzAhWaK7kGHZGlAp8QMygCegQIARB9..i&docid=D0K-pWp9EdXLTM&w=800&h=800&q=c%23&ved=2ahUKEwihx5fk3cPzAhWaK7kGHZGlAp8QMygCegQIARB9",
        price: 1222.00,
        code: "C#123",
        duration: 5,
        rating: 5,
        releaseDate: "20/07/2021"
      },      
      {
        id: 2,
        name: "Advanced JS",
        imageUrl: "https://www.google.com.br/search?q=js",
        price: 700.00,
        code: "Js123",
        duration: 2,
        rating: 5,
        releaseDate: "20/03/2021"
      },      
      {
        id: 3,
        name: "Advanced Python",
        imageUrl: "https://www.google.com.br/search?q=python",
        price: 90.00,
        code: "Py123",
        duration: 12,
        rating: 4.6,
        releaseDate: "20/06/2021"
      }
    ]
  }

}
