import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../domain/user.model';

@Injectable({ providedIn: 'root' })
export class UserHttp {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  createUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }
}
