import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {User} from '../../domain/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let user of users">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  `
})
export class UserListComponent {
  @Input() users: User[] = [];
}
