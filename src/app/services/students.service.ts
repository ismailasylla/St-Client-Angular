import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Student } from '../interfaces/Student';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    header: 'Access-Control-Allow-Origin: *',
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
