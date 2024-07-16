import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  submitted: Boolean = false;
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder,private router:Router,private userservice :UserService,private _toast :ToastService) {}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['akki', Validators.required],
      email: ['akki@gmail.com', Validators.required],
      password: ['akki', Validators.required],
      phoneNo: ['1222111156', Validators.required],
      address: ['Raipur', Validators.required],
      dob: ['2001-10-05', Validators.required],
      role: ['user', Validators.required],
    });
  }
  get f() {
    return this.signupForm.controls;
  }
  submitdata() {
    this.submitted = true;
    // console.log(this.signupForm.value);
    this.userservice.registerUser(this.signupForm.value).subscribe({
      next: (data:any) => {
        console.log(data);
        if(data.status === false){
          this._toast.error(data.message);
          return;
        }else{

          this._toast.success(data.message);
          this.router.navigate(['/auth/login']);
        }
      },
      error: (error) => {
        console.log(error);
        this._toast.error(error.message);
      },
    })
  }
}
