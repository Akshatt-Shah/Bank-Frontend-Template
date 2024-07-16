import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loginstatus: Boolean = true;
  role = localStorage.getItem('bankuserrole') || 'user';

  constructor() {}

  ngOnInit(): void {
    if (this.role === 'admin') {
      this.loginstatus = false;
    } else {
      this.loginstatus = true;
    }
  }
}
