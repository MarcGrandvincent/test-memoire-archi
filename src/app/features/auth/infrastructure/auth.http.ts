import {Injectable} from '@angular/core';
import {AuthCredentials} from '../domain/auth.model';
import {delay, Observable, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthHttp {
  login(credentials: AuthCredentials): Observable<boolean> {
    const { username, password } = credentials;
    return of(username === 'admin' && password === 'admin').pipe(delay(500));
  }
}
