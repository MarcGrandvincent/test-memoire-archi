import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {UserFacade} from '../application/user.facade';
import {UserListComponent} from './user-list/user-list.component';

@Component({
  standalone: true,
  selector: 'app-users',
  imports: [CommonModule, FormsModule, UserListComponent],
  templateUrl: './user.page.component.html',
  styleUrls: ['./user.page.component.scss']
})
export class UserPageComponent implements OnInit {
  name = '';
  email = '';
  readonly state;

  constructor(private facade: UserFacade) {
    this.state = this.facade.state;
  }

  ngOnInit() {
    this.facade.loadUsers();
  }

  onSubmit() {
    this.facade.createUser(this.name, this.email);
    this.name = '';
    this.email = '';
  }
}
