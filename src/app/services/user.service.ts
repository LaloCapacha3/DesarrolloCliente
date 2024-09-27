import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(apiUrl);
  }
}
