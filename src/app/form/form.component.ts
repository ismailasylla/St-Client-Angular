import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  ngOnInit(): void {}
}
