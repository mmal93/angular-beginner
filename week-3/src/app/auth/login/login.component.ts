import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import IUser from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }
  onSubmit() {
    console.log(123);
    if (!this.loginForm.invalid && this.loginForm.value.userName && this.loginForm.value.password) {
      this.authService.logIn(this.loginForm.value.userName, this.loginForm.value.password).subscribe((res: any) => {
        if (res) {
          this.authService.setLoggedIn(true);
        }
      }).unsubscribe();
    }
  }
  ngOnInit(): void {
    this.authService.getAllUsers();
  }
}
