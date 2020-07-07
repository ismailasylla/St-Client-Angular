import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../interfaces/Student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentsService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
      console.log(students);
    });
  }
}
