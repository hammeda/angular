import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  creadentials: Credentials = {
    email: "",
    password: ""
  }

  private auth = inject(AuthService)
  private router = inject(Router)

  onSubmit(form: HTMLFormElement) {
    if (form.checkValidity()) {
      this.auth.login(this.creadentials).subscribe({
        next: response => {
          console.log(response)
          this.router.navigate(['/home'])
        },
        error: e => console.log(e)
      });
      form.reset();
    }

  }
}

export interface Credentials {
  email: string,
  password: string
}