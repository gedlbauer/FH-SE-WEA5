import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.todos = [{
      "title": "Nuclear Power Engineer",
      "description": "Taihe",
      "author": "Luciana",
      "category": "China",
      "dateTime": "7/9/2021",
      "done": false
    }, {
      "title": "Recruiter",
      "description": "Halmstad",
      "author": "Howey",
      "category": "Sweden",
      "dateTime": "8/29/2021",
      "done": true
    }, {
      "title": "Structural Engineer",
      "description": "Jivia",
      "author": "Shelden",
      "category": "Peru",
      "dateTime": "1/15/2021",
      "done": true
    }, {
      "title": "Senior Sales Associate",
      "description": "Yenangyaung",
      "author": "Ella",
      "category": "Myanmar",
      "dateTime": "3/12/2021",
      "done": true
    }, {
      "title": "Junior Executive",
      "description": "København",
      "author": "Myriam",
      "category": "Denmark",
      "dateTime": "11/4/2021",
      "done": false
    }, {
      "title": "Media Manager IV",
      "description": "Mó",
      "author": "Dee",
      "category": "Portugal",
      "dateTime": "9/3/2021",
      "done": true
    }, {
      "title": "Help Desk Technician",
      "description": "Tonkino",
      "author": "Carey",
      "category": "Russia",
      "dateTime": "5/9/2021",
      "done": false
    }, {
      "title": "VP Accounting",
      "description": "Hukeng",
      "author": "Cordula",
      "category": "China",
      "dateTime": "6/15/2021",
      "done": false
    }, {
      "title": "Developer II",
      "description": "Burao",
      "author": "Gregorio",
      "category": "Somalia",
      "dateTime": "10/12/2021",
      "done": false
    }, {
      "title": "Nurse Practicioner",
      "description": "Sarulla",
      "author": "Addison",
      "category": "Indonesia",
      "dateTime": "3/10/2021",
      "done": true
    }];
  }

}
