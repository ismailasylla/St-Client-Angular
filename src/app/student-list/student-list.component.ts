import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../interfaces/student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  @Input() student: Student;

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {}
}
