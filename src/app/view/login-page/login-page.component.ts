import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/authentitfication/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private authService = inject(AuthService)

  loginForm = new FormGroup(
    {
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    }
  );

  handleSubmit() {
    if (this.loginForm.valid) {
      const credential = {
        login: this.loginForm.value.login!,
        password: this.loginForm.value.password!
      }
      this.authService.login(credential).subscribe({
        error: () => this.loginForm.reset()
      }
      )
    }
  }

}
