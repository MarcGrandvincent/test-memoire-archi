import {Component} from '@angular/core';
import {AuthFacade} from '../application/auth.facade';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.page.component.html',
  styleUrls: ['./login.page.component.scss'],
})
export class LoginPageComponent {
  username = '';
  password = '';

  constructor(private auth: AuthFacade) {}

  onLogin() {
    this.auth.login(this.username, this.password);
  }
}
