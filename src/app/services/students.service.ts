import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  apiEndpoint: string = 'http://localhost:8000/api/student/all';
  constructor(private http: HttpClient) {}
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiEndpoint);
  }
}
