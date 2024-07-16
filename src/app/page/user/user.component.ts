import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userData: any = [];
  constructor(private router: Router, private userservice: UserService) {}
  ngOnInit(): void {
    this.userservice.getusers().subscribe({
      next: (data:any) => {
        this.userData = data.data;
        // console.log(this.userData)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
