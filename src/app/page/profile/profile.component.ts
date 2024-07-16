import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userdata: any = [];
  profileForm!: FormGroup;
  submitted: Boolean = false;
  constructor(
    private userservice: UserService,
    private fb: FormBuilder,
    private _toast: ToastService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      // password: ['', Validators.required],
      phoneNo: ['', Validators.required],
      address: ['', Validators.required],
      // dob: ['', Validators.required],
      // role: ['', Validators.required],
    });
    this.userservice.getusers().subscribe({
      next: (data: any) => {
        this.userdata = data.data[0];
        console.log(this.userdata);
      },
      error: (error) => {
        console.error('Error retrieving users:', error);
      },
    });
  }

  get f() {
    return this.profileForm.controls;
  }

  submitdata() {
    this.submitted = true;
    this.userservice.updateUser(this.profileForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
        if (data.status === false) {
          this._toast.error(data.message);
          return;
        } else {
          this._toast.success(data.message);
          this.router.navigate(['/page']);
        }
      },
      error: (error) => {
        console.log(error);
        this._toast.error(error.message);
      },
    });
  }
}
