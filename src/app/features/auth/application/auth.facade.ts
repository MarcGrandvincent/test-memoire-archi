import {Injectable} from '@angular/core';
import {AuthState} from '../state/auth.state';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  readonly isLoggedIn$;

  constructor(private state: AuthState, private router: Router) {
    this.isLoggedIn$ = this.state.isLoggedIn$;
  }

  login(username: string, password: string) {
    this.state.login({ username, password }).subscribe(success => {
      if (success) this.router.navigate(['/users']);
      else alert('Échec de la connexion');
    });
  }

  logout() {
    this.state.logout();
    this.router.navigate(['/login']);
  }
}
