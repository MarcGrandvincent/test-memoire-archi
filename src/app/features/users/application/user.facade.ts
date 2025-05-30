import {UserState} from '../state/user.state';
import {Injectable} from '@angular/core';
import {tap, timer} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  readonly state;

  constructor(private userState: UserState) {
    this.state = userState;
  }

  loadUsers() {
    timer(300).pipe(
      tap(() => console.log('Chargement des utilisateurs')),
      tap(() => this.state.loadUsers())
    ).subscribe();
  }

  createUser(name: string, email: string) {
    // logique de validation minime
    if (!name || !email || !email.includes('@')) {
      console.warn('Nom ou email invalide');
      return;
    }
    this.state.addUser({ name, email });
  }
}
