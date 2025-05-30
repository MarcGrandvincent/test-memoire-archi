import { Injectable, computed, signal } from '@angular/core';
import { User } from '../domain/user.model';
import { UserHttp } from '../infrastructure/user.http';

@Injectable({ providedIn: 'root' })
export class UserState {
  private users = signal<User[]>([]);
  private loading = signal(false);
  private error = signal<string | null>(null);

  readonly state = computed(() => ({
    users: this.users(),
    loading: this.loading(),
    error: this.error(),
  }));

  constructor(private userHttp: UserHttp) {}

  loadUsers() {
    this.loading.set(true);
    this.error.set(null);

    this.userHttp.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Erreur de chargement');
        this.loading.set(false);
      }
    });
  }

  addUser(newUser: Partial<User>) {
    this.loading.set(true);
    this.userHttp.createUser(newUser).subscribe({
      next: (created) => {
        this.users.update((u) => [...u, created]);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Erreur d'ajout");
        this.loading.set(false);
      }
    });
  }
}
