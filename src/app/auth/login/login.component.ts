import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  submitted: Boolean = false;
  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private _toast: ToastService,
    private router: Router
  ) {}
  get f() {
    return this.loginform.controls;
  }
  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['admin1@gmail.com', Validators.required],
      password: ['Admin1', Validators.required],
    });
  }

  submitdata() {
    console.log(this.loginform.value);
    this.userservice.loginUser(this.loginform.value).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status === true) {
          this._toast.success(data.message);
          localStorage.setItem('bankuserrole', data.data.role);
          localStorage.setItem('bankusertoken', data.token);
          this.router.navigate(['']);
        } else {
          this._toast.error(data.message);
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
    // this.submitted = true;
  }
}
