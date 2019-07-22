import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersInterface, UserAPIInterface } from '../../../interfaces';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  fetchUsers(page): Observable<UsersInterface> {
    return this.http.get<UsersInterface>('https://reqres.in/api/users?page=' + page);
  }

  fetchUserById(id: number): Observable<UserAPIInterface> {
    return this.http.get<UserAPIInterface>(`https://reqres.in/api/users/${id}`);
  }

}
