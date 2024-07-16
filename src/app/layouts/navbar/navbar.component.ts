import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit,AfterViewChecked {
  islogin: Boolean = false;
  constructor() {}
  ngOnInit(): void {
    const token = localStorage.getItem('bankusertoken');
    if(token){
      this.islogin = true;
    }else{
      this.islogin = false;
    }
  }

  ngAfterViewChecked(): void {
    const token = localStorage.getItem('bankusertoken');
    if(token){
      this.islogin = true;
    }else{
      this.islogin = false;
    }
  }

  logout(){
    localStorage.removeItem('bankusertoken');
    localStorage.removeItem('bankuserrole');
    localStorage.removeItem('bankaccountno');
    this.islogin = false;
    window.location.reload();
  }
}
