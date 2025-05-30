import {Injectable} from '@angular/core';
import {BehaviorSubject, tap} from 'rxjs';
import {AuthHttp} from '../infrastructure/auth.http';
import {AuthCredentials} from '../domain/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthState {
  private readonly _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  readonly isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private authHttp: AuthHttp) {}

  login(creds: AuthCredentials) {
    return this.authHttp.login(creds).pipe(
      tap(success => this._isLoggedIn$.next(success))
    );
  }

  logout() {
    this._isLoggedIn$.next(false);
  }
}
