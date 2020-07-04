import { Component, OnInit, Input } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  students: Student[];
  constructor(private studentService: StudentsService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }
}
